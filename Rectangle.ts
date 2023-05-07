import { Shape } from "./shape";
import { question } from "readline-sync";

// Định nghĩa lớp Recteangle kế thừa lớp Shape ( Hình chữ nhật )
export class Rectangle extends Shape {
    // Khai báo thuộc tính
    protected width: number;
    protected height: number;

    constructor(width: number = 2, height: number = 1) {
        super("hinh chu nhat");                     // Kế thừa thuộc tính name
        this.width = width > 0 ? width : 2;
        this.height = height > 0 ? height : 1;
    }

    /**
     * Phương thức nhập thuộc tính
     */
    input(): void {
        super.input;
        this.width = Number(question("Nhap width: "));
        this.height = Number(question("Nhap height: "));
    }

    /**
     * Phương thức xuất thuộc tính
     */
    output(): void {
        super.output;
        console.log(`name: ${this.name}`);
        console.log(`width: ${this.width} x height: ${this.height}`);
    }

    /**
     * Tính diện tích 
     * @returns Diện tích
     */
    getArea(): number {
        super.getArea;
        return this.width * this.height;
    }
}