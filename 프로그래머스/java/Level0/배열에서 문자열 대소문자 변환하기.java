import java.util.*;

class Solution {
    public String[] solution(String[] strArr) {
        String[] answer = {};
        List<String> arrayStr = new ArrayList();
        for(int i=0; i<strArr.length; i++){
            if(i%2==0){
                arrayStr.add(strArr[i].toLowerCase());
            }else{
                arrayStr.add(strArr[i].toUpperCase());
            }
        }
        answer = arrayStr.toArray(new String[0]);
        return answer;
    }
}
