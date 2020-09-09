var colors=[];
var t=1;
arraygen(3);
var gamecolor =colorgen(3);
squaregen(3);

document.querySelector(".easy").addEventListener("click", function(){
    t=1;
    this.classList.add("select");
    this.style.backgroundColor=document.querySelector(".topbar").style.backgroundColor;
    document.querySelector(".hard").classList.remove("select");
    document.querySelector(".hard").style.backgroundColor="white";
    document.querySelector(".hard").style.color="black";
    if(document.querySelector("a").textContent==="PLAY AGAIN?"){
        document.querySelector("a").textContent="NEW COLORS";
        document.querySelector(".choose").textContent="CHOOSE!";
    }
    arraygen(3);
    gamecolor = colorgen(3);
    squaregen(3);
})

document.querySelector(".hard").addEventListener("click", function(){
    t=2;
    this.classList.add("select");
    document.querySelector(".easy").classList.remove("select");
    document.querySelector(".easy").style.backgroundColor="white";
    document.querySelector(".easy").style.color="black";
    if(document.querySelector("a").textContent==="PLAY AGAIN?"){
        document.querySelector("a").textContent="NEW COLORS";
        document.querySelector(".choose").textContent="CHOOSE!";
    }
    arraygen(6);
    gamecolor = colorgen(6);
    squaregen(6);
})


document.querySelector("#hover").addEventListener("mouseover", function(){
    this.style.backgroundColor="rgb(30, 110, 156)";
    this.style.color="rgb(255, 255, 255)";
})
document.querySelector("#hover").addEventListener("mouseout", function(){
    this.style.backgroundColor="rgb(255, 255, 255)";
    this.style.color="rgb(0, 0, 0)";
})

document.querySelector("#hover2").addEventListener("mouseover", function(){
    if(t==1){
    this.style.backgroundColor="rgb(30, 110, 156)";
    this.style.color="rgb(255, 255, 255)";
    }
    })
document.querySelector("#hover2").addEventListener("mouseout", function(){
    if(t==1){
        this.style.backgroundColor="rgb(255, 255, 255)";
        this.style.color="rgb(0, 0, 0)";
    }
})

document.querySelector("#hover1").addEventListener("mouseover", function(){
    if(t==2){
    this.style.backgroundColor="rgb(30, 110, 156)";
    this.style.color="rgb(255, 255, 255)";
    }
})
document.querySelector("#hover1").addEventListener("mouseout", function(){
    if(t==2){
        this.style.backgroundColor="rgb(255, 255, 255)";
        this.style.color="rgb(0, 0, 0)";
    }
})


function squaregen(l){

    document.querySelector("a").addEventListener("click", function(){
        document.querySelector(".choose").style.color="black";
        if(document.querySelector("a").textContent==="PLAY AGAIN?"){
            document.querySelector("a").textContent="NEW COLORS";
            document.querySelector(".choose").textContent="CHOOSE!";
        }
        arraygen(l);
        gamecolor=colorgen(l);
        squaregen(l);
    })

    document.querySelector(".color").textContent=gamecolor;
    if(l==3){
        var squares = document.querySelectorAll("#squareeasy");
        var blanksquares = document.querySelectorAll("#squarehard");
        for(var i=0;i<blanksquares.length;i++)
        {
            blanksquares[i].style.backgroundColor="rgb(29, 24, 24)";
        }
    }
    else{
        var squares = document.querySelectorAll(".square");
    }
    for(var i=0; i<l; i++){
       squares[i].style.backgroundColor=colors[i];
       squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor===gamecolor)
        {
            var hov=gamecolor;
            document.querySelector(".choose").textContent="CORRECT!";
            document.querySelector("a").textContent="PLAY AGAIN?"
            document.querySelector(".topbar").style.backgroundColor=gamecolor;
            document.querySelector(".select").style.backgroundColor=gamecolor;
            document.querySelector("#hover").addEventListener("mouseover", function(){
                this.style.backgroundColor=hov;
            })
            document.querySelector("#hover").addEventListener("mouseout", function(){
                this.style.backgroundColor="rgb(255, 255, 255)";
            })
            document.querySelector("#hover1").addEventListener("mouseover", function(){
                this.style.backgroundColor=hov;
            })
            document.querySelector("#hover1").addEventListener("mouseout", function(){
                if(t!=1){
                    this.style.backgroundColor="rgb(255, 255, 255)";
                }
            })
            document.querySelector("#hover2").addEventListener("mouseover", function(){
                this.style.backgroundColor=hov;
            })
            document.querySelector("#hover2").addEventListener("mouseout", function(){
                if(t!=2){
                    this.style.backgroundColor="rgb(255, 255, 255)";
                }
            })
           
            for(var j=0; j<l; j++){
                squares[j].style.backgroundColor=gamecolor;
            }
            for(var i=0;i<blanksquares.length;i++)
            {
                blanksquares[i].style.backgroundColor="rgb(29, 24, 24)";
            }
        }
        else
        {
            document.querySelector(".choose").textContent="TRY AGAIN";
            this.style.backgroundColor="rgb(29, 24, 24)";
        }
    });
}
}


function colorgen(t){
        return colors[Math.floor(Math.random()*t)];
}

function arraygen(num){
    for(var i=0;i<num;i++){
        var newcolor=randomcolor();
        colors[i]=newcolor;
    }
}

function randomcolor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}