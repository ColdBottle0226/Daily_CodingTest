class Solution {
    public int solution(String myString, String pat) {
        int answer = 0;
        StringBuilder switchStr = new StringBuilder();
        for(char c:myString.toCharArray()){
            switchStr.append(c=='A' ? 'B' : 'A');
        }
        answer = switchStr.indexOf(pat) != -1 ? 1 : 0;
        return answer;
    }
}
