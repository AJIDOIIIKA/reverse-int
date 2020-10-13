module.exports = function reverse (x) {
    let numStr = Math.abs(x) + "";
    numStr = numStr.split("").reverse().join("");
    num = Number(numStr);
    return num;
}
