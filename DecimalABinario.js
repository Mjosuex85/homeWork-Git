function DecimalABinario(num) {
    var binarioArr = [];
    while (num !== 0) {
      binarioArr.unshift(num % 2);
      num = Math.floor(num/2);
    }
    return binarioArr.join("");
}