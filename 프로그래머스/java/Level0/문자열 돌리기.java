import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();  
        char[] chList = a.toCharArray();
        for(char ch : chList){
            System.out.println(ch);
        }
    }
}
