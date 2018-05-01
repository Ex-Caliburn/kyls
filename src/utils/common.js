// 获取系统当前时间2017-01-20T14:08:51+08:00
function current () {
  var date = new Date()
  var month = date.getMonth()
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  if (month < 9) {
    month = '-0' + (month + 1) + '-'
  } else {
    month = '-' + (1 + month) + '-'
  }
  if (day < 10) {
    day = '0' + day
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  if (second < 10) {
    second = '0' + second
  }
  return (date.getFullYear() + '' + month + '' + day + 'T' + hour + ':' + minute + ':' + second + '+08:00')
}

// 找到 个arr1中arr2没有的项
function diff (arr1, arr2) {
  var newArr = []
  var arr3 = arr1.concat(arr2) // 将arr1和arr2合并为arr3

  function isContain (value) {
     // 找出arr3中不存在于arr1和arr2中的元素
    return arr2.indexOf(value) === -1
  }

  newArr = arr3.filter(isContain)
  return newArr
}

function formatDuration (second) {
  let minutes = Math.floor(second / 60)
  let newSeconds = second - minutes * 60
  return {
    seconds: newSeconds,
    minutes
  }
}

export {
  formatDuration,
  diff,
  current
}
