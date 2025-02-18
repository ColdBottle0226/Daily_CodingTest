class Solution {
    public int solution(int n, String control) {
        int answer = n;
        char[] ch = control.toCharArray();
        for(int i=0; i<ch.length; i++){
            char part = ch[i];
            switch(part){
                case 'w':
                    answer+=1;
                    break;
                case 's':
                    answer-=1;
                    break;
                case 'd':
                    answer+=10;
                    break;
                case 'a':
                    answer-=10;
                    break;
                    
            }
        }
        return answer;
    }
}
