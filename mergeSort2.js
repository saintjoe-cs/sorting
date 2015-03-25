/ The number of stack traces that will be logged in the console.
// We call console.log() when we reach the base case in our
// mergesort function, which will be the maximum recursive depth.
// We're only going to call this the first few times, as
// it can really bog things down otherwise.
var stacktraces = 0;

// The array we will be sorting.
var big_array = [];

// Build our array with numbers going in descending order.
// The array size, max, can be larger, but things slow down 
// and start to get wonky at about 2^25.
var max = Math.pow(2, 20);
for (var i = 0; i < max; i++){
    big_array.push(max - i);
}

big_array = mergesort(big_array);

// Standard merge
function merge(a,b){
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
function mergesort(){
    var length = this.dataStore.length;
    if (length <= 1){
        if (stacktraces < 10){
            // This will print a call stack to the console the
            // first ten times our mergesort reaches the base case.
            // It should be clear that the maximum recursive depth
            // of our mergesort function is n+1, where our array
            // has on the order of 2^n items.
            console.trace()
            stacktraces++;
        }
        return lst;
    }
    var q = Math.floor(length/2)
    var left = mergesort(this.dataStore.slice(0,q));
    var right = mergesort(this.dataStore.slice(q));
    return merge(left, right);
 }

