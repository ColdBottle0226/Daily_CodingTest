function solution(k, m, score) {
    // 1~k점, m개씩 포장 ,점수 : p * m 
    var answer = 0;
    let scoreSort = score.sort((a,b) => (b-a))
    let exceptCnt = scoreSort.length % m
    scoreSort.splice(scoreSort.length - exceptCnt)
    
    for(let i=0; i<scoreSort.length; i+=m){
        answer+= scoreSort[i+m-1] * m
    }
    
    return answer;
}
