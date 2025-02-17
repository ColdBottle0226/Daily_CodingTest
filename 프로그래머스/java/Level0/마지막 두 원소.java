import java.util.*;
class Solution {
    public int[] solution(int[] num_list) {
        List<Integer> arr = new ArrayList();
        int lastVal = num_list[num_list.length-1];
        int beforeVal = num_list[num_list.length-2];
        
        for(int value : num_list){
            arr.add(value);
        }
        
        if(lastVal > beforeVal){
            arr.add(lastVal-beforeVal);
        }else{
            arr.add(lastVal * 2);
        }
        
        return arr.stream().mapToInt(Integer::intValue).toArray();
    }
}
