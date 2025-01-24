function solution(dartResult) {
    var answer = 0;
    let splitArr = dartResult.split(/(10|[0-9])/).slice(1);

    const calculateNum = (num, mul) => {
        switch(mul){
                case 'S': 
                    return Number(num)
                case 'D':
                    return Math.pow(Number(num),2)
                case 'T':
                    return Math.pow(Number(num),3)
        }
    }
    
    let eachSum = [];
    let finalMul = 0;
    
    for(let i=1; i<=3; i++){
        if(splitArr[(i*2)-1].includes('*')){
            if(eachSum.length>0){
                eachSum[i-2] *= 2
            }
            eachSum.push(calculateNum(splitArr[i*2-2],splitArr[i*2-1].charAt(0)) * 2)  
            finalMul = i
        }else if(splitArr[(i*2)-1].includes('#')){
            eachSum.push(calculateNum(splitArr[i*2-2],splitArr[i*2-1].charAt(0)) * -1) 
        }else{
            eachSum.push(calculateNum(splitArr[i*2-2],splitArr[i*2-1].charAt(0))) 
        }
    }
    answer = eachSum.reduce((acc,item) => acc+item)
    return answer;
}
