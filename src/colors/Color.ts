
export class Color {
    constructor(public r: number, public g: number, public b: number, public back: boolean = false) { }

    public asBack() {
        return new Color(this.r, this.g, this.b, true);
    }
    
    public asFore() {
        return new Color(this.r, this.g, this.b, false);
    }
}