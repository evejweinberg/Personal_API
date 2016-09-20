$.getJSON("../../data/ExpenseExport.json", function(data) {


  var dataArray = data.expenses
  var tempCost = 0
    //do I need to start with one item in the array? I'd rather not
  var arrayOfObjects = [{
    "category": "nothing",
    "cost": 0
  }]


  // take entire data array and go through it one by one

  for (var n in dataArray) {
    // console.log('checking array')
    //'exists' in our new array = no
    var exists = "no";
    //look at each object in the new array, and compare it to the whole array.
    for (var i in arrayOfObjects) {
      // console.log('checking')
      if (arrayOfObjects[i].category === dataArray[n].category) {
        //if the Newarray's category matches the data's category, then
        //update the newArray's cost
        // arrayOfObjects[i].cost = arrayOfObjects[i].cost + parseInt(dataArray[n].cost);
        // console.log('new cost ' + arrayOfObjects[i].cost)

        // exists = 1; // stating that the category exists in the array
        // break; // stopping the for loop. no need to continue.
      }
    }
    if (exists === "no") {

      // console.log('no matches, make a new category')
      // console.log('new category ' + dataArray[i].category) // in case where we couldn't find the category in the array
      var newCategory = {
        "category": dataArray[n].category,
        "cost": 0,
      };
      arrayOfObjects.push(newCategory); // adding the new category object to the array

    }


  }
  //remove that first dunny nothing one I started with
  delete arrayOfObjects[0]
  console.log(arrayOfObjects)

  //once you've made the array, now fill the cost parameter

  for (x in arrayOfObjects) {
    for (g in dataArray) {
      if (dataArray[g].category === arrayOfObjects[x].category) {
        arrayOfObjects[x].cost += parseInt(dataArray[g].cost)
      }
    }
  }

  console.log(arrayOfObjects)

  return arrayOfObjects
});
