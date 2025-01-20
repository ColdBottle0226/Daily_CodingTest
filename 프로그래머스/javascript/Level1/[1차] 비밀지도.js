function solution(n, arr1, arr2) {
    let answer = []; 
    let chgArr = [];

    const changeDecimal = (value) =>{
        return value.toString(2).padStart(n, '0');
    }
    const multipleValue = (value1, value2) => {
        let multipleVal = ''
        for(let i=0; i<value1.length; i++){
            if(value1.charAt(i)=='0' && value2.charAt(i)=='0'){
                multipleVal += ' '
            }else{
                multipleVal += '#'
            }
        }
        return multipleVal;
    }
    
    answer = arr1.map((item, idx) => {
        return multipleValue(changeDecimal(item),changeDecimal(arr2[idx]))
    })
    
    return answer;
}
