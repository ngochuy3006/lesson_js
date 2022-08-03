function sumArray(mang){
    let sum = 0;
    let average = 0;
    for (let i = 0; i < mang.length; i++){
      if (mang[i] % 2 == 0) {
        sum += mang[i];
    }
    }
    average = sum/2;
    return average;
}
 
let mang = [1, 5, 9, 10, 12, 14, 6, 4,2];
console.log(sumArray(mang)); // 25