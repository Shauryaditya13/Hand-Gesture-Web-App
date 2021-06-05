prediction1="";
prediction2="";

Webcam.set({
width:350,height:300,image_format:'png',png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_url+"'>";
    });
}

console.log("ml5 version"+ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6X6EE3RXd/model.json",modelloaded);

function modelloaded() {
    console.log("modelloaded");
}

function speak() {
    var synth=window.speechSynthesis;
    speakdata1="The first prediction is " + prediction1;
    speakdata2="The second prediction is " + prediction2;
    var utterance=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterance);
}

function check() {
    img=document.getElementById("capture_image");
    classifier.classify(img,getresult);
}

function getresult(error,results) {
    if(error) {
        console.log(error)
    }
    else {
        console.log(results)
        prediction1=results[0].label;
        prediction2=results[1].label;
        document.getElementById("result_hand_gesture_name1").innerHTML=prediction1;
        document.getElementById("result_hand_gesture_name2").innerHTML=prediction2;
        speak();

        if(prediction1=="Amazing") {
            document.getElementById("update_emoji1").innerHTML="&#128076;";
        }

        if(prediction1=="Victory") {
            document.getElementById("update_emoji1").innerHTML="&#9996;";
        }

        if(prediction1=="Best Of Luck") {
            document.getElementById("update_emoji1").innerHTML="&#128077;";
        }

        if(prediction1=="Namaste") {
            document.getElementById("update_emoji1").innerHTML="&#128079;";
        }

        if(prediction1=="You Lost") {
            document.getElementById("update_emoji1").innerHTML="&#128078;";
        }


        if(prediction2=="Amazing") {
            document.getElementById("update_emoji2").innerHTML="&#128076;";
        }

        if(prediction2=="Victory") {
            document.getElementById("update_emoji2").innerHTML="&#9996;";
        }

        if(prediction2=="Best Of Luck") {
            document.getElementById("update_emoji2").innerHTML="&#128077;";
        }

        if(prediction2=="Namaste") {
            document.getElementById("update_emoji2").innerHTML="&#128079;";
        }
        
        if(prediction1=="You Lost") {
            document.getElementById("update_emoji1").innerHTML="&#128078;";
        }
    }
}
