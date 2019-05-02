function wrap (string, colNum) {
    let result = [];
    let currentSum = 0;
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
      currentSum += (words[i].length + 1);
      if (currentSum <= colNum) {
      result.push(words[i])
      } else {
        currentSum = words[i].length;
        result.push('/n' + words[i]);
      }
    }
    return result.join(' ');
}


















