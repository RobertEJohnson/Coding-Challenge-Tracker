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

---

## Final Reflections


---- --- -- -- --

## Done with this week? 

If the week has ended, why not check out the next week under the weekly recaps? :)