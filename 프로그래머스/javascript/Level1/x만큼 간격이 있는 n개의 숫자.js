function solution(x, n) {
    // 등차수열
    var answer = [];
    // 마지막 항
    // x + (n-1)*x
    let lastVal = x + (n-1)*x
    
    if(x>0){
        for(let i=x; i<=lastVal; i+=x){
            answer.push(i)
        }
    }else if(x==0){
        for(let i=0; i<n; i++){
            answer.push(0)
        }
    }else{
        for (let i = x; i >= lastVal; i += x) {
            answer.push(i)
        }
    }
    
    return answer;
}
