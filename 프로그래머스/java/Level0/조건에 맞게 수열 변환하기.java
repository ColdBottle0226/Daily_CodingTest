import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        int[] answer = {};
        List<Integer> arrList = new ArrayList();
        for(int num : arr){
            if(num >= 50 && num % 2 == 0){
                arrList.add(num / 2);
            }else if(num < 50 && num % 2 == 1){
                arrList.add(num * 2);
            }else{
                arrList.add(num);
            }
        }
        answer = arrList.stream().mapToInt(Integer::intValue).toArray();
        return answer;
    }
}
