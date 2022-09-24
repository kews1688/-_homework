window.onload = function () {
    // 产品展示下拉显示与隐藏
    // (4)使用原生js实现2级菜单
    // 获取元素2级菜单栏的元素
    let pShow = document.querySelector(".hover-product") //产品展示的一整行元素
    let hButton = document.querySelector(".hover-product .left") //button按钮
    let pLi = document.querySelector(".product-show .product-list ")
    // 定义变量
    let flag = false //开关
    pShow.onclick = function () {
        if (flag) {
            pLi.style.display = "none";
            flag = !flag;
            hButton.classList.remove("glyphicon-menu-down")
            hButton.classList.add("glyphicon-menu-left")
        } else {
            pLi.style.display = "block";
            flag = !flag;
            hButton.classList.remove("glyphicon-menu-left")
            hButton.classList.add("glyphicon-menu-down")

        }
    }
    // 轮播图
    // 右侧按钮
    // 定义一个数字
    let num = 1;
    num++
    $(".glyphicon-menu-right").click(function () {
        num++
        if (num > 3) num = 1
        $(".swiperImg").prop("src", `./images/swiper/0${num}.jpg`)
    })
    $(".glyphicon-menu-left").click(function () {
        num--
        if (num < 1) num = 3
        $(".swiperImg").prop("src", `./images/swiper/0${num}.jpg`)
    })
    $(".dots span:first").on("mouseenter", function(){
        num = 1
        $(".swiperImg").prop("src", `./images/swiper/0${num}.jpg`)
    })
    $(".dots span:eq(1)").on("mouseenter", function(){
        num = 2
        $(".swiperImg").prop("src", `./images/swiper/0${num}.jpg`)
    })
    $(".dots span:last").on("mouseenter", function(){
        num = 3
        $(".swiperImg").prop("src", `./images/swiper/0${num}.jpg`)
    })
    // 点击跳转详情页面
  
}
