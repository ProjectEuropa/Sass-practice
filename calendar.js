/**
 * 月のカレンダーとなる配列を作る
 * 
 * @param year YYYY 形式
 * @param month 1月は 0 と表現
 * @return 年・月情報と月のカレンダーとなる配列を持ったオブジェクト
 *   ex. {
 *     year: 2018,
 *     month: 0,
 *     calendar: [
 *       [ '',  1,  2,  3,  4,  5,  6 ],
 *       [  7,  8,  9, 10, 11, 12, 13 ],
 *       ...
 *     ]
 *   }
 */
function createMonthCalendarObj(year, month) {
  // カウントアップする日付
  let date = 1;
  
  // 開始日
  const begin      = new Date(year, month, 1);
  const beginYear  = begin.getFullYear();
  const beginMonth = begin.getMonth();
  const beginDay   = begin.getDay();
  // 当月の月末日 : 翌月0日にすると当月末日が拾える
  const end     = new Date(year, month + 1, 0);
  const endDate = end.getDate();
  const endDay  = end.getDay();
  
  // 1ヶ月分の配列 : 週ごとに子配列を持つ
  const calendar = [];
  for(let row = 0; row < 6; row++) {
    // 月の最終日を超えたループはしない (行を生成しない)
    if(date > endDate) {
      continue;
    }
    
    // 1週間分の配列
    const week = [];
    
    for(let col = 0; col < 7; col++) {
      if(row === 0 && col < beginDay) {
        // 1行目で、1日目の曜日より前なら、前月の日付を入れる (当月開始日 - 1 - 曜日分の負数)
        const beforeDate = new Date(beginYear, beginMonth, -(beginDay - 1 - col)).getDate();
        week.push(beforeDate);
      }
      else if(date > endDate) {
        // 月の最終日を超えていれば、翌月の日付を入れる (当月最終日 + 曜日分のオフセット)
        const afterDate = new Date(beginYear, beginMonth, (endDate + col - endDay)).getDate();
        week.push(afterDate);
      }
      else {
        // 通常の場合は当日日付を入れインクリメントする
        week.push(date);
        date++;
      }
    }
    calendar.push(week);
  }
  
  // データを連想配列にして返す
  const monthCalendar = {
    year: beginYear,
    month: beginMonth,
    calendar: calendar
  };
  
  return monthCalendar;
}

/**
 * 月カレンダーを描画する
 * 
 * @param monthCalendarObj 年・月情報と月のカレンダーとなる配列を持ったオブジェクト
 * @param targetElem カレンダーを挿入する要素
 */
function drawMonthCalendar(monthCalendarObj, targetElem) {
  const year     = monthCalendarObj.year;
  const month    = monthCalendarObj.month;
  const calendar = monthCalendarObj.calendar;
  
  // table 要素を作る
  const table = $(`
    <table class="table table-bordered table-sm">
      <caption></caption>
      <thead>
        <tr>
          <th class="sun">日</th><th class="mon">月</th><th class="tue">火</th><th class="wed">水</th><th class="thu">木</th><th class="fri">金</th><th class="sat">土</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `);
  
  // キャプション : 和暦を併記する
  const japaneseYear = new Date(year, month).toLocaleDateString('ja-JP-u-ca-japanese', { era: 'long', year: 'numeric' });
  $(table).children('caption').html(`(${japaneseYear}) ${year}年${`0${month + 1}`.slice(-2)}月`);
  
  calendar.forEach((week, rowIndex) => {
    const row = $('<tr>');
    week.forEach((day, colIndex) => {
      const col = $('<td>').html(day);
      // 曜日クラスを付与する
      col.addClass(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][colIndex]);
      
      // 1行目で「7」より大きい日付が入った場合は前月の日付
      const isBeforeDate = rowIndex === 0 && day > 7;
      // 3行目以降で「7」より小さい日付が入った場合は翌月の日付
      const isAfterDate  = rowIndex > 1 && day < 7;
      // 前月・翌月は色付けする
      if(isBeforeDate || isAfterDate) {
        col.addClass('out-date');
      }
      
      row.append(col);
    });
    $(table).children('tbody').append(row);
  });
  
  $(targetElem).append(table);
}


document.addEventListener('DOMContentLoaded', () => {
  // 現在日付
  const now = new Date();

  // 今月のカレンダーを作る
  const calendarCurrent = createMonthCalendarObj(now.getFullYear(), now.getMonth());
  drawMonthCalendar(calendarCurrent, '#month-calendar-current');
}, false);
