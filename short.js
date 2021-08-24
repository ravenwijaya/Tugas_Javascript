const Video = require('./video');
class Short extends Video {
  constructor(id, title, channel, views_count, tags, published, video_duration, video_thumbnail) {
    super(
      id, title, channel, views_count, tags, published, video_duration, video_thumbnail
    )
  }
}
module.exports = Short;
