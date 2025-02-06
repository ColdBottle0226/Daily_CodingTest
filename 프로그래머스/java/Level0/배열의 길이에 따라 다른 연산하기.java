class Solution {
    public int[] solution(int[] arr, int n) {
        int[] answer = arr.clone();
        boolean isEven = arr.length % 2 ==0;
        
        for(int i=0; i<arr.length; i++){
            if(isEven && (i+1)%2==0){
                answer[i] += n;
            }else if(!isEven && (i+1)%2==1){
                answer[i] += n;
            }
        }
        
        return answer;
    }
}
