console.log('Loaded!');

var img = document.getElementById('madi');
img.onclick = function(){
   var interval = setInterval(moveright,50);  
};

function moveright(){
    marginleft = marginleft + 1;
    img.style.marginLeft = marginleft +'px';
}

var marginleft = 0;

var button = document.getElementById('counter');

button.onclick = function(){

// make a request
var request = new XMLHttpRequest();

//Capture the response
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.Done){
        if(request.status === 200){
         var counter =  request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();
         console.log(counter);
        }
    }
};

//make request  to the web server

request.open('GET','http://chaitankris.imad.hasura-app.io/counter',true);
request.send(null);
    
}
