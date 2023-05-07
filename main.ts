import { question } from "readline-sync";
import { Shape } from "./shape";
import { Ellipse } from "./Ellipse";
import { Circle } from "./Circle";
import { Square } from "./square";
import { Rectangle } from "./Rectangle";
import { ShapeList } from "./ShapeList";

function main(){
  // Test Hình chữ nhật
  let a: ShapeList = new ShapeList();
  console.log("Hình chữ nhật")
  const rectangle: Rectangle = new Rectangle(10, 20);
  rectangle.output();
  console.log("-Diện tích: ",rectangle.getArea());
  // Test hình vuông
  console.log("\nHình vuông")
  const square: Square = new Square(2);
  square.input();
  square.output();
  console.log("-Diện tích: ",square.getArea());
  // Test hình elip
  console.log("\nHình elip")
  const ellipse: Ellipse = new Ellipse(10, 20);
  ellipse.output();
  console.log("-Diện tích: ",ellipse.getArea());
  // Test hình tròn
  console.log("\nHình tròn")
  const circle: Circle = new Circle(2);
  circle.input();
  circle.output();
  console.log("-Diện tích: ",circle.getArea());
  
  // Thêm các hình vào danh sách
  if(a.add(rectangle) == true)
      console.log(`\nThêm ${rectangle.name} vào danh sách thành công !!\n`);
  else 
      console.log(`\nThêm ${rectangle.name} vào danh sách không thành công !!\n`);

  if(a.add(circle) == true)
      console.log(`\nThêm ${circle.name} vào danh sách thành công !!\n`);
  else 
      console.log(`\nThêm ${circle.name} vào danh sách không thành công !!\n`);

  if(a.add(ellipse) == true)
      console.log(`\nThêm ${ellipse.name} vào danh sách thành công !!\n`);
  else 
      console.log(`\nThêm ${ellipse.name} vào danh sách không thành công !!\n`);

  if(a.add(square) == true)
      console.log(`\nThêm ${square.name} vào danh sách thành công !!\n`);
  else 
      console.log(`\nThêm ${square.name} vào danh sách không thành công !!\n`);

  // Xóa các hình trong danh sách
  if(a.remove("hinh vuong") == null)
      console.log("Nhập đúng tên để xóa")
  else 
      console.log("Đã xóa",a.remove("hinh vuong"));
  // console.log(a.remove("hinh chu nhat"));
  // console.log(a.remove("hinh tron"));
  // console.log(a.remove("hinh elip"));

  // Danh sách các hình sau khi thêm và xóa
  console.log("\nDanh sách các hình",a.shapes);
  // Tính tổng diện tích các hình
  console.log("\n Diện tích các hình trong danh sách:",a.totalArea());
}
main();
