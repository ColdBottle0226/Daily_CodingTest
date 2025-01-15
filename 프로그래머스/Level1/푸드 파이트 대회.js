function solution(food) {
    var answer = '';
    for(let i=1; i<food.length; i++){
        let halfFood = Math.floor(food[i]/2)
        answer +=  i.toString().repeat(halfFood)
    }
    let reversedFood = [...answer].reverse().join("")
    answer = answer + "0" + reversedFood
    return answer;
}
