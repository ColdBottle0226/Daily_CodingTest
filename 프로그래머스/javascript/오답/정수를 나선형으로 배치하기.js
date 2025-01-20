function solution(n) {
    var answer = Array.from({length:n}, ()=> Array(n).fill(0))
    console.log('answer::',answer)
    // 우측 -> 아래 -> 좌측 -> 위
    let row=0;
    let col=0;
    let value=1;
    
    for(let i=n; i>0; i-=2){
        // 오른쪽
        for(let j=0; j<i; j++){
            answer[row][col] = value
            col++;
            value++;
        }
        col--
        row++;
        // 아래
       for(let j=0; j<i-1; j++){
            answer[row][col] = value
            row++;
            value++;
        }
        row--
        col--;
       // 왼쪽
       for(let j=0; j<i-1; j++){
            answer[row][col] = value
            col--;
            value++;
        }
        col++;
        row--;    
       // 위쪽
       for(let j=0; j<i-2; j++){
            answer[row][col] = value
            row--;
            value++;
        }
        col++;
        row++;    
    }
    
    return answer;
}
