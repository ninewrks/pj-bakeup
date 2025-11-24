function header() {

  /* -------------------------------------
      1. 모바일 전체 메뉴 열기/닫기
  -------------------------------------- */
  const btnAllMenu = document.querySelector(".btn-all-menu");
  const hiddenGnb = document.querySelector(".hidden-gnb");
  const btnClose = document.querySelector(".btn-close");

  if (btnAllMenu && hiddenGnb && btnClose) {
    btnAllMenu.addEventListener("click", () => {
      hiddenGnb.classList.add("on");
      document.body.style.overflow = "hidden"; // 스크롤 막기
    });

    btnClose.addEventListener("click", () => {
      hiddenGnb.classList.remove("on");
      document.body.style.overflow = ""; // 스크롤 해제
    });
  }


  /* -------------------------------------
      2. 모바일 gnb 아코디언
  -------------------------------------- */
  const mobileGnbLi = document.querySelectorAll(".gnb-smart > li");
  mobileGnbLi.forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.toggle("on");
    });
  });


  /* -------------------------------------
      3. 헤더 접기 기능 완전 비활성화
         (헤더가 사라지는 문제 방지)
  -------------------------------------- */
  const headerEl = document.querySelector("header");

  if (headerEl) {
    // 혹시라도 HTML에서 fold가 붙어 있었다면 제거
    headerEl.classList.remove("fold"); 
  }

  // ⛔ 아래 fold 관련 로직은 전부 비활성화 (문제 원인)
  // const gnb = document.querySelector(".gnb");
  // if (gnb && headerEl) {
  //   gnb.addEventListener("mouseenter", () => {
  //     headerEl.classList.remove("fold");
  //   });
  //
  //   headerEl.addEventListener("mouseleave", () => {
  //     headerEl.classList.add("fold");
  //   });
  // }

}

document.addEventListener("DOMContentLoaded", header);
