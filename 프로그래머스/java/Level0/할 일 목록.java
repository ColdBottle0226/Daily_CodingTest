import java.util.*;

class Solution {
    public String[] solution(String[] todo_list, boolean[] finished) {
        String[] answer = {};
        List<String> strList = new ArrayList();
        
        for(int i=0; i<todo_list.length; i++){
            if(!finished[i]){
                strList.add(todo_list[i]);
            }   
        }
        answer = strList.toArray(new String[0]);
        return answer;
    }
}
