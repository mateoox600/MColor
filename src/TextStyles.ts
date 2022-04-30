import { Style } from './Style';

export const TextStyle = {
    Bold: new Style(1, 22),
    NoBold: new Style(22, 1),
    Dim: new Style(2, 22),
    NoDim: new Style(22, 2),
    Italic: new Style(3, 23),
    NoItalic: new Style(23, 3),
    Underline: new Style(4, 24),
    NoUnderline: new Style(24, 4)
};