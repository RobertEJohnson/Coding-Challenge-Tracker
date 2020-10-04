# Sept 28th - Oct 4th Recap

## Code Challenges

  Edabit Challenges 
  {: .challenge .challenge--edabit}

  CodeWars Challenges
  {: .challenge .challenge--codewars}

  LeetCode Challenges
  {: .challenge .challenge--leetcode}

---
### Challenge #1 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

    **Examples:**

        charCount("a", "edabit") ➞ 1
        charCount("c", "Chamber of secrets") ➞ 1
        charCount("b", "big fat bubble") ➞ 4

        Notes: Your output must be case-sensitive (see second example).

=== "Solution"
    
    **Solution:** Here is my first solution!

        function charCount(myChar, str){
            let count = 0;
            for(character of str){
                if(character === myChar){
                    count++;
                }
            }
            return count;
        }

    After seeing some other solutions I realized I've completely forgotten about the `filter` array method, I really haven't used it much!
    My updated solution is:

        function charCount(myChar, str){
	        return [...str].filter(character => myChar === character).length;
        }

    Spreading the string into an array to use it feels great.

=== "Learning Notes"

    **Learning Notes:**

    >I got a some more practice with the filter array method! 
    >I wasn't super familiar with it, but it really came in clutch here.

    >My general updated understanding of .filter() is, it's a method that returns a new array contains
    >all elements from the original array that pass the set condition! Nifty!

    >Awesome practice with .filter()!

### Challenge #2 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Create a function that returns the last value of the last item in an array or string.

    **Examples:**

        lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2
        lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"
        lastItem([]) ➞ undefined   

=== "Solution"
    
    **Solution:** My first solution: 

        function lastItem(input) {
            if(input.length <= 0){
                return undefined;
            }
            else{
                lastElement = input[input.length-1];
            }

            return lastElement.length >= 2 ? lastElement[lastElement.length-1] : lastElement
        }

    This solution worked well, but wasn't completing one of the pre-written tests.

    The question said:  
    Create a function that returns ```the last value of the last item``` in an array or string.

    What they actually meant was:  
    Create a function that returns ```the last value``` of an array or a string.

    The tests were built in a way that ```['one','two','three']``` should be parsed and return ```'three'```  
    I was returning the last value of the last item so ```'three'``` became ```'e'```. 

    My updated solution:

        function lastItem(input) {
            return input[input.length-1];
        }


=== "Learning Notes"

    **Learning Notes:**

    >I think my main take away from this challenge is to read the tests.

    >The question could've been worded better but reading the tests can give me a  
    >better idea of what I should be building in the first place. I might not account  
    >for a input type that a test will test for, so I might as well start with reading them,  
    >I'll have better quality solutions. 

    >Also I'll start getting more ideas for the tests I write.

### Challenge #3 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**    
    Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

    **Examples:**

        addUp(4) ➞ 10
        addUp(13) ➞ 91
        addUp(600) ➞ 180300
        
        Notes: Expect any positive number between 1 and 1000.

=== "Solution"
    
    **Solution:** Here's my first take at this:

        function addUp(num) {
            let counter = 0;
            sum = 0;
            while(counter <= num){
                sum += counter;
                counter ++;
            }
            return sum;
        }
  
    I'm not stoked about a while loop though, so I'm going to rework it a bit. Here's my now second attempt.

        function addUp(num) {
            let sum = 0;
            for(let i=1; i<=num; i++){
                sum += i;
            }
            return sum;
        }

    There we go, so the above removed a while loop and condensed it a little bit, woot. 
    
    This addition problem would be a great problem for recursion I'm sure.
    Not very familiar with recursion yet, but I'm going to check out some others' solutions and see what I learn from their solutions.

        function addUp(num) {
            return (num * (num + 1))/2;
        }
    
    The above answer (some one elses solution not mine) really intriques me. I'm guessing this is a common math algorithm people are familiar with, because I have no idea of the thought process taken to get this answer. But it did spark some thoughts for me which I'll take about in the learning notes. The other answers contain recursion which I'll have to dig into more later!

