/**
 * Created by wonders on 2016/12/1.
 */
;
(function(global) {
    function MDate(D, F) {
        if (typeof D !== 'string' || typeof F !== 'string') {
            throw new Error('param is a string')
        }
        this._D = new Date(D.replace(/\-/g, '/'));
        let res = DateFormat(this._D, F);
        this._D = null;
        return res;
    }

    function DateFormat(D, F) {
        var O = {
            'M+': D.getMonth() + 1,
            'D+': D.getDate(),
            'h+': D.getHours(),
            'm+': D.getMinutes(),
            's+': D.getSeconds(),
            'q': Math.floor((D.getMonth() + 3) / 3),
            'S': D.getMilliseconds()
        }
        if (new RegExp(/(Y+)/).test(F)) F = F.replace(RegExp.$1, D.getFullYear().toString()).substr(4 - RegExp.$1.length);
        for (var K in O) {
            if (new RegExp('(' + K + ')').test(F)) {
                F = F.replace(RegExp.$1, (RegExp.$1.length == 1) ? (O[K].toString()) : (O[K] < 10) ? ('0' + O[K].toString()) : (O[K].toString()))
            }
        }
        var result = D.toUTCString();
        D = null;
        return (F ? F : result)
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = MDate;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function() {
            return MDate;
        });
    } else {
        global.MDate = MDate;
    };
})(this)