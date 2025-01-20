function solution(k, score) {
    var answer = [];
    let honorList = [];
    for(let i=0; i<score.length; i++){
        if(i<k){
            honorList.push(score[i])
            honorList.sort((a,b) => a-b)
        }else{
            if(score[i] > honorList[0]){
                honorList.shift()
                honorList.push(score[i])
            }
        }
        honorList.sort((a,b) => a-b)
        answer.push(honorList[0])
    }
    
    return answer;
}
