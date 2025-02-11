import java.util.*;
class Solution {
    public String[] solution(String[] strArr) {
        String[] answer = {};     
        List<String> removeStr = new ArrayList<>();
        
        for(String str:strArr){
            if(str.indexOf("ad") == -1){
                removeStr.add(str);
            }      
        }
        answer = removeStr.toArray(new String[0]);

        return answer;
    }
}
