var clr=undefined;

function calcTime(city, offset) {
    clr=setInterval(function(){
    console.log(city);
    // create Date object for current location
    d = new Date();
    
    // convert to msec
    // add local time zone offset 
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
    
    // return time as a string
    document.getElementById("time").innerHTML = "The local time in " + city + " is " + nd.toLocaleString();
},1000);
}

function toggletime(city, offset){
    console.log(city);
    // create Date object for current location
    d = new Date();
    
    // convert to msec
    // add local time zone offset 
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));

    n=document.createElement('p');
    n.innerHTML = "The local time in " + city + " is " + nd.toLocaleString();
    
    // return time as a string
    document.getElementById("collapse").appendChild(n) ;  
}

function clear(){
    document.getElementById("collapse").innerHTML="";
}

function current(){
    clr=setInterval(function(){
    a = new Date(); 
    date = a.toLocaleDateString();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br>on " + date;
    },1000);
}
//America.addEventListener('click',calcTime("LA","-7"));
//Japan.addEventListener('click',calcTime("tokyo","9"));
//India.addEventListener('click',calcTime("bhopal","5.5"));
America.addEventListener('click',function(){
    clearInterval(clr);
    calcTime("LA","-7");
});

Japan.addEventListener('click',function(){
    clearInterval(clr);
    calcTime("tokyo","9")
});

India.addEventListener('click',function(){
    clearInterval(clr);
    calcTime("bhopal","5.5")
});

toggle.addEventListener('click',function(){
    clear();
    toggletime("LA","-7");
    toggletime("tokyo","9");
    toggletime("bhopal","9");
})

your.addEventListener('click',function(){
    clearInterval(clr);
    current();
})