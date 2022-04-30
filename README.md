# **MColor**

Npm package for console coloring.

---
## Features
 - Full html color list
 - Custom colors via Color class
 - Text Styling (Bold, Italic, etc)
---
## Installation
```console
npm install m-color
```
 - Typescript is supported and types comes with the installation
---
## Usage
```js
const { mColor, HtmlColors, TextStyle, Color } = require('m-color');

console.log(mColor([ HtmlColors.Red.asFore(), TextStyle.Italic ], 'This text is red and in italic'));
console.log(mColor(new Color(0, 255, 0).asFore(), 'Text in blue'));
```
---
## Docs
### HtmlColors
 - [colors list](https://www.w3.org/wiki/CSS/Properties/color/keywords)

### TextStyles
 - **Bold**
 - Dim
 - *Italic*
 - <u>Underline</u>
 - For all text styles an inverse exist prefixed by `No` it can be used to remove style in a section of styled text without separating the text in two

### Color
  A class to create colors, takes three args: red, green, blue.
  This class can be used to create foreground or background colors.
  The asBack() method returns the color for background.
  The asFore() method returns it for foreground.