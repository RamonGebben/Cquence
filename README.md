

# Cquence.js

Cquence is a very small Javascript animator librarie developed to for banners and advertisement.

## Basic usage

```javascript
var render = null; // Define the render object so that the renderloop knows what to render.

render = combine() // Combine fires the sequences in its body the same time

render = sequence() // Define the animations in order to create a timeline

sequence(
	easIn( :id, :time, { :from }, { :to })
	easOut( :id, :time, { :from }, { :to })
	sleep( :time ) // Wait utill time is passed
)

```


## Full example

```javascript

var render = combine(     
	sequence( 
	   sleep( 100 ),
	   linear('frame3', 10000, { left: -900 }, {left: 300 })
	),
	sequence(
	  easeOut('frame1', 2000, { left: -1000 }, { left: 120 }),
	  easeIn('frame6', 1000, { opacity: 0 }, { opacity: 1}),
	  easeIn('frame7', 1000, { opacity: 0 }, { opacity: 1}),
	  combine(
	      easeIn('frame6', 1500, { opacity: 1 }, { opacity: 0}),
	      easeIn('frame7', 1500, { opacity: 1 }, { opacity: 0}),
	      easeIn('frame8', 1500, { opacity: 0 }, { opacity: 1})
	  ),
	  sleep(1000),
	  easeIn('frame8', 1000, { opacity: 1 }, { opacity: 0}),
	  easeIn('frame9', 1000, { opacity: 0, left: -300 }, { opacity: 1, left: 10}),
	  sleep(1500),
	  sequence(
	    combine(
	        easeIn('frame1', 1500, { left: 120 }, { left: -620 }),
	        easeOut('frame9', 2000, { opacity: 1, left: 10 }, { opacity: 0, left: -300 })
	    ),
	    easeIn('frame2', 1000, { opacity: 0 },{ opacity: 0
	    
	    }),
	    easeOut('frame10', 1000, { bottom: -260 }, { bottom: 0 })
	    
	  )
	  
	),
	sequence(

	)
);

// launch the animation
renderloop();

```

Then your HMTL should look something like this: 

```html
<div id='container'>
    <div id='frame1' class ="frame">
        <img src="http://example.com/some_sprite.png">
    </div>
    <div id='frame2' class ="frame">
        <img src="http://example.com/some_sprite.png" style="left: -300px; top: 40px;">
    </div>
    <div id='frame3' class ="frame">
        <img src="http://example.com/some_sprite.png" style="left: -602px">
    </div>
    <div id='frame4' class ="frame">
        <img src="http://example.com/some_sprite.png" style="left: -600px;">
    </div>
    <div id='frame5' class ="frame">
        <img src="http://example.com/some_sprite.png" style="left: -1350px;">
    </div>
    <div id='frame6' class ="frame">
        <p>Hey there,</p>
    </div>
    <div id='frame7' class ="frame">
        <p>People call me</p>
    </div>
    <div id='frame8' class ="frame">
        <p>RamonGebben</p>
    </div>
    <div id='frame9' class ="frame">
        <p>And this is an awesome lib </p>
    </div>
    <div id='frame10' class ="frame">
        <div id="cta">
            <div id="button">Download</div>
        </div>
    </div>
</div>
```

## Licence

 Copyright (c) 2015 RamonGebben

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.

