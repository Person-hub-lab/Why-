Webcam.set({
 width:350,
 height:300,
 image_format : 'png',
 png_quality:100
});

function view(){
    save('image.png');
    console.log("Saved!");
}

function takeimage(){
  if (view == "https://teachablemachine.withgoogle.com/models/I0sK7blx_/"){};
}

function check(){
 save = view()
 class.classify(save, gotResult){

 }
}

function speak(){
if(hand1 = "Marvelous", hand2 = "amazing", hand3 = "good"){}
var speech = window.speechSynthesis;
var hands1 = hand1;
var hands2 = hand2;
var hands3 = hand3;

SpeechSynthesisUtterance = hands1,hands2,hands3;
speech.speak(SpeechSynthesisUtterance);
}

}

function gotResult(error, results){
if(error){
 console.log(error);
}
console.log(results);
}