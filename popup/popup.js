// popup.js // 获取按钮元素

window.onload = function () {
  // listen for messages from background.js or content.js
  chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse
  ) {
    // check if the message has imgUrl and my_name properties
    if (message.imgUrl) {
      // do something with imgUrl and my_name
      console.log(message.imgUrl);
      // get the elements in popup.html
      //   var name = document.getElementById("name");
      var image = document.getElementById("image");
      // modify the elements' content or attributes
      //   name.textContent = message.my_name;
      image.setAttribute("src", message.imgUrl);
    }
  });

  chrome.storage.local.get(["imgUrl"], function (result) {
    // check if imgUrl and my_name exist in local storage
    if (result.imgUrl) {
      // get the elements in popup.html
      //   var name = document.getElementById("name");
      var image = document.getElementById("image");
      // modify the elements' content or attributes
      //   name.textContent = result.my_name;
      image.setAttribute("src", result.imgUrl);
    } else {
      // show default values
      //   name.textContent = "欢迎使用1";
      image.setAttribute("src", "/images/Icon512.png");
    }
  });

  // 获取其他元素和事件监听器...
};
var applyBtn = document.querySelector(".apply-btn");

applyBtn.addEventListener("click", function () {
  // execute content.js in the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // send a message to the active tab
    chrome.tabs.sendMessage(tabs[0].id, { action: "scroll" });
  });
});

// get imgUrl and my_name from local storage

// listen for messages from content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // check if the action is "sendJobTitles"
  if (request.action === "sendJobTitles") {
    // get the job titles and number of jobs
    var jobTitles = request.jobTitles;
    var numJobs = request.numJobs;

    // update the popup.html with the job titles and number of jobs
    var jobList = document.getElementById("job-list");
    jobList.innerHTML = "";

    for (var i = 0; i < jobTitles.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = jobTitles[i];
      jobList.appendChild(listItem);
    }

    var jobCount = document.getElementById("job-count");
    jobCount.textContent = "投递次数: " + numJobs;
  }
});
