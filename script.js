var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Miscellaneous/Target%20Store%20Locations.csv"
var targetAddresses = getColumn(url, 1);
var targetCounties = getColumn(url, 3);
var targetCities = getColumn(url, 2);
var targetStates = getColumn(url, 8)
var targetPostalCode = getColumn(url, 6)
var long =getColumn(url, 5)
var lat = getColumn(url, 4)

/*
This function takes a county in the US as a parameter and returns the Target stores in the county

Parameter: county {string} - a county in the US
Return: matches {list} - All the targets in the county

*/
function getTargetByCounty(county){
  var matches = []
    if (typeof county != "string"){
    matches.push("please enter a string")
  }
    
  for (var i in targetAddresses){
    if (targetCounties[i].toLowerCase().includes(county.toLowerCase())){
      matches.push(targetAddresses[i])
    } 
  }
    if(matches.length == 0){
      matches.push("There are no targets in your county")
    }


return matches
}
// console.log(getTargetByCounty("Albemarle"))


/*
This function takes a city in the US as a parameter and returns the Target stores in the city

Parameter: city {string} - a city in the US
Return: matches {list} - All the targets in the city

*/
function getTargetByCity(city){
    var matches = []
  
        if (typeof city != "string"){
    matches.push("please enter a string")
          return matches
  }

  for (var i in targetAddresses){
    if (targetCities[i].toLowerCase().includes(city.toLowerCase())){
      matches.push(targetAddresses[i])
    }
  }
        if(matches.length == 0){
      matches.push("There are no targets in your city")
  }


return matches
}
// console.log(getTargetByCity("517 E 117th Street"))


/*
This function takes an address of a target in the US, and returns what state the adress is in

Parameter: address {string} - a Target address in the US
Return: matches {list} - The state the address is in

*/
function getStateByAddress(address){
  var matches = []
          if (typeof address != "string"){
    matches.push("please enter a string")
          return matches
  }
  for (var i in targetAddresses){
    if (targetAddresses[i].toLowerCase().includes(address.toLowerCase())){
      matches.push(targetStates[i])
    } 
    
  }
        if(matches.length == 0){
      matches.push("There are no targets at this address")
  }
  
return matches
}
// console.log(getStateByAddress("312 connor drive"))


/*
This function takes a postal code and returns all the target addresses in that postal code

Parameter: postalCode {string} - a Postal Code in the US
Return: matches {list} - The addresses in the postal code

*/
function getTargetByZipcode(postalCode){
  var matches = []

    if (typeof postalCode == "string"){
    matches.push("Please enter a number not a string")
          return matches
  }
  for (var i in targetAddresses){
    if (postalCode == targetPostalCode[i]){
      matches.push(targetAddresses[i])
    }
        
    
    if(matches.length == 0){
      matches.push("There are no targets in your postal code")
  }
  
  }
  return matches
}
console.log(getTargetByZipcode(36801))


/*
This function takes a state and returns the average longitude and latitude of the Targets

Parameter: avgState {string} - a state in the US
Return: matches {list} - The avg Latitude, and longitude

*/
function avgLocation(avgState){
           if (typeof avgState != "string"){
          return "enter a string please"
  }
  
  
  var avgLong = 0
  var avgLat = 0
  var totalLat = 0
  var totalLong = 0
  var t = 0
  var matches = []
  
for(i in targetStates){
  if((targetStates[i].toLowerCase().includes(avgState.toLowerCase()))){
    totalLat += parseFloat(lat[i])
    totalLong += parseFloat(long[i])
    t++
  }
}
  avgLat = totalLat / t
  avgLong = totalLong / t

  if (totalLat == 0){
    return "Not a state"
  }

  return(avgLat + ", " + avgLong)
}
console.log(avgLocation("312 connor drive"))




//function is written by Blair McAvoy: https://github.com/b-mcavoy/datasets/blob/main/utils.js
function  getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }


