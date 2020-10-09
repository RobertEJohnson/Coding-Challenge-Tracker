# Oct 5th - Oct 11th Recap

These are all of the challenges, solutions, notes, and reflections from Monday October 5th to Sunday October 11th.

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
    In ES6 JavaScript, there exist two Object methods:

    1. Object.prototype.entries() takes a single object as an argument, and returns an array. In this array are arrays with the name of every property of the object, and the value of the property.
    2. Object.prototype.values() also takes a single object as an argument, and returns an array. In this array are the values of every property of the object.

    Examples:

        const myObject = {
            a: 1,
            b: 2
        }

        Object.entries(myObject) ➞ [ ["a", 1], ["b", 2] ]
        Object.values(myObject) ➞ [1, 2]

    Your job is to recreate these Object methods in ES5 JavaScript, creating new methods:

    Object.prototype.entriesNew()
    Object.prototype.valuesNew()
    The methods you create should return the same values as Object.prototype.entries() and Object.prototype.values(), and should adhere to ES5 limits. If the object has no properties your methods should return an empty array.

    Examples:

        Object.valuesNew({ a: 1, b: 2 }) ➞ [1, 2]
        Object.entriesNew({ first: 1, second: 2 }) ➞ [ ["first", 1], ["second", 2] ]
        Object.valuesNew({}) ➞ []
        Object.entiresNew({}) ➞ []

        Notes:  
        Do not use ES6 Object methods.
        Do not use ES6 features like arrow functions or let.

=== "Solution"
    
    **Solution:**  
    Here is my first solution: 

        Object.prototype.valuesNew = function(obj) {
            var values = [];
            for(property in obj){
                values.push(obj[property]);
            }
            return values;
        }

        Object.prototype.entriesNew = function(obj) {
            var values = [];
            for(property in obj){
                values.push([property, obj[property]]);
            }
            return values;
        }

        Object.defineProperty(Object.prototype, 'valuesNew', {enumerable: false});
        Object.defineProperty(Object.prototype, 'entriesNew', {enumerable: false});

    After I submitted it I realized I forgot to add the ```var``` in both of my ```for ... in``` loops, oops.

    I've never realized that ```for ... in``` would loop through methods I would be adding to the Object class with ```Object.prototype```, and figuring out how to do that has stumped me for an hour or so. I'm still not super happy with things like ```Object.defineProperty(Object.prototype, 'valuesNew', {enumerable: false});``` since I'm not sure when this would be run in a real world scenario. But for now this works. I was planning on digging into the prototype chain a bit more after my family vacation but it seems this challenge has already started me learning about it a little.

    I just checked out some other solutions people came up with and there is this one (**Not my solution**!)

        Object.prototype.valuesNew = function(obj) {
            var values = [];
            for (var key in obj)
                if (obj.hasOwnProperty(key))
                values.push(obj[key]);
            return values;
        }

        Object.prototype.entriesNew = function(obj) {
            var entries = [];
            for (var key in obj)
                if (obj.hasOwnProperty(key))
                entries.push([key, obj[key]]);
            return entries;
        }

    It's really similar to mine but doesn't have to define the property as not enumerable outside of the function itself which is really cool! I don't like that it has to run a conditional for every property to check if it is its own property or inherited though. It works for everything we're working with here but if I had a couple thousand properties that's a lot of extra checking. 
    
    Regardless, I didn't know ```.hasOwnProperty()``` existed! So I was excited to learn about it :) It seems helpful, though off the bat I'm not thinking of a specific scenario in which it would be useful in.

=== "Learning Notes"

    **Learning Notes:**  

    >I had no idea that there was some things going on behind the scenes to make built-in methods not enumerable. I'm still really curious to see what that magic is, I doubt it's checks for every property like ```.hasOwnProperty()```, it could be something similar to the solution I worked out with ```.defineProperty()```. It would be a lot of fun to look into, for the forseeable future though I think I will just look into a better place to place the ```.defineProperty()``` code. At least until I land a job somewhere.

    >```.hasOwnProperty()```, that's a really neat method! Being able to check if a property is inherited or not I'm sure will come in useful or one day. I might not remember the method specifically by the time I need it, though writing about it certainly helps, but it is quite helpful to know there are at least built-in ways to check for things like inheritance. Just knowing that I'm enabled to look for solutions better when I'm running into fun challenges.

