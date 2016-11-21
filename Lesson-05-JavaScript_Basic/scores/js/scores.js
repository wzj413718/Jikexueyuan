/**
 * Created by WZJ on 2016/7/28.
 */
function assessScores() {
    var stuScores = document.getElementById('scoresInput'); /*获取输入框*/
    var scoresShow = document.getElementById('scores'); /*获取显示评分窗口*/
    var scoresValue = stuScores.value; /*输入框的值*/
    if (scoresValue != null && scoresValue.trim() != "") {
        if (!isNaN(scoresValue)) {
            if (scoresValue <= 100) {
                switch (true) {
                    case scoresValue > 59 && scoresValue <= 70:
                        scoresShow.innerHTML = "四等生";
                        stuScores.focus();
                        stuScores.value = "";
                        break;
                    case scoresValue > 70 && scoresValue <= 80:
                        scoresShow.innerHTML = "三等生"
                        stuScores.value = "";
                        stuScores.focus();
                        break;
                    case scoresValue > 80 && scoresValue <= 90:
                        scoresShow.innerHTML = "二等生"
                        stuScores.value = "";
                        stuScores.focus();
                        break;
                    case scoresValue > 90 && scoresValue <= 100:
                        scoresShow.innerHTML = "一等生"
                        stuScores.value = "";
                        stuScores.focus();
                        break;
                    default:
                        scoresShow.innerHTML = "不及格！"
                        stuScores.value = "";
                        stuScores.focus();
                }
            } else {
                scoresShow.innerHTML = "请输入1-100的分值！"
                stuScores.value = "";
                stuScores.focus();
            }
        } else {
            alert("请输入数字！");
            stuScores.focus();
            stuScores.value = "";
        }
    } else {
        alert("内容不能为空！");
        stuScores.focus();
    }
}
