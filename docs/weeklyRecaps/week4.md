# Month Day - Month Day Recap

These are all of the challenges, solutions, notes, and reflections from (Month Day) to (Month Day).

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
    The left shift operation is similar to multiplication by powers of two.

    Sample calculation using the left shift operator (<<):

    10 << 3 = 10 * 2^3 = 10 * 8 = 80
    -32 << 2 = -32 * 2^2 = -32 * 4 = -128
    5 << 2 = 5 * 2^2 = 5 * 4 = 20
    Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

    Examples:

        shiftToLeft(5, 2) ➞ 20
        shiftToLeft(10, 3) ➞ 80
        shiftToLeft(-32, 2) ➞ -128
        shiftToLeft(-6, 5) ➞ -192
        shiftToLeft(12, 4) ➞ 192
        shiftToLeft(46, 6) ➞ 2944

        Notes:
            There will be no negative values for the second parameter y.
            This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
            Optionally, you can solve this challenge via recursion.

=== "Solution"
    
    **Solution:**  
    Here's my solution to the problem: 

        function shiftToLeft(x, y) {
            return x * 2 ** y;
        }

    I don't think this calls for anything special, so I'm happy with this. Let's take a look at other people's solutions and see if there's anything fun going on for them.

    The only thing that I saw that stood out besides some recursion solutions was ```Math.pow(2,y)```. It's not really any quicker than using ```**``` as an operator but hey, that's a different approach I didn't think of.

=== "Learning Notes"

    **Learning Notes:**  

    >Nothing really here to be honest. I guess I learned that ```Math.pow(base,exponent)``` exists but I'm not thinking of a use case in which it would be that helpful to know of yet.

### Challenge #2 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

    [1, [2, 3]]
    // 2 elements, number 1 and array [2, 3]
    Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

    Write a function that returns the total number of non-nested items in a nested array.

    Examples:
    
        getLength([1, [2, 3]]) ➞ 3
        getLength([1, [2, [3, 4]]]) ➞ 4
        getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
        getLength([1, [2], 1, [2], 1]) ➞ 5

    Notes:

        An empty array should return 0.

=== "Solution"
    
    **Solution:**  
    Here's my first solution: 

        function getLength(arr) {
            return arr.flat(Infinity).length;
        }

    I'm not a big fan of the ```Infinity``` but I'm not sure how to do this. Pretty mediocre at recursion yet, but I'm excited to see other's solutions.

    Here's one with recursion I really like:

    (**Not My Solution**)

        function getLength(arr) {
            return arr.reduce((acc,el, index) => {
                return Array.isArray(el) ? acc + getLength(el) : acc + 1
            } , 0)
        }

    The use of ```reduce``` with this recursive function is awesome. So it just does a check with ```Array.isArray(el)``` and if ```el``` is an array, it will add the recursive call of the same function with ```el``. Otherwise it adds one.

    I can see this function working but it's still hard to hold recursion in my mind very well.

    I spent about an hour constructing and deconstructing that function and adding console logs to help my brain encapsulate what is going on here. I think I can build it from scratch now, I'm going to try.

        function getLength(arr){
            return arr.reduce((acc,cur)=>{
                return Array.isArray(cur) ? acc + getLength(cur): acc + 1;
            }, 0);
        }

    There we go looks good! I just tried it out and it works too. It's pretty much the exact same as the other persons solution just with removing the unneeded ```index``` parameter for reduce, and using ```cur``` instead of ```el``` as the variable name.

    I feel a lot more confident with the recursion on this problem at least. It's actually fairly simple. It takes an array [1,[2,[3]]] and if the first index is not an array, it adds one, then moves to the next if there is one. If an index contains an array, like index 1 of [1,[2,[3]]] which would be [2,[3]], it does a recursive call which starts the process over. So 2 is not an array, so 1 will be added, then it will encounter an array and call itself recursively again with the index value of [3].

    Not bad but it took a little bit to dig into. I think I just gotta keep diving into recursion solutions when I find them if I want to be confident in them.

=== "Learning Notes"

    **Learning Notes:**  

    >Keep diving into recursion!

    >Overall the recursion was rather simple. Its just checking ONE index. If its not an array, add one to the accumulator. If it is an array add to the accumulator the recursive call of the function. Which then will restart the process checking the first value.

    >I'm still not sure of a great use to use ```Infinity```, I know it worked with my solution of ```arr.flat(Infinity)``` but it seems like it would be unsafe to use on one hand, but on the other it's not going to go any more infinite than a recursive method that I can think of. Unless ```Infinity``` does not trigger a maximum call stack.

### Challenge #3 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Create a function that takes two arguments: the final price and the discount percentage as integers and returns the final price after the discount.

    Examples:

        dis(1500, 50) ➞ 750
        dis(89, 20) ➞ 71.2
        dis(100, 75) ➞ 25

        Notes:
        Your answer should be rounded to two decimal places.

=== "Solution"
    
    **Solution:**  
    Here's my first solution: 

        function dis(price, discount) {
            return +(price - price * (discount/100)).toFixed(2);
        }

    It took me awhile to figure out a way to drop any trailing zeros from a number. For example ```20.3400``` would need to be ```20.34``` while ```20.30``` needs to be ```20.3```. That was really tricky, I really didn't want to resort to logic checking for 0's and then splicing them off or something like that.

    Luckily with enough looking into ```toFixed``` I eventually ran into the ```+``` unary operator being used just for this! I assumed that what was happening behind the scenes was that using ```+10.20``` would convert to ```"10.2"``` (a string).What I can tell from the MDN documentation on ```+``` as a unary operator is that I'm just returning the value as a number (even if it is already) and the zeros without changing types.

    I also tested this with a ```typeof +10.20``` and saving ```+10.20``` to a variable and checking that as well. It's still a number. So all good!

    I checked into other solutions but didn't find anything crazy. I'm happy with this solution.

=== "Learning Notes"

    **Learning Notes:**  

    >The ```+``` unary operator can be used to drop zeros! That's awesome! 

    >Also, I got rusty on the ```toFixed``` method, so I'm glad I got some more experience using that again.

### Challenge #4 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

    Examples:

        add_ly = add_suffix("ly")
        add_ly("hopeless") ➞ "hopelessly"
        add_ly("total") ➞"totally"
        add_less = add_suffix("less")
        add_less("fear") ➞ "fearless"
        add_less("ruth") ➞ "ruthless"

=== "Solution"
    
    **Solution:**  
    Here's my first solution: 

        function add_suffix(suffix) {
            return (name)=>{
                return name + suffix;
            }
        }

    I submitted this solution, but I should've spent a little more time on this function, I made a few mistakes.

    First, I should have a better name for the parameter ```name``` something like ```word``` or ```string``` would work.

    Second, I don't need to have a code block for the anonymous function and the return within. That can be done implicitly since there is only on expression.

    Here's my updated solution:

        function add_suffix(suffix) {
            return (word) => word + suffix;
        }

    Looking at other people's solutions I don't see anything else I'd rather add, I think this solution is great! :)

=== "Learning Notes"

    **Learning Notes:**  

    >Pause, and do a check for unneeded code and poorly phrased things. It doesn't happen naturally, at least yet, the space has to be made for the refinement if I want it. It'll probably come more naturally when I get into a better habit of pausing before submitting.

---

## Final Reflections


---- --- -- -- --

## Done with this week? 

If the week has ended, why not check another week in the weekly recaps list? :)