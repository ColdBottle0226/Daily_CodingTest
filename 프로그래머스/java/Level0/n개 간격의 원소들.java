import java.util.*;
class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] answer = {};
        List<Integer> numArr = new ArrayList();
        
        for(int i=0; i<num_list.length; i+=n){
            numArr.add(num_list[i]);
        }
        answer = numArr.stream().mapToInt(Integer::intValue).toArray();
        return answer;
    }
}
