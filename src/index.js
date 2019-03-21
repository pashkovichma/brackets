module.exports = function check(str, bracketsConfig) {
  let a = str.length;
    let b = bracketsConfig.length;
    for (let i = 0; i < str.length; i++){
      for (let j = 0; j < b; j++) {
        if (str[i]==bracketsConfig[j][0]&&str[i+1]==bracketsConfig[j][1]) {
          str = str.substring(0,i) + str.substring(i+2);
          i = i-2;
        }
      }
    } 
    if (str.length){
      return false;
    } else {
      return true;
    }
}
