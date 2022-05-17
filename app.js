// 2) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.





function squareTotal(arr){

    let result = 0;
    arr.forEach((item)=>{

        if(item % 2===0){
            item *=item
            result += item
        };
    });
    return result;
}

console.log(squareTotal([4,2,3,5,6]));



// 3) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

let sum = (n) => {
    if(n % 3 === 0 && n % 7 === 0){
        console.log(`${n}  3-ce ve 7-e bolunur`)
    }else{
        console.log(`${n} 3-ce ve 7-e bolunmur`)
    }
}
sum(42);