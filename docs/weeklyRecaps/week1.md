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


---

### Final Challenge Reflections

Lots of things here!

Assuming this Challenge #3 be easier than it was originally for me kept me from identifying/checking in with myself when I was struggling.
I didn't step back to recalibrate because I was frustrated with myself for not coming up with a solution, then I didn't come up with a solution I really liked much. I usually don't struggle with the frustration of not figuring things out, but I can identify a few core problem causers here. Firstly, my own self-expectation of doing something I thought would be easy kept from adapting and held me back when it proved to be difficult. The standard I hold myself to ended up defeating me, I'm an 'accomplisher' then fell because I didn't meet my own terms of 'accomplishing' tasks. 

Which brings me to my second reflection. My ambitions need a little more tuning. I'm all for getting things done and making awesome things! I love it so much. But maybe it would be better to work from a place that doesn't disable me if I'm not able to meet those ambitions. I'm not sure where that is at the moment but I think it has to do with more putting more enjoyment in the crafting of solutions and learning new things than it the fulfillment of either of those things. All of these things are good, but I love learning as it is so why not have more of my inner values surround learning as opposed to slightly more vague things like master or accomplishment. I love both of those things but I may end up curtailing myself (and in return both of those things) if I try to brute force my way to them. Why not approach problems with a greater sense of humility and a larger excitement around learning and experimenting rather than having focus around whether or not I can do it to a certain standard.

Also I'm sure I'll be a lot lighter of a person with that adjustment, who doesn't want to be around someone who is just loving on life and learning. It's a lot more freeing of an approach.
