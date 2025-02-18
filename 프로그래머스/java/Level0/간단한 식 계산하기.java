class Solution {
    public int solution(String binomial) {
        String[] splitStr = binomial.split(" ");
        int answer = operationValue(Integer.parseInt(splitStr[0]), splitStr[1], Integer.parseInt(splitStr[2]));

        return answer;
    }
    
    public int operationValue(int n, String opt, int m){
        if(opt.equals("+")){
            return n + m;
        }else if(opt.equals("-")){
            return n - m;
        }else if(opt.equals("*")){
            return n * m;            
        }
        return 0;
    }
}
