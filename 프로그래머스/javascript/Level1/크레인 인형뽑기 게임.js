function solution(board, moves) {
    let answer = 0;
    let stack = []
    for(let i=0; i<moves.length; i++){
        let start = 0;
        let move = moves[i]-1
        while(start < board.length && board[start][move] == 0){
            start++;
        }
        // 인덱스 내에 있을때
        if(start < board.length){
            let pick = board[start][move]

            if(stack[stack.length-1] == pick){
                stack.pop()
                answer += 2;
            }else{
                stack.push(pick)            
            }        
            board[start][move] = 0
        }        
    }

    return answer;
}
