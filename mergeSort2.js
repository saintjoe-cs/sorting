
// The array we will be sorting.
var big_array = [];

var counter = 1;

// Build our array with numbers going in descending order.
// The array size, max, can be larger, but things slow down 
// and start to get wonky at about 2^25.
// BC note: they get wonky earlier than that
var max = Math.pow(2, 5);
for (var i = 0; i < max; i++){
    big_array[i] =  Math.floor(Math.random() * (100));
}

// Show your work!!
print('Before: ');
print(JSON.stringify(big_array));

big_array = mergesort(big_array);

print('After ' + counter + ' passes');
print(JSON.stringify(big_array));

// Standard merge
function merge(a,b){
    // This one should be pretty easy to figure out
    var result = [];
    var alen = a.length;
    var blen = b.length;
    while (alen > 0 || blen > 0){
        if (alen > 0 && blen > 0){
            if (a[0] < b[0]){
                result.push(a.shift());
                alen -= 1;
            }
            else if (b[0] <= a[0]){
                result.push(b.shift());
                blen -= 1;
            }
        }
        else if (alen > 0){
            result.push(a.shift());
            alen -= 1;
        }
        else if (blen > 0){
            result.push(b.shift());
            blen -= 1;
        }
    }
    return result;
}

// Standard recursive mergesort
function mergesort(array){
    var length = array.length;
    if (length <= 1){
	// This is the base case for the recursion
        return array;
    }
    // Divide and conquer: each piece is half the size of the starting array
    var q = Math.floor(length/2)
    // increment "recursion" counter
    counter++
    // print('Recursing on pieces of length: ' + q + ' and counter at: ' + counter);
    var left = mergesort(array.slice(0,q));
    var right = mergesort(array.slice(q));
    // print('Merging left:' + left.length + ' right: ' + right.length);
    return merge(left, right);
 }

