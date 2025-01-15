function solution(n) {
    var answer = 0;
    const findPrime = (n) => {
        if(n==1){return false}
        if(n==2){return true}
        if(n%2==0){return false}
        let sqrt = Math.sqrt(n)
        for(let i=3; i<=sqrt; i+=2){
            if(n%i==0){
                return false
            }
        }
        return true
    }
    
    for(let i=1; i<=n; i++){
        if(findPrime(i)){
            answer++;
        }
    }
    
    return answer;
}
