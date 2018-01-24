
//  时间过滤
function addZero(val) {
    if (val < 10) {
        return "0" + val;
    } else {
        return val;
    }
};

Vue.filter("formatTime", function (value, type) {
    let dataTime = "";
    let data = new Date();
    data.setTime(value);
    let year = data.getFullYear();
    let month = addZero(data.getMonth() + 1);
    let day = addZero(data.getDate());
    let hour = addZero(data.getHours());
    let minute = addZero(data.getMinutes());
    let second = addZero(data.getSeconds());
    if (type == "YMD") {
        dataTime = year + "-" + month + "-" + day;
    } else if (type == "YMDHMS") {
        dataTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    } else if (type == "HMS") {
        dataTime = hour + ":" + minute + ":" + second;
    } else if (type == "YM") {
        dataTime = year + "-" + month;

    }
    return dataTime;//将格式化后的字符串输出到前端显示
});

//金币过滤
Vue.filter("format", function (n) {
    if (n < 0) {
        var nStr = n.toString().substring(1)
    } else {
        var nStr = n.toString()
    }
    var nArr = nStr.split('.')
    var b = '';
    var a = nArr[0].toString().split('').reverse();
    for (let i = 0; i < a.length; i++) {
        if (i % 3 == 2) {
            b = b + a[i].toString() + ','
        } else {
            b = b + a[i]
        }
    }
    nArr[0] = b.split('').reverse().join('')
    if (nArr[0].charAt(0) == ',') {
        nArr[0] = nArr[0].substring(1)
    }
    if (nArr[1] && n >= 0) {
        n = nArr[0] + '.' + nArr[1]
    } else if (nArr[1] && n < 0) {
        n = '-' + nArr[0] + '.' + nArr[1]
    } else if (n < 0) {
        n = '-' + nArr[0]
    } else {
        n = nArr[0]
    }
    return n
})
//手机号过滤
Vue.filter('phone', function (phone) {
    phone = phone.replace(/(\d{3})+\d{4}(\d{4})/, '$1****$2');
    return phone;
})
const Filter = {
    install: (Vue) => {
        Vue.filter('phone', Phone)
    }
}

export default Filter
