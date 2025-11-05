    fetch('/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector(".header-wrap").innerHTML += data
        // 성공 시 이벤트 추가
            let btnAllMenu = document.querySelector(".btn-all-menu")
        let hiddenGnb = document.querySelector(".hidden-gnb")
        let btnClose = document.querySelector(".btn-close")

        // 전체메뉴열기
        btnAllMenu.addEventListener("click",()=>{
            hiddenGnb.classList.add("on")
        })

        // 전체메뉴닫기
        btnClose.addEventListener("click",()=>{
            hiddenGnb.classList.remove("on")
        })

        let moblieGnbLi = document.querySelectorAll(".gnb-smart>li")
        moblieGnbLi.forEach((li,index)=>{
            li.addEventListener("click",()=>{
                li.classList.toggle("on")
            })
        })

        // 마우스 휠을 올리거나 내릴 때 사용하는 소스코드
    let lastScrollTop = 0
    window.addEventListener("scroll",()=>{
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop // 브라우저의 호환성을 생각하여 스크롤바가 내려온 길이를 계산

        if(scrollTop < lastScrollTop){
            // 마우스 휠을 위로 굴렸을 때
            console.log("마우스 휠 위로 굴림")
            btnTop.classList.remove("fold")
        }else{
            // 마우스 휠을 아래로 굴렸을 때
            console.log("마우스 휠 아래로 굴림")
            btnTop.classList.add("fold")
        }
        lastScrollTop = scrollTop
    })

    let gnb = document.querySelector(".gnb")
    gnb.addEventListener("moudeenter",()=>{
        Header.classList.remove("fold")
    })
    Header.addEventListener("mouseleave",()=>{
        header.classList.add("fold")
    }) 

    })
    .catch(error => console.log("에러 : ",error))

    // fetch('/head.html')
    // .then(response => response.text())
    // .then(data => {
    //     document.head.innerHTML += data
    // })
    // .catch(error => console.log("에러 : ",error))

    
    fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector("footer-warp").innerHTML += data
    })
    .catch(error => console.log("에러 : ",error))

           