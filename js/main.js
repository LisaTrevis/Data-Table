var Andie = {
	name: "Andie",
	breed: "Border Collie",
	age: 4,
	sex: "female",
	fixed: true
}

var Brody = {
	name: "Brody",
	breed: "Golden Retriever",
	age: 8,
	sex: "male",
	fixed: true
}

var Cookie = {
	name: "Cookie",
	breed: "Boston Terrier",
	age: 4,
	sex: "female",
	fixed: false
}

var Duke = {
	name: "Duke",
	breed: "Bloodhound",
	age: 2,
	sex: "male",
	fixed: true
}

var Fifi = {
	name: "Fifi",
	breed: "Poodle",
	age: 12,
	sex: "female",
	fixed: true
}

var Gunther = {
	name: "Gunther",
	breed: "Chihuahua",
	age: 1,
	sex: "male",
	fixed: false
}

var Lexi = {
	name: "Lexi",
	breed: "Weimaraner",
	age: 9,
	sex: "female",
	fixed: true
}

var Maddie = {
	name: "Maddie",
	breed: "Labrador Retriever",
	age: 6,
	sex: "female",
	fixed: true
}

var Ranger = {
	name: "Ranger",
	breed: "Coonhound",
	age: 3,
	sex: "male",
	fixed: true
}

var Zorro = {
	name: "Zorro",
	breed: "Malamute",
	age: 10,
	sex: "male",
	fixed: true
}

function myFunction() {
  // Declare variables 
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
    	if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
    		found = true;
    	}
    }
    if (found) {
	 	tr[i].style.display = "";
	 	found = false;
    } else {
        tr[i].style.display = "none";
      }
    } 
  }

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function hide_show_table(col_name) {
	var checkbox_val = document.getElementById(col_name).value;
	
	if(checkbox_val == "hide") {
		var all_col = document.getElementsByClassName(col_name);
		
		for(var i = 0; i < all_col.length; i++) {
   		all_col[i].style.display = "none";
  	}
  	document.getElementById(col_name + "_head").style.display = "none";
  	document.getElementById(col_name).value = "show";
 }
	else {
  		var all_col=document.getElementsByClassName(col_name);
  		for(var i=0;i<all_col.length;i++) {
   			all_col[i].style.display="table-cell";
  		}
  		document.getElementById(col_name+"_head").style.display="table-cell";
  		document.getElementById(col_name).value="hide";
	}
}





