function solution(t, p) {
    var answer = 0;
    let filterList = [];
    
    for(let i=0; i<t.length - p.length + 1; i++){
        filterList.push(t.slice(i, i+p.length))
    }
    answer = filterList.filter(item => {return BigInt(item) <= BigInt(p)}).length
    
    return answer;
}
