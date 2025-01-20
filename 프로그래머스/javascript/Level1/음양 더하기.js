function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0; i<absolutes.length; i++){
        let value = signs[i] ? absolutes[i] : -absolutes[i]
        answer += value
    }
    return answer;
}
