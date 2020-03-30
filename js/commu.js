commu();

function commu() {
  office();

  function office() {
    clearContent();
    newLine("자금: ￥" + cash);
    newLine("기획서: " + kikakusho + "장");

    newDial("uzuki", "열심히 할게요!");

    newButt("휴식 (10분)", rest10);
    newButt("휴식 (30분)", rest30);
    newButt("아르바이트 (1시간)", otherWork);
    newButt("기획서 작성 (100분)", kikaku);

    function otherWork() {
      updateMinute(60);
      cash += 1000;
      office();
    }
    function rest10() {
      updateMinute(10);
      commu();
    }
    function rest30() {
      updateMinute(30);
      commu();
    }
    function kikaku() {
      kikakusho += 1;
      updateMinute(100);
      commu();
    }
  }
}
