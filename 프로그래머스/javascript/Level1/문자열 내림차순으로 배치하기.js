function solution(s) {
    var answer = '';
    let asciiList = s.split("").map(item => {return item.charCodeAt()}).sort((a,b) =>(b-a))
    
    answer = asciiList.map(item => {return String.fromCharCode(item)}).join("")
    return answer;
}
