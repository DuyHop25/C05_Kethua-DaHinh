import { Shape } from "./shape";

// Định nghĩa lớp ShapeList ( quản lí danh sách các shape (hình) )
export class ShapeList {
    // Khai báo thuộc tính
    shapes: Shape[];

    constructor(){
        this.shapes = [];
    }

    /**
     * Phương thức thêm hình vào mảng danh sách
     * @param shape hình 
     * @returns true nếu thêm thành công, false thêm không thành công
     */
    add(shape: Shape): boolean{
        // từ khóa instanceof kiểm tra shape ( các hình ) có thuộc lớp Shape không 
        if (shape instanceof Shape){
            this.shapes.push(shape);
            return true;
        }

        else
            return false;
    }

    /**
     * Phương thức xóa hình trong danh sách
     * @param name tên hình cần xóa
     * @returns Hình đã xóa
     */
    remove(name: string): Shape | null{

        for (let i = 0; i < this.shapes.length; i++) {

            if (this.shapes[i].name === name) {
                const removedShape = this.shapes.splice(i, 1)[i]; // hàm splice xóa 1 phần tử trong mảng
                return removedShape; 
            }

        }

        return null;
    }

    /**
     * Phương thức tính tổng diện tích các hình trong danh sách
     * @returns Diện tích các hình
     */
     totalArea(): number {
        let totalArea: number = 0;

        for (let i = 0; i < this.shapes.length; i++) {
            totalArea += this.shapes[i].getArea();
        }
        
        return totalArea;
    }
}

