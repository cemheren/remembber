const winDownload = "https://allbuilds.blob.core.windows.net/wanshitong/downloads/librarian Setup 0.0.35.exe";
const osxDownload = "https://allbuilds.blob.core.windows.net/wanshitong/downloads/librarian-0.0.35.dmg";


document.addEventListener('DOMContentLoaded', function(){ 
    setDownloadButton();
    setBlinkingOwl();

}, false);

function setDownloadButton() {
    var downloadLink = document.getElementById("download_link");
    var os = getOS();
    if(os == 'osx'){
        downloadLink.setAttribute("href", osxDownload);
        downloadLink.textContent = "Download for Mac";
    }else{
        downloadLink.setAttribute("href", winDownload);
        downloadLink.textContent = "Download for Windows";
    }
}

function setBlinkingOwl(){

    (function loop() {
        var rand = Math.round(Math.random() * (5000 - 2000)) + 2000;
        setTimeout(function() {
                
                var owl = document.getElementById("owl");
                owl.src = "../images/raw/Logo/Full/icon_owl_closed_eyes.png";
        
                setTimeout(() => {
                    owl.src = "../images/raw/Logo/Full/icon_owl.png";
                }, 100);

                loop();  
        }, rand);
    }());
}