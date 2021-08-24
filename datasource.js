const Tag = require('./tag');
const Video = require('./video');

const videos = []
const tag1 = ["Live", "Music", "Game", "Basketball"]
const tag2 = ["Football", "Cooking", "Adventure", "Cartoon"]
const titles = ["Game Mobile Legend", "Vaksinasi Indonesia", "Makan Cimol"]


for (let i = 1; i <= 5; i++) {
  let title = titles[Math.floor(Math.random() * titles.length)]
  let tag_1 = tag1[Math.floor(Math.random() * tag1.length)]
  let tag_2 = tag2[Math.floor(Math.random() * tag2.length)]
  videos.push(new Video(
    i, `${title}`, `channel${i}`, `3${i}M`,
    [new Tag(tag_1), new Tag(tag_2)],
    `2021-08-2${i}`, `12:0${i}`, "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  ))
}
module.exports = videos;