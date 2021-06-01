const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})
// const excel = require("exceljs");

// var workbook = new excel.Workbook();
// workbook.xlsx.readFile("../assets/book.xlsx").then(function () {
// //Read a file
// const json = JSON.stringify(workbook.model);
// console.log(json);


// //Get sheet by Name
// //var worksheet=workbook.getWorksheet('Sheet1');
             
// //Get Lastrow
// //svar row = worksheet.lastRow
             
// //Update a cell
// //row.getCell(1).value = 5;
 
// //row.commit();
 
// //Save the workbook
// //return workbook.xlsx.writeFile("data/Sample.xlsx");
 
// });  