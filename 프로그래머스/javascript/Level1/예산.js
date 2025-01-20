function solution(d, budget) {
    var answer = 0;
    
    while(true){
        const minVal = Math.min(...d);
        const minIdx = d.indexOf(minVal)
        
        d = d.filter((item, idx) => {return idx !== minIdx})

        budget -= minVal;
        
        if(budget < 0){
            break;
        }
        
        answer++;
    }
    return answer;
}

// 
function solution2(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
}