### Challenge #2 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

    Some boomerang examples:

        [3, 7, 3], [1, -1, 1], [5, 6, 5]

    Create a function that returns the total number of boomerangs in an array.

    To illustrate:

        [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
        // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

    Be aware that boomerangs can overlap, like so:

        [1, 7, 1, 7, 1, 7, 1]
        // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

    Examples

        countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
        countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
        countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

        Notes:  
        [5, 5, 5] (triple identical digits) is NOT considered a boomerang,
        because the middle digit is identical to the first and last.

=== "Solution"
    
    **Solution:**  
    Here's my solution: 

        function countBoomerangs(arr) {
            let boomerangs = 0;
            for(let i = 0; i<arr.length; i++){
                if(arr[i] === arr[i+2] && arr[i+1] !== arr[i]){
                    boomerangs+=1;
                }
            }
            return boomerangs;
        }

    Overall I'm pretty happy with this solution, it could benefit from some comments explaining what a boomerang is but for this challenge it's not necessary. I took a look at other people's solutions and saw a lot of similar things, though the one below stood out to me.

    (**Below is someone elses solution**)

        function countBoomerangs(arr) {
	        return arr.reduce((acc , e , index) => acc + (e === arr[index+2] && e!= arr[index+1]) , 0);
        }

    I never thought to use reduce even though I've been using it recently, so I think I need to get a better working definition of when I should be using reduce, I'll go over some of my thoughts in the learning notes.

=== "Learning Notes"

    **Learning Notes:**  

    >So I'm not thinking to use ```.reduce()``` even though I know it and have been using it, I think this could be helped with a little more clarification on my part. When should I use ```.reduce()```?

    >1. I need to loop through an array.
    >2. I need to combine/add the values together.
    >3. I need to do more than what I can accomplish with either a forEach, map, or filter method. Often I can use a ```.reduce()``` method rather than doing combinations of other methods.

    >It's not a perfect working guideline, but hey it's better than nothing and will at least start me thinking of when I should be using it. I took a look at this post, <a href="https://www.freecodecamp.org/news/reduce-f47a7da511a9/" target="_blank">A Guide to the Reduce Method</a>, and I saw something really really cool. Using ```.reduce()``` to be a pipeline for function calls! So essentially you can pass in an array of functions in the order you need them called then pass in an initial value as the parameter you'd like run through the chain and wallah! You have an easily modifiable function pipeline. So cool! 

    >So it seems ```.reduce()``` has been used in a ton of really clever solutions, the more I learn about it the more it seems like it will be a really really useful tool to understand at a deep instinctive level. It's pretty adaptive and seems to me to be quite efficient.

### Challenge #3 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Create a function that takes an array of numbers and returns only the even values.

    Examples

        noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]
        noOdds([43, 65, 23, 89, 53, 9, 6]) ➞ [6]
        noOdds([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]

        Notes:
        Return all even numbers in the order they were given.
        All test cases contain valid numbers ranging from 1 to 3000.    

=== "Solution"
    
    **Solution:**  
    Here's my solution: 

        function noOdds(arr) {
            return arr.filter( value => value % 2 === 0);
        }

    Overall I'm really happy with this solution, mostly because I'm getting the direct benefits of having reflected on the ```.reduce()``` method from the challenge before and thought through when I should be using ```.filter()``` and ```.map()``` as a result. It was really clear to me that this was a perfect opportunity for ```.filter()``` since I took a little bit of extra time to reflect on it.

=== "Learning Notes"

    **Learning Notes:**  

    >No major notes here besides that short blip in the solution tab, I'm happy how clear it was to me about the method I should choose to tackle this challenge :) That was really neat.

### Challenge #4 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Create a function that takes a string and returns the word count. The string will be a sentence.

    Examples:

        countWords("Just an example here move along") ➞ 6
        countWords("This is a test") ➞ 4
        countWords("What an easy task, right") ➞ 5

=== "Solution"
    
    **Solution:**  
    Here's my solution: 

        function countWords(str) {
            return str.split(" ").length;
        }

    Part of me feels like there has to be a gotcha lying in wait here somewhere, but I think the main repeatable pattern for words in a sentence is the space between. Hyphenated words will not count in this solution, but from my exploring on the topic hyphenated words seem to count as one word.

    I think maybe my brain was mad at me using ```.split()``` with disregard to the punctuation, but it shouldn't matter if the actual array that ```.split()``` is returning has words like 'pause...' inside of it. All I'm concerned with here is the ```.length``` of that returned array.

    Ah! If there are anything like abbreviations or acronyms in this sentence that I am splitting, they will be counted as words. That's what I was feeling weird about. But upon looking further into it, it looks like all of these are counted as one word from a linguistic standpoint. I think this answer covers more bases than I originally thought.

=== "Learning Notes"

    **Learning Notes:**  

    >I had a few moments of hesitation putting this challenge on the weekly challenge documentation.

    >I understand my want to show people who may be viewing this that I can do more complex problems, but I have to ask myself what am I trying to prove.

    >It's poor practice to tell the story before it's even begun. Even if I think of a solution quickly there is still a lot to learn in others' solutions and through reflection.
    
    >If it becomes a problem in the future then it can be dealt with, but I shouldn't curtail my process until I'm sure, I'd rather not lose the potential knowledge haha. 

### Challenge #5 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

    Examples:

        sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
        sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
        sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"

=== "Solution"
    
    **Solution:**  
    Here's my solution:

        function sevenBoom(arr) {
            let result = 'there is no 7 in the array';
            arr.forEach(value=>{
                if(RegExp(/[7]/).test(String(value))){ 
                    result = 'Boom!';
                }
            })
            return result;
        }

    I stumbled upon regular expressions looking for more precise searching methods in JavaScript, no idea they existed, and they seem amazing for identifying patterns. The syntax is a little heavy on the eyes for beginners though. (at least for more complicated searches)

    I submitted the above answer, after looking at some other's solutions I see that another person used regular expressions and in a much better way. 

    (**Not my solution**)
    
        const sevenBoom = arr =>
            /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';

    I didn't understand that regular expressions already had some functionality built into them for dealing with nested information, I thought they could only be used on a single value so I would have to loop through them. I just played around with them though and it seems they can manage some pretty serious nesting, many multitudes of arrays deep.

    Oops.

    Also I didn't need to say ```/[7]/``` but rather just ```/7/``` as the brackets mean a character set (match any of the ones included);

=== "Learning Notes"

    **Learning Notes:**  

    >Regular expressions! What a cool way to manage some intense pattern searching. I could see this being really helpful for future scenarios with getting particular bits out of complex data structures.

    >I'm excited to have learned about these, I got a lot more to learn about them too which is cool, but for now knowing they exist could get me out of a pinch.

### Challenge #6 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

    Examples:

        isPandigital(98140723568910) ➞ true
        isPandigital(90864523148909) ➞ false // 7 is missing.
        isPandigital(112233445566778899) ➞ false

=== "Solution"
    
    **Solution:**  
    Here's my first solution, this one I came up with with my friend <a href="https://github.com/CarlWilcoxon" target="_blank">Carl Wilcoxon</a>: 

        function isPandigital(num) {
            return RegExp(/(?=.*[0])(?=.*[1])(?=.*[2])(?=.*[3])(?=.*[4])(?=.*[5])(?=.*[6])(?=.*[7])(?=.*[8])(?=.*[9])/).test(String(num));
        }

    We were experimenting with regular expressions which we both we're very familiar with. I actually like this solution, though I'm sure there is a far more concise way to search for the numbers 0-9 with a regular expression. We searched for a fair bit for a solution but we settled with this solution for now.

    We should've removed the ```[]``` grouping from the entire expression, but we forgot too from when we adapted it from other failed attempts. 
    
    After looking into it a bit more on my own we should've added a lazy quantifier to make sure it matches as few results as possible, and we also didn't need to use the RegExp() constructor. I also swapped the ```String()``` constructor out for a ```.toString()``` method which I thought (mistakenly, see learning notes) would be more efficient.

        function isPandigital(num) {
	        return /(?=.*?0)(?=.*?1)(?=.*?2)(?=.*?3)(?=.*?4)(?=.*?5)(?=.*?6)(?=.*?7)(?=.*?8)(?=.*?9)/.test(num.toString());
        }

    As for regular expressions I still didn't figure out how to iterate a number variable or not include it if it was found before in a grouping. But I'm pretty hopeful I'll get pretty good at regular expressions in the future though if I can keep practicing with them.

    This is getting quite lengthy but the better solution would have been for me to use the ```Set()``` constructor and ```.size``` which were two things I didn't know about.

=== "Learning Notes"

    **Learning Notes:**  

    >I experimented a lot with regular expressions, I spent quite a good chunk of time with them and I'm happy I did. Even though a better solution was with ```Set()``` and the ```.size``` property I think that learning about regular expressions was well worth the effort.

    >These were the most helpful tools for me, <a href="https://eloquentjavascript.net/09_regexp.html#p_SXQOi9ZwwH" target="_blank">a chapter from Eloquent Javascript</a>, and <a href="https://regexr.com/" target="_blank">a regular expression code sandbox</a>.

### Challenge #7 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Traditional safes use a three-wheel locking mechanism, with the safe combination entered using a dial on the door of the safe. The dial is marked with clockwise increments between 0 and 99. The three-number combination is entered by first dialling to the right (clockwise), then to the left (anti-clockwise), and then to the right (clockwise) again. Combination numbers are read from the top of the dial:

    Given the starting (top) position of the dial and the increments used for each turn of the dial, return an array containing the combination of the safe.

    Step-By-Step Example:

        safecracker(0, [3, 10, 5]) ➞ [97, 7, 2]

        Starting dial position of 0.

        First turn (rightward) of 3 increments:
        0 -> 99, 98, 97
        First number of combination = 97

        Second turn (leftward) of 10 increments:
        97 -> 98, 99, 0, 1, 2, 3, 4, 5, 6, 7
        Second number of combination = 7

        Third turn (rightward) of 5 increments:
        7 -> 6, 5, 4, 3, 2
        Third number of combination = 2

        The final combination is [97, 7, 2]

    Other Examples:

        safecracker(96, [54, 48, 77]) ➞ [42, 90, 13]
        safecracker(43, [51, 38, 46]) ➞ [92, 30, 84]
        safecracker(4, [69, 88, 55]) ➞ [35, 23, 68]

        Notes:
        Each of the three combination numbers will be different.

=== "Solution"
    
    **Solution:**  
    Here's my solution: 

        function safecracker(start, increments) {
            let currentValue = start;
            let combination = [];
            for(let i = 0; i<increments.length; i++){
                if(i % 2 === 0){
                    currentValue - increments[i] < 0 ? 
                        currentValue = (currentValue - increments[i]) + 100 
                        : currentValue -= increments[i];
                    combination.push(currentValue);
                } 
                else{
                    currentValue + increments[i] > 99 ? 
                        currentValue += increments[i] - 100 
                        : currentValue += increments[i];
                    combination.push(currentValue);
                }
            }
            return combination;
        }

    I built this solution in a way that if you were to pass in an array of more than 3 digits (turns) it could still solve it, as long as they start clockwise. 
    
    If I wanted to solve this problem for his lock alone I could always hard-code it.

        function safecracker(start, increments){
            let combination = [];
            combination.push(start - increments[0] > 0 ? 
                start - increments[0]
                : (start - increments[0]) + 100);
            combination.push(combination[0] + increments[1] < 99 ?
                 combination[0] + increments[1]
                 : combination[0] + increments[1] - 100);
            combination.push(combination[1] - increments[2] > 0 ? 
                combination[1] - increments[2]
                : (combination[1] - increments[2]) + 100);
            return combination;
        }

    Though this works, I really don't like it quite as much as my first solution because it's fully hard-coded.

    After looking at some other people's solutions, this one (see below) was my favorite because of the built in function to check if a number is higher or lower than 99 or 0 and adapt it. 

    (**Not My Solution**)

        function safecracker(start, increments) {
            let code = [];
            const within99 = (num) => num > 99 ? num -= 100 : num < 0 ? num += 100 : num
            code.push(within99(start - increments[0]));
            code.push(within99(code[0] + increments[1]));
            code.push(within99(code[1] - increments[2]));	
            return code
        }
    
    That ```within99``` function is a really clever solution to repeated logic for checking if a number is higher or lower than the min and max values. I'm going to adapt that function into my original solution.

    (**My Updated Solution with within99 Function**)

        function safecracker(start, increments) {
            let currentValue = start;
            let combination = [];
            const within99 = numberInput => {
                if(numberInput > 99){
                    currentValue -= 100;
                }
                else if(numberInput < 0){
                    currentValue += 100;
                }
                return currentValue;
            }
            for(let i = 0; i<increments.length; i++){
                i % 2 === 0 ? 
                    combination.push(within99(currentValue -= increments[i])) 
                    : combination.push(within99(currentValue += increments[i]));
            }
            return combination;
        }
    
    It was fun implementing that ```within99``` function, it works pretty nice, though I did take out the ternary chain for an if/else if statement. Though this function is a little long, I think its pretty neat that it will work for any length combination as long as the turn pattern consistently alternates from clockwise to counter-clockwise. I'm not going to add comments here in the function but I think with one or two comments explaining key things like the ```within99``` function and the for loop logic it could gain a bit more legibility.

=== "Learning Notes"

    **Learning Notes:**  

    >Wow, I did not expect this problem to be as challenging as it was.

    >What really helped me was to just grab a pen and notebook and start jotting down notes for the different pieces of this problem. Otherwise it got really hard to hold all the pieces together, especially when you had to start checking if a number is below 0 and loop it back to 99 or vice-versa.

    >So one takeaway for me is to not be afraid to resort to pen and paper, use the tools at my disposal.

    >Another takeaway is that ```+=``` and ```-+``` are still only short hands for ```x = x + y``` or ```x = x - y```, they can get messy with more operators since they have a built in order of operation.
    
    >For example:  
    >```currentValue -= increments[i] + 100``` 
    >will evaluate as 
    >```currentValue = currentValue - (increments[i] + 100)``` 

    >But maybe what I meant was to do this  
    >```currentValue = (currentValue - increments[i]) + 100```  
    >If ```-=``` is used, this cannot happen since it basically says this ```x = x - (other expressions)```

    >The main takeaway is shorthand features like ```+=``` and ```-+``` will do all other calculations first before ```+ or -```'ing to the original value.

### Challenge #8 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

    Examples:

        numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
        numInStr(["abc", "abc10"]) ➞ ["abc10"]
        numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
        numInStr(["this is a test", "test1"]) ➞ ["test1"]

        Notes:
        The strings can contain white spaces or any type of characters.
        
        Bonus:  
        Try solving this without regex.

=== "Solution"
    
    **Solution:**  
    Here's my first solution: 

        function numInStr(arr) {
            return arr.filter(value => /\d/.test(value));
        }

    I also wanted to try the bonus challenge here, to try and solve it without regular expressions. Here is my solution to that.

        function numInStr(arr) {
            const testValues = [0,1,2,3,4,5,6,7,8,9];
            const results = [];
            for(str of arr){
                let splitString = str.split('');
                for(value of testValues){
                    if(splitString.includes(String(value))){
                        results.push(str);
                        break;
                    }
                }
            }
            return results;
        }

    That was fun. Certainly challenging, its crazy how much extra work has to be done without a regular expression. I'm excited to see other peoples solutions for this problem without using a regular expression.

    I checked out some other people's solutions and this one (see below) is my favorite for not using regular expressions.

    (**Not My Solution**)

        function numInStr(arr) {
            var result = [];	
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < arr[i].length; j++){
                    var num = parseInt(arr[i][j]);			
                    if(num){				
                        result.push(arr[i]);
                        break;
                    }
                }
            }	
            return result;	
        }
    
    Ah! ```parseInt``` would be much cleaner to use instead of having a testValue array containing the numbers 0-9 like I had. I also like that this solution is using the indices of the for loops to check each value as opposed to splitting it off into its own array (which I never needed to do).

    Overall I like that solution a lot, it's readable and clever. I think that because of my familiarity with making things readable with a ```for ... of``` loop I missed out on the opportunity to use indices in a nested way like this solution does.

