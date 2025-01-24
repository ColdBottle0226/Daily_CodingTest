function solution(s) {
    let answer = 0;
    let idx = 0;
    let dupCnt = 0;
    
    while(s!==''){
        let firstStr = s.charAt(0)
        if(s.charAt(idx) == firstStr){
            dupCnt++;    
            idx++;       
        }else{
            if(dupCnt==(idx+1)/2){
                s = s.slice(idx+1)
                dupCnt=0;
                idx=0;
                answer++;
            }else{
                idx++;   
            }
           
        }       
    }
    
    
    
    return answer;
}
