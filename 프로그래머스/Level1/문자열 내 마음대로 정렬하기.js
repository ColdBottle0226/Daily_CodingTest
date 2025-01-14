function solution(strings, n) {
    var answer = [];
    // n번째 오름차순
    const checkSort = (a, b) => {   
        return a.charCodeAt(n) - b.charCodeAt(n)
    }
    answer = strings.sort().sort((a,b) => checkSort(a,b))
    return answer;
}
