function solution(nums) {
    var answer = 0;
    let hashCount = new Set([...nums]).size
    let halfCount = nums.length / 2

    answer = hashCount > halfCount ? halfCount :  hashCount
    return answer;
}
