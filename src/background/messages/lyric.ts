import type { PlasmoMessaging } from "@plasmohq/messaging"

const generatePrompt = (videoTitle: string) => `Imagine you are a music enthusiast and you are searching for copyright-free song lyrics that match the theme of a YouTube video title: ${videoTitle}. Your task is to bring the lyrics of this song written in the original language and if you can't find this song, return 'Lyrics not found'.`

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  // Get lyric from AI API

  console.log(req.body.videoTitle)

  res.send({
    lyric: 'this is a lyric'
  })
}

export default handler
