function solution(lottos, win_nums) {
    var answer = [];
    let rankMap = new Map([[6, 1], [5, 2], [4, 3], [3, 4], [2, 5]])
    let winNumSet = new Set(win_nums)
    let zeroCnt = lottos.filter(item => item==0).length
        
    let equalCnt = lottos.reduce((acc,item) => {
        if(winNumSet.has(item)){
            acc++;
            winNumSet.delete(item)
        }
        return acc;
    }, 0) 
    
    let worse = rankMap.get(equalCnt)??6
    let best = rankMap.get(equalCnt + zeroCnt)??6
    answer = [best,worse]
    return answer;
}
