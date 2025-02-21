import java.util.*;
class Solution {
    public int[] solution(String myString) {
        String[] strList = myString.split("x", -1);
        int[] answer = new int[strList.length];

        for(int i=0; i<strList.length; i++){
            answer[i] = strList[i].length();
        }
        return answer;
    }
}
