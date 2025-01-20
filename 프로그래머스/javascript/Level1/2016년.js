function solution(a, b) {
    var answer = '';
    let totalDay = 0
    let difVal = 0
    // 윤년 : 29
    let yearCnt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for(let i=0; i<a-1; i++){
        totalDay += yearCnt[i]
    }
    
    difVal = (totalDay + b -1) % 7
    
    switch(difVal){
        case 0:
            answer = "FRI"
            break;
        case 1:
            answer = "SAT"
            break;
        case 2:
            answer = "SUN"
            break;
        case 3:
            answer = "MON"
            break;
        case 4:
            answer = "TUE"
            break;
        case 5:
            answer = "WED"
            break;
        case 6:
            answer = "THU"
            break;
    }
    
    return answer;
}
