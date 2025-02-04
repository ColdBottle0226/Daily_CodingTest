class Solution {
    public int solution(int n) {
        return (n % 2 == 0) ? evenNum(n) : oddNum(n);
    }

    int oddNum(int n) {
        int sum = 0; // 지역 변수 사용
        for (int i = 1; i <= n; i += 2) {
            sum += i;
        }
        return sum;
    }

    int evenNum(int n) {
        int sum = 0; // 지역 변수 사용
        for (int i = 2; i <= n; i += 2) {
            sum += i*i;
        }
        return sum;
    }
}
