
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

// using Object.entries to get key, value data inside of the table
// and loop through them to add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)
var submit = d3.select("#filter-btn");

submit.on("click", function() {

 // Prevent the page from refreshing
 d3.event.preventDefault();

 // Select the input element and get the raw HTML node
 var inputElement = d3.select("#datetime");

 // Get the value property of the input element
 var inputValue = inputElement.property("value");

 //console.log(inputValue);
 //console.log(tableData);

 var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)

 console.log(filteredData);
});