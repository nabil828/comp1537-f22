
What is the code for the following output?
![Q1](https://cdn.discordapp.com/attachments/1017862173881544775/1032004879801127012/unknown.png)

- `<p>This text contains <sub> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, vero.</sub> text.</p>`

- `<p>This text contains <sup> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, vero.</sup> text.</p>`

- `<p>This text contains <superscript> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, vero.</superscript> text.</p>`

- `<p>This text contains <subscript> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, vero.</subscript> text.</p>`





---
<!-- q2 -->
What is the code for to open a link in a new browser window or a new tab?

- A) `<a href="https://www.bcit.ca/" target="_blank">Visit bcit.ca!</a>`

- B) `<a href="https://www.bcit.ca/" target="_parent">Visit bcit.ca!</a>`

- C) `<a href="https://www.bcit.ca/" target="_self">Visit bcit.ca!</a>`

- D) `<a href="https://www.bcit.ca/" target="_top">Visit bcit.ca!</a>`





---
what is the output of the following code
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    p.x {
      text-align: center;
      color: tomato;
    }

    p.y {
      text-decoration: line-through;
    }
  </style>
</head>

<body>

  <h1>Demo of the .class selectors</h1>

  <p class="x y">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
</body>

</html>
```

- A) ![](https://cdn.discordapp.com/attachments/1017862173881544775/1032007844326813706/unknown.png)

- B) ![](https://cdn.discordapp.com/attachments/1017862173881544775/1032008013134962778/unknown.png)

- C) ![](https://cdn.discordapp.com/attachments/1017862173881544775/1032008048589410314/unknown.png)

- D) ![](https://cdn.discordapp.com/attachments/1017862173881544775/1032008090083655741/unknown.png)





---
What is the font size of the text inside the div?

```html
<!DOCTYPE html>
<html>

<head>
  <style>
    body {
      font-size: 16px;
    }

    div {
      font-size: 300%;
      border: 1px solid black;
    }
  </style>
</head>

<body>

  <p>The font-size of this document is 16px.</p>

  <div>Lorem ipsum dolor sit</div>


</body>

</html>
```

- A) 32px
- B) 16px
- C) 24px
- D) 48px
- E) none of the above




---
How to add the `tomato` background color to the paragraph with id `tomatoME`?

```html
<body>

  <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>

  <div>
    <h2>Lorem, ipsum dolor.</h2>
    <p id="tomatoME">Lorem ipsum dolor sit amet.</p>
  </div>

  <p>Lorem ipsum dolor sit consectetur.</p>

</body>
```

- A) 
```
 div p {
      background-color: tomato;
    }
```

- B) 
```
 div<p {
      background-color: tomato;
    }
```

- C) 
```
 div.p {
      background-color: tomato;
    }
```

- D) 
```
 div>p {
      background-color: tomato;
    }
```

- E) 
```
 div, p {
      background-color: tomato;
    }
```


--- 
If the total width of the div in the following code is 350px, what is the `padding`?

```html
<head>
  <style>
    div {
      width: 320px;
      /* padding: ??px */
      border: 5px solid gray;
      margin: 0;
    }
  </style>
</head>

<body>
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta!</div>
</body>
```


- A) 10px
- B) 30px
- C) 15px
- D) 5px
- E) none of the above


---
What is the value of `z` in the following code
```js
let x = 5;
let y = 2;
let z = x / y;
``` 

- A) 2.5
- B) 2
- C) undefined
- D) 5/2
- E) "5/2"
- F) none of the above

--- 
What is the output of the following code
```js
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    div {
      width: 320px;
      padding: 10px;
      border: 5px solid gray;
      margin: 0;
    }
  </style>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script>
    function setup() {
      result = ""
      for (let i = 0; i < 5; i++) {
        for (let j = i; j < 5; j++) {
          result = result + "*"
        }
        result = result + "<br>"
      }
      $("body").html(result);
    }

    $(document).ready(setup);
  </script>
</head>

<body>
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta!</div>
</body>

</html>
```

- A)
``` 
*****
****
***
**
*
```


- B)
``` 
*****
*****
*****
*****
*****
```


- C)
``` 
*
**
***
****
*****
```


- D)
``` 
    *
   **
  ***
 ****
*****
```
