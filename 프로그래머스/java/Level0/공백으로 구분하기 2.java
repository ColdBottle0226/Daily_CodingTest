class Solution {
    public String[] solution(String my_string) {
        String[] answer = {};
        String replaceStr = my_string.replaceAll("\\s+", " ").trim();
        answer = replaceStr.split(" ");
        return answer;
    }
}
