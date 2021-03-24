var request1 =new XMLHttpRequest();
request1.open('GET','https://restcountries.eu/rest/v2/all',true);

request1.send();

request1.onload = function(){
    var data = JSON.parse(request1.response);

    for(let sample of data)
    {
        console.log(sample.name);
    }
}