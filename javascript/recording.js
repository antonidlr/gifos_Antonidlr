const videoWidget = document.getElementById('record');
const imgPreview = document.getElementById('preview');
const videoRecording = document.getElementById('startrecording');
//const stopRecordingVideo = document.getElementById('stoprecord');
let recorder;
let videoStream = null;
let videoRecorder = null;
let gifRecorder = null;
let image = document.getElementById('preview');
let video = document.getElementById('record2');
const repeatVideo = document.getElementById('repeat');


// 1. Start camera Video

const startVideo = stream => {
    videoWidget.srcObject = stream;
    videoWidget.play();
    
};

document.getElementById('startcamera').onclick = async () => {
    //this.disabled = true;
    const options = {
        audio: false,
        video: { width: 838, height: 434 }
        
    };
    
    videoStream = await navigator.mediaDevices.getUserMedia(options);
    
    //2. Capture Video
    
    gifRecorder = RecordRTC(videoStream, {
        type: 'gif',
        frameRate: 1,
        quality: 5,
        width: 360,
        hidden: 240,
    });
    
    videoRecorder = RecordRTC(videoStream, {
        type: 'video',
        video: { width: 838, height: 434 }
        
    })
    
    document.getElementById('creategif').style.display = 'none';
    document.getElementById('lastwindow').style.display = 'none';
    document.getElementById('bar-guifos').style.display = 'none';
    document.getElementById('capturar').style.display = 'block';
    
    startVideo(videoStream);
    
    videoRecording.addEventListener('click', () => {
        
        addStop();
        const stopRecordingVideo = document.getElementById('stoprecord');
        const stopRecordingVideoS = document.getElementById('stoprecord2');
        gifRecorder.startRecording();
        videoRecorder.startRecording();
        
        function stopRecVideo() { 
            
            gifRecorder.stopRecording(stopRec);  
            videoRecorder.stopRecording(stopRec2);
            document.getElementById('capturar').style.display = 'none';
            document.getElementById('preview-video').style.display = 'block';
            videoStream.getVideoTracks()[0].stop();
            videoWidget.srcObject = null;
            
        }

        
            setTimeout(function(){ 
                if(videoRecorder != null) {
                stopRecVideo();
                }
            }, 6000);

       
        stopRecordingVideo.addEventListener('click', () => {
            stopRecVideo();
        } );
        
        stopRecordingVideoS.addEventListener('click', () => {
            stopRecVideo();
        });
        
    });    
};

document.getElementById('cancel').addEventListener('click', () => {
    
    window.location.href = '../html/index.html';
});

document.getElementById('forw').onclick = () => {

    video.play();
};

repeatVideo.addEventListener('click', () => {
    window.location.href = '../html/crear_gifos.html';
});


//3. Stop Video
const stopRec2 = (stream) => {
    video.src = URL.createObjectURL(videoRecorder.getBlob());
    videoRecorder.destroy();
    videoRecorder = null;
};

const stopRec = async (stream) => {
    
    image.src = URL.createObjectURL(gifRecorder.getBlob());

    await sendGif(gifRecorder.getBlob());
    gifRecorder.destroy();
    gifRecorder = null;
    
};


//4. Repeat Capture - Go to 2.

//4.1 Subir Guifo


const uploadGuifo = document.getElementById('upload-gif');
const cancelGuifo = document.getElementById('cancel-upload');


uploadGuifo.addEventListener('click', () => {
    
    document.getElementById('preview-video').style.display = 'none';
    document.getElementById('addGifo').style.display = 'block';
    console.log(image.src);

    setTimeout(function(){ 
        window.location.href = '../html/crear_gifos.html';}, 40000);
    
    
});

cancelGuifo.onclick = () => {
    alert("Has cancelado la creación de tu GIF");
    window.location.href = '../html/crear_gifos.html';
}

const uploadStatus = (status) => {
    return status;
};



//5. Play Gifo Video


//6. POST to Giphy


