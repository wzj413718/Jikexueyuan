var regularContent = document.getElementById("regularShow"); /*计算器屏幕*/
/*regularContent.innerHTML = Number(regularContent.innerHTML);
 */
var count = {
        num1: "",
        num2: "",
        operator: "",
        countRegular: function() {
            if (this.operator == "/" && this.num2 == 0) {
                regularContent.innerHTML = "NaN";
            } else {
                var val = eval(this.num1 + this.operator + this.num2);
                return parseFloat(val);
            }
        }
    } /*存储数字和运算符的对象。包含一个计算方法*/
    /*count.num1 = Number(count.num1);
    count.num2 = Number(count.num2);
    */
    /*获取数字区域*/
var nBtn = document.getElementById("numberBtn").getElementsByTagName("button"); /*取得数字区域14个btn数组*/
for (var i = 3; i < nBtn.length; i++) {
    nBtn[i].addEventListener('click', getNumber);
}

function getNumber() { /*获得数字方法*/
    var num = Number(this.innerHTML);
    console.log(num);
    if (count.num1 !== "" && count.operator !== "") { /*如果num1和运算符都不是空值，再次点击时将数值传递给num2*/
        count.num2 = String(count.num2 + num);
        regularContent.innerHTML = count.num2;
        console.log(count);
    } else {
        regularContent.innerHTML = "";
        count.num1 = String(count.num1 + num);
        regularContent.innerHTML = count.num1;
        console.log(count);
    }
}

/*运算符区域*/
var oBtn = document.getElementById('operBtn').getElementsByTagName("button");
for (var i = 0; i < oBtn.length - 1; i++) {
    oBtn[i].addEventListener('click', getOperator);
}

function getOperator() {
    if (count.num1 == "" && count.num2 == "") {
        count.num1 = Number(regularContent.innerHTML);
        var val = this.innerHTML;
        count.operator = val;
        console.log(count);
    } else {
        var val = this.innerHTML;
        count.operator = val;
        console.log(count);
    }
}

/*计算*/
var regularBtn = document.getElementById("regularBtn");
regularBtn.addEventListener('click', countRe);

function countRe() {
    if (count.num2 == 0 && count.operator == "/") { /*被除数为零时显示NaN*/
        regularContent.innerHTML = "NaN";
    } else if (count.num1 == "" && count.num2 == "" && count.operator == "") { /*如果三个值都是空，就显示屏幕的值，不做任何操作*/
        regularContent.innerHTML;
    } else { /*其他情况直接运算*/
        regularContent.innerHTML = count.countRegular();
    }
    count.num1 = "";
    count.num2 = "";
    count.operator = "";
    console.log(count);
}

/*清屏*/
var clearScr = document.getElementById("clearAll");
clearScr.addEventListener('click', clearS);

function clearS() {
    regularContent.innerHTML = "";
    count.num1 = "";
    count.num2 = "";
    console.log(count);
}

/*退格*/
var backSp = document.getElementById("backSpace");
backSp.addEventListener('click', backSpace);

function backSpace() {
    var show = regularContent.innerHTML;
    show = Number(show)
    var x = regularContent.innerHTML;
    x = String(show);
    if (show > 10) {
        if (count.num1 !== "" && count.operator !== "") {
            regularContent.innerHTML = x.substring(0, x.length - 1);
            count.num2 = Number(regularContent.innerHTML);
            console.log(count);
        } else {
            regularContent.innerHTML = x.substring(0, x.length - 1);
            count.num1 = Number(regularContent.innerHTML);
            console.log(count);
        }
    } else {
        if (count.num1 !== "" && count.operator !== "") {
            regularContent.innerHTML = 0;
            count.num2 = Number(regularContent.innerHTML);
            console.log(count);
        } else {
            regularContent.innerHTML = 0;
            count.num1 = Number(regularContent.innerHTML);
            console.log(count);
        }
    }
}
/*平方根*/
var countSqrt = document.getElementById("countSqrt");
countSqrt.onclick = function sqrt() {
    var num = Math.sqrt(regularContent.innerHTML);
    if (count.num1 !== "" && count.operator !== "") { /*如果第一个值和运算符都不是空，把开方的值给num2*/
        count.num2 = num;
        regularContent.innerHTML = count.num2;
        console.log(count);
    } else {
        count.num1 = num;
        regularContent.innerHTML = count.num1;
        console.log(count);
    }
}

