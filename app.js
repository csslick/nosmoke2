function initDay() {

  let saveDay = localStorage.getItem('startDay');
  let today = new Date().toISOString().slice(0,10);
  console.log('saveDay = ' + saveDay, 'today = ' + today);

  if(saveDay) {
    startDay = saveDay; // 금연시작일 저장값
    console.log('저장데이터 있음');
    changeDay(saveDay)
  } else {
    // 저장값 없으면 금연시작일 오늘자로 설정
    console.log('저장일 없음');
    // 시작일 입력에 오늘자로 표시
    let inputStartDay = today;
    console.log('inputSrartDay = ', inputStartDay);
    document.getElementById('date').value = inputStartDay;
    changeDay(today);
  }

}

// changeDay('yyyy-mm-dd')
function changeDay(startDay) {
  // 날짜 계산 변수
  let today = new Date().getTime(); // 오늘
  startDay = new Date(startDay).getTime();  // 금연시작일
  
  // 경과일 = 오늘 - 금연시작한날(result = today - startDay)
  console.log(today, startDay);
  result = today - startDay;
  result = result / (1000*60*60*24); // 일수
  
  // Math객체에서 소수점 제하기 
  intResult = Math.floor(result);
  
  // 시간 표시
  document.getElementById('day').innerHTML = intResult;
  // $('#day').html(result);
}


$('#date').change(function(){
  let userInputDay = $('#date').val(); // 사용자 입력값
  changeDay(userInputDay);
});

initDay();

/**** 기능 개선
 *  1.사용자가 날짜입력(금연시작일) 기능: 생각해 보세요
 *  2.금연시작일이 영구적으로 저장(DB)
 *  3.디자인을 각색해보세요
 *  4.깃허브에 업데이트(html,css,js 코드 분리)
 * */