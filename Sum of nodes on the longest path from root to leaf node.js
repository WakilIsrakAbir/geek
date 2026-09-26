// JavaScript implementation to find the sum of nodes
// on the longest path from root to leaf node
// using level order traversal

class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

function sumOfLongRootToLeafPath(root) {

    // Base case: if the tree is empty
    if (!root) return 0;

    // Initialize variables to store 
    // maximum length and sum
    let maxSum = 0;
    let maxLen = 0;

    // Queue for level order traversal
    const queue = [[root, root.data, 1]]; 

    while (queue.length) {
        const [node, sum, length] = queue.shift();

        // If it's a leaf node, check if we need to 
        // update maxLen and maxSum
        if (!node.left && !node.right) {
            if (length > maxLen) {
                maxLen = length;
                maxSum = sum;
            } else if (length === maxLen && sum > maxSum) {
                maxSum = sum;
            }
        }

        // Push left and right children into the queue
        if (node.left) {
            queue.push
            ([node.left, sum + node.left.data, length + 1]);
        }
        if (node.right) {
            queue.push
            ([node.right, sum + node.right.data, length + 1]);
        }
    }
    
    return maxSum;
}

//        4
//       / \ 
//      2   5
//     / \ 
//    1  3 
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

console.log(sumOfLongRootToLeafPath(root));
