function solution(nums) {
    var answer = 0;
    // 소수 찾기
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
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                let addNum = nums[i] + nums[j] + nums[k]
                if(findPrime(addNum)){
                    answer++
                }
            }
        }
    }
    
    return answer;
}
