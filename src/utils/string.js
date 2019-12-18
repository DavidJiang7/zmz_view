'use strict'

export default {
    //千字符处理
    toThousands(num) {
        var result = '', counter = 0;
        var dot = String(num).indexOf(".");
        if (dot != -1) {
            // 获取小数点后面的数字
            var dotCnt = String(num).substring(dot + 1, num.length);

            // 获取小数点前面的数字
            num = String(num).split('.')[0]
            num = (num || 0).toString();
            for (var i = num.length - 1; i >= 0; i--) {
                counter++;
                result = num.charAt(i) + result;
                if (!(counter % 3) && i != 0) { result = ',' + result; }
            }
            result = result + '.' + dotCnt;
            return result;

        } else {
            // alert("没有小数点");
            return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        }
    }
} 