    fetch('/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector(".header-wrap").innerHTML += data
        // 성공 시 이벤트 추가
        header()
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
        document.querySelector(".footer-wrap").innerHTML += data
    })
    .catch(error => console.log("에러 : ",error))

           