const abc = new XMLHttpRequest();
abc.open("GET" , "https://restcountries.com/v3.1/all");
abc.send();

abc.responseType = "json";
abc.onload = function displayResult(){
    const countriesName = abc.response;
    for (i = 0; i < countriesName.length; i++){
    console.log(countriesName[i].name.common);
    console.log(countriesName[i].population);
    console.log(countriesName[i].region);
    console.log(countriesName[i].subregion);
    }
};