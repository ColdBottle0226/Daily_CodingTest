class Solution {
    public int solution(String number) {
        int sum = 0;
        char[] chList = number.toCharArray();
        for(char ch : chList){
            sum += Character.getNumericValue(ch);
        }
        return sum % 9;
    }
}