/*百分比*/
var percent = document.getElementById("percentNum");
percent.onclick = function per() {
    var num = eval(regularContent.innerHTML / 100);
    if (count.num1 !== "" && count.operator !== "") { /*如果第一个值和运算符都不是空，把开方的值给num2*/
        count.num2 = num;
        regularContent.innerHTML = count.num2;
        console.log(count);
    } else {
        count.num1 = num;
        regularContent.innerHTML = count.num1;
        console.log(count);
    }
}

/*倒数*/
var rec = document.getElementById("reciprocal");
rec.onclick = function recNum() {
    var num = eval(1 / regularContent.innerHTML);
    if (count.num1 !== "" && count.operator !== "") { /*如果第一个值和运算符都不是空，把开方的值给num2*/
        count.num2 = num;
        regularContent.innerHTML = count.num2;
        console.log(count);
    } else {
        count.num1 = num;
        regularContent.innerHTML = count.num1;
        console.log(count);
    }
}

/*存储*/
var save = document.getElementById("saveStorage");
save.addEventListener('click', saveStorage);

function saveStorage() {
    var val = regularContent.innerHTML;
    localStorage.setItem('num', val);
}

/*累存*/
var dbSave = document.getElementById("doubleSave");
dbSave.addEventListener('click', dSave);

function dSave() {
    var val = Number(regularContent.innerHTML);
    var ramNum = Number(localStorage.getItem("num"));
    val = val + ramNum;
    localStorage.setItem('num', val);
}

/*积存*/
var muSave = document.getElementById("multiSave");
muSave.addEventListener('click', mSave);

function mSave() {
    var val = Number(regularContent.innerHTML);
    var ramNum = Number(localStorage.getItem("num"));
    val = val * ramNum;
    localStorage.setItem('num', val);
}
/*读取*/
var load = document.getElementById("loadStorage");
load.addEventListener('click', loadStorage);

function loadStorage() {
    var val = Number(localStorage.getItem('num'));
    if (count.num1 !== "" && count.operator !== "") {
        count.num2 = val;
        regularContent.innerHTML = count.num2;
        console.log(count);
    } else {
        count.num1 = val;
        regularContent.innerHTML = count.num1;
        console.log(count);
    }
}

/*清存*/
var clear = document.getElementById("clearStorage");
clear.addEventListener('click', clearStorage);

function clearStorage() {
    localStorage.clear();
}

/*小数点*/
var dot = document.getElementById("dot");
dot.addEventListener('click', numberDot);
/*var flag == "fales";
*/

function numberDot() {
    if (count.num1 !== "" && count.operator !== "") { /*如果第一个值和运算符都不是空，在num2后面加小数点*/
        if (count.num2.indexOf(".") == -1) {
            regularContent.innerHTML = regularContent.innerHTML + ".";
            count.num2 = regularContent.innerHTML;
        }
    } else if (count.num1 == "" && count.num2 == "") {
        count.num1 = regularContent.innerHTML + ".";
        regularContent.innerHTML = count.num1;
    } else {
        if (count.num1.indexOf(".") == -1) {
            regularContent.innerHTML = regularContent.innerHTML + ".";
            count.num1 = regularContent.innerHTML;
        }
    }
}

/*负数*/
var negative = document.getElementById("negativeNumber");
negative.addEventListener('click', numberNegative);

function numberNegative() {
    var num = regularContent.innerHTML;
    if (count.num1 !== "" && count.operator !== "") { /*如果第一个值和运算符都不是空，在num2后面加小数点*/
        if (count.num2.indexOf("-") == -1) {
            regularContent.innerHTML = "-" + regularContent.innerHTML;
            count.num2 = regularContent.innerHTML;
            console.log(count);
        } else {
            regularContent.innerHTML = -(regularContent.innerHTML);
            count.num2 = regularContent.innerHTML;
            console.log(count);
        }
    } else if (count.num1 == "" && count.num2 == "") {
        regularContent.innerHTML = 0;
    } else {
        if (count.num1.indexOf("-") == -1) {
            regularContent.innerHTML = "-" + regularContent.innerHTML;
            count.num1 = regularContent.innerHTML;
            console.log(count);
        } else {
            regularContent.innerHTML = -(regularContent.innerHTML);
            count.num2 = regularContent.innerHTML;
            console.log(count);
        }
    }
    console.log(num);
}
