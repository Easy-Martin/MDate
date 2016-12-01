/**
 * Created by wonders on 2016/12/1.
 */
class MDate {
  constructor (D) {
    this._D = D ? new Date(D.replace(/\-/g, '/')) : new Date()
  }
  Format (F) {
    let O = {
      'M+': this._D.getMonth() + 1,
      'D+': this._D.getDate(),
      'h+': this._D.getHours(),
      'm+': this._D.getMinutes(),
      's+': this._D.getSeconds(),
      'q': Math.floor((this._D.getMonth() + 3) / 3),
      'S': this._D.getMilliseconds()
    }
    if (new RegExp(/(Y+)/).test(F)) F = F.replace(RegExp.$1, this._D.getFullYear().toString()).substr(4 - RegExp.$1.length);
    for (let K in O) {
      if (new RegExp('(' + K + ')').test(F)) {
        F = F.replace(RegExp.$1, (RegExp.$1.length == 1) ? (O[K].toString()) : (O[K] < 10) ? ('0' + O[K].toString()) : (O[K].toString()))
      }
    }

    return (F ? F : this._D.toUTCString())
  }
}
module.exports = MDate

