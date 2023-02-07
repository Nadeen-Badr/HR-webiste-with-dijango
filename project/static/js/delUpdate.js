        /*Functions For update data*/
       var table = document.getElementById("table"),rIndex;
       for(var i=0;i<table.rows.length;i++){
         table.rows[i].onclick=function(){
         rIndex=this.rowIndex;
         console.log(rIndex);

         document.getElementById("name").value=this.cells[0].innerHTML;
         document.getElementById("ide").value=this.cells[1].innerHTML;
         document.getElementById("email").value=this.cells[2].innerHTML;
         document.getElementById("address").value=this.cells[3].innerHTML;
         document.getElementById("phone num").value=this.cells[4].innerHTML;
         document.getElementById("gen").value=this.cells[5].innerHTML;
         document.getElementById("marital_status").value=this.cells[6].innerHTML;
         document.getElementById("vac num").value=this.cells[7].innerHTML;
         document.getElementById("ap vac num").value=this.cells[8].innerHTML;
         document.getElementById("sal").value=this.cells[9].innerHTML;
         document.getElementById("date").value=this.cells[10].innerHTML;
         };
     }
     
     function editRow(){
      table.rows[rIndex].cells[0].innerHTML= document.getElementById("name").value;
      table.rows[rIndex].cells[2].innerHTML= document.getElementById("email").value;
      table.rows[rIndex].cells[3].innerHTML= document.getElementById("address").value;
      table.rows[rIndex].cells[4].innerHTML= document.getElementById("phone num").value;
      table.rows[rIndex].cells[6].innerHTML= document.getElementById("marital_status").value;
      table.rows[rIndex].cells[7].innerHTML= document.getElementById("vac num").value;
      table.rows[rIndex].cells[8].innerHTML= document.getElementById("ap vac num").value;
      table.rows[rIndex].cells[9].innerHTML= document.getElementById("sal").value;
      table.rows[rIndex].cells[10].innerHTML= document.getElementById("date").value;
};

/*Functions For delete data*/
 var table = document.getElementById("table"),rIndex;
       for(var i=0;i<table.rows.length;i++){
         table.rows[i].onclick= function(){
         rIndex=this.rowIndex;
         console.log(rIndex);

         document.getElementById("name").value=this.cells[0].innerHTML;
         document.getElementById("ide").value=this.cells[1].innerHTML;
         document.getElementById("email").value=this.cells[2].innerHTML;
         document.getElementById("address").value=this.cells[3].innerHTML;
         document.getElementById("phone num").value=this.cells[4].innerHTML;
         document.getElementById("gen").value=this.cells[5].innerHTML;
         document.getElementById("marital_status").value=this.cells[6].innerHTML;
         document.getElementById("vac num").value=this.cells[7].innerHTML;
         document.getElementById("ap vac num").value=this.cells[8].innerHTML;
         document.getElementById("sal").value=this.cells[9].innerHTML;
         document.getElementById("date").value=this.cells[10].innerHTML;
         };
     }
    
    function deleteRow()
    {
        table.deleteRow(rIndex);
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("address").value="";
        document.getElementById("phone num").value="";
        document.getElementById("marital_status").value="";
        document.getElementById("vac num").value="";
        document.getElementById("ap vac num").value="";
        document.getElementById("sal").value="";
        document.getElementById("date").value="";
        return confirm ('Are you sure wanna delete this Employee ?');
    };