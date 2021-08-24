const videos = require('./datasource');
class Module {
  static add = newvideo => {
    return new Promise((resolve, reject) => {
      newvideo ? videos.push(newvideo) : reject("failed to add")
      resolve(videos)
    })
  }
  static searchById = id => {
    return new Promise((resolve, reject) => {
      let find = videos.find(video => id === video.id)
      find ? resolve(find) : reject("not found")
    })
  }
  static filterByCategory = category => {
    return new Promise((resolve, reject) => {
      let findCate = videos.filter(video =>
        video.tags.find(tag => tag.name === category)
      )
      findCate ? resolve(findCate) : reject("not found")
    })
  }

  static trendingVideo = () => {
    return new Promise((resolve, reject) => {
      let trend = videos.sort(function(a, b) {
        let resA = a.views_count.split('M')
        let resB = a.views_count.split('M')
        return resA[0] - resB[0]
      });
      trend ? resolve(trend.reverse()) : reject("not found")
    })
  }
  static filterByInput = input => {
    return new Promise((resolve, reject) => {
      input = input.toLowerCase()
      let found = videos.filter((video) =>
        video.tags.find(tag => tag.name === input) ||
        video.title.toLowerCase().includes(input)
      )
      found ? resolve(found) : reject("not found")
    })
  }
}
module.exports = Module;