const inputs = document.querySelectorAll('input');
const placeholders = document.querySelectorAll('.placeholder');
console.log(inputs);
console.log(placeholders);

let contentFillArray = [];
let placeFillArray = [];

clickMe.addEventListener('click', function (event) {
  inputs.forEach(function (element) {
    contentFillArray = [...contentFillArray, element.value];
    console.log("fillarray after click", contentFillArray);
  })
  contentFillArray.forEach(function (element,index) {
    placeholders[index].innerHTML = contentFillArray[index];
    placeholders[index].className = "placeholder filled";
    console.log("placeholders", placeholders);
  })
});

//simplified version using only one foreach loop
// clickMe.addEventListener('click', function (event) {
//   inputs.forEach(function (element) {
//     placeholders[index].innerHTML = element.value;
//   });
// });