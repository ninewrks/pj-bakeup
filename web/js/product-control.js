document.addEventListener("DOMContentLoaded",()=>{

    const list = document.querySelector(".list-product")
    let res = "" 
    // 문자 데이타 초기화
    product.forEach(item=>{
        res+=
        `<li>
            <a href="./detail.html?cid=${item.pid}">
                <figure>
                    <img src="./img/product/${item.pthumb}" alt="${item.pnameKo}">
                    <span class="heart"><img src="./img/product/line.svg" alt=""></span>
                </figure>
                <h3>${item.pnameKo}</h3>
                <h4><em>${item.pnameEn}</em></h4>
                <p class="ln3">${item.pdesc}</p>
                <p class="price">${toWon(item.pprice)}</p>
            </a>
        </li>`
    })
    list.innerHTML = res

    // 하트 아이콘 클릭 이벤트
    list.querySelectorAll(".heart").forEach(heart=>{
        heart.addEventListener("click",(e)=>{
            e.preventDefault()
            e.stopPropagation()
            const heartImg = heart.querySelector("img")
            if(heartImg.src.includes("line")){
                heartImg.src = "./img/product/fill.svg"
                heartImg.alt = "좋아요 선택함"
            }else{
                heartImg.src = "./img/product/line.svg"
                heartImg.alt = "좋아요 선택안함"
            }
        })
    })
        
})