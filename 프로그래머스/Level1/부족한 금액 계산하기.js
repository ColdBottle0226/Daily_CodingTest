function solution(price, money, count) {
    var answer = -1;
    // 누적 이용금액 : 등차수열 합
    // n*(2a + (n-1)d) / 2
    let accPrice = (count * (2*price + (count-1) * price)) / 2
    answer = money - accPrice > 0 ? 0 : Math.abs(money - accPrice)
    return answer;
}
