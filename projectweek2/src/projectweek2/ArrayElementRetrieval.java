package projectweek2;

import java.util.Scanner;

public class ArrayElementRetrieval {

    // Method to retrieve element at a given index
    public static int getElementAtIndex(int[] array, int index) {
        if (index >= 0 && index < array.length) {
            return array[index];  // Valid index, return the element
        } else {
            return -1;  // Invalid index, return -1 as an error code
        }
    }

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};  // Example array
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the index: ");
        int index = scanner.nextInt();

        int element = getElementAtIndex(array, index);

        if (element != -1) {
            System.out.println("Element at index " + index + ": " + element);
        } else {
            System.out.println("Error: Index " + index + " is out of bounds for array length " + array.length + ".");
        }

        scanner.close();
    }
}