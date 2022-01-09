
  var arr = new Array();
   function addData(){
     getData()
     arr.push({
       pid:document.getElementById('pid').value,
       pname:document.getElementById('pname').value,
       page:document.getElementById('page').value,
     })
     localStorage.setItem("localData",JSON.stringify(arr))
     showData()
   }
   function getData(){
     var str = localStorage.getItem("localData");
     if(str!=null){
         arr = JSON.parse(str);
       }
   }

   function searchTable(){
     var value = document.getElementById('searchname').value
     getData()
     var filterdData =[]
     for(var i=0;i<arr.length;i++){
       value = value.toLowerCase()
       var name = arr[i].pname.toLowerCase()
       if(name.includes(value)){
         filterdData.push(arr[i])
       }
     }
     var tbl = document.getElementById("myEmpT")
     var x = tbl.rows.length
     while(--x){
       tbl.deleteRow(x)
     }
     for(i =0;i<filterdData.length;i++){
       var r = tbl.insertRow();
       var empid = r.insertCell();
       var empname = r.insertCell();
       var empage = r.insertCell();
       empid.innerHTML = filterdData[i].pid;
       empname.innerHTML = filterdData[i].pname;
       empage.innerHTML = filterdData[i].page;
     }

   }
   function deleteData(){
     var val = document.getElementById("deletename").value
     getData();
     var afterDel = []
     for(i=0;i<arr.length;i++){
       val = val.toLowerCase()
       var name = arr[i].pname.toLowerCase()
       if(!name.includes(val)){
         afterDel.push(arr[i])
       }
       }
       var tbl = document.getElementById("myEmpT")
       var x = tbl.rows.length
       while(--x){
         tbl.deleteRow(x)
       }
       for(i =0;i<afterDel.length;i++){
         var r = tbl.insertRow();
         var empid = r.insertCell();
         var empname = r.insertCell();
         var empage = r.insertCell();
         empid.innerHTML = afterDel[i].pid;
         empname.innerHTML = afterDel[i].pname;
         empage.innerHTML = afterDel[i].page;
       }
       localStorage.removeItem("localData")
       localStorage.setItem("localData",JSON.stringify(afterDel))
     }


   function showData(){
     getData();
     var tbl = document.getElementById("myEmpT")
     var x = tbl.rows.length
     while(--x){
       tbl.deleteRow(x)
     }
     for(i =0;i<arr.length;i++){
       var r = tbl.insertRow();
       var empid = r.insertCell();
       var empname = r.insertCell();
       var empage = r.insertCell();
       empid.innerHTML = arr[i].pid;
       empname.innerHTML = arr[i].pname;
       empage.innerHTML = arr[i].page;
     }
   }


  showData()
