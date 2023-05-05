// popup.js // 获取按钮元素
console.log("开始");
var applyBtn = document.getElementById("apply-btn");
var stopBtn = document.getElementById("stop-btn"); // 定义一个全局变量，用于存储定时器的ID
// var timer; // 添加点击监听器
// applyBtn.addEventListener("click", function () {
//   // 获取当前标签页的ID
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     var tabId = tabs[0].id; // 注入content_script.js到当前标签页中
//     chrome.tabs.executeScript(tabId, { file: "content_script.js" });

//     // timer = setInterval(jobapply, 500); // 500毫秒等于0.5秒
//   });
// });

// stopBtn.addEventListener("click", function () {
//   // 清除定时器，停止执行函数
//   chrome.runtime.onMessage.addListener(function (
//     message,
//     sender,
//     sendResponse
//   ) {
//     // 判断消息的内容
//     if (message.timerId) {
//       // 将定时器的ID赋值给timer变量
//       timer = message.timerId;
//       clearInterval(timer);
//     }
//   });
// });

// 监听来自content_script.js的消息
