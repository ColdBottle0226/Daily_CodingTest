function solution(n) {
    var answer = [];
    let nSplit = n.toString().split("")
    
    answer = nSplit.map((item, idx) => {
        return BigInt(nSplit[nSplit.length - (idx+1)])
    })
    return answer;
}
