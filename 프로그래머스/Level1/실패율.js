function solution(N, stages) {
    var answer = [];
    let failList = []
    for(let i=1; i<=N; i++){
        let success = stages.filter(item => item >= i).length
        let failPercent = stages.filter(item => item == i).length
        failList.push([i, failPercent/success])
    }
    console.log('failList::', failList)
    answer = failList.sort((a,b) => {
        if(a[1] == b[1]){
            return a[0] - b[0]
        }else{
            return b[1] - a[1]
        }
    }).map(item => item[0])
    
    return answer;
}
