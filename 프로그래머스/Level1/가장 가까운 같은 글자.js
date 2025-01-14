function solution(s) {
    var answer = [];
    let strMap = new Map();
    
    s.split("").forEach((item, idx) => {
        if(strMap.has(item)){
            let recentSpot = strMap.get(item)
            strMap.set(item, idx)
            answer.push(idx - recentSpot)
        }else{
            strMap.set(item, idx)
            answer.push(-1)
        }
        
    })
    return answer;
}
