class Solution {
    public String solution(String myString) {
        String answer = "";
        StringBuilder chgStr = new StringBuilder();
        
        for(char ch:myString.toCharArray()){
            if(ch == 'a' || ch == 'A'){
                chgStr.append(Character.toUpperCase(ch));
            }else{
                chgStr.append(Character.toLowerCase(ch));
            }
        }
        answer = chgStr.toString();
        return answer;
    }
}
