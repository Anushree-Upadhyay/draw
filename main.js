x = 0;
y = 0;

draw_circle = '';
draw_rectangle = '';

speechRecognition = window.webkitSpeechRecognition;
recognition = new speechRecognition();

function start(){
    document.getElementById("status").innerHTML = "The System is listening ...";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech has been recognized as " + content;
    if(content == "circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "The System has started drawing circle.";
        draw_circle = "set";
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "The System has started drawing rectangle.";
        draw_rectangle = "set";
    }
}

function setup(){
    canvas = createCanvas(900 , 600);
}

function draw(){
    if(draw_circle == "set"){
       radius = Math.floor(Math.random() * 200);
       circle(x,y,radius);
       document.getElementById("status").innerHTML = "The System has drawn a circle.";
       draw_circle = "";
    }
    if(draw_rectangle == "set"){
        rect(x,y,60,80);
        document.getElementById("status").innerHTML = "The System has drawn a rectangle.";
        draw_rectangle = "";
     }
}