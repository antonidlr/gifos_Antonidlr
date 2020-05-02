const videoWidget= document.getElementById('record');
const imgPreview = document.getElementById('preview');
const videoRecording = document.getElementById('startrecording');
//const stopRecordingVideo = document.getElementById('stoprecord');
let recorder;
let videoStream = null;
let videoRecorder = null;
let gifRecorder = null;
let image = document.getElementById('preview');
let video = document.getElementById('record2');


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
        quality: 10,
        width: 838,
        height: 434,
        hidden: 240,
    });

    videoRecorder = RecordRTC(videoStream, {
        type: 'video',
        video: { width: 838, height: 434 }

    })

    document.getElementById('creategif').style.display = 'none';
    document.getElementById('bar-guifos').style.display = 'none';
    document.getElementById('capturar').style.display = 'block';

    startVideo(videoStream);

    videoRecording.addEventListener('click', () => {
        addStop();
        const stopRecordingVideo = document.getElementById('stoprecord');
        gifRecorder.startRecording();
        videoRecorder.startRecording();
        stopRecordingVideo.addEventListener('click', () =>{
    
            gifRecorder.stopRecording(stopRec);  
            videoRecorder.stopRecording(stopRec2);
            document.getElementById('capturar').style.display = 'none';
            document.getElementById('preview-video').style.display = 'block';
        });

    });

    document.getElementById('cancel').onclick = () => {
        
        videoStream.getVideoTracks()[0].stop();
        videoWidget.srcObject = null;
    };
    
};

document.getElementById('forw').onclick = () => {
        
    video.play();
};


//3. Stop Video
const stopRec2 = (stream) => {
    video.src = URL.createObjectURL(videoRecorder.getBlob());
    videoRecorder.destroy();
    videoRecorder = null;
};

const stopRec = (stream) => {

    image.src = URL.createObjectURL(gifRecorder.getBlob());
    gifRecorder.destroy();
    gifRecorder = null;
    
};


//4. Repeat Capture - Go to 2.

//4.1 Subir Guifo


const uploadGuifo = document.getElementById('upload-gif');
uploadGuifo.onclick = () => {
    document.getElementById('preview-video').style.display = 'none';
    document.getElementById('addGifo').style.display = 'block';
};

const cancelGuifo = document.getElementById('cancel-upload');
cancelGuifo.onclick = () => {
    alert("Has cancelado la creación de tu GIF");
    window.location.href = '../html/crear_gifos.html';
}

//5. Play Gifo Video


//6. POST to Giphy


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

    div.className = 'createbutton2';
    input.className = 'recording2';
    firstBtn.classList.add("rectangle-1","bcancel2");
    secondBtn.className = ('rectangle-1');
    secondBtn.setAttribute("id","stoprecord");
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


