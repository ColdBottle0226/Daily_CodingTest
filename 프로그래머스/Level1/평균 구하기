function solution(arr) {
    var answer = 0;
    let avg = 1;
    answer = arr.reduce((acc,item, idx) => {
        avg++;
        return idx==arr.length -1 ? (acc+item) / avg : acc+item 
    })
    return answer;
}
