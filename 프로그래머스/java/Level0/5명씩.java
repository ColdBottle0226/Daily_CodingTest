import java.util.*;

class Solution {
    public String[] solution(String[] names) {
        String[] answer = {};
        List<String> strList = new ArrayList();
        for(int i=0; i<names.length; i+=5){
            strList.add(names[i]);                        
        }
        answer = strList.toArray(new String[0]);
        return answer;
    }
}