=== "Learning Notes"

    **Learning Notes:**  

    >Regular expressions again! Haha, I've never dealt with regular expressions for months and then in the last two weeks with code challenges I have been running into them fairly frequently! 

    >I think the main takeaway for me from this challenge is that if I'm dealing with searching indices within ```for``` loops I should pause to consider if using a ```for ... of``` loop will be the most beneficial or not before using it. I had a cleaner solution available to for searching nested values with the built in nested indices if I included the index within the loop expressions.

    Searching? Consider indexes.

    Just doing a simple loop? use a ```for ... of```.

### Challenge #9 {: .challenge .challenge--edabit}

=== "Code Challenge"

    **Challenge:**  
    Write a function to replace all instances of character ```c1``` with character ```c2``` and vice versa.

    Examples:

        doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"
        doubleSwap("random w#rds writt&n h&r&", "#", "&")
        ➞ "random w&rds writt#n h#r#"
        doubleSwap("128 895 556 788 999", "8", "9")
        ➞ "129 985 556 799 888"

        Notes:
        Both characters will show up at least once in the string.

=== "Solution"
    
    **Solution:**  

    I know there is away to do this with regular expressions and ```.replace()```, but since I'm not familiar with it I'm going to try to make a solution with out it first before I learn about it. Here's my first solution: 

        function doubleSwap(str, c1, c2) {
            let spreadString = [...str];
            for(let i = 0; i<str.length; i++){
                switch(str[i]){
                    case c1:
                        spreadString.splice(i,1,c2);
                        break;
                    case c2:
                        spreadString.splice(i,1,c1);
                        break;
                }
            }
            return spreadString.join('');
        }

    Overall I'm pretty happy with this solution, having to change its data type to an array and back into a string makes me think there are better ways out there though. As far as workable solutions go though, I think this will do just fine :))

    I dug into ```replace()``` for regular expression use and updated my updated solution to this:

        function doubleSwap(str, c1, c2) {
            regex = new RegExp(`${c1}|${c2}`, 'g');
            return str.replace(regex, char=>{
                    switch(char){
                            case c1:
                                    return c2;
                            default:
                                    return c1;
                    }
            })
        }

    For the most part this solution works well, but if a user inputs a reserved character for regular expressions its going to break. I was partially on my way to fix that but it's going to end up with a lot more code than my first solution. I'll have to do a check for both ```c1``` and ```c2``` and if they are any of these reserved characters:

    ```[ \ ^ $ . | ? * + ( )```

    I'll have to add an escape character in front of them. For now my solution will do, I think that I will see much more condense solutions once I take a look at others' code which I'm going to do now.

    I see other solutions along this (see below) line, though a little more spacious:

    (**Not My Solution**)

        const doubleSwap = (str, c1, c2) => [...str].map(v => v === c1 ? c2 : v === c2 ? c1 : v).join('');

    I really like the idea of using ```.map()```, I'm assuming its a little more efficient than the splicing I'm doing. I'm still not a big fan of chaining ternary operators together but I have a feeling that maybe its not that big of a deal readability-wise. I'll have to bring it up to some more experienced developers and get their inputs on it. 
    
