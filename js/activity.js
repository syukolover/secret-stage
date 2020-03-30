//modVariables
let modVocal = 0;
let modDance = 0;
let modVisual = 0;
let modHp = 0;
let modTrust = 0;
let modLove = 0;

function activity() {
  clearContent();
  newLine("활동 메뉴", "title");

  //레슨 & 라이브
  if (hour < 20 && hour >= 9 && producer.location == uzuki.location) {
    newLine("-레슨 목록-", "activityList");
    newButt("보컬 레슨 (¥5000, 2시간)", confirmVocalLesson);
    newButt("댄스 레슨 (¥5000, 2시간)", confirmDanceLesson);
    newButt("비쥬얼 레슨 (¥5000, 2시간)", confirmVisualLesson);
    newLine("-라이브 목록-", "activityList");
    newButt("길거리 라이브 (기획서 3장)");
    newButt("쇼핑몰 라이브 (기획서 10장)");
    newButt("이벤트 스테이지 (기획서 30장)");
    if (cindefes == true) {
      newLine("-특별 이벤트 중-");
      newButt("신데렐라 페스티벌");
    }
  }

  if (uzuki.activity == true) {
    if (finishTime > time) {
      newLine("현재 활동: " + uzuki.currentAction);
      newLine("남은 시간: " + (finishTime - time) + "분");
      newButt("취소", confirmCancelActivity);
    } else if (finishTime <= time) {
      newButt("완료!", finishActivity);
    }
  }

  //베개영업
  if (hour < 5 || (hour >= 20 && producer.location == uzuki.location)) {
    newLine("-베개영업-");
    newButt("클럽 댄스");
  }
}

function finishActivity() {
  clearContent();

  uzuki.location = "사무실";
  newLine("<h2>" + uzuki.currentAction + " 완료!</h2>");
  uzuki.currentAction = "";
  uzuki.activity = false;

  //modify stats with modVariables
  function modifyStat(stat, mod, description) {
    if (mod > 0) {
      newLine(description + " +" + mod);
      return (stat += mod);
    } else if (mod < 0) {
      newLine(description + " " + mod);
      return (stat += mod);
    }
  }
  uzuki.vocal = modifyStat(uzuki.vocal, modVocal, "보컬 능력치");
  uzuki.dance = modifyStat(uzuki.dance, modDance, "댄스 능력치");
  uzuki.visual = modifyStat(uzuki.visual, modVisual, "비쥬얼 능력치");
  uzuki.hp = modifyStat(uzuki.hp, modHp, "체력");

  resetActModifiers();
  newButt("확인", activity);
}

function resetActModifiers() {
  modVocal = 0;
  modDance = 0;
  modVisual = 0;
  modHp = 0;
  modTrust = 0;
  modLove = 0;
}

function confirmCancelActivity() {
  clearContent();
  newLine("정말 취소하시겠습니까?");
  newLine("취소시, 활동보상을 받을 수 없습니다.");
  newButt("취소하기", cancelActivity);
  newButt("돌아가기", activity);

  function cancelActivity() {
    uzuki.location = "사무실";
    uzuki.currentAction = "";
    uzuki.activity = false;
    finishTime = time;
    resetActModifiers();
    activity();
  }
}

function confirmVocalLesson() {
  clearContent();
  newLine("보컬 레슨");
  newLine("보컬 수치가 10 올라갑니다.");
  newButt("확인", vocalLesson);
  newButt("돌아가기", activity);

  function vocalLesson() {
    finishTime = time + 120;
    uzuki.location = "레슨실";
    uzuki.currentAction = "보컬 레슨";
    uzuki.activity = true;
    modVocal = 10;
    modHp = -30;
    activity();
  }
}

function confirmDanceLesson() {
  clearContent();
  newLine("댄스 레슨");
  newLine("댄스 수치가 10 올라갑니다.");
  newButt("확인", danceLesson);
  newButt("돌아가기", activity);

  function danceLesson() {
    finishTime = time + 120;
    uzuki.location = "레슨실";
    uzuki.currentAction = "댄스 레슨";
    uzuki.activity = true;
    modDance = 10;
    modHp = -60;
    activity();
  }
}

function confirmVisualLesson() {
  clearContent();
  newLine("비쥬얼 레슨");
  newLine("비쥬얼 수치가 10 올라갑니다.");
  newButt("확인", visualLesson);
  newButt("돌아가기", activity);

  function visualLesson() {
    finishTime = time + 120;
    uzuki.location = "레슨실";
    uzuki.currentAction = "비쥬얼 레슨";
    uzuki.activity = true;
    modVisual = 10;
    modHp = -20;
    activity();
  }
}