=== "Learning Notes"

    **Learning Notes:**

    >Wow this problem stumped me. Not even because of its difficulty but rather my perception of its difficulty.
    >I don't like that my first response was a little bit locked up. It's too bad because taking off some of the
    >tension I was able to make a (in my opinion) better solution, I'm usually pretty good at not getting pushed off-center
    >but I fell off that horse a bit here.

    >This answer:   function addUp(num) {
    >                  return (num * (num + 1))/2;
    >               }

    >I'm curious at how it was obtained without knowing a prior formula. But I have gleaned a few things from this. Some of which I will talk about in the reflections, but one main thing for a learning note here is 'Keep it simple'.

    >I think my mind fluttered a bit because I started thinking about all of this addition and trying to
    >come up with a good solution through being able to hold the entire problem in my head. I'd assume this most certainly is
    >not what whoever came up with (num * (num + 1))/2 did. If I had started simpler like from 1-3 rather than 1-100 it really
    >could have helped me identify a pattern to work with, and that would help develop a better solution. I kept it too big and
    >didn't break it into small pieces, because at first it didn't seem like a tough task.

### Challenge #4 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Help fix all the bugs in the function ```incrementItems```! It is intended to add 1 to every element in the array!

    Problem Code:

        function incrementItems(arr) {
            for (let i = 0; i < array.length; i++)
                arr[i] === arr[i] + 1
            return array
        }

    Examples:

        incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
        incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]
        incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]


=== "Solution"
    
    **Solution:** Trying to only solve bugs and not refactor layout, this is my solution: 

        function incrementItems(arr) {
            for (let i = 0; i < arr.length; i++){
                arr[i] = arr[i] + 1;
            }
            return arr;
        }

    If I were also adjusting layout, I would add a ```+=``` instead of ```arr[i] + 1```. I'm not a big fan of using ```arr``` as a parameter name, ```array``` isn't the best alternative because it's really close to the keyword ```Array```, that'll get confusing the moment we start using methods. So I'd say a good alternative would be ```inputArray``` or something similar to name the parameter. A few extra characters is always worth it for readability, you can minify the files later anyway.

    This code doesn't take into account if a user were to pass in data types that aren't numbers. This is something that also should be checked for, we could throw a conditional inside of the for loop with the typeof operator, something like this does the trick...

        for (let i = 0; i < arr.length; i++){
                if(typeof(arr[i]) === 'number'){
                    arr[i] = arr[i] + 1;
                }
                else{
                    alert('When using the incrementItems function, please use arrays that contain ONLY numbers');
                    return;
                }
            }
        return arr;

    

=== "Learning Notes"

    **Learning Notes:**

    >I really wanted to use a ternary operator here, but realized I would have to be returning within the false condition only which won't work. I read up upon why exactly this doesn't work and it has to do with statements vs. expressions. Essentially expressions (such as ternary operators) **have to produce a value**. Meanwhile statements (like a return) **perform an action**. 

    >Expressions can be used as statements, but unfortunately statements cannot be used as expressions.

    >A ternary operator is an expression, It is ```(condition expression) ? (true expression) : (false expression)``` it has to **produce a value**. A statement like ```return``` stops that producing a value from ever happening. It says do this. An if statement is ```if(expression){statement}```

    >It's logical to me that I CANNOT write the expression of an if statement as ```if(return 'hello world')```. Why is this? I have no way to evaluate that expression because the return statement is doing a separate thing. It's not actually producing a value, its performing an action, so the expression condition is not met. By using a return statement in a ternary operator I was trying to do the same thing. The reason *it works* in an if **statement** is because the code block is just that, a statement. I'm quite positive the the other way to say ternary operator is ternary expression, it doesn't replace the expression with a statement, it has to ultimately be an expression.


    >Maybe I should make a memory mnemonic to help remember the relationship between expressions and statements... how about... expressing, two s's (ss) because it can do both expressing and statements. Statements have no repeating letters because it cannot do both. That sorta works, I'll stick with that for now.

### Challenge #5 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Create a function which returns the number of true values there are in an array.

    Examples:

        countTrue([true, false, false, true, false]) ➞ 2
        countTrue([false, false, false, false]) ➞ 0
        countTrue([]) ➞ 0

        Notes: 
        Return 0 if given an empty array.
        All array items are of the type bool (true or false).

=== "Solution"
    
    **Solution:**  
    My solution: 

        function countTrue(arr) {
	        return [...arr].filter(value => value === true).length
        }
    
    After submitting the answer I realized I just spread an array, even though I'm using an array method already haha. Oops. I had just done a similar challenge with a string and my brain jumped the gun a little bit.

    I should've just had

        return arr.filter(value => value === true).length
    
    

