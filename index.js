const video = document.querySelector('.video'),
      playBtn = document.querySelector('.play_btn'),
      controlsPlaybtn = document.querySelector('.controls_play'),
      controlsPlayIcon = document.querySelector('.play_icon')
    //   progress = document.querySelector('.progress')
      progressContainer = document.querySelector('.progress_container')


//   Play & Pause Video

function toggleVideoStatus() {
    if (video.paused) {
        video.play()
        controlsPlayIcon.src = './Assets/svg/pause.svg'
        playBtn.style.display = 'none'
    } else {
        video.pause()
        controlsPlayIcon.src = './Assets/svg/play.svg'
        playBtn.style.display = 'block'
    }
}

playBtn.addEventListener('click', toggleVideoStatus)
video.addEventListener('click', toggleVideoStatus)
controlsPlaybtn.addEventListener('click', toggleVideoStatus)

// function updateProgress(e) {
//     const {duration, currentTime} = e.srcElement
//     const progressPercent = (currentTime / duration) * 100
//     progress.style.width = `${progressPercent}%`
// }
// video.addEventListener('timeupdate', updateProgress)

// function setProgress(e) {
//     const width = this.clientWidth
//     const clickX = e.offsetX
    
//     video.currentTime = (clickX / width) * 100
// }

// progressContainer.addEventListener('click', setProgress)

const progress = document.querySelector('#progress')
// const volume = document.querySelector('.controls_volume_range')
document.querySelector('.controls_volume_range').oninput = videoVolume
document.querySelector('.controls_volume_icon').onclick = volumeOff 


video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind; 

function progressUpdate() {
    let d = video.duration
    let c = video.currentTime
    progress.value = c / d * 100
}

function videoRewind() {
    let w = this.offsetWidth
    let o = event.offsetX
    video.currentTime = video.duration * o / w
}

function videoVolume() {
    let v = this.value 
    video.volume = v / 100
}
function volumeOff() {
    if (video.volume = 0) {
        video.volume = 50
    } else {
        video.volume = 0
    }
}