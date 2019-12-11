const winDownload = "https://allbuilds.blob.core.windows.net/wanshitong/downloads/librarian Setup 0.0.31.exe";
const osxDownload = "https://allbuilds.blob.core.windows.net/wanshitong/downloads/librarian-0.0.31.dmg";


document.addEventListener('DOMContentLoaded', function(){ 
    setDownloadButton();

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