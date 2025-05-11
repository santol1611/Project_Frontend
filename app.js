// console.log("Hello" + " " + "World")
// //alert("Kitsaran")

// var firstname = "Kitsaran"
// console.log(firstname)
// var lastname = "Suwannapoen"
// console.log(lastname)
// console.log(firstname + " " + lastname)
//alert(firstname + " " + lastname)

// console.log(firstname + " Type " + typeof firstname)
// console.log(lastname + " Type " + typeof lastname)
// console.log(10 + " Type " + typeof 10)
// console.log(10.5 + " Type " + typeof 10.5)
// console.log(true + " Type " + typeof true)
// console.log(false + " Type " + typeof false)
// console.log(null + " Type " + typeof null)

// var name = prompt("What is your name?")
// console.log("Hello " + name)
//     alert("Hello " + name)

// var number = prompt("กรุณาใส่จำนวนที่ต้องการ")
// alert("จำนวนที่คุณต้องการสุ่มคือ " + (number))
// alert("ค่าสุ่มที่ได้คือ " + Math.floor(Math.random() * (number - (-1))))
// document.getElementById("number").innerHTML = number

// var user_name = prompt("คุณชื่ออะไร")
// console.log("Hello" + " " + user_name)
// document.getElementById("user_name").innerHTML = user_name

// console.log(typeof 1)
// console.log(typeof "1")
// console.log(1 == "1")
// console.log(2 === "2")

// var let_value = prompt("Enter a number")

// if(let_value > 15){
//     console.log("True")
//     document.getElementById("number").innerHTML = "Hello"
//     document.getElementById("number1").innerHTML = "Hello"
// }
// else if(let_value < 15){
//     console.log("False")
//     document.getElementById("number").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/PGZ7QiKdumo?si=NXAlrWHY3H8K750K\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
// }

// let score = prompt("Enter your score")
// document.getElementById("score").innerHTML = score
// if (score > 100) {
//     document.getElementById("result").innerHTML = "คะแนนเกิน 100"
//     document.getElementById("result").style.color = "red"
// }
// else if (score >= 80) {
//     document.getElementById("result").innerHTML = "A"
// }else if (score >= 70) {
//     document.getElementById("result").innerHTML = "B"
// }else if (score >= 60) {
//     document.getElementById("result").innerHTML = "C"
// }else if (score >= 50) {
//     document.getElementById("result").innerHTML = "D"
// }else{
//     document.getElementById("result").innerHTML = "F"
//     document.getElementById("result").style.color = "red"
// }

// โปรแกรมคำนวนสินค้า
// let qty = prompt("จำนวนนสินค้า")
// var total = 0
// if(qty > 0){
//     for(let i = 1; i < Number(qty) + 1; i++)
//         {
//             console.log("สินค้าชิ้นที่ : " + i)
//             let price = prompt("ราคาสินค้า " + i)
//             console.log("ราคา : " + price + " บาท")
//             document.getElementById("price_list").innerHTML += "สิ้นค้าชิ้นที่ : " + i + " ราคา : " + price + " บาท<br/>"
        
//             total += parseFloat(price)
//         }
//         console.log("รวมทั้งหมด : " + total + " บาท")
//         document.getElementById("total_price").innerHTML = "รวมทั้งหมด : " + total + " บาท"
// }else{
//     document.getElementById("price_list").innerHTML = "ไม่พบรายการสินค้า"
// }

// โปรแกรมทาย หัว ก้อย
// let round = prompt("จำนวนรอบที่ต้องการ")
// let answer_coist = ""
// let coist = Math.floor(Math.random()*2)
// let answer_user = prompt("กรุณาเลือก หัว หรือ ก้อย")

// if(coist == 0){
//     console.log("คุณเลือก : " + answer_user + " สุ่มได้ : หัว")
//     answer_coist = "หัว"
// }
// else if(coist == 1){
//     console.log("คุณเลือก : " + answer_user + " สุ่มได้ : ก้อย")
//     answer_coist = "ก้อย"
// }

// if(answer_user == answer_coist){
//     console.log("ยินดีด้วย : คุณทายถูก")
// }else{
//     console.log("เสียใจด้วย : คุณทายผิด")
// }

// for(let i = 1; i <= round; i++){
//     console.log("รอบที่ : " + i)
//     let answer = prompt("กรุณาเลือก หัว หรือ ก้อย")
//     console.log("คุณเลือก : " + answer)
// }