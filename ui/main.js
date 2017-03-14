console.log('Loaded!');

var img = document.getElementById('madi');
img.onclick = function(){
   var interval = setinterval(moveright,50);  
};

function moveright(){
    marginleft = marginleft + 1;
    img.style.marginLeft = marginleft +'px';
}

var marginleft = 0;

