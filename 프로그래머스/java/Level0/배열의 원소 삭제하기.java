import java.util.*;

class Solution {
    public int[] solution(int[] arr, int[] delete_list) {
        Set<Integer> hashSet = new HashSet();
        for(int val : delete_list){
            hashSet.add(val);
        }
        
        return Arrays.stream(arr).filter(num -> !hashSet.contains(num)).toArray();
    }
}
