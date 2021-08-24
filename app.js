const Tag = require('./tag');
const Video = require('./video');
const Module = require('./module');
const Short = require('./short');
const short = new Short(6, "newvideo", "newchannel", "35M", [new Tag("Live"), new Tag("Game")], "2021-08-20", "12:00", "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  )
const promises = [
  Module.add(short),
  Module.searchById(1),
  Module.filterByCategory("Live"),
  Module.trendingVideo(), 
  Module.filterByInput("Game")]

Promise.all(promises)
.then(res => console.log(res))
.catch(rej => console.log(rej))

// Module.add(short)
//   .then(res => console.log(res))
//   .catch(rej => console.log(rej))
// Module.searchById(1)
//   .then(res => console.log(res))
//   .catch(rej => console.log(rej))
// Module.filterByCategory("Live")
//   .then(res => console.log(res))
//   .catch(rej => console.log(rej))
// Module.trendingVideo()
//   .then(res => console.log(res))
//   .catch(rej => console.log(rej))
// Module.filterByInput("Game")
//   .then(res => console.log(res))
//   .catch(rej => console.log(rej))

