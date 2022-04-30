import { Color } from './colors/Color';

export class Style {
    constructor(public colorCode: number | Color, public resetCode: number) { }
}