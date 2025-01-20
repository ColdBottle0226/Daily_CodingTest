  function solution(s, skip, index) {
    // 문자열 idx 만큼다음, skip : 넘어갈 알파벳
    var answer = '';

    const checkContainSkip = (char) => {
        let charCode = char.charCodeAt(); 
        let steps = 0; 

        while (steps < index) {
            charCode++; // 다음 알파벳으로 이동
            if (charCode > 122) charCode = 97;  
            if (!skip.includes(String.fromCharCode(charCode))) {
                steps++; // skip에 없는 경우에만 이동 증가
            }
        }

        return String.fromCharCode(charCode); // 최종 변환된 문자 반환
    };

    answer = s.split("").map(item => {
        return checkContainSkip(item)
    }).join("")
    return answer;
}
