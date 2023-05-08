# Task 1
![](./DOM%20P7/ass7.1-before.png)

- remove names of languages having 2.0 in their name
## Code :-
```js 
et rev = document.getElementsByTagName("a");
let arr = Array.from(rev);

arr.forEach((a) => {
    if(a.textContent.includes('2.0')){
        a.remove();
    }
})
```
## After Image 
![](./DOM%20P7/ass7.1-after.png)

# Task 2 
![](./DOM%20P7/ass7.2-before.png)
- enable submit 
## Code :-
``` js 
let enable = document.querySelector(".main__form-input");
enable.disabled = false;

let btn = document.querySelector(".main__form-btn");
btn.disabled = false;
```
### After Image 
![](./DOM%20P7/ass7.2-after.png)