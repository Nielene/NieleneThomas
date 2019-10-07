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

coolors:
--green--
https://coolors.co/cad2c5-84a98c-52796f-354f52-2f3e46


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
parse JSON file to get <p></p> tags explicitly from .json file into js presentation file - without having to use 'line1,...'
-- GOT IT MOSTLY! Did in in MyOtherProjects.js










//
