function solution(babbling) {
    var answer = 0;
    const checkPossible = (str) => {
        let possibleSet = new Set(["aya", "ye", "woo", "ma"]) 
        let strConcat = ''
        let prevConcat = ''
        for(let i=0; i<str.length; i++){
            strConcat+=str.charAt(i);
            
            if(possibleSet.has(strConcat)){
                if(prevConcat === strConcat){
                    return prevConcat
                }
                prevConcat=strConcat
                strConcat=''
            }
        }
        return strConcat
    }
    
    answer = babbling.reduce((acc, item) => {
        if(checkPossible(item).length == 0){
            acc++;
        }
        return acc;
    }, 0)
    
    return answer;
}