const sendGif = async gif => {
    
    const data = new FormData();
    data.append('file', gif, 'mygifo.gif');
    
    let response = await fetch("https://upload.giphy.com/v1/gifs?api_key=KdUn87AF0ZlimGbYnmrFRu2QQ8vTxfrZ", {
    method: 'POST',
    body: data
    });

    const newGif = response.url;
    console.log (newGif);
   
    const dataResponse = await response.json();

    console.log(response.status);

    if (response.status === 200) {

        //guardar en local storage
        localStorage.setItem("misgifos", saveLocal(dataResponse.data.id));
        
    }
    else {
        alert ('No se ha podido cargar tu gif. Vuelve a intentarlo');
    }

};


// 6.1 Guardar en Local Storage

const saveLocal = (gif) => {
    const img = document.createElement('img');
    img.setAttribute("width", "288px");
    img.setAttribute("height", "298px");
    img.src = `https://media.giphy.com/media/${gif}/giphy.gif`;
    const box = document.getElementById('mis-guifos');
    //box.appendChild(img);
    box.insertBefore(img,box.firstChild);
    return box.innerHTML;
}

const myGifoContainer = document.getElementById('mis-guifos');
myGifoContainer.innerHTML = localStorage.getItem("misgifos");


//7. Container botones

const clearContainer = (e) => {
    const content = document.querySelector(e);
    content.innerHTML = "";
};

const addStop = () => {
    clearContainer('.container');
    const content = document.querySelector('.container');
    const input = document.createElement('input');
    const div = document.createElement('div');
    const firstBtn = document.createElement('button');
    const secondBtn= document.createElement('button');
    const img = document.createElement('img');
    const textTitle = document.getElementById('title');
    input.value = "00:00:00:00";
    
    div.className = 'createbutton2';
    input.className = 'recording2';
    firstBtn.classList.add("rectangle-1","bcancel2", "hover-rec");
    secondBtn.className = ('rectangle-1');
    secondBtn.classList.add("hover-rec");
    secondBtn.setAttribute("id","stoprecord");
    firstBtn.setAttribute("id","stoprecord2");
    secondBtn.textContent = ("Listo");
    img.className = 'recording';
    img.src = "/assets/recording_dark.svg";
    textTitle.innerHTML = "Capturando tu Guifo";
    
    content.appendChild(input);
    content.appendChild(div);
    div.appendChild(firstBtn);
    div.appendChild(secondBtn);
    firstBtn.appendChild(img);
};

const addPreview = () => {
    clearContainer('.container');
    const content = document.querySelector('.container');
    const input = document.createElement('input');
    const div = document.createElement('div');
    const divSecond = document.createElement('div');
    const divThird = document.createElement('div');
    const divFourth = document.createElement('div');
    const firstBtn = document.createElement('button');
    const secondBtn = document.createElement('button');
    const thirdBtn = document.createElement('button');
    const img = document.createElement('img');
    
    
    div.className = 'createbutton3';
    divSecond.className = 'bar_play';
    divThird.className = 'forward_bar';
    divFourth.className = 'win2';
    
    input.className = 'recording2';
    
    firstBtn.classList.add("rectangle-1","bcancel");
    firstBtn.textContent = ('Repetir Captura');
    secondBtn.className = ('rectangle-1');
    secondBtn.textContent = ("Subir Guifo");
    thirdBtn.className = 'forward';
    
    img.src = "/assets/forward.svg";
    img.alt = "forward";
    
    
    content.appendChild(divFourth);
    divFourth.appendChild(divSecond);
    divFourth.appendChild(div);
    
    divSecond.appendChild(input);
    divSecond.appendChild(thirdBtn);
    thirdBtn.appendChild(img);
    divSecond.appendChild(divThird);
    
    div.appendChild(firstBtn);
    div.appendChild(secondBtn);
    
};

const addGif = () => {
    clearContainer('#vid');
    const content = document.querySelector('.container');
    const contentG = document.getElementById('vid');
    const div = document.createElement('div');
    const firstBtn = document.createElement('button');
    
    div.className = 'createbutton4';
    firstBtn.classList.add("rectangle-1","cr2");
    
    content.appendChild(firstBtn)
};


// Time Counter Video Window





