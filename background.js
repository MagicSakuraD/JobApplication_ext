console.log("hello world");
// async function fetchData() {
//   const url =
//     "https://restapi.amap.com/v3/weather/weatherInfo?key=22a3efc9d5db15f049f0720cb12f6e95&city=310115";
//   const options = {
//     method: "GET",
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log("this is output", result);
//     document.getElementById("weather").innerHTML =
//       result["lives"][0]["weather"];
//   } catch (error) {
//     console.error(error);
//   }
// // }

// fetchData();

// {
//     "name": "快投简历",
//     "version": "1.0",
//     "description": "一键海投简历",
//     "author": "Quinn Chen",
//     "icons": {
//       "48": "/image/icon48.png",
//       "128": "/image/icon128.png"
//     },
//     "permissions": ["storage", "activeTab"],
//     "manifest_version": 3,
//     "background": {
//       "service_worker": "background.js"
//     },
//     "browser_action": {
//       "default_icon": {
//         "32": "/image/icon48.png"
//       },
//       "default_popup": "popup.html",
//       "default_title": "快投简历"
//     },
//     "content_scripts": [
//       {
//         "matches": ["https://www.zhipin.com/*/"],
//         "js": ["content_script.js"]
//       }
//     ]
//   }
