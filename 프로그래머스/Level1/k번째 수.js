function solution(array, commands) {
    var answer = [];
    commands.forEach((item, idx)=> {
        let idxCommand = item;
        let i = idxCommand[0];
        let j = idxCommand[1];
        let k = idxCommand[2];
        
        answer.push(array.slice(i-1,j).sort((a,b) => a-b)[k-1])
    })
    return answer;
}
