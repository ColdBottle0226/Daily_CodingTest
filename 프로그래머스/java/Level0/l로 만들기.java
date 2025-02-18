class Solution {
    public String solution(String myString) {
        char[] chList = myString.toCharArray();
        StringBuilder sb = new StringBuilder();

        for(char ch : chList){
            char chAppend = ch;
            if(Integer.valueOf(ch) < 108){
                chAppend = 'l';
            }
            
            sb.append(chAppend);
        }
        
        return sb.toString();
    }
}
