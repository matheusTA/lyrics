import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["*://*.youtube.com/watch*"],
}

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  if (request.action == "get_video_title") {
    const titleElement = document.querySelector('#title > h1 > yt-formatted-string');

    if (titleElement) {
      const title = titleElement.textContent;

      sendResponse({ title });
    }
  }
});
