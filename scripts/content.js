var count = 0; // initialize a counter variable
var intervalId; // declare a variable for the timer function

// listen for messages from popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // check if the action is "scroll"
  if (request.action === "scroll") {
    // start the timer function
    intervalId = setInterval(function () {
      // scroll to the bottom of the page
      window.scrollTo(0, document.body.scrollHeight);
      // increment the counter
      count++;
      // check if the counter reaches 10
      if (count === 10) {
        // stop the timer
        clearInterval(intervalId);
        printTitles();
        // send the job titles and number of jobs to popup.js
      }
    }, 1000); // set the interval to 1000 milliseconds (1 second)
  }
});

// define another function to print titles
function printTitles() {
  var title_arr = document.querySelectorAll(".title-text");
  var jobTitles = [];

  title_arr.forEach((item, index) => {
    console.log(index + 1, item.innerHTML);
    jobTitles.push(item.innerHTML);
  });

  chrome.runtime.sendMessage({
    action: "sendJobTitles",
    jobTitles: jobTitles,
    numJobs: jobTitles.length,
  });
}

// const user_name = document.querySelector(".label-text");
var img = document.querySelector("img.after"); // 获取img元素
var imgUrl = img.getAttribute("src"); // 获取img元素的src属性
// console.log(imgUrl); // 打印出img标签的URL
var extensionId = chrome.runtime.id;

// send the message to popup.js with the extension ID
chrome.runtime.sendMessage(extensionId, {
  imgUrl: imgUrl,
});

// store imgUrl and my_name in local storage
chrome.storage.local.set({ imgUrl: imgUrl });
console.log("快投简历📄");

// try {
//   const my_name = user_name.textContent;
//   const img = document.querySelector(
//     'a[href="https://www.zhipin.com/web/geek/recommend"] img'
//   );
//   const imgUrl = img.getAttribute("src");
//   if (my_name || imgUrl) {
//     const badge = document.createElement("div");
//     badge.style.fontSize = "1.45rem";
//     badge.style.lineHeight = "1.85rem";
//     badge.style.marginTop = "1.5rem";
//     badge.style.marginBottom = "1rem";
//     badge.style.backgroundColor = "#00b4b3";
//     badge.style.borderRadius = "1rem";
//     badge.style.height = "2.5rem";
//     badge.style.display = "inline-block";
//     badge.style.paddingTop = "0.8rem";
//     badge.style.color = "#e0e0e0";

//     badge.style.float = "right";
//     badge.style.position = "relative";
//     badge.style.right = "-3rem";
//     badge.textContent = `✨${my_name}✨欢迎使用“快投简历”`;
//     const fastRegBox = document.querySelector(".inner");
//     fastRegBox.appendChild(badge);

//     // 图片
//     console.log(my_name);
//     console.log(imgUrl); // 输出图片 URL
//     // 把imgUrl和my_name发送到popup.js

//     var extensionId = chrome.runtime.id;

//     // send the message to popup.js with the extension ID
//     chrome.runtime.sendMessage(extensionId, {
//       imgUrl: imgUrl,
//       my_name: my_name,
//     });

//     // store imgUrl and my_name in local storage
//     chrome.storage.local.set({ imgUrl: imgUrl, my_name: my_name });
//   }
// } catch (error) {
//   console.log(error, "成功切换成移动端页面(快投简历)");
// }
