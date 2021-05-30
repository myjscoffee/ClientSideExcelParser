
const excel = require("exceljs");
//Read a file
var workbook = new excel.Workbook();
workbook.xlsx.readFile("../assets/book.xlsx").then(function () {

const json = JSON.stringify(workbook.model);
console.log(json);


//Get sheet by Name
//var worksheet=workbook.getWorksheet('Sheet1');
             
//Get Lastrow
//svar row = worksheet.lastRow
             
//Update a cell
//row.getCell(1).value = 5;
 
//row.commit();
 
//Save the workbook
//return workbook.xlsx.writeFile("data/Sample.xlsx");
 
});  