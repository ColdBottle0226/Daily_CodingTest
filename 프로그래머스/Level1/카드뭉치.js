function solution(cards1, cards2, goal) {
    var answer = '';
    for(let i=0; i<goal.length; i++){
        if(goal[i] !== cards1[0] && goal[i] !== cards2[0]){
            answer = "No"
            break;
        }else{
            if(goal[i] == cards1[0]){
                cards1.shift()
            }else{
                cards2.shift()
            }
            answer = "Yes"
        }
    }
    return answer;
}
