function solution(arr){
    var answer = [];
    answer = arr.reduce((acc, item) => {
        if(acc[acc.length - 1] !== item){
            acc.push(item)
        }
        return acc;
    },[])
    
    return answer;
}
