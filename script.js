let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  let data = request.response;
  let result = JSON.parse(data);
  // filter method
  console.log("Print all contries in Asian Region using filter method");
  console.log(" ");
  const asia = result.filter((ele) => ele.region === "Asia");
  asia.forEach(val=>{console.log(` ${val.name.common}`);})
  

  // filter method
  console.log(" ");
  console.log(
    "Get all the countries with a population of less than 2 lakhs using Filter function"
  );
  
  const population = result.filter((ele) => ele.population < 200000);
  population.forEach(val=>{console.log(` ${val.name.common} , Population : ${val.population}`);})
  
// fprEach
console.log(" ");
  console.log(
    "Print the following details name, capital, flag, using forEach function"
  );
result.forEach(ele => {console.log(`ContryName : ${ele.name.common} , Capital : ${ele.capital} , Flag : ${ele.flags.png}`);
    
});
//reduce method
console.log(" ");
  console.log(
    "Print the total population of countries using reduce function"

  );

const TotalPopulation = result.reduce((acc,i)=>{return acc+i.population},0)
   console.log(`Total Population : ${TotalPopulation}`);

// filter method
console.log(" ");
  console.log(
    "Print the country that uses US dollars as currency"

  );
const usdollor = result.filter((ele)=> ele.currencies && ele.currencies.USD)
usdollor.forEach((value)=>console.log(value.name.common))
    
}
