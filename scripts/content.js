var count = 0; // initialize a counter variable
var intervalId; // declare a variable for the timer function
var range_value = 1; // declare a variable for
// 监听来自 popup.js 的消息

// listen for messages from popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "setCount") {
    range_value = request.count_value;
    range_value = Math.round((range_value / 100) * 24) + 1;
  } else if (
    // check if the action is "scroll"
    request.action === "scroll"
  ) {
    // start the timer function
    intervalId = setInterval(function () {
      // scroll to the bottom of the page
      window.scrollTo(0, document.body.scrollHeight);
      // increment the counter
      count++;
      console.log(count, "加载次数", range_value);
      if (count == range_value) {
        // stop the timer

        clearInterval(intervalId);
        printTitles();
        count = 1; // initialize
        // send the job titles and number of jobs to popup.js
        // var but_arr = document.querySelectorAll(".btn-chat");
        // but_arr.forEach((button) => button.click());
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
    // but_arr[index].click();
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

try {
  var imgUrl = img.getAttribute("src"); // 获取img元素的src属性
} catch (error) {
  console.log("请登陆BOSS直聘");
}
// console.log(imgUrl); // 打印出img标签的URL
var extensionId = chrome.runtime.id;

// send the message to popup.js with the extension ID
chrome.runtime.sendMessage(extensionId, {
  imgUrl: imgUrl,
});

// store imgUrl and my_name in local storage
chrome.storage.local.set({ imgUrl: imgUrl });
console.log("快投简历📄");

const logoDiv = document.querySelector(".logo");
const p = document.createElement("p");
p.textContent = "快投简历：一键海投，秒投百份";
p.classList.add("banner-login");
p.style.left = "3rem";
p.style.fontSize = "2rem";
p.style.fontWeight = "600";
try {
  logoDiv.insertAdjacentElement("afterend", p);
} catch (error) {
  console.log("欢迎使用");
}
