function sumMatrix(A,B){
    return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
}

function solution2(arr1, arr2) {
    let answer = arr1.map(item => { return new Array(arr1[0].length).fill(0); })
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr1[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return answer;
}
