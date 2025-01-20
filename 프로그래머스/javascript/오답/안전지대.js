function solution(board) {
    var answer = 0;
    let boardLength = board.length
    let flatBoard = board.map(item => { return new Array(boardLength).fill(0); })
    const switchSafeZone = (x, y) => {
        switch (x){
            // 맨 상단
            case 0:
                // 좌측 상단
                if(y==0){
                    flatBoard[x][y] = 1
                    flatBoard[x][y+1] = 1
                    flatBoard[x+1][y] = 1
                    flatBoard[x+1][y+1] = 1            
                }else if(y==boardLength-1){
                    // 우측 상단
                    flatBoard[x][y] = 1
                    flatBoard[x][y-1] = 1
                    flatBoard[x+1][y] = 1
                    flatBoard[x+1][y-1] = 1    
                }else{
                    // 상단
                    flatBoard[x][y] = 1
                    flatBoard[x][y-1] = 1
                    flatBoard[x][y+1] = 1
                    flatBoard[x+1][y] = 1
                    flatBoard[x+1][y-1] = 1  
                    flatBoard[x+1][y+1] = 1  
                }
                break;
            case boardLength-1:
                if(y==0){
                    // 좌측 하단
                    flatBoard[x][y] = 1
                    flatBoard[x-1][y] = 1
                    flatBoard[x-1][y+1] = 1
                    flatBoard[x][y+1] = 1   
                }else if(y==boardLength-1){
                    // 우측 하단
                    flatBoard[x][y] = 1
                    flatBoard[x][y-1] = 1
                    flatBoard[x-1][y] = 1
                    flatBoard[x-1][y-1] = 1   
                }else{
                    // 하단
                    flatBoard[x][y] = 1
                    flatBoard[x][y-1] = 1
                    flatBoard[x][y+1] = 1
                    flatBoard[x-1][y] = 1
                    flatBoard[x-1][y-1] = 1
                    flatBoard[x-1][y+1] = 1   
                }
               break;
            default:
                // 좌측 모서리
                if(y==0){
                    flatBoard[x][y] = 1
                    flatBoard[x][y+1] = 1
                    flatBoard[x+1][y] = 1
                    flatBoard[x+1][y+1] = 1
                    flatBoard[x-1][y] = 1
                    flatBoard[x-1][y+1] = 1      
                }else if(y==boardLength-1){
                // 우측 모서리
                    flatBoard[x][y] = 1
                    flatBoard[x][y-1] = 1
                    flatBoard[x+1][y] = 1
                    flatBoard[x+1][y-1] = 1
                    flatBoard[x-1][y] = 1
                    flatBoard[x-1][y-1] = 1   
                }else{
                // 기본
                    flatBoard[x][y] = 1
                    flatBoard[x][y-1] = 1
                    flatBoard[x][y+1] = 1
                    flatBoard[x+1][y] = 1
                    flatBoard[x+1][y-1] = 1
                    flatBoard[x+1][y+1] = 1
                    flatBoard[x-1][y] = 1
                    flatBoard[x-1][y-1] = 1
                    flatBoard[x-1][y+1] = 1
                }
               break;
        }
    }
    
   if (boardLength === 1) {  // 특수한 상황 처리
        if (board[0][0] === 1) return 0;
        else return 1;
    }
    
    for(let i=0; i< boardLength; i++){
        for(let j=0; j<boardLength; j++){
            if(board[i][j] == 1){
                switchSafeZone(i,j)
            } 
        }
    }
    
    
    for(let i=0; i< boardLength; i++){
        for(let j=0; j<boardLength; j++){
            if(flatBoard[i][j] == 0){
                answer++;
            } 
        }
    }
    
    return answer;
}
