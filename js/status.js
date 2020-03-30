function status() {
  clearContent();
  newLine(uzuki.lastname + " " + uzuki.firstname + "의 스테이터스");
  newLine("나이: " + uzuki.age);
  newLine("현재 위치: " + uzuki.location);
  newLine("체력: " + uzuki.hp);
  newLine("호감도: " + uzuki.love);
  newLine("신뢰도: " + uzuki.trust);
  newLine("보컬 능력치: " + uzuki.vocal);
  newLine("댄스 능력치: " + uzuki.dance);
  newLine("비쥬얼 능력치: " + uzuki.visual);
  if (uzuki.virgin == true) {
    newLine("아직 처녀이다.");
  } else {
    newLine("처녀는 " + uzuki.virginTakenBy + "에게 바쳤다.");
    newLine("당신과 섹스한 횟수: " + uzuki.youCount);
    newLine("당신에게 질내사정 당한 횟수: " + uzuki.youNakadashiCount);
    newLine("당신에게 입으로 봉사한 횟수: " + uzuki.youFellaCount);
    newLine(rival.name + "와 섹스한 횟수: " + uzuki.rivCount);
    newLine(rival.name + "에게 질내사정 당한 횟수: " + uzuki.rivNakadashiCount);
    newLine(rival.name + "에게 입으로 봉사한 횟수: " + uzuki.rivFellaCount);
    newLine("베개영업 횟수: " + uzuki.menCount);
    newLine("베개영업으로 질내사정 당한 횟수: " + uzuki.menNakadashiCount);
    newLine("베개영업으로 입으로 봉사한 횟수: " + uzuki.menFellaCount);
  }
}
