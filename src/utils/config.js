/**
 * 相关配置，api 的基址分测试和正式
 */
import wepy from 'wepy'

// 目前开发的环境
const version = '1.0.0'
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
console.log('开发的环境', env)

// 打开调试
if (env) {
  wepy.setEnableDebug && wepy.setEnableDebug({
    enableDebug: true
  })
}

// api主机
const hostMap = {
  dev: 'http://47.98.211.80:8080/kyls_backend/',
  prod: 'http://47.98.211.80:8080/kyls_backend/'
}

// 视频封面图资源主机
const videoPosterMap = {
  dev: 'https://jdk3t-qiye.oss-cn-shanghai.aliyuncs.com/',
  production: 'https://cdn-qiye.jingdaka.com/'
}

// 图片资源主机
const hybridPicturePrefix = {
  dev: 'https://jdk3t-qiye.oss-cn-shanghai.aliyuncs.com/backend_pic/dst/poster/',
  production: 'https://cdn-qiye.jingdaka.com/backend_pic/dst/poster/'
}

// 音频资源主机
const hybridVoicePrefix = {
  dev: 'https://jdk3t-voice.oss-cn-shanghai.aliyuncs.com/backend_voice/',
  production: 'https://cdn-qiye-voice.jingdaka.com/backend_voice/'
}

// 视频资源主机
const videoPrefixMap = {
  dev: 'https://jdk3t-video.oss-cn-shanghai.aliyuncs.com/video/',
  production: 'https://cdn-qiye-dakavideos.jingdaka.com/video/'
}

// 语音资源主机
// const voicePrefixMap = {
//   dev: 'https://jdk3t-voice.oss-cn-shanghai.aliyuncs.com/backend_voice/',
//   production: 'https://cdn-qiye-voice.jingdaka.com/'
// };

// let voiceFileFront = 'https://jdk3t-voice.oss-cn-shanghai.aliyuncs.com/backend_voice/';
// let pictureFileFront = 'https://jdk3t-qiye.oss-cn-shanghai.aliyuncs.com/backend_pic/dst/poster/';
// let videoFileFront = 'https://jdk3t-video.oss-cn-shanghai.aliyuncs.com/video/';

module.exports = {
  env,
  version,
  HOST: hostMap[env],
  // 视频封面
  videoPosterBase: videoPosterMap[env],
  // 图片
  hybridPicturePrefix: hybridPicturePrefix[env],
  // 音频
  hybridVoicePrefix: hybridVoicePrefix[env],
  // 音频
  voicePrefix: hybridVoicePrefix[env],
  // 视频
  videoPrefix: videoPrefixMap[env]
}
