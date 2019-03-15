//全局过滤器，进行时间的格式化
export const dateFormat = function (dateStr, pattern) {
  var dt = new Date(dateStr); //根据给定的时间字符串，得到特定的时间
  //比如 yyyy-mm-dd
  var y = dt.getFullYear(); //年
  var m = (dt.getMonth() + 1).toString().padStart(2, "0"); //月
  var d = dt.getDate().toString().padStart(2, "0"); //日
  // return y + "-" + m + "-" + d;//通常都这么写
  // return `${y}-${m}-${d}`;//也可以这样写

  if (pattern === "yyyy-mm-dd") {
    return `${y}-${m}-${d}`; //也可以这样写
  } else {
    var hh = dt.getHours().toString().padStart(2, "0");
    var mm = dt.getMinutes().toString().padStart(2, "0");
    var ss = dt.getSeconds().toString().padStart(2, "0");
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  }
}
