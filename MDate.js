/**
 * Created by huangjingjing on 2016/12/1.
 */
;
(function(global) {
    var result, tempRes, thisDate;

    function MDate(F, D) {
        if (typeof F !== 'string') {
            throw new Error('param is a string')
        }
        thisDate = D ? new Date(D.replace(/\-/g, '/')) : new Date();
        if (thisDate.toString() === 'Invalid Date') {
            throw new Error('Error date')
        }
        result = DateFormat(thisDate, F);
        thisDate = tempRes = null;
        return result;
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
        tempRes = D.toUTCString();
        D = null;
        return (F ? F : tempRes)
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