import { question } from "readline-sync";
import { Rectangle } from "./Rectangle";

// Định nghĩa lớp Square kế thừa lớp Rectangle ( Hình tam giác )
export class Square extends Rectangle {

    constructor(side: number = 1) {
        const s = side > 0 ? side : 1;
        super(s, s);                    // Kế thừa 2 thuộc tính của class Rectangle

    }

    /**
     * Phương thức nhập thuộc tính
     */
    input(): void {
        this.name = question("Nhap ten: ");
        this.width = Number(question("Nhap canh: "));
        this.height = this.width;
    }


    /**
     * Phương thức xuất thuộc tính
     */
    output(): void {
        console.log(`- Name: ${this.name}`);
        console.log(`${this.width} x ${this.height}`);
    }

    /**
     * Phương thức tính diện tích
     * @returns Diện tích
     */
    getArea(): number {
        return this.width * this.height;
    }
}