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
    Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

    To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

    Examples:

        changeEnough([2, 100, 0, 0], 14.11) ➞ false
        changeEnough([0, 0, 20, 5], 0.75) ➞ true
        changeEnough([30, 40, 20, 5], 12.55) ➞ true
        changeEnough([10, 0, 0, 50], 3.85) ➞ false
        changeEnough([1, 0, 5, 219], 19.99) ➞ false

        Notes:
        quarter: 25 cents / $0.25
        dime: 10 cents / $0.10
        nickel: 5 cents / $0.05
        penny: 1 cent / $0.01

=== "Solution"
    
    **Solution:**  
    My first solution I tried to accomplish this without reduce: 

        function changeEnough(change, amountDue) {
            let totalChange = 0;
            for(let i=0; i<change.length; i++){
                switch(i){
                    case 0:
                        totalChange += change[i]*.25;
                        break;
                    case 1:
                        totalChange += change[i]*.10;
                        break;
                    case 2:
                        totalChange += change[i]*.05;
                        break;
                    case 3:
                        totalChange += change[i]*.01;
                }
            }
            return totalChange >= amountDue ? true : false;
        }

    I think that there is no reason really to have to even use this loop or switch statement as its pretty hardcoded anyway. I could just as easily condense the loop and checks into one variable ```totalChange``` and have the same effect.
    
        let totalChange = change[0]*.25 + change[1]*.10 + change[2]*.05 + change[3]*.01

    I could even remove the variable and just use

        return change[0]*.25 + change[1]*.10 + change[2]*.05 + change[3]*.01 >= amountDue ? true : false;

    I'm not seeing a solid reason I should resort to a reduce function for this since I'll have to be making the checks for index etc, that I can avoid here. I'm sure other peoples solutions will enlighten me to other alternatives.

    Haha! I love doing these challenges I totally overlooked that I don't even need a ternary in the above solution because I can rely on the true or false evaluation of whether my total is >= the amount due.

        return change[0]*.25 + change[1]*.10 + change[2]*.05 + change[3]*.01 >= amountDue

    Another cool thing I saw was assigning the individual array values as parameters! If I updated my solution for that it would become something like this

        function changeEnough([q,d,n,p], amountDue) {
            return d*.25 + n*.10 + n*.05 + p*.01 >= amountDue
        }

    I wonder what is faster, assigning the all array values individual parameters once, or having to access the same parameter array for every index? I don't know, but I want to get another challenge in for today, so that question will have to wait.

=== "Learning Notes"

    **Learning Notes:**  

    >Short hard code is not always bad, especially if its avoiding lots of other conditional checks, loops and logic thats not necessary for a function that will not be expanded on. Besides that I think I took away two other things here,

    >There are a way to make individual values of an array named parameters! That's so cool!

    >I don't need to use a ternary operator when I'm just returning ```true``` or ```false```. I can just use an expression and return it's evaluated boolean value! Good stuff! Totally forgot about that for this problem even though I've done this kind of thing in the past, it's great to catch it here!

### Challenge #2 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

    Examples:

        toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
        toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
        toArray({}) ➞ []

        Notes:
        Return an empty array if the object is empty.

=== "Solution"
    
    **Solution:**  
    My solution: 

        function toArray(obj) {
            return Object.entries(obj);
        }

    The ```entries``` method really does all the work here! Not too much to say.

    I checked out other solutions and didn't really have anything I wanted to add for my own there. I'd spend more time diving into solutions for other cool things to learn but I think I'm going to hang out with my niece and nephew a bit instead for now and call it a day. :)

=== "Learning Notes"

    **Learning Notes:**  

    >I think my solution was about as clean as it can get with what I know about Javascript and using the built in tools in the language. I didn't learn as much as I could've from this challenge as I decided to hangout with family instead of work through other people's solutions, but no worries! Efficiency and even mastery itself should not always be the goal, I think hanging out with family has plenty of benefits that cross over to the learning discipline.

### Challenge #3 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

    Examples:

        isRepdigit(66) ➞ true
        isRepdigit(0) ➞ true
        isRepdigit(-11) ➞ false

        Notes:
        The number 0 should return true (even though it's not a positive number).
        Repdigits are numbers that consist of one repeated number, so 111 or 22222, but not 112 or 22232.

=== "Solution"
    
    **Solution:**  
    Here was my first solution!:

        function isRepdigit(num){
                if(num >= 0){
                    let arr = num.toString().split('');
                    return arr.every(value) => value === arr[0]);
                }
                return false;
        }

    I like this solution, I wish there was a way I could think of to get experience using the ```every``` method without having to reference that first index and save the split number to an array. I'm sure there is a way to do this a little cleaner though this solution is legible to me!

    That's the fun though, seeing other peoples solutions and learning so let's get to it!

    Ah! There it is! The way to remove that ```arr``` variable of my solution! The ```every``` method has an array parameter, which I knew about, but for some reason I thought you needed to pass in an array already saved to a variable. I didn't realize that this parameter of course would default to the array you are calling the method onto, I have understood that parameters are only placeholders for values for many many moons now, but for some reason it was slipping here. I love these challenges, they always show me my assumptions and help me grow!

    Here's an updated solution using the array parameter of the ```every``` method.

        function isRepdigit(num){
                if(num >= 0){
                    return num.toString().split('').every(value, i, arr) => value === arr[0]);
                }
                return false;
        }

    The next thing I noticed was that other peoples solutions that though the question asked for me to return false if the ```num``` parameter passed in was === 0 or below, I never had to build in a ```if``` conditional to check for that. This is because the ```split``` method will naturally split a negative string number like ```'-111'``` to ```['-','1','1','1']``` then if I'm comparing all the values to the first value they will fail the ```value === arr[0]``` test since arr[0] will be ```-```.

    As such my solution should've been

        function isRepdigit(num){
            return num.toString().split('').every(value, i, arr) => value === arr[0]);
        }

    There is another solution further down the page that is super close to mine! 

    (**Not My Solution**)

        function isRepdigit(num) {
            return String(num).split('').every((x, i, arr) => x=== arr[0])
        }

    That's awesome :) I actually think I may swap over to using ```x``` in the future instead of words like ```value```. I usually try to be descriptive and readable but I think ```x``` is cleaner and reads the logic of the check just as clearly.

=== "Learning Notes"

    **Learning Notes:**  

    >I didn't realize that the optional array parameter defaulted to itself. I know this is silly haha, for some reason I was just thinking since there was just an option to pass in another array through it. Anyway! Unknown assumption addressed! Woot!

    >This opens up a lot of methods now, since I can name the array I'm calling it on through the parameter option for arrays now I can reference it with indexes etc, even if it was never assigned to a variable like I've been doing in the past. Super neat!

    >I should consider using ```x``` more often than I do. I think its just as descriptive as a word like ```value``` and is a pretty easy win to switch over too. For example, ```x > 40``` or ```value > 40```, very little is lost with ```x``` and I think it is gained back with its brevity so more of the mind can focus on the logic of the expression.
---


## Final Reflections


---- --- -- -- --

## Done with this week? 

If the week has ended, why not check another week in the weekly recaps list? :)