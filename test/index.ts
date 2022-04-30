import { mColor, Color, HtmlColors, TextStyle } from '../src';

console.log(mColor(TextStyle.Italic, 'textStyle Italic'));
console.log(mColor([ HtmlColors.DarkGreen, TextStyle.Underline ], 'textStyle Underline + color'));

console.log(mColor(new Color(100, 0, 250), 'color creation'));

console.log(mColor(HtmlColors.CornFlowerBlue.asFore(), 'htmlColor'));