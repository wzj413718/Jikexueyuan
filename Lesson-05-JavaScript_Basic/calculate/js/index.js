/*表单计算器*/
function count() {
    var num1 = document.getElementById("num1").value;
    /*获取第一个输入框*/
    var num2 = document.getElementById("num2").value;
    /*获取二个输入框*/
    var oper = document.getElementById("operator").value;
    /*获取运算符多选框*/
    var regularShow = document.getElementById("regular");
    /*获取输结果输入框*/
    var operString = ["+", "-", "*", "/"];
    /*参考运算符*/
    if (num1 != "" && num1.trim() != "" && num2 != "" && num2.trim() != "" && oper != "" && oper.trim() != "") {
        /*判断不能为空*/
        if (!isNaN(num1) && !isNaN(num2)) {
            /*判断是否为数字*/
            if (oper == "/" || oper == "除" && num2 == 0) {
                alert("被除数不能为零！");
                regularShow.value = "错误！";
                document.getElementById("num2").value = "";
            } else {
                regularShow.value = checkOper(operString, oper, num1, num2, oper);
            }
        } else {
            alert("请输入数字！");
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
        }
    } else {
        alert("不能为空！");
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
    }
}

function checkOper(arry, value, num1, num2, oper) {
    /*检验运算符*/
    var regular;
    if (arry.indexOf(value) !== -1) {
        regular = eval(num1 + oper + num2);
        return regular.toFixed(4);
    } else {
        /*判断oper等于汉字运算符时处理结果*/
        switch (oper) {
            case "加":
                regular = +eval(num1 + "+" + num2);
                return regular.toFixed(4);
                break;
            case "减":
                regular = +eval(num1 + "-" + num2);
                return regular.toFixed(4);
                break;
            case "乘":
                regular = +eval(num1 + "*" + num2);
                return regular.toFixed(4);
                break;
            case "除":
                regular = +eval(num1 + "/" + num2);
                return regular.toFixed(4);
                break;
            default:
                alert("请输入运算符!");
        }
    }
}
