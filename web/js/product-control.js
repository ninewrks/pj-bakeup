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
        
})