import { Shape } from "./shape";
import { question } from "readline-sync";

// Định nghĩa lớp Ellipse kế thừa lớp Shape ( Hình elip )
export class Ellipse extends Shape {
    // Khai báo thuộc tính
    protected r1: number;
    protected r2: number;

    constructor(r1: number = 2, r2: number = 1) {
        super("hinh elip");           // Kế thừa thuộc tính name
        this.r1 = r1 > 0 ? r1 : 2;
        this.r2 = r2 > 0 ? r2 : 1;
    }

    /**
     * Phương thức nhập thuộc tính
     */
    input(): void {
        super.input;
        this.r1 = Number(question("Nhap ban truc lon: "));
        this.r2 = Number(question("Nhap ban truc nho: "));
    }

    /**
     * Phương thức xuất thuộc tính
     */
    output(): void {
        super.output();
        console.log(`Name: ${this.name}`);
        console.log(`${this.r1} x ${this.r2}`);
    }

    /**
     * Tính diện tích 
     * @returns Diện tích
     */
    getArea(): number {
        super.getArea;
        return this.r1 * this.r2 * 3.14;
    }
}