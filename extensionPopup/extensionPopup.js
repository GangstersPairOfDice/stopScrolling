const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();

timeElement.textContent = currentTime;

chrome.action.setBadgeText(
  {
    details: "TIME",
  },
  () => {
    console.log("Finished setting badge text.");
  }
);
