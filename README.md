# Toggle Parent

  Simple component to toggle a class on parentNode of an element. When activated
  a backdrop element (`.toggle-parent-backdrop`) is added that will remove the
  class when clicked.

## Installation

  With [npm](https://github.com/component/component):

```
$ npm install toggle-parent
```

  With [component](https://github.com/component/component):

```
$ component install mjlescano/toggle-parent
```

## Example

```html
<style type="text/css">
  #dropdown-container.active .dropdown-menu {
    display: block;
  }

  .dropdown-menu {
    display: none;
  }
</style>

<div id="dropdown-container">
  <button type="button">Toggle Menu</button>
  <ul>
    <li>option 1</li>
    <li>option 2</li>
    <li>option 3</li>
  </ul>
</div>
```

```js
var ToggleParent = require('toggle-parent');

var button = document.querySelector('#dropdown-container button');

// Every time 'button' is pressed, the class 'active' will
// be toggled on '#dropdown-container'
var dropdown = new ToggleParent(button);

// Toggle programatically
dropdown.toggle()
```

## Options
  Options that can be passed as a second argument to `new ToggleParent(button, opts)`

* **parent**: Element to toggle the class (Default: button.parentNode)
* **toggleClass**: Class name to be toggled (Default: `active`)

## API
* **.show()**: Add `toggleClass` to `parent`
* **.hide()**: Remove `toggleClass` from `parent`
* **.toggle()**: Toggle `toggleClass` on `parent`
* **.destroy()**: Remove ToggleParent instance, with all the events attached.

## License
  MIT
