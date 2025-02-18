class Solution {
    public int solution(int[] num_list) {
        StringBuilder oddNum = new StringBuilder();
        StringBuilder evenNum = new StringBuilder();
        for(int i=0; i<num_list.length; i++){
            if(num_list[i]%2 == 0){
                evenNum.append(num_list[i]);
            }else{
                oddNum.append(num_list[i]);
            }
        }
        
        return Integer.parseInt(evenNum.toString()) + Integer.parseInt(oddNum.toString());
    }
}
