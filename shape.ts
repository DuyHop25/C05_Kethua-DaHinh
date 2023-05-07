import { question } from "readline-sync";

// Định nghĩa lớp Shape ( lớp kế thừa )
export abstract class Shape {
    // Khai báo thuộc tính 
    // Khai báo đặt ở public vì trong phương thức remove của danh sách ShapeList.ts phải truy xuất
    // đến thuộc tính name
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    /**
     * Phương thức nhập
     */
    input() {
        this.name = question("Nhap ten:");
    }

    /**
     * Phương thức xuất
     */
    output() {
        console.log(`name: ${this.name}`);
    }
    
    /**
     * Tính diện tích
     * @returns diện tích
     */
    getArea(): number { return 0 };
}



