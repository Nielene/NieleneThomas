css features:
https://www.w3schools.com/css/css_navbar.asp  -->
--> https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_vertical_active

correct format:
```js
  <div>
    <li style = {{listStyleType: 'circle'}}>
      <a href='#aboutMe' className='now_active'
      style={{background: '', color: 'white'}}> About Me </a>
    </li>
  </div>

```

https://www.w3schools.com/cssref/css3_pr_box-shadow.asp
```css
div.polaroid {
  width: 284px;
  padding: 10px 10px 20px 10px;
  border: 1px solid #BFBFBF;
  background-color: white;
  box-shadow: 10px 10px 5px #aaaaaa;
}
div.rotate_right {
  float: left;
  -ms-transform: rotate(7deg); /* IE 9 */
  -webkit-transform: rotate(7deg); /* Safari */
  transform: rotate(7deg);
}

div.rotate_left {
  float: left;
  -ms-transform: rotate(-8deg); /* IE 9 */
  -webkit-transform: rotate(-8deg); /* Safari */
  transform: rotate(-8deg);
}
```
Note:
https://www.w3schools.com/css/css_align.asp

https://pagedart.com/blog/single-quote-in-html/

https://www.degraeve.com/reference/specialcharacters.php




--------------
Add a blur effect to the shadow:
https://www.w3schools.com/cssref/css3_pr_box-shadow.asp

box-shadow: 5px 10px 8px #888888:
The optional third value adds a blur effect to the shadow.

box-shadow: 5px 10px 18px #888888:
More blurred.
-------------------------
```css
.smallIntroDiv {
  padding-left: 20px;
  border: 1pt solid #84A98C;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 5px;
}

{
  border: 1pt solid #84A98C;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 5px;
}
```


coolors:
--green--
https://coolors.co/cad2c5-84a98c-52796f-354f52-2f3e46
darkest green: #2F3E46  rgb(47, 62, 70)         ColorZilla Chrome extension
next darkest green:  #354F52  rgb(53, 79, 82)
next darkest green:  #52796F  rgb(82, 121, 111)  
lightest green:  #84A98C  rgb(132, 169, 140)
greyish: #CAD2C5

.App: #CAD2C5;
.homeDiv: #FFFFFF;
.Home_and_ArrowUp_Div: width: 100%;

-----------
https://www.colorhexa.com/84a98c
shades of #84A98C

-----------
CSS Linear Gradient
css tricks
https://css-tricks.com/snippets/css/css-linear-gradient/#:~:text=It's%20called%20%E2%80%9Clinear%E2%80%9D%20because%20the,Values%20and%20Replaced%20Content%20specification.

-----------
Font picker - chrome extension:
change the font-weights:

index.css:
```css
body {
  font-family: Roboto, sans-serif;
  font-size: 24.36px;
  font-weight: 300;
  /* line-height: 41.76px; */
  color: rgb(51, 51, 51);
}
```
AboutMe.css 12 49 55
ContactMe.css 22
MyOtherProjects: 56 73 80 91
MyProjects: 60 74
Navbar: 56
SmallIntro: 9 31
index.css : 11
--------------

color producer:
https://cssgenerator.org/rgba-and-hex-color-generator.html
BEC12B  light green
67630C  olive green

box shadow:
https://cssgenerator.org/box-shadow-css-generator.html

www white / transparent icon:
https://www.google.com/search?biw=1309&bih=603&tbm=isch&sa=1&ei=oZX4XI6QIczc5gKKkKrYAw&q=www+icon+white+transparent&oq=www+icon+white+transparent&gs_l=img.3...8968.12593..12888...2.0..0.197.1168.11j3......0....1..gws-wiz-img.......0j0i30.88Sbp3Zs3zY#imgdii=3TSif04v9xvHfM:&imgrc=9PpA4KADviCrOM:

box shadow:
https://codepen.io/bchiang7/pen/EaLoPm
and https://cssgenerator.org/box-shadow-css-generator.html
https://brittanychiang.com/


toggle:
https://github.com/coreyladovsky/coreyladovsky.github.io/blob/githubLive/src/components/nav.jsx
```js

constructor(props) {
    super(props);
    this.showing = false;
    this.handleSelection = this.handleSelection.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.location = this.location.bind(this);
  }

toggleNav() {
    let navContainer = $(".nav-container");
    if (this.showing) {
      navContainer
        .removeClass("slideInLeft")
        .addClass("slideOutLeft");
      setTimeout(() => {
        navContainer.css("display", "none");
      }, 500);
    } else {
      navContainer
        .css("display", "grid")
        .removeClass("slideOutLeft")
        .addClass("slideInLeft");
    }
    this.showing = !this.showing;
  }
  ```


ArrowUp appear on scroll:
https://stackoverflow.com/questions/38114715/how-to-reveal-a-react-component-on-scroll


mailto:
https://stackoverflow.com/questions/34779642/dynamic-href-tag-react-in-jsx

```js
<a href={"mailto:" + this.state.email}><p>NieleneThomas@pursuit.org</p></a>
```

make extra space inline:
https://www.computerhope.com/issues/ch001662.htm
To create extra spaces before, after, or in-between your text, use the &nbsp; (non-breaking space) extended HTML character.


create array of imported pics in js file:
https://github.com/isaink/dashing/blob/nielene_SingleService/frontend/src/components/HomePage/SingleService.js
being used in MyProjects.js

**NEED TO:**
* parse JSON file to get <p></p> tags explicitly from .json file into js presentation file - without having to use 'line1,...'
- GOT IT MOSTLY! Did in in MyOtherProjects.js



**NEED TO**
* changing font-weight and font-family throughout. something more appealing.

* ContactMe - use email logo

* target all href links to BLANK

* Photo: needs to be able to scale with changing screen size

* p all same size




//
