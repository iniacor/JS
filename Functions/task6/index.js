function getPrimes(num) {
  getnumber: for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue getnumber; // getnumber в данном случае метка для условия continue
    }
    console.log(i);
  }
}
getPrimes(20);
