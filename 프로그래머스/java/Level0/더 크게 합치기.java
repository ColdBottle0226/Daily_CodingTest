class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        String addAToB = Integer.toString(a) + Integer.toString(b);
        String addBToA =  Integer.toString(b) + Integer.toString(a);;
   
        answer = Integer.parseInt(addAToB) > Integer.parseInt(addBToA) ? Integer.parseInt(addAToB) : Integer.parseInt(addBToA);
        
        return answer;
    }
}
