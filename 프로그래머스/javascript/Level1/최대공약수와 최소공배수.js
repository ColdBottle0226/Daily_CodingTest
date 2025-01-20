function solution(n, m) {
    var answer = [];
    let maxDiv = 1;
    let minMul = Math.max(n,m);
    let minVal = Math.min(n,m)
    
    // 최대 공약수
    for(let i=2; i<=minVal; i++){
        if(n%i==0 && m%i==0){
            maxDiv = i
        }
    }    
    
    while(true){
        // 최소 공배수
        if(minMul%n==0 && minMul%m==0){
            break;
        }
        minMul++;
    }
    
    answer = [maxDiv, minMul]
    return answer;
}
