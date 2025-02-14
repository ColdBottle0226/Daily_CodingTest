class Solution {
    public String solution(int[] numLog) {
        StringBuilder sb = new StringBuilder();        
        for(int i=1; i<numLog.length; i++){
            sb.append(test(numLog[i-1], numLog[i]));
        }
        return sb.toString();
    }
    
    public char test(int startValue, int endValue){
        int diff = endValue - startValue;
        switch(diff){
            case 1:
                return 'w';
            case -1:
                return 's';
            case 10:
                return 'd';
            case -10:
                return 'a';            
             default:
                throw new IllegalArgumentException("wrong value");
        }
    }
}
