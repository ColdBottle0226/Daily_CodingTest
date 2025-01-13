function solution(s) {
    var answer = false;
    if(s.length == 4 || s.length == 6){
        let strCount = s.split("").map(item => {return item.charCodeAt()}).filter(item => {return item>=65}).length
        
        answer = strCount > 0 ? false : true
    }
    return answer;
}
