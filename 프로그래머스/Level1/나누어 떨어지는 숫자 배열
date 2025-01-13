function solution(arr, divisor) {
    var answer = [];
    let divisorList = arr.filter(item => {
        return item % divisor == 0
    })
    
    answer = divisorList.length > 0 ? divisorList.sort((a,b) => (a-b)) : [-1]
    return answer;
}
