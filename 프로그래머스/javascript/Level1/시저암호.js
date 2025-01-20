function solution(s, n) {
    var answer = '';
    // A: 65, Z:90, 공백 33, z:122, a:97 
    let strList = s.split("").map(item => {
        if(item.charCodeAt() + n > 122){
            return item.charCodeAt() - 26 + n
        }else if(item.charCodeAt() < 91 && item.charCodeAt() + n >90){
            return item.charCodeAt() - 26 + n
        }else if(item.charCodeAt() == 32){
            return ""
        }else{
            return item.charCodeAt() + n   
        }
    })

    answer = strList.map(item => {
        return item == ''? ' ':String.fromCharCode(item)
    }).join("")
    
    
    return answer;
}
