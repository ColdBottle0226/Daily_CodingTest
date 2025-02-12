class Solution {
    public String solution(String myString) {
        StringBuilder answer = new StringBuilder();
        // answer = myString.toLowerCase();
        char[] str = myString.toCharArray();
        for(char ch : str){
            answer.append(Character.toLowerCase(ch));
        }
        return answer.toString();
    }
}
