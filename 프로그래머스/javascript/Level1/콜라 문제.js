function solution(a, b, n) { 
    var answer = 0;
    let returnCoke = 0;
    while(n>1 && Math.floor(n/a)>0){
       answer += Math.floor(n/a) * b
       returnCoke = Math.floor(n/a) * b
       n = Math.floor(n/a) * b + n%a
    }
    return answer;
}
