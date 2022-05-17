// 2) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.





function squareTotal(arr){

    let result = 0;
    arr.forEach((item)=>{

        if(item % 2===0){
            item *=item
            result += item
        }
    });
    return result
}
console.log(squareTotal([4,2,3,5,6]))