=== "Learning Notes"

    **Learning Notes:**  

    >I checked out a few of the other solutions people came up with and noticed some people using

    >```.filter(Boolean)```

    >I've seen things like constructing objects with ```Object``` and ```new``` but I've never looked into the Boolean object wrapper before. This is a cool way to tackle the problem! 
    
    >```Boolean()``` essentially just takes a parameter and passes out a boolean primitive for whether it is truthy or falsy. Maybe this is actually whats running behind the scenes for truthy and falsy determination in JavaScript?? 

    >I think the only downside to using Boolean is that it checks for truthy and falsy as opposed to only boolean primitives. It could return true (so in this case filter them) for non-boolean data types. But the notes of this problem did specify that arrays would only contain Boolean values. So awesome solution and I learned a new thing woot!

### Challenge #6 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Write a function redundant that takes in a string str and returns a function that returns str.

    Examples:

        const f1 = redundant("apple")
        f1() ➞ "apple"

        const f2 = redundant("pear")
        f2() ➞ "pear"

        const f3 = redundant("")
        f3() ➞ ""

=== "Solution"
    
    **Solution:**  
    Here's my first solution: 

        function redundant(str) {
            return function echoString(){
                return str;
            }
        }

    I was struggling to think of a name for this function, but really I should've used an anonymous function here. So,

        function redundant(str) {
            return function(){
                return str;
            }
        }


=== "Learning Notes"

    **Learning Notes:**  

    >If I'm seeing multiple returns, like in this case where I'm making a higher order function, I should consider using arrow functions. Looking at other peoples solutions some of them have already done that, mainly in these forms (Both not my solutions).

        const redundant = str => () => str;

    >and

        function redundant(str) {
            return () => str;
        }

    >I think that the first solution here ```str => () => str``` to me is getting away from that very quick readability, so I should've just condensed the anonymous function of my own updated answer to the second answer here ```return () => str```.

### Challenge #7 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the larger of the sums minus the smaller.

    Examples:

        warOfNumbers([2, 8, 7, 5]) ➞ 2
        // 2 + 8 = 10
        // 7 + 5 = 12
        // 12 is larger than 10
        // So we return 12 - 10 = 2

        warOfNumbers([12, 90, 75]) ➞ 27

        warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) ➞ 168

        Notes:
        No Notes.

=== "Solution"
    
    **Solution:**  
    My first solution: 

        function warOfNumbers(arr) {
            let evens = 0, odds = 0;
            arr.forEach(num=>{
                num % 2 === 0 ? evens+=num: odds+=num;
            })
            return Math.max(evens, odds) - Math.min(evens, odds)
        }

    I'm positive there has to be a better way to do this with ```.reduce()``` but I've only used that method a few times without having to keep track of two sets of numbers, I can't wait to see other people's solutions though! I'm sure someone has used it really cleverly and will teach me a thing or two.

    I'm not crazy about this part of my solution

        Math.max(evens, odds) - Math.min(evens, odds)

    There must be a quicker way to determine if one of the values is the max the other must be the min without having to run both ```Math.max()``` and ```Math.min()```.

    The only other notes I see about my current solution is that I didn't account for negative numbers or other data types since I looked at the tests and saw there were none, but I should've probably still implemented fail safes since there weren't notes saying there would never be them passed in.

    After checking some of the other solutions, I found what I was looking for! ```Math.abs()```! *Since I'm not dealing with negative numbers*, I could've used ```Math.abs()``` to sidestep having to determine if ```evens``` or ```odds``` is larger/smaller. With ```Math.abs(evens-odds)``` it doesn't matter which is smaller or larger and I will always get the correct leftover positive sum, even if they're equal numbers! So cool!

    Also someone most certainly used ```.reduce()``` in a way that works for this. Check this out.

        const warOfNumbers = arr => Math.abs(arr.reduce((a, b) => a + (b%2 ? b : -b), 0));

    ```b``` (the current value) is run through a check ```b % 2 ? b : -b;``` if ```b``` is even it stays as ```b``` (since it evaluates to a falsy value) else it becomes ```-b```.

    The positive or negative charge of the current values is just a clever way to basically make sure that all types of one kind (odds in this case) are added together while the remaining type (evens) will be subtracted from the other type rather than added. Combined with ```Math.abs()``` and only inputting positive numbers we we never really have to keep track of two numbers! No matter if the smaller subtracts the larger or vice-versa we will have the answer as if the larger subtracted the smaller. 

    Niiiiiccceeeeeeeee.



=== "Learning Notes"

    **Learning Notes:**  

    >Wow! That was awesome. I feel a lot more comfortable with ```reduce()``` after digging into a bit more and then seeing that fun solution. 

    >What originally turned me away from ```reduce()``` and rather into ```forEach()``` was that I didn't know how I could accumulate something when I needed to track two separate values, evens and odds. 
    
    >I love that the solution other people came up with sidestepped that whole issue. They just made one number you have to keep track of by accumulating but *adding to the accumulator for one type (odds)* and *subtracting from the accumulator for the other type (evens)*. Then just using ```Math.abs()``` to make sure the final sum charge is right. That's a brilliant solution, I'm still not sure what another one-and-done approach would be if we had to account negative numbers as well.

    >What brought these other people to figure out this solution where I didn't and how can I improve?

    >I think the first thing is, ask the next question. I never asked, "Is there any way I can make these two numbers I have to accumulate into one number?". I still don't think in this particular case I would've came up with the solution to use ```Math.abs()```, but I still would've had a *chance* to come up with a different solution. If I would've just asked the question to the immediate problem I was encountering rather than thinking it couldn't be done, I might've found a clever solution.

    >I think that really is the main take away here for me. Ask the next question, and gained understanding of ```reduce()``` and clever implementations of ```Math.abs()```.

### Challenge #8 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is "Evenish" if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

    For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

    Examples:

        oddishOrEvenish(43) ➞ "Oddish"
        oddishOrEvenish(373) ➞ "Oddish"
        oddishOrEvenish(4433) ➞ "Evenish"

        Notes:
        No Notes.

=== "Solution"
    
    **Solution:**  
    My first solution!: 

        function oddishOrEvenish(num) {
            const sum = (num).toString().split('').reduce((acc,cur)=>acc+Number(cur), 0);
            return sum % 2 === 0 ? 'Evenish': 'Oddish';
        }

    I'm not crazy about having to convert a number into a string then back into a number once its is separated, I'm sure there has to be a way to keep it as a number the whole time :) 

    Another person's solution was this

        function oddishOrEvenish(num) {
            return [...String(num)].map(Number).reduce((a,v) => a + v) % 2 ? 'Oddish' : 'Evenish'
        }

    They used the ```Number``` object wrapper that's awesome! I just saw a solution recently that used a the ```Boolean``` object wrapper (challenge #5 this week) it's cool to see another object wrapper being used in an array method. Besides that it looks like they had a pretty similar train of thought for this problem as I did, which is cool. I feel like mapping and reducing the same array is probably treading the same ground a bit too much, this is where it would be awesome to have more experience with efficency and testing functions so I could have more solid logic on if something is a good practice or not rather than just inferring :) 
    
    I think breaking the function into two chunks (a variable sum, then an ternary operator on sum) reads a little smoother.

    There is one last thing I would change about my answer though. I know the questions tests only include integers but why not account for decimal points as well? So I'm going to fix that... and here's my updated solution so now the function can work with decimal arguments as well like ```.0112``` or ```230.39103```. It still doesn't do a ```typeof(functionArgument)==='number'``` check which it could. But for now I'll just assume the user of oddishOrEvenish isn't passing something else in. Technically it will work for strings like '24234' too which is nice.

        function oddishOrEvenish(num) {
            const sum = (num).toString().split('').reduce((acc, cur)=>
                cur !== '.' ? acc + Number(cur) : acc + 0
            , 0);
            return sum % 2 === 0 ? 'Evenish' : 'Oddish';
        }

=== "Learning Notes"

    **Learning Notes:**  

    >That was a lot of fun! It's been a good while since I last used ```split('')``` to break a string into an array! No other major notes that I haven't talked about in the solutions. I enjoy doing the little bit of extra checking for a decimal point, I should've done that to start, that makes a much more useful function in my opinion.

### Challenge #9 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Write a function that converts an object into an array of keys and values.

    Examples:

        objectToArray({
            D: 1,
            B: 2,
            C: 3
        }) ➞ [["D", 1], ["B", 2], ["C", 3]]

        objectToArray({
            likes: 2,
            dislikes: 3,
            followers: 10
        }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

=== "Solution"
    
    **Solution:**  
    Here's my first solution: 

        function objectToArray(obj) {
            let arrayOfObjects = []
            for(const property in obj){
                arrayOfObjects.push([property, obj[property]]);
            }
            return arrayOfObjects;
        }

    After submitting that answer I though about my variable naming, ```arrayOfObjects``` though a little lengthy isn't a great name because I'm not really holding objects anymore. So I should've named it something like, ```keyValueArray```.

    After looking at some other people's solutions I noticed that some were using the ```.entries()``` and ```.keys``` methods for ```Object```. It's been awhile since I used the ```.entries()``` method, but that would work a bit better here so I'm going to adapt my answer for that,

        function objectToArray(obj) {
            return Object.entries(obj);
        }

    This certainly is a lot shorter for the same effect, I like it a lot, it's also pretty readable. 

=== "Learning Notes"

    **Learning Notes:**  

    >I'm glad to get some more practice with ```.entries()```. There's a better chance I'll remember this method in the future if I can keep using it from time to time.

    >I tried looking up the difference of using a ```for in``` loop versus ```.entries()``` and I got this from MDN: The only important difference is that a for...in loop enumerates properties in the prototype chain as well. I tried reading up on the prototype chain, but it was a little too dense for me here while I'm on vacation with my family haha, I'll have to come back to that later. :)

