function addToCart(productName)
{
    console.log("Added:" + productName)
}
addToCart("elma")
addToCart("armut")
addToCart("kestane")

let sayHello=()=>{console.log("hello world")}

sayHello()
function addToCart2(productName,quantity,unitPrice)
{
    

}
let product3={productName:"karpuz",unitPrice:10,quantity:20}
function addToCart3(product)
{
    console.log("Ürün:"+product.productName)
    console.log("Adet"+product.quantity)
    console.log("Fiyat:"+product.unitPrice)
}
let product4={productName:"karpuz",unitPrice:10,quantity:20}
let product5={productName:"karpuz",unitPrice:10,quantity:20}
product4=product5
product4.productName="karpuz"
console.log(product5.productName)

let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)

function addToCart4(x)
{
    console.log(x)
}
let products=[
    {productName:"elma",unitPrice:10,quantity:20},
    {productName:"armut",unitPrice:10,quantity:20},
    {productName:"karpuz",unitPrice:10,quantity:20}
]
addToCart4(products)
function add(bisey,...numbers)
{
    let total=0
    numbers.forEach(element => 
        {
            total+=element
        }
        
    );
    console.log(total)
    console.log(bisey)
}
add(1,2,3,4,5,6,7)
let numbers=[1,2,3,5,8,9]
console.log(Math.max(...numbers))

let[icAnadolu,marmara,karadeniz]=["İÇANADOLU","MARMARA","KARADENİZ"]
console.log(marmara)
let product={newProductName,newQuantity,newUnitPrice}
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity})
={productName:"elma",unitPrice:5,quantity:6}

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)