package projectweek2;

//package projectweek2;

import java.util.Scanner;
public class DuplicateCheck {

public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of elements: ");
        int n = scanner.nextInt();
        
        int[] array = new int[n];

        System.out.println("Enter the elements:");
        for (int i = 0; i < n; i++) {
            array[i] = scanner.nextInt();
        }
        int count = 0;
        for (int i = 0; i < array.length; i++) {
            for (int j = i + 1; j < array.length; j++) {
            	if (array[i] == array[j]) {
            		count++;
            	}
            }
        }
        if(count > 0) {	
        	System.out.println("The array contains duplicate elements.");
        }
        else {
        	System.out.println("The array does not contain duplicate elements.");
        }
}
}