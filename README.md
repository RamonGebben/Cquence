

# Cquence.js

[![Build Status](https://travis-ci.org/RamonGebben/Cquence.svg?branch=master)](https://travis-ci.org/RamonGebben/Cquence)

Cquence is a very small Javascript animation library.

<!-- Explain here -->

[Demo](http://ramongebben.github.io/Cquence)

## Basic usage

```javascript

Cquence.combine().start() // Combine fires the sequences in its body the same time

Cquence.sequence().start // Define the animations in order to create a timeline

Cq.sequence(
	Cq.easIn( :id, :time, { :from }, { :to }),
	Cq.easOut( :id, :time, { :from }, { :to }),
	Cq.sleep( :time ) // Wait utill time is passed
).start()

Cq.sequence(
    Cq.easIn( :id, :time, { :from }, { :to }),
    Cq.easOut( :id, :time, { :from }, { :to }),
    Cq.sleep( :time ) // Wait utill time is passed
).start( function(){
    // Do stuff here after animation is finished
})

```

## Full example

```javascript

  Cq.combine(
    Cq.sequence(
       Cq.sleep( 100 ),
       Cq.linear('frame3', 10000, { left: -900 }, {left: 300 })
    ),
    Cq.sequence(
      Cq.easeOut('frame1', 2000, { left: -1000 }, { left: 120 }),
      Cq.easeIn('frame6', 1000, { opacity: 0 }, { opacity: 1}),
      Cq.easeIn('frame7', 1000, { opacity: 0 }, { opacity: 1}),
      Cq.combine(
          Cq.easeIn('frame6', 1500, { opacity: 1 }, { opacity: 0}),
          Cq.easeIn('frame7', 1500, { opacity: 1 }, { opacity: 0}),
          Cq.easeIn('frame8', 1500, { opacity: 0 }, { opacity: 1})
      ),
      Cq.sleep(1000),
      Cq.easeIn('frame8', 1000, { opacity: 1 }, { opacity: 0}),
      Cq.easeIn('frame9', 1000, { opacity: 0, left: -300 }, { opacity: 1, left: 10}),
      Cq.sleep(1500),
      Cq.sequence(
        Cq.combine(
            Cq.easeIn('frame1', 1500, { left: 120 }, { left: -620 }),
            Cq.easeOut('frame9', 2000, { opacity: 1, left: 10 }, { opacity: 0, left: -300 })
        ),
        Cq.easeIn('frame2', 1000, { opacity: 0 },{ opacity: 0

        }),
        Cq.easeOut('frame10', 1000, { bottom: -260 }, { bottom: 0 })
      )

    )
  ).start( function(){
    console.log("This is fired after the animation has taken place");
  });

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


## Development

### Linting

We use jshint for linting.
Run the gulp task to check.

```bash

 gulp lint

```

### Compressing

We use Gulp for build tasks.
To minify/uglify for production use:

```bash

 gulp compress

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
