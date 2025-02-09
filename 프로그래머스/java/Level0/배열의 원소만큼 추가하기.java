import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        List<Integer> answer = new ArrayList<>();
        
        for (int repeat : arr) {
            for (int i = 0; i < repeat; i++) {
                answer.add(repeat); 
            }
        }

        return answer.stream().mapToInt(i -> i).toArray();
    }
}
