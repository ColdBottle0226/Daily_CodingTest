function solution(phone_number) {
    var answer = '';
    let phoneNumList = phone_number.split("")
    answer = phoneNumList.map((item, idx) => {
        return idx >= phoneNumList.length-4 ? item : "*"
    }).join("")
    return answer;
}
