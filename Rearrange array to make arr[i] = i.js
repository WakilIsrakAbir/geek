function modifyArray(ar, n) {
  var i, j, temp;

  // Iterate over the array
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      // Check if any ar[j] exists such that ar[j] is equal to i
      if (ar[j] == i) {
        temp = ar[j];
        ar[j] = ar[i];
        ar[i] = temp;
        break;
      }
    }
  }

  // Iterate over array
  for (i = 0; i < n; i++) {
    // If not present
    if (ar[i] != i) {
      ar[i] = -1;
    }
  }

  // Prepare the output string
  var output = "";
  for (i = 0; i < n; i++) {
    output += ar[i] + " ";
  }

  // Print the output
  console.log(output.trim());
}

 
var ar = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
var n = ar.length;

 
modifyArray(ar, n);
