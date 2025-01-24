function solution(ingredient) {
    var answer = 0;
    // 빵:1, 야채:2, 고기:3
    let finishBurger = [1,2,3,1]
    let stackBurger = []
    for(let i=0; i<ingredient.length; i++){
        stackBurger.push(ingredient[i])
        if(JSON.stringify(stackBurger.slice(stackBurger.length - 4)) == JSON.stringify(finishBurger)){
            stackBurger.splice(stackBurger.length - 4)
            answer++;   
       }
    }
    return answer;
}
