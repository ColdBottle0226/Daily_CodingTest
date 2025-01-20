function solution(s) {
    var answer = '';
    let splitStr = s.split(" ").map(item => {return item.split("")})
    
    for(let i=0; i<splitStr.length; i++){
        for(let j=0; j< splitStr[i].length; j++){
            if(j%2==0){
               splitStr[i][j] = splitStr[i][j].toUpperCase();  
            }else{
               splitStr[i][j] = splitStr[i][j].toLowerCase();
            }
        }
        splitStr[i] = splitStr[i].join("")
    }
    answer = splitStr.join(" ")
    
    return answer;
}

