class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        int sumStr = Integer.parseInt(String.valueOf(a)+String.valueOf(b));
        answer =  sumStr > 2*a*b ? sumStr : 2*a*b;
        return answer;
    }
}
