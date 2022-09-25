class SumMinMax{
ublic static void miniMaxSum(List<Integer> arr) {
    
    // Write your code here
    long minSum=0;
    long maxSum=0;
    int j=arr.size()-1;
    Collections.sort(arr); 
    //arr.stream().sorted();
    for(int i=0;i<4;i++){
        minSum+=arr.get(i);
        maxSum+=arr.get(j);
        j--;
    }
        System.out.println(""+minSum+" "+maxSum);
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        String[] arrTemp = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        List<Integer> arr = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            int arrItem = Integer.parseInt(arrTemp[i]);
            arr.add(arrItem);
        }

        Result.miniMaxSum(arr);

        bufferedReader.close();
    }


}
