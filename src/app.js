
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
                        var htmlstr = XLSX.write(wb,{sheet:"sheet no1", type:'binary',bookType:'html'});
                        $('#wrapper')[0].innerHTML += htmlstr;
                }
  })
})