### Challenge #10 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).

    Examples:

        doesBrickFit(1, 1, 1, 1, 1) ➞ true
        doesBrickFit(1, 2, 1, 1, 1) ➞ true
        doesBrickFit(1, 2, 2, 1, 1) ➞ false

        Notes:
        You can turn the brick with any side towards the hole.
        We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
        You can't put a brick in at a non-orthogonal angle.

=== "Solution"
    
    **Solution:**  
    Here's my first solution: 

        // (a,b,c) -- dimensions of the brick
        // (w,h) -- dimensions of the hole
        function doesBrickFit(a,b,c, w,h) {
            return a * b <= w * h || b * c <= w * h || a * c <= w * h ? true : false;
        }

    This solution was just working with the default parameters listed in the comments that they listed, but it would be clearer with more descriptive names like ```doesBrickFit(height, width, depth, holeWidth, holeHeight)```. 

    It works with the chain for the ``or`` chain for the ternary expression, but its pretty unclear what is going on at first. I came up with another solution which reads better but might be less efficient.

        function doesBrickFit(height,width,depth, holeWidth,holeHeight) {
            return Math.min(height * width, width * depth, height * depth) <= holeWidth * holeHeight ? true: false;
        }

    After submitting my solution (and forgetting to remove the comments for the old parameters haha) I looked over other people's solutions. A ton of different approaches for this problem. I think I prefer mine to most of them for this problem though, but I did learn about the existence of an array method called ```.some()``` which basically tests every value of an array against a callback function and returns true if *some* (in this case any) of the values pass the test, else it returns false. Pretty cool. 

=== "Learning Notes"

    **Learning Notes:**  

    >Once I get back from vacation mid next week I think it'd be a good idea for me to invest some time into learning how to test functions for efficiency. This way I can do less inferring of whether or not something will be more or less efficient and be able to make a better judgement calls on whether or not the added readability is worth the trade off. 

    >The ```.some()``` method, which tests every value of the array against a callback function, returning true the moment one passes the test, else returning false.
---

## Final Challenge Reflections

Lots of things here!

- **Change the focus from accomplishing to learning**.

Assuming this Challenge #3 be easier than it was originally for me kept me from identifying/checking in with myself when I was struggling.
I didn't step back to recalibrate because I was frustrated with myself for not coming up with a solution, then I didn't come up with a solution I really liked much. I usually don't struggle with the frustration of not figuring things out, but I can identify a few core problem causers here. Firstly, my own self-expectation of doing something I thought would be easy kept from adapting and held me back when it proved to be difficult. The standard I hold myself to ended up defeating me, I'm often an 'accomplisher' but when I didn't meet my own terms of accomplishing tasks I ended up balance and clarity. 

Which brings me to my second reflection. My ambitions need a little more tuning. I'm all for getting things done and making awesome things! I don't want my worth to be nested in getting things done though, that's unstable and can bring a team down if it's not met. I'd rather have the focus and worth come from learning rather than accomplishment, after all learning is a far better accomplishment than doing but not learning.

- **Ask the next question**!

We have to have so many learning moments we never take advantage of, I think it's a good practice to continually be asking new questions. A dead-end might in fact the threshold guardian before a whole new company/product/solution. Those are the places that I should be excited to get into. Rather than leaving right away, why not experiment a bit and ask questions. Some really good things could be right around the corner!

- **Invest time into learning efficiency testing**.

Once I get back from vacation this would be a great use of time, though likely it will wait until after a few interviews I have coming up.By learning efficiency testing I can do less inferring of whether or not something will be more or less efficient and be able to make a better judgement calls on whether or not added readability but possible change of efficiency is worth the trade off. 

---- --- -- -- --

## Done with this week? 

If the week has ended, why not check out the next week under the weekly recaps? :)