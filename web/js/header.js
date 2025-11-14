// header.js
function header(){

  // 모바일 전체 메뉴 열고 닫기
  let btnAllMenu = document.querySelector(".btn-all-menu");
  let hiddenGnb = document.querySelector(".hidden-gnb");
  let btnClose = document.querySelector(".btn-close");

  if (btnAllMenu && hiddenGnb && btnClose) {
    // 전체메뉴 열기
    btnAllMenu.addEventListener("click", () => {
      hiddenGnb.classList.add("on");
    });

    // 전체메뉴 닫기
    btnClose.addEventListener("click", () => {
      hiddenGnb.classList.remove("on");
    });
  }

  // 모바일 gnb 아코디언
  let moblieGnbLi = document.querySelectorAll(".gnb-smart>li");
  moblieGnbLi.forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.toggle("on");
    });
  });

  // gnb hover 시 header fold 클래스 토글
  let gnb = document.querySelector(".gnb");
  let headerEl = document.querySelector("header");
  if (gnb && headerEl) {
    gnb.addEventListener("mouseenter", () => {
      headerEl.classList.remove("fold");
    });
    headerEl.addEventListener("mouseleave", () => {
      headerEl.classList.add("fold");
    });
  }
}
