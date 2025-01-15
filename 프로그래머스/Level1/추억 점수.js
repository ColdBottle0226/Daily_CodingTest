function solution(name, yearning, photo) {
    var answer = [];
    let yearnMap = new Map();
    name.forEach((item, idx) => {
        yearnMap.set(item, yearning[idx])
    })
    
    answer = photo.map((item, idx) => {
        let eachAdd = item.reduce((acc,value,index) => {
            if(yearnMap.has(value)){
                 acc += yearnMap.get(value)   
            }
            return acc
        }, 0)
        return eachAdd
    })
    
    return answer;
}
