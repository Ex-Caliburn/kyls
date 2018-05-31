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
  dev: 'https://kyls3t.csytgj.com/kyls_backend/',
  prod: 'https://kyls3t.csytgj.com/kyls_backend/'
}

// 图片资源主机
const picturePrefix = {
  dev: 'https://kyls-test.oss-cn-hangzhou.aliyuncs.com/',
  prod: 'https://kyls-test.oss-cn-hangzhou.aliyuncs.com/'
}

// 音频资源主机
const hybridVoicePrefix = {
  dev: 'https://kyls-test.oss-cn-hangzhou.aliyuncs.com/',
  prod: 'https://kyls-test.oss-cn-hangzhou.aliyuncs.com/'
}

// 视频资源主机
const videoPrefixMap = {
  dev: 'https://kyls-test.oss-cn-hangzhou.aliyuncs.com/',
  prod: 'https://kyls-test.oss-cn-hangzhou.aliyuncs.com/'
}

module.exports = {
  env,
  version,
  HOST: hostMap[env],
  picturePrefix: picturePrefix[env],
  // 音频
  hybridVoicePrefix: hybridVoicePrefix[env],
  // 音频
  voicePrefix: hybridVoicePrefix[env],
  // 视频
  videoPrefix: videoPrefixMap[env]
}
