function isprime(n){

    let a = 1;

    if (n <2) return a = 0; 
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            a = 0;
            break; 
        }
        i++;
    }

    return a;
}

let array = [0,1,2,3,4,5,6,7,8,9,10];

let arr = 0;
for (let i = 0; i < array.length; i++){
  if (isprime(array[i]) == 1)  
    arr -= array[i]
    console.log( arr);
}