const abc = new XMLHttpRequest();
abc.open("GET" , "https://restcountries.com/v3.1/all");
abc.send();

abc.responseType = "json";
abc.onload = function displayResult(){
    const countriesFlag = abc.response;
    for (i = 0; i < countriesFlag.length; i++)
    console.log(countriesFlag[i].flags);
};