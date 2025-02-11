class Solution {
    public String solution(String my_string, String alp) {
        String answer = "";
        StringBuilder strAnswer = new StringBuilder();
        
        for(char str:my_string.toCharArray()){
            char alpToChar = alp.charAt(0);
            if(str == alpToChar){
                strAnswer.append(Character.toUpperCase(str));
            }else{
                strAnswer.append(str);
            }
        }
        answer = strAnswer.toString();
        return answer;
    }
}
