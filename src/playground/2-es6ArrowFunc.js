const square = (num)=>{
    return num*num

}
console.log(square(2));

const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number)=>{
            return number * this.multiplyBy
        })
    }
}

console.log(multiplier.multiply());


