class Solution {
    public int solution(int[] arr1, int[] arr2) {
        int answer = 0;
        answer = arr1.length == arr2.length ? compareEqual(arr1,arr2) : compareTwo(arr1,arr2);
        return answer;
    }
    public int compareTwo(int[] arr1, int[] arr2){
         return arr1.length > arr2.length ? 1 : -1;
    }
    public int compareEqual(int[] arr1, int[] arr2){
        int sum1=0;
        int sum2=0;
        for(int i=0; i<arr1.length; i++){
            sum1+=arr1[i];
            sum2+=arr2[i];
        }
        return sum1 == sum2 ? 0 : sum1 > sum2 ? 1 : -1;
    }
    
}
