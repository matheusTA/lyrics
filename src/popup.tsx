import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import "~style.css"

import Header from "~components/header"

function IndexPopup() {
  const [videoTitle, setVideoTitle] = useState("")
  const [lyric, setLyric] = useState("")

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "get_video_title" },
        async (response) => {
          if (response?.title) {
            setVideoTitle(response.title)

            const resp = await sendToBackground({
              name: "lyric",
              body: {
                videoTitle: response.title
              }
            })

            setLyric(resp.lyric)
          }
        }
      )
    })
  }, [videoTitle])

  return (
    <div className="plasmo-max-h-[1500px] plasmo-w-96">
      <Header />

      <main className="plasmo-p-4">
        <h1 className="">{videoTitle}</h1>
        <p>{lyric}</p>
      </main>
    </div>
  )
}

export default IndexPopup
