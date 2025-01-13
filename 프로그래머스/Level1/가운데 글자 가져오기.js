function solution(s) {
    var answer = '';
    let sLength = s.length
    
    if(sLength % 2 == 1){
        answer = s.charAt(Math.floor(sLength/2))
    }else{
        answer = s.slice(sLength/2 - 1, sLength/2 + 1)
    }
    return answer;
}
