// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let average = 0;
  for(let i=0;i<data.length;i++) {
    average += data[i].price
  }
  average = average / data.length
  console.log("The average price is $" + average.toFixed(2))
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let listProducts = [];
  for(let i=0;i<data.length;i++) {
    if (data[i].price < 18 && data[i].price > 14) {
      listProducts.push(data[i]);
    }
  }
 listProducts.forEach(function(element){
   console.log(element.title);
 });
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let listProducts = [];
  for(let i=0;i<data.length;i++) {
    if(data[i].currency_code == "GBP") {
      listProducts.push({name:data[i].title, price:data[i].price, currency_code:data[i].currency_code})
    }
  }
  listProducts.forEach(function(element){
    console.log(element.name);
  });
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let listProducts = [];
  for(let i=0;i<data.length;i++) {
    for(let j=0;j<data[i].materials.length;j++){
      if(data[i].materials[j]=="wood"){
        listProducts.push({name:data[i].title, materials:data[i].materials});
      }
    }
  }
  listProducts.forEach(function(element){
    console.log(element.name);
  });
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let listProducts = [];
  for(let i=0;i<data.length;i++) {
      if(data[i].materials.length>=8){
        data[i].materials_number = data[i].materials.length;
        listProducts.push({name:data[i].title, materials_number:data[i].materials_number, materials:data[i].materials});
    }
  }
  listProducts.forEach(function(element){
    console.log(element.name);
    for(let i =0;i < element.materials.length; i++){
      console.log("- " + element.materials[i])
    }
  });
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let counts = {}
  for(let i=0;i<data.length;i++) {
    if(counts[data[i].who_made]){
    counts[data[i].who_made]+=1
  } else {
    counts[data[i].who_made]=1
  }
  }
console.log(counts.i_did + " items were made by their sellers.")
}