=== "Learning Notes"

    **Learning Notes:**  

    >No major notes here. 
    
    >If I were to do this problem again in the future, I think I would go for an approach that uses ```.map()``` since I think it flows better and can avoid some variable declarations.
    
    >Besides that, just one thing stands out here for me. Regular expressions can be short and simple, or possibly quite intense if you have to account for possible special reserved regex inputs being used. So sometimes they're not worth the challenge it might take to implement them. It's a tool that is pretty situational, gaining a bit more experience with them will make it easier to see appropriate places to use them.

---

## Final Reflections

- Rewrite why a function or feature of a language is useful (and when to use it over others) in your own words.
  
If you can't describe when you'd use a something over another feature, or speak to what it does really well, there's a good chance it probably won't be used. I had not in my own words described where using ```.reduce()``` is helpful and even though I knew about it and had used it recently, **it didn't come to mind when it would've been helpful**. 

As such I think there is a real worth in not only learning awesome features, methods, functions, but also spending time reflecting and focusing in on why they're useful. It's sorta like training yourself for a crisis-situation. The deeply rooted things are probably the only things that will surface when a scenario arises that could use them. In order to have them accessible they need to be reflected upon.

- Document the easy challenges and don't curtail the learning process.

I've felt some hesitation documenting the easier challenges, but I've decided to continue to do so. A lot of really good reflections occur while I'm writing up documentation and if I write off a challenge as easy I'm falling to a several different poor rationales. If my documentation at some point needs more fine tuning I think I will address it then, for now I want all the learning benefits I can get from documenting. 

