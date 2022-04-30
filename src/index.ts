import { Color } from './colors/Color';
import { Style } from './Style';

export function mColor(color: Style | Color | (Style | Color)[], string: string) {
    if(!Array.isArray(color)) color = [ color ];
    const styles = color.map((style) => {
        if(style instanceof Color) style = new Style(style, style.back ? 49 : 39);
        let colorCode = '';
        if(typeof style.colorCode === 'number') colorCode = `\x1b[${style.colorCode}m`;
        else colorCode = `\x1b[${style.colorCode.back ? '48' : '38'};2;${style.colorCode.r};${style.colorCode.g};${style.colorCode.b}m`;
        return {
            colorCode,
            resetCode: `\x1b[${style.resetCode}m`
        };
    });
    return `${styles.map((s) => s.colorCode).join('')}${string}${styles.map((s) => s.resetCode).join('')}`;
}
export * from './Style';
export * from './TextStyles';
export * from './colors/Color';
export * from './colors/HtmlColors';