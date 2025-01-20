// 3,7
function solution(n) {
    var answer = 0;
    let threeN = '';
    while(n>2){
        threeN += n%3
        n = Math.floor(n/3)
    }
    let answerList = [...threeN+=n]

    answer = answerList.reduce((acc, item, idx) => {
        return acc += Number(item)*Math.pow(3, answerList.length-1-idx)
    }, 0)
    return answer;
}