- Regular Expressions

These seem so incredibly useful, but also quite clunky syntactically. Overall I'm really happy I dove into them, and am excited to use them again. The most helpful tools I've found were <a href="https://eloquentjavascript.net/09_regexp.html#p_SXQOi9ZwwH" target="_blank">a chapter from Eloquent Javascript</a>, <a href="https://regexr.com/" target="_blank">a regular expression code sandbox</a>, and <a href="https://www.regular-expressions.info/" target="_blank">regular-expressions.info</a>. I'm excited to learn how and when to use this powerful parsing tool better!

- Code Challenges with a friend

I did a challenge with a friend this week, <a href="https://github.com/CarlWilcoxon" target="_blank">Carl Wilcoxon</a>, and it was great! Not only did we have fun diving into regular expressions together but we also dove into prototypes and constructors a bit too! I love doing challenges on these coding challenge sites, but I realized that even though I'm getting access to other people's solutions once I submit my own, I'm not getting access to their process. That was really fun to bounce things off of each other, search together, and I even got another site to dive into for future cultivation <a href="https://www.hackerrank.com/" target="_blank">hackerrank.com</a> out of the it. 

While the current sites I'm using provide great practice with methods and language gimmicks it seems that HackerRank also provides opportunities to learn in a more development-like environment with more moving pieces. I like it and will definitely dive into it in the future. I could see it becoming a staple in the cultivation process.

