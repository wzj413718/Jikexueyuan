var arr = ["b", "m", "s", "q", "s", "s", "b", "b"];
/*计数对象*/
var count = {};
/*索引*/
var index = {};
/*循环遍历生成新数组*/
for (var i = 0; i < arr.length; i++) {
    var char = arr[i];
    if (count[char]) {
        count[char] += 1;
        index[char] += "," + i;
    } else {
        count[char] = 1;
        index[char] = i;
    }
}
console.log(count);
console.log(index);
/*找出出现最多字母的次数*/
var max = count[Object.keys(count).sort(function(a, b) {
    return count[a] <= count[b];
})[0]];
console.log("出现最多字母的次数为：" + max);

/*找出出现最多字母存进输入*/
var maxArr = [];
for (i in count) { /*尝试了i=0;i<count.length;i++;没有通过，后来想明白了这里的i不是数字。而是字母索引*/
    if (count[i] >= max) {
        max = count[i];
        maxArr.push(i);
    }
}
console.log(maxArr);
document.write("出现次数最多的字母是：" + maxArr + "<br>");

/*出现次数最多的字母的位置*/
var key;
for (var i = 0; i < maxArr.length; i++) {
    key = maxArr[i];
    document.write(key + "出现的次数为：" + count[key] + "<br>");
    document.write(key + "的位置：" + index[key] + "<br>");
}
