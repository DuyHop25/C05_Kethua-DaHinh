import { Ellipse } from "./Ellipse";
import { question } from "readline-sync";

// Định nghĩa lớp Circle kế thừa lớp Ellipse ( Hình tam giác )
export class Circle extends Ellipse {

    constructor(radius: number = 1) {
        const r = radius > 0 ? radius : 1;
        super(r, r);  // Kế thừa thuộc tính của lớp Ellipse
    }

    /**
     * Phương thức nhập thuộc tính
     */
    input(): void {
        super.input;
        this.name = question("Nhap ten: ");
        this.r1 = Number(question("Nhap ban kinh: "));
        this.r2 = this.r1;
    }

    /**
     * Phương thức xuất thuộc tính
     */
    output(): void {
        console.log(`Name: ${this.name}`);
        console.log(`ban kinh: ${this.r1}`);
    }
    
    /**
     * Tính diện tích 
     * @returns Diện tích
     */
    getArea(): number {
        super.getArea;
        return 3.14 * (this.r1 * this.r1);
    }
}