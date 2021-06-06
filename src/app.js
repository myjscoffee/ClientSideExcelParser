import * as XLSX from 'xlsx';
import './style.css';
let actualBtn,fileChosen;
window.addEventListener('load', () => {
   actualBtn = document.getElementById('actual-btn');

   fileChosen = document.getElementById('file-chosen');

   actualBtn.addEventListener('change', function(){
     const fileSelected=this.files[0];
    fileChosen.textContent = fileSelected.name

    const reader = new FileReader();
                reader.readAsArrayBuffer(fileSelected);
                reader.onload = function(e) {
                        var data = new Uint8Array(reader.result);
                        var wb = XLSX.read(data,{type:'array'});
                        console.log(wb['Strings']);
                        var htmlstr = XLSX.write(wb,{sheet:"Sheet1", type:'binary',bookType:'html'});
                        document.getElementById('wrapper').innerHTML += htmlstr;
                }
  })
})




