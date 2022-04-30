const { mColor, HtmlColors, TextStyle, Color } = require('../build/');

console.log(mColor([ HtmlColors.Red.asFore(), TextStyle.Italic ], 'This text is red and in italic'));
console.log(mColor(new Color(0, 255, 0).asFore(), 'Text in blue'));