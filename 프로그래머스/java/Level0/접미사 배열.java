import java.util.*;

class Solution {
    public String[] solution(String my_string) {        
        char[] ch = my_string.toCharArray();
        String[] answer = new String[ch.length];
        StringBuilder sb = new StringBuilder();
        
        for(int i=ch.length-1; i>=0; i--){
            sb.insert(0,ch[i]);
            answer[ch.length -1 -i] = sb.toString();
        }
        
        Arrays.sort(answer, String::compareTo);
        
        return answer;
    }
}
