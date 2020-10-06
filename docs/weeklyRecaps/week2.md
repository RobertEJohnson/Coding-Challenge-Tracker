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

    >It's not a perfect working guideline, but hey it's better than nothing and will at least start me thinking of when I should be using it. I took a look at this post, <a href="https://www.freecodecamp.org/news/reduce-f47a7da511a9/">A Guide to the Reduce Method</a>, and I saw something really really cool. Using ```.reduce()``` to be a pipeline for function calls! So essentially you can pass in an array of functions in the order you need them called then pass in an initial value as the parameter you'd like run through the chain and wallah! You have an easily modifiable function pipeline. So cool! 

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

---

## Final Reflections

My first reflection comes from challenge #2 from this week.

- Rewrite why a function or feature of a language is useful (and when to use it over others) in your own words.
  
If you can't describe when you'd use a something over another feature, or speak to what it does really well, there's a good chance it probably won't be used. I had not in my own words described where using ```.reduce()``` is helpful and even though I knew about it **and had used it recently**, it didn't come to mind when it would've been helpful. As such I think there is a real worth in not only learning awesome features, methods, functions, but also spending time reflecting and focusing in on why they're useful. It's sorta like training yourself for a crisis-situation. The deeply rooted things are probably the only things that will stay when a scenario arises that could use them.

- Document the easy challenges and don't curtail the learning process.

I've felt some hesitation documenting the easier challenges, but I've decided to continue to do so. A lot of really good reflections occur while I'm writing up documentation and if I write off a challenge as easy I'm falling to a several different poor rationals. If my documentation at some point needs more fine tuning I think I will address it then, for now I want all the learning benefits I can get from documenting. 

---- --- -- -- --

## Done with this week? 

If the week has ended, why not check out another week in the weekly recaps list? :)