- Object Constructors

I got a great dive into some of the behind the scenes conversion/construction process of primitive types into others or objects this week. I knew my primitive types and I knew about methods you could call for different datatypes but a missing piece for me was that these primitive types are being converted to the objects with the methods when you call it on them. ```'hello``` is just a string primitive, but doing ```'hello'.length``` is the same as doing ```new String('hello').length```. It's a small thing but I never connected that thing, now I can make more informed decisions about minute efficiency too. For example, ```(333).toString()``` which is ```new Number(333).toString```, I doubt is more efficient than ```String(333)``` which only does a type conversion without constructing an object and then calling a method connected to that object. So many fun things happening under the hood, it's pretty cool to learn about.

- ```+=``` and ```-+``` 

The order of operations with ```+=``` and ```-+``` will do all other calculations first before ```+ or -```'ing to the original value.

By using ```-=``` we are saying ```x = x - (other expressions)```

- Don't be afraid to use Pen and Paper.

It's just another tool, sometimes it can be really helpful to make small notes to help keep track of all of the moving pieces.

- Choose a ```for ... of``` over a loop with indices more carefully.

Are you searching or looking for nested values?  
Consider indexes before defaulting to ```for ... of```.

Are you Just doing a simple loop?  
Use a ```for ... of``` loop.

---- --- -- -- --

## Done with this week? 

If the week has ended, why not check out another week in the weekly recaps list? :)