//setup var
var productName=document.getElementById("productName")

var productPrice=document.getElementById("productPrice")

var productCategory=document.getElementById("productCategory")

var productDesc=document.getElementById("productD")

var button=document.getElementById("btns")

var tBody=document.getElementById("tbody")

var searchInput=document.getElementById("searchInput")



var allProduct=[]

var currentIndex=""
//check localStorage
if(JSON.parse(localStorage.getItem("allProduct"))!=null){
    allProduct=JSON.parse(localStorage.getItem("allProduct"))
    showProduct()
}

button.addEventListener("click",function(e){


if(button.innerHTML=="update now"){//update mode
upDate()

    
}
else{// add mode
displayproduct()

}
showProduct()
ref()
})

//add product
function displayproduct(){
var productObj={
name:productName.value ,
price:productPrice.value,
category:productCategory.value,
desc:productDesc.value
}
allProduct.push(productObj)
localStorage.setItem("allProduct",JSON.stringify(allProduct))
}

function showProduct(){
var box=""
for(i=0;i<allProduct.length;i++){
box+=`<tr>
    <td><button class=" btn btn-danger" onclick="deleteProduct(${i})"> delete</button></td>
    <td><button class=" btn btn-warning" onclick="replace(${i})">update</button></td>
    <td> ${allProduct[i].name}</td>
    <td>${allProduct[i].price}</td>
    <td>${allProduct[i].category}</td>
    <td>${allProduct[i].desc}</td>             
</tr>`
}
tBody.innerHTML=box

}
//delete product

function deleteProduct(index){
allProduct.splice(index,1)
localStorage.setItem("allProduct",JSON.stringify(allProduct))
showProduct()
}




//clear valiue data
function ref(){
var all= Array.from(document.querySelectorAll(".form-control"))
for(i=0;i<=3;i++){
all[i].value=""
}
}
 //search product
searchInput.addEventListener("keyup",function (){
    var box=""
    for(i=0;i<allProduct.length;i++){
        if(allProduct[i].name.toLowerCase().includes(searchInput.value.toLowerCase())){
        box+=`<tr>
            <td><button class=" btn btn-danger" onclick="deleteProduct(${i})"> delete</button></td>
            <td><button class=" btn btn-warning" onclick="replace(${i})">update</button></td>
            <td> ${allProduct[i].name}</td>
            <td>${allProduct[i].price}</td>
            <td>${allProduct[i].category}</td>
            <td>${allProduct[i].desc}</td>             
        </tr>`
        }
    }
    tBody.innerHTML=box



})


// content input
function replace(index){
productName.value=allProduct[index].name
productPrice.value=allProduct[index].price
productCategory.value=allProduct[index].category
productDesc.value=allProduct[index].desc
button.innerHTML="update now"
currentIndex=index
}


//change input
function upDate(){
var productObj={
name:productName.value ,
 price:productPrice.value,
category:productCategory.value,
desc:productDesc.value
 }
allProduct.splice(currentIndex,1,productObj)
localStorage.setItem("allProduct",JSON.stringify(allProduct))
button.innerHTML="display product "


}

function valiDateInput(input,regexName,index){
var alert=document.querySelectorAll("#name-alert")
    if(regexName.test(input.value)){
        button.removeAttribute("disabled")
         
        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
        alert[index].classList.add("d-none")
        
        }
        else{
        
        input.classList.remove("is-valid")
        input.classList.add('is-invalid')
        alert[index].classList.remove("d-none")
        
        }
        


}





// productName.addEventListener("keyup",function(){
//     var regexName=/^[A-Z][a-z]{3,8}$/
//     var input1=document.getElementById('productName')
// valiDateInput(input1,regexName,0)

// })


// productPrice.addEventListener("keyup",function(){
//     var regexName=/^[0-9]{2,8}$/
//     var input2=document.getElementById('productPrice')
// valiDateInput(input2,regexName,1)

// })

// productCategory.addEventListener("keyup",function(){
//     var regexName=/^(phone|laptop|tv|pc)$/
//     var input3=document.getElementById('productCategory')
// valiDateInput(input3,regexName,2)

// })

// productDesc.addEventListener("keyup",function(){
//     var regexName=/^[a-z]{10,300}$/
//     var input4=document.getElementById('productD')
// valiDateInput(input4,regexName,3)

// })








//solve anthor
var allIn = Array.from(document.querySelectorAll(".form-control"));
var regexArr = [
  /^[A-Z][a-z]{3,8}$/, 
  /^[0-9]{2,8}$/,
  /^(phone|laptop|tv|pc)$/, 
  /^[a-z]{10,300}$/ 
];


allIn.forEach((input, index) => {
  input.addEventListener("keyup", function (e) {
    valiDateInput(e.target, regexArr[index], index);
  });
});
