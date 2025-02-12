class Solution {
    public int solution(String myString, String pat) {
        int answer = 0;
        String upperStr = myString.toUpperCase();
        String upperPat = pat.toUpperCase();
        
        answer = upperStr.contains(upperPat) ? 1 : 0;
        return answer;
    }
}
