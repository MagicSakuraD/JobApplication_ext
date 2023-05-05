// content_script.js // 获取页面上的元素，根据你想要点击的元素进行修改
var btn_arr = document.getElementsByClassName("btn-chat");

var title_arr = document.getElementsByClassName("title-text");

// 选择第一个 <article> 元素
// const user_name = document.getElementsByClassName("label-text");
const user_name = document.querySelector(".label-text");
try {
  const my_name = user_name.textContent;
  const img = document.querySelector(
    'a[href="https://www.zhipin.com/web/geek/recommend"] img'
  );
  const imgUrl = img.getAttribute("src");
  if (my_name || imgUrl) {
    console.log(my_name);
    console.log(imgUrl); // 输出图片 URL

    // 创建一个新的 <img> 元素
    const img = document.createElement("img");

    // 设置 <img> 元素的 src 属性为 imgUrl
    img.setAttribute("src", imgUrl);
    img.style.width = "2rem";
    // 创建一个新的 <div> 元素
    const badge = document.createElement("div");
    badge.appendChild(img);
    badge.style.fontSize = "1.45rem";
    badge.style.lineHeight = "1.85rem";
    badge.style.marginTop = "1.5rem";
    badge.style.marginBottom = "1rem";
    badge.style.backgroundColor = "#00b4b3";
    badge.style.borderRadius = "1rem";
    badge.style.height = "2.5rem";
    badge.style.display = "inline-block";
    badge.style.paddingTop = "0.8rem";
    badge.style.color = "#e0e0e0";

    badge.style.float = "right";
    // badge.style.marginLeft = "3rem";
    // badge.style.marginRight = "0";
    //     position: relative;
    //   right: 5rem;
    badge.style.position = "relative";
    badge.style.right = "-3rem";
    badge.textContent = `✨${my_name}✨欢迎使用“快投简历”`;
    const fastRegBox = document.querySelector(".inner");
    fastRegBox.appendChild(badge);
  }
} catch (error) {
  console.log(error, "小屏幕尺寸页面");
}
