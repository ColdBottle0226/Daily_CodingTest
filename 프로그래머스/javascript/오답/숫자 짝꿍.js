function solution(X, Y) {
    let addStr = [];
    let XCnt = new Array(10).fill(0);
    let YCnt = new Array(10).fill(0);
    for(let i=0; i<X.length; i++){
        XCnt[X.charAt(i)]++;
    }
    for(let i=0; i<Y.length; i++){
        YCnt[Y.charAt(i)]++;
    }

    for(let i=9; i>=0; i--){
        let minValue = Math.min(XCnt[i], YCnt[i], )
        if(minValue > 0){
            if(addStr.length==0 && i==0){
                addStr.push("0")
            }else{
                addStr.push(i.toString().repeat(minValue))
            }
        }
    }
    
    
    
    return addStr.length == 0 ? "-1" : addStr.join("");
}
