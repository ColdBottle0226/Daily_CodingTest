function solution(keymap, targets) {

    let answer = new Array(targets.length).fill(0);
    let keyMapList = new Map();
    for(let i=0; i<keymap.length; i++){
        for(let j=0; j<keymap[i].length; j++){
            let key = keymap[i].charAt(j)
            if(keyMapList.has(key) && keyMapList.get(key) <= j){
                continue;
            }else{
                keyMapList.set(key, j+1)
            }
        }
    }
    
    for(let i=0; i<targets.length; i++){
        for(let j=0; j<targets[i].length; j++){
            let target = targets[i].charAt(j)
            if(keyMapList.has(target)){
                answer[i] += keyMapList.get(target)
            }else{
                 answer[i] = -1
                 break;
            }
        }

    }
    
    return answer;
}
