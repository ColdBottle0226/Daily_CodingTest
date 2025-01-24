function solution(n, m, section) {
    let answer = 0;
    let lastSpot = 0

    for(const spot of section){
        if(spot > lastSpot){
            lastSpot = spot + m - 1
            answer++;
        }
    }
    
    return answer;
}
