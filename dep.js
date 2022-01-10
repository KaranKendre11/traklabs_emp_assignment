
  var arr = new Array();
  var entires = 4;

   function addData(){
     getData();
     arr.push({
       pid:Math.floor(Math.random() * 101),
       pname:document.getElementById('pname').value,
       page:document.getElementById('page').value,
     })
     localStorage.setItem("localDatax",JSON.stringify(arr))
     showData()
   }
   function getData(){
     var str = localStorage.getItem("localDatax");
     if(str!=null){
         arr = JSON.parse(str);
       }
   }

// IMPLEMENTATION FOR SEARCHING DATA IN TABLE
   function searchTable(){
     var value = document.getElementById('searchname').value
     getData()
     var filterdData =[]
     for(var i=0;i<arr.length;i++){
       value = value.toLowerCase()
       var name = arr[i].page.toLowerCase()
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
      // var empid = r.insertCell();
       var empname = r.insertCell();
       var empage = r.insertCell();
      // empid.innerHTML = filterdData[i].pid;
       empname.innerHTML = filterdData[i].pname;
       empage.innerHTML = filterdData[i].page;

     }

   }

//IMPLEMENTATION FOR DELETING DATA FROM THE TABLE
   function deleteData(i){
     var val = arr[i].pname
     getData();
     var afterDel = []
     for(i=0;i<arr.length;i++){
       val = val.toLowerCase()
       var name = arr[i].pname.toLowerCase()
       if(!name.includes(val)){
         afterDel.push(arr[i])
       }
       }
    /*   var tbl = document.getElementById("myEmpT")
       var x = tbl.rows.length
       while(--x){
         tbl.deleteRow(x)
       }
       for(i =0;i<afterDel.length;i++){
         var r = tbl.insertRow();
         var empid = r.insertCell();
         var empname = r.insertCell();
         var empage = r.insertCell();
         var eact = r.insertCell();
         empid.innerHTML = afterDel[i].pid;
         empname.innerHTML = afterDel[i].pname;
         empage.innerHTML = afterDel[i].page;
         eact.innerHTML = '<button onclick="deleteData('+i+')" name = "DELETE">Delete</button>'

       } */
       localStorage.removeItem("localDatax")
       localStorage.setItem("localDatax",JSON.stringify(afterDel))
       moveFirst()
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
    //   var empid = r.insertCell();
       var empname = r.insertCell();
       var empage = r.insertCell();
      var eact = r.insertCell();
    //   empid.innerHTML = arr[i].pid;
       empname.innerHTML = arr[i].pname;
       empage.innerHTML = arr[i].page;
       eact.innerHTML = '<button onclick="showForm('+i+')"name="EDIT">Edit</button><button onclick="deleteData('+i+')" name = "DELETE">Delete</button>'
     }
   }

   // IMPLEMENTATION OF PAGINATION CONCEPT
   function showPagination(start,end){
     getData();
     var tbl = document.getElementById("myEmpT")
     var x = tbl.rows.length
     while(--x){
       tbl.deleteRow(x)
     }
     for(var i =start;i<end;i++){
       var r = tbl.insertRow();
  //     var empid = r.insertCell();
       var empname = r.insertCell();
       var empage = r.insertCell();
        var eact = r.insertCell();
  //     empid.innerHTML = arr[i].pid;
       empname.innerHTML = arr[i].pname;
       empage.innerHTML = arr[i].page;
       eact.innerHTML = '<button onclick="showForm('+i+')"name="EDIT">Edit</button><button onclick="deleteData('+i+')" name = "DELETE">Delete</button>'
     }
   }

   var currentpage=0
   function moveFirst(){
     showPagination(0,2)
     currentpage=0
   }
   function moveNext(){
     currentpage += 2
     if(currentpage >= arr.length-2){
       showPagination(arr.length-2,arr.length)
     }else{
       showPagination(currentpage,currentpage+2)
     }
   }
   function movePrev(){
     currentpage -=2
     if(currentpage < 2){
       showPagination(0,2)
       currentpage =0
     }else{
       showPagination(currentpage,currentpage+2)

     }
   }
   function  moveLast(){
     currentpage = arr.length-2
     showPagination(currentpage,arr.length)
   }

// IMPLEMENTATION FOR EDITING THE DATA
  var index = 0;
  function showForm(i){
    var form = document.getElementById("editForm")
    form.style.display = 'block';
    index = i
  }
  function editData(){
    getData();
    var newname = document.getElementById("upname").value;
    arr[index].pname = document.getElementById("upname").value
    arr[index].page = document.getElementById("upage").value
    localStorage.setItem("localDatax",JSON.stringify(arr))

    }
  function hideForm(){
    var form= document.getElementById("editForm")
    form.style.display = 'none';
  }

  // IMPLEMENTATION OF SORTING function
   function sortbyid(){
     getData();
     for(var i =0;i<arr.length;i++){
       for(var j = i+1;j<arr.length;j++){
         if(arr[i].pname > arr[j].pname){
           var temp = arr[i]
           arr[i] = arr[j]
           arr[j] = temp
         }
       }
     }
      localStorage.setItem("localDatax",JSON.stringify(arr))
      moveFirst()
   }

   function sortbyname(){
     getData();
     for(var i =0;i<arr.length;i++){
       for(var j = i+1;j<arr.length;j++){
         if(arr[i].page > arr[j].page){
           var temp = arr[i]
           arr[i] = arr[j]
           arr[j] = temp
         }
       }
     }
      localStorage.setItem("localDatax",JSON.stringify(arr))
      moveFirst()
   }


// DEFAULT FUNCTION TO RUN ON RELOAD OR LAUNCH
   moveFirst()
