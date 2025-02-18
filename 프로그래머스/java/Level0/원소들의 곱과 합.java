class Solution {
    public int solution(int[] num_list) {
        int mul = 1;
        int addMul = 0;
        for(int value : num_list){
            addMul+=value;
            mul *= value;
        }
        
        return mul < addMul * addMul ? 1 : 0;
    }
}
