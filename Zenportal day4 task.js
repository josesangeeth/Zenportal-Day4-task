//compare two JSON have the same properties without order
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

if(_.isEqual(obj1, obj2)){
    console.log("same");
   }
else
{
    console.log("not same")
}   


const getcountries= () =>
{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://restcountries.eu/rest/v2/all');
    xhr.responseType = "json";

    xhr.onload = () =>
    {
        const data = xhr.response;
        //display all the country flags in console
        const countryflags = data.filter((x)=> x.flags);
        console.log(countryflags);

        // print all countries name, region, sub region and population
        const countryall = data.filter((x)=> x.name,x.region,x.population);
        console.log(countryall);
    }
  xhr.send();
}
getcountries();

