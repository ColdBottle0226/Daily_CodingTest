function solution(arr) {
    var answer = [];
    let minValue = arr.reduce((acc,item) => {
        return acc > item ? item : acc
    })
    
    answer = arr.length > 1 ? arr.filter(item => {return item !== minValue}) : [-1]

    return answer;
}
