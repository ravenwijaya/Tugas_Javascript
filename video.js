class Video {
  constructor(id, title, channel, views_count, tags, published, video_duration, video_thumbnail) {
    this.id = id
    this.title = title
    this.channel = channel
    this.views_count = views_count
    this.tags = tags
    this.published = published
    this.video_duration = video_duration
    this.video_thumbnail = video_thumbnail
  }
}
module.exports = Video;