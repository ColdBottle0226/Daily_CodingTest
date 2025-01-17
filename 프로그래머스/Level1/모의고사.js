function solution(answers) {
    var answer = [];
    let giveupOne = [1, 2, 3, 4, 5]
    let giveupTwo = [2, 1, 2, 3, 2, 4, 2, 5]
    let giveupThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let oneAnswerCnt = 0;
    let twoAnswerCnt = 0;
    let threeAnswerCnt = 0;
    
    for(let i=0; i<answers.length; i++){
        if(giveupOne[i%giveupOne.length] == answers[i]){
            oneAnswerCnt++
        }
        if(giveupTwo[i%giveupTwo.length] == answers[i]){
            twoAnswerCnt++
        }
        if(giveupThree[i%giveupThree.length] == answers[i]){
            threeAnswerCnt++
        }
    }
    let cntList = [oneAnswerCnt, twoAnswerCnt, threeAnswerCnt]
    let maxCnt = Math.max(...cntList)
    cntList.forEach((item, idx) => {
        if(item == maxCnt){
            answer.push(idx + 1)  
        }
    })
    
    
    
    return answer;
}
