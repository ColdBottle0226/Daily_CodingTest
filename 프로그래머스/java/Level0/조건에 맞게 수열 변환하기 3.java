import java.util.*;
class Solution {
    public int[] solution(int[] arr, int k) {
        List<Integer> list = new ArrayList();        
        if(k%2==0){
            for(int value : arr){
                list.add(value+k);
            }
        }else{
            for(int value : arr){
                list.add(value*k);
            }            
        }
        
        return list.stream().mapToInt(Integer::intValue).toArray();
    }
}
