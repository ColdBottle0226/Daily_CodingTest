function solution(sizes) {
    var answer = 0;
    // 일단 둘 중 큰 값을 가로로
    let maxWidthList = sizes.map(item => {
        return item[1] > item[0] ? [item[1], item[0]]: item
    }) 
    let maxWidth = Math.max(...maxWidthList.map(item => item[0]))
    let maxHeight = Math.max(...maxWidthList.map(item => item[1]))
        
    answer = BigInt(maxWidth * maxHeight)
    return answer;
}
