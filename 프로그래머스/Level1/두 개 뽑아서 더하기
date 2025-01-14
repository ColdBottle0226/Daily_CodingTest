function solution(numbers) {
    var answer = [];
    let answerSet = new Set()
    // 3,5,6,3, 4,5,2 7,5, 5
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            answerSet.add(numbers[i]+numbers[j])
        }
    }
    answer = [...answerSet].sort((a,b) => (a-b))
 
    return answer;
}
