console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}
let Student={id:1,name:"ahmet"}
console.log(Student)
function save(ogrenci,puan=10)
{
    console.log(ogrenci.name+":"+puan);
}
save(Student,100)
let showProdut= function(id,...product)
{
    console.log(id);
    console.log(...product);
}
showProdut(3,["ahmet","mahmut","ali","veli"]);
console.log(Math.min(1,5,6,8,12,60,72,84))
//spread
let points=[1,5,6,8,12,60,72,84]
console.log(...points)
console.log(Math.max(...points))
//distructuring
let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryhigh,max]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(max)

function sameFunction([small1],number)
{
    console.log(small1)
}
sameFunction(populations)

let Category={id:2,name1:"yiyecek"}
console.log(Category.name1)
console.log(Category.id)