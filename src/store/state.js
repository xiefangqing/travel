// 如果浏览器关闭了本地存储或者使用隐身模式，直接使用localStorage可能会报错，所以用localStorage最好用try...catch包围
let defaultCity = '平阳'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
