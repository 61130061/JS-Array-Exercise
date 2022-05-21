# JS Array Exercise

Today, I saw a good youtube video from **Web Dev Simplified** youtube channel about how to the JavaScript Array we should know.
I'm sorry. I didn't finish your video because I would lik to try it my self.
This is my result.

There are 8 js that we have to build.

## My Thought

### forEach - no return

This one is simple. As we know forEach function runs through array input and callback funciton which we can get 3 varible which are **value of this index**, **index**, and **the whole array input**.


### map - return Array

On this one, I understand that it works as forEach one but this one will modify the input array instead of just reading the value from the input array. 
Btw, callback funtion can also pull 3 variables as same as forEach does.


### filter - return Array

After forEach and filter, things is getting easier. Filter just tests all elements inside the array input.
The callback funtion reads three variable as those two function and return as true or false.
If the result of callback funtion is true, this value will be push to the return array of filter function.
Which means, if there is no callback result return true, the return array of filter function will be empty array.


### reduce - return value from callback

This function runs callback function through every element from the array input.
What makes this function unique is that the callback can pull the result of the previous step.
Therefore, there are 4 input for the callbakc function (previous value, array value, index, the input array).
Also, we can pass initial value of the result through the second parameter of reduce function.
Btw, if initial value is not specified, the result of first element is the value of the first element of array and start the callback function at the second element.


### some - return boolean

This function checks whether there is a true result from callback function while it's walking through the input array or not.
If there is at least one true result, this some function will return true, otherwise it will return false.
The callback function can be running with 3 basic parameters as forEach and map does.
P.S. I just read about this function for the fist time and I believe that this is a very useful function.


### every - return boolean

This function check if the result of callback function for every element through the input array is true.
If all the result is true, the result of this function is true, otherwise it returns false.
Which is quite similar to the some function.
Another useful function! I garantee.


### flat - return boolean

This one is too difficult for me. 
I accidently saw the answer while I was reading through the manual.
Therefore, I can say that this funciton got me good.
This funciton makes me upset! So, I will leave this funciton empty.


### find - return value inside Array

This function finds the first value from the input array that pass the codition from the callback function.
However, if there is no element pass, this function will return undefined.
