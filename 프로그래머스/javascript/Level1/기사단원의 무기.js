function solution(number, limit, power) {
    // limit 제한, power : 제한 수치에 대한 고정값
    var answer = 0;
    let divList = [];
    
    // 약수값
    const findDiv = (value) => {
        let divisor = 0;
        for(let i=1; i<= Math.sqrt(value); i++){
            if(value % i == 0){
                divisor++;
                if(i !== value / i){
                    divisor++;
                }
            }
        }
        return divisor
    }
    
    // 번호 약수 개수
    for(let i=1; i<=number; i++){
        if(findDiv(i) > limit){
            divList.push(power)
        }else{
            divList.push(findDiv(i))            
        }
    }
    
    answer = divList.reduce((acc, item) => acc+item)
    return answer;
}
