var arr = new Array();
 function addData(){
   getData()
   arr.push({
     did:document.getElementById('did').value,
     dname:document.getElementById('dname').value,
   })
   localStorage.setItem("localData1",JSON.stringify(arr))
   showData()
 }
 function getData(){
   var str = localStorage.getItem("localData1");
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
     var name = arr[i].dname.toLowerCase()
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
     empid.innerHTML = filterdData[i].did;
     empname.innerHTML = filterdData[i].dname;
   }

 }
 function deleteData(){
   var val = document.getElementById("deletename").value
   getData();
   var afterDel = []
   for(i=0;i<arr.length;i++){
     val = val.toLowerCase()
     var name = arr[i].dname.toLowerCase()
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
       empid.innerHTML = afterDel[i].did;
       empname.innerHTML = afterDel[i].dname;
     }
     localStorage.removeItem("localData1")
     localStorage.setItem("localData1",JSON.stringify(afterDel))
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
     empid.innerHTML = arr[i].did;
     empname.innerHTML = arr[i].dname;
   }
 }


showData()
