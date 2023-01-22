module.exports = function check(str, bracketsConfig) {
  const map = {
    close: bracketsConfig.reduce((acc, it) => {
      acc[it[1]] = it[0]
      return acc
    }, {}),
    open: bracketsConfig.reduce((acc, it) => {
      acc[it[0]] = it[1]
      return acc
    }, {}),
  };
  const openedBrackets = Object.values(map.close);
  
  const stack = [];
  
  for(let i = 0; i < str.length; i++) {
    const isOpenBracket = openedBrackets.includes(str[i]);
    if (isOpenBracket && stack[stack.length - 1] !== map.open[str[i]]) {
      stack.push(str[i]);
    } else if (stack[stack.length - 1] === map.close[str[i]]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
