const buttonAllow = document.querySelector('.buttons')
const showTextButtons = document.querySelector('.buttons button')
buttonAllow.addEventListener('click',()=>{
   
        showTextButtons.innerText = 'Đang Play...'
        if(music.play()){
            if(showTextButtons.innerText = 'Đang Play...'){
                playMusic.classList.add('bx-pause')
                playMusic.classList.remove('bx-play')
                posterPlay.classList.add('active')
                buttonAllow.addEventListener('click',()=>{
                    showTextButtons.innerText = 'PLAY'
                    playMusic.classList.remove('bx-pause')
                    playMusic.classList.add('bx-play')
                    posterPlay.classList.remove('active')
                    music.pause()
                })
            }
            music.play()
        }
        else{
            if(music.pause()){
            if(showTextButtons.classList.contains = 'PLAY'){
                buttonAllow.addEventListener('click',()=>{
                    showTextButtons.innerText = 'Đang Play...'
                    playMusic.classList.add('bx-pause')
                    playMusic.classList.remove('bx-play')
                    posterPlay.classList.add('active')
                    music.play()
                })
            }
            music.pause()
        }}

        playMusic.addEventListener('click',()=>{
           if(playMusic.classList.contains('bx-play')){       
               posterPlay.classList.remove('active')
            }
            else{
               showTextButtons.innerText = 'Đang Play...'
               
            }
        })       
})

//music vietnam button
const buttonsLeft = document.querySelector('#music_button-left')
const buttonsRight = document.querySelector('#music_button-right')
const boxSong = document.getElementsByClassName('pop__song-music')[0]

buttonsLeft.addEventListener('click',function(){
    boxSong.scrollLeft -= 330
})
buttonsRight.addEventListener('click',function(){
    boxSong.scrollLeft += 330
})


// buttonAllow.addEventListener('click',()=>{
//     showTextButtons.innerText = 'Đang Play...'
//     ClickPauseSong()
//     ClickPlaySong()
// })

// function ClickPauseSong(){
//     if(showTextButtons.classList.contains = 'Đang Play...'){
//         buttonAllow.addEventListener('click',()=>{
//             showTextButtons.innerText = 'Play'
//             playMusic.classList.add('bx-play')
//             posterPlay.classList.remove('active')
//             posterPlay.classList.remove('active')
//             music.play()
//         })   
//     }
// //    ClickPlaySong()

// }

// function ClickPlaySong(){
//     if(showTextButtons.classList.contains = 'Play'){
//         buttonAllow.addEventListener('click',()=>{
//                  showTextButtons.innerText = 'Đang Play...'
//                  posterPlay.classList.add('active')
//                  playMusic.classList.add('bx-pause')
//                   playMusic.classList.remove('bx-play')
//                  music.pause()
//         })
//      }
// }


//open menu
let openMenu = document.querySelector('.bxs-grid')
let showMenu = document.querySelector('.menu-side')


openMenu.addEventListener('click',function(){
    showMenu.classList.add('active')
    showUser.classList.remove('active')
   
})

// const buttonPlaySong = document.querySelector('.bxs-caret-right-circle')
// buttonPlaySong.addEventListener('click',function(){
//     buttonPlaySong.classList.remove('bxs-caret-right-circle')
//     buttonPlaySong.classList.add('bx-stop-circle')
// })

//close menu
let closeMenu = document.querySelector('.bx-x')
closeMenu.addEventListener('click',function(){
    showMenu.classList.remove('active')
})

//button song left right
const popSongLeft = document.getElementById('pop__song-left')
const popSongRight = document.getElementById('pop__song-right')
const popSongs = document.getElementsByClassName('pop__song')[0]

popSongRight.addEventListener('click', function () {
    popSongs.scrollLeft += 330
})
popSongLeft.addEventListener('click', function () {
    popSongs.scrollLeft -= 330
})

//button artist left right
const popArtistLeft = document.getElementById('artist__left')
const popArtistRight = document.getElementById('artist__right')
const popSArtist = document.getElementsByClassName('artists__song')[0]

popArtistLeft.addEventListener('click', function () {
    popSArtist.scrollLeft -= 330
})
popArtistRight.addEventListener('click', function () {
    popSArtist.scrollLeft += 330
})


//array songs left

const Songs = [
    {
        id: 01,
        songName: `Họ yêu ai mất rồi<br>
        <div class="sub__author">Doãn Hiếu</div>`,
        poster: './image/1.jpg',
    },
    {
        id: 02,
        songName: `Cuối cùng thì<br>
        <div class="sub__author">J97</div>`,
        poster: './image/bai2.jpg',
    },
    {
        id: 03,
        songName: `Slowly<br>
        <div class="sub__author">Henzy</div>`,
        poster: './image/3.jpg',
    },
    {
        id: 04,
        songName: `Fearless<br>
        <div class="sub__author">Lost Sky</div>`,
        poster: './image/4.jpg',
    },
    {
        id: 05,
        songName: `Force<br>
        <div class="sub__author">Alan Walker</div>`,
        poster: './image/5.jpg',
    },
    {
        id: 06,
        songName: `Blank<br>
        <div class="sub__author">Disfigure</div>`,
        poster: './image/6.jpg',
    },
    {
        id: 07,
        songName: `Ngẫu Hứng (绘师岸田 Remix) ♪<br>
        <div class="sub__author">Hoaprox</div>`,
        poster: './image/7.jpg',
    },
    {
        id: 08,
        songName: `Flares<br>
        <div class="sub__author">Niviro</div>`,
        poster: './image/8.jpg',
    },
    {
        id: 09,
        songName: `Different Heaven<br>
        <div class="sub__author">Safe And Sound</div>`,
        poster: './image/9.jpg',
    },
    {
        id: 10,
        songName: `Amadeus<br>
        <div class="sub__author">Legendary</div>`,
        poster: './image/10.jpg',
    },
    {
        id: 11,
        songName: `Xomu<br>
        <div class="sub__author">Lanterns</div>`,
        poster: './image/11.jpg',
    },
    {
        id: 12,
        songName: `Nightcore<br>
        <div class="sub__author">Speed (Alan Walker Style)</div>`,
        poster: './image/12.jpg',
    },
    {
        id: 13,
        songName: `Broken Ange<br>
        <div class="sub__author">Arash</div>`,
        poster: './image/13.jpg',
    },
    {
        id: 14,
        songName: `Cheap Thrills<br>
        <div class="sub__author">Sia, Sean Paul</div>`,
        poster: './image/14.jpg',
    },
    {
        id: 15,
        songName: `On My Way<br>
        <div class="sub__author">Alan Walker, Sabrina Carpenter, Farruko</div>`,
        poster: './image/15.jpg',
    },
    {
        id: 16,
        songName: `Như Một Người Dưng Remix<br>
        <div class="sub__author"> Nguyễn Thạc Bảo Ngọc</div>`,
        poster: './image/16.jpg',
    },
    {
        id: 17,
        songName: `sao mình chưa nắm tay nhau remix<br>
        <div class="sub__author">Yan Nguyễn</div>`,
        poster: './image/17.jpg',
    },
    {
        id: 18,
        songName: `Cô Đơn Dành Cho Ai Remix<br>
        <div class="sub__author">Lee Ken x Nal</div>`,
        poster: './image/18.jpg',
    },
    {
        id: 19,
        songName: `Chúc tết<br>
        <div class="sub__author">Khởi My</div>`,
        poster: './image/19.jpg',
    },
    {
        id: 20,
        songName: `ngày xuân lông phụng sum vầy<br>
        <div class="sub__author">Lam Trường</div>`,
        poster: './image/20.jpg',
    },
    {
        id: 21,
        songName: `tình yêu đơn phương là gì<br>
        <div class="sub__author">NC</div>`,
        poster: './image/21.jpg',
    },
    {
        id: 22,
        songName: `quá khứ anh không thể quên<br>
        <div class="sub__author">Dương Minh Tuấn</div>`,
        poster: './image/22.jpg',
    },
     {
        id: 23,
        songName: `em ơi anh phải làm sao<br>
        <div class="sub__author">Dương Minh Tuấn</div>`,
        poster: './image/23.jpg',
    },
     {
        id: 24,
        songName: `anh yêu vội thế<br>
        <div class="sub__author">Mee Remix</div>`,
        poster: './image/24.jpg',
    },
     {
        id: 25,
        songName: `tướng quân<br>
        <div class="sub__author">Nhật Phong</div>`,
        poster: './image/25.jpg',
    },
    {
        id: 26,
        songName: `thời gian sẽ trả lời<br>
        <div class="sub__author">Kaiz</div>`,
        poster: './image/26.jpg',
    },
    {
        id: 27,
        songName: `phai dấu cuộc tình<br>
        <div class="sub__author">Phạm Kỳ Anh</div>`,
        poster: './image/27.jpg',
    },
    {
        id: 28,
        songName: `We Wish You A Merry Christmas<br>
        <div class="sub__author">Crazy Frog</div>`,
        poster: './image/28.jpg',
    },
    {
        id: 29,
        songName: `CHIỀU THU HỌA BÓNG NÀNG REMIX<br>
        <div class="sub__author">DATKAA x QT BEATZ</div>`,
        poster: './image/29.jpg',
    },
    {
        id: 30,
        songName: `hạ con vuong nang<br>
        <div class="sub__author">DATKAA </div>`,
        poster: './image/30.jpg',
    },
    {
        id: 31,
        songName: `Yume wo kanaete Doraemon<br>
        <div class="sub__author">MAO</div>`,
        poster: './image/31.jpg',
    },
    {
        id: 32,
        songName: `Waiting For You<br>
        <div class="sub__author">MONO</div>`,
        poster: './image/32.jpg',
    },
    {
        id: 33,
        songName: `Mang tiền về cho mẹ<br>
        <div class="sub__author">Đen Vâu</div>`,
        poster: './image/33.jpg',
    },
    {
        id: 34,
        songName: `Mấy lần 10 năm<br>
        <div class="sub__author">Đen Vâu</div>`,
        poster: './image/34.jpg',
    },
    {
        id: 35,
        songName: `Moskou<br>
        <div class="sub__author">---</div>`,
        poster: './image/27.jpg',
    },
    {
        id: 36,
        songName: `Hotaru<br>
        <div class="sub__author">Maiko Fujita</div>`,
        poster: './image/36.jpg',
    },
    
    {
        id: 37,
        songName: `Shiawase no Yokan (幸せの予感)<br>
        <div class="sub__author">Naozumi Kamata; Yūko Yamaji</div>`,
        poster: './image/37.jpg',
    },
    
    {
        id: 38,
        songName: `Ai Wo Komete Umi<br>
        <div class="sub__author">Aoi Teshima</div>`,
        poster: './image/38.jpg',
    },
    {
        id: 39,
        songName: `Happy New Year<br>
        <div class="sub__author">A.B.B.A</div>`,
        poster: './image/39.jpg',
    },
    
    {
        id:40,
        songName: `Rockabye<br>
        <div class="sub__author">Clean Bandit; Sean Paul; Anne-Marie</div>`,
        poster: './image/40.jpg',
    },
    
    {
        id: 41,
        songName: `Tiền nhiều để làm gì<br>
        <div class="sub__author">GDUCKY</div>`,
        poster: './image/41.jpg',
    },
    {
        id: 42,
        songName: `Breakfast<br>
        <div class="sub__author">GDUCKY</div>`,
        poster: './image/42.jpg',
    },
    {
        id: 43,
        songName: `Ông Bà Già Tao Lo Hết<br>
        <div class="sub__author">Bình Gold, Lil Shady</div>`,
        poster: './image/43.jpg',
    },
    {
        id: 44,
        songName: `Illusionary Daytime<br>
        <div class="sub__author">GDUCKY</div>`,
        poster: './image/44.jpg',
    },
    {
        id: 45,
        songName: `Yume To Hazakura<br>
        <div class="sub__author">Kurenai
        </div>`,
        poster: './image/45.jpg',
    },
    {
        id: 46,
        songName: `Lofi Study<br>
        <div class="sub__author">FASSounds</div>`,
        poster: './image/46.jpg',
    },
    {
        id: 47,
        songName: `
        Wish you were here<br>
        <div class="sub__author">Lofi hour</div>`,
        poster: './image/47.jpg',
    },
    {
        id: 48,
        songName: `Daily routine work<br>
        <div class="sub__author">Lofi hour</div>`,
        poster: './image/48.jpg',
    },
    {
        id: 49,
        songName: `The journey ends<br>
        <div class="sub__author">Lofi hour</div>`,
        poster: './image/20.jpg',
    },
    
    
]


const listSongs = document.getElementsByClassName('song__item')

Array.from(listSongs).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = Songs[i].poster
    e.getElementsByTagName('h1')[0].innerHTML = Songs[i].songName
    e.getElementsByTagName('span')[0].innerHTML = Songs[i].id
})


//music play

const music = new Audio('./audio/1.mp3')
music.pause()

//play music (master play)
const playMusic = document.getElementById('playMusic')


//buttons play music bottom
playMusic.addEventListener('click', function () {
    if (music.paused || music.currentTime <= 0) {
        music.play()
        playMusic.classList.add('bx-pause')
        playMusic.classList.remove('bx-play')
        posterPlay.classList.add('active')
        showTextButtons.innerText = 'Đang Play...'

    } else {
        music.pause()
        playMusic.classList.add('bx-play')
        playMusic.classList.remove('bx-pause')
        posterPlay.classList.remove('active')
        showTextButtons.innerText = 'Play'
    }
})

//click on background song (left)
const backgroundSong = document.getElementsByClassName('song__item')
const makeAllBackground = () => {
    Array.from(backgroundSong).forEach((event) => {
        event.style.background = 'rgb(105,105,170,.0)'
    })
}

//click button song 

const makeAllPlay = () => {
    Array.from(playSongs).forEach((event) => {
        event.classList.add('bxs-caret-right-circle')
        event.classList.remove('bx-stop-circle')
    })
}



//buttons play music left
let index = 0
let playSongs = document.getElementsByClassName('playIconSong')
const posterPlay = document.getElementById('poster_master_play')
const titleSong = document.getElementById('title')
const downloadMusic = document.getElementById('download__Song')

Array.from(playSongs).forEach((e, i) => {
    e.addEventListener('click', (event) => {
        index = event.target.id
        music.src = `./audio/${index}.mp3`
        // posterPlay.src = `./image/${index}.jpg`
        // titleSong.innerHTML = Songs[i].songName
        playMusic.classList.add('bx-pause')
        playMusic.classList.remove('bx-play')
        showTextButtons.innerText = 'Đang Play...'
        posterPlay.classList.add('active')
        downloadMusic.href = `audio/${index}.mp3`
        music.play()

        let songTitles = Songs.filter((els) => {
            return els.id == index

        })

        songTitles.forEach(elss => {
            let { songName, poster } = elss
            titleSong.innerHTML = songName
            posterPlay.src = poster
            downloadMusic.setAttribute('download',songName) 
        })

        makeAllBackground()
        Array.from(backgroundSong)[index - 1].style.background = 'rgb(105,105,170,.1)'
        makeAllPlay()
        event.target.classList.remove('bxs-caret-right-circle')
        event.target.classList.add('bx-stop-circle')
    })
    

})

//time start && time end
const timeStart = document.getElementById('currentStart')
const timeEnd = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementById('dot')

music.addEventListener('timeupdate', () => {

    //setup time 
    let musicCurrent = music.currentTime
    let musicDuration = music.duration

    //time end
    let minuted1 = Math.floor(musicDuration / 60)
    let seccond1 = Math.floor(musicDuration % 60)
    if (seccond1 < 10) {
        seccond1 = `0${seccond1}`
    }

    timeEnd.innerText = `${minuted1}:${seccond1}`

    //time start

    let minuted2 = Math.floor(musicCurrent / 60)
    let second2 = Math.floor(musicCurrent % 60)
    if (second2 < 10) {
        second2 = `0${second2}`
    } else {
        second2
    }
    timeStart.innerText = `${minuted2}:${second2}`

    //progress bar
    let progressBar = parseInt((musicCurrent / musicDuration) * 100)
    seek.value = progressBar
    let seekBar = seek.value
    bar2.style.width = `${seekBar}%`
    dot.style.left = `${seekBar}%`
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100
})

let volVolume = document.getElementById('void')
let volIcons = document.getElementById('void__icons')
let volDot = document.getElementById('vol_dot')
let volBar = document.getElementsByClassName('vol_bar')

volVolume.addEventListener('change', () => {
    if (volVolume.value == 0) {
        volIcons.classList.remove('bxs-volume-full')
        volIcons.classList.remove('bxs-volume-low')
        volIcons.classList.add('bxs-volume-mute')
    }
    if (volVolume.value > 0) {
        volIcons.classList.remove('bxs-volume-full')
        volIcons.classList.add('bxs-volume-low')
        volIcons.classList.remove('bxs-volume-mute')
    }
    if (volVolume.value > 50) {
        volIcons.classList.add('bxs-volume-full')
        volIcons.classList.remove('bxs-volume-low')
        volIcons.classList.remove('bxs-volume-mute')
    }

    let volValue = volVolume.value
    volDot.style.left = `${volValue}%`
    music.volume = volValue / 100
})

//buttons near image bottom

let backMusic = document.getElementById('back')
let nextMusic = document.getElementById('next')
let downMusic = document.getElementById('download')

backMusic.addEventListener('click',function(){
    index-=1
    if(index <1){
        index = 1
        
    }
    music.src = `./audio/${index}.mp3`
    // posterPlay.src = `./image/${index}.jpg`
    // titleSong.innerHTML = Songs[i].songName
    playMusic.classList.add('bx-pause')
    playMusic.classList.remove('bx-play')
    posterPlay.classList.add('active')
    showTextButtons.innerText = 'Đang Play...'
    music.play()

    let songTitles = Songs.filter((els) => {
        return els.id == index

    })

    songTitles.forEach(elss => {
        let { songName, poster } = elss
        titleSong.innerHTML = songName
        posterPlay.src = poster
        downloadMusic.setAttribute('download',songName) 
    })

    makeAllBackground()
    Array.from(backgroundSong)[index - 1].style.background = 'rgb(105,105,170,.1)'
    makeAllPlay()
 
})

nextMusic.addEventListener('click',function(){
    index++
    if(index > Array.from(Songs).length){
        index = Array.from(Songs).length
        alert('bài cuối r đó,đừng ấn qua bài tiếp theo nữa')
    }
    music.src = `./audio/${index}.mp3`
    // posterPlay.src = `./image/${index}.jpg`
    // titleSong.innerHTML = Songs[i].songName
    playMusic.classList.add('bx-pause')
    playMusic.classList.remove('bx-play')
    posterPlay.classList.add('active')
     showTextButtons.innerText = 'Đang Play...'
    music.play()

    let songTitles = Songs.filter((els) => {
        return els.id == index

    })

    songTitles.forEach(elss => {
        let { songName, poster } = elss
        titleSong.innerHTML = songName
        posterPlay.src = poster
        downloadMusic.setAttribute('download',songName) 
    })


    makeAllBackground()
    Array.from(backgroundSong)[index - 1].style.background = 'rgb(105,105,170,.1)'
    makeAllPlay()
  
})

//auto play
music.addEventListener('ended',()=>{
    index++
    if(index > Array.from(Songs).length){
        // index = Array.from(Songs).length
        index = 0
        index++
       
    }
    music.src = `./audio/${index}.mp3`
    // posterPlay.src = `./image/${index}.jpg`
    // titleSong.innerHTML = Songs[i].songName
    playMusic.classList.add('bx-pause')
    playMusic.classList.remove('bx-play')
    showTextButtons.innerText = 'Đang Play...'
    posterPlay.classList.add('active')
    downloadMusic.href = `audio/${index}.mp3`
    music.play()

    let songTitles = Songs.filter((els) => {
        return els.id == index

    })

    songTitles.forEach(elss => {
        let { songName, poster } = elss
        titleSong.innerHTML = songName
        posterPlay.src = poster
        downloadMusic.setAttribute('download',songName) 
    })

    makeAllBackground()
    Array.from(backgroundSong)[index - 1].style.background = 'rgb(105,105,170,.1)'
    makeAllPlay()
    event.target.classList.remove('bxs-caret-right-circle')
    event.target.classList.add('bx-stop-circle')
})

////shuffle button
const shuffle = document.getElementById('shuffle')
const popupShuffle = document.querySelector('.popup__shuffle')


shuffle.addEventListener('click',poPupShuffle)

function poPupShuffle(){
    popupShuffle.classList.add('active')
    playMusic.classList.add('bx-pause')
    playMusic.classList.remove('bx-play')
    posterPlay.classList.add('active')
    showTextButtons.innerText = 'Đang Play...'
    music.play() 
}

popupShuffle.addEventListener('click',()=>{
    popupShuffle.classList.remove('active')
})

//fullscreen

let fullscreen;
let fsEnter = document.getElementById('fullscr');
let textFullScreen = document.querySelector('.innerFullScreen')
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        textFullScreen.innerText = "Exit";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        textFullScreen.innerText = "Full Screen";
    }
});

//user 
let openUser = document.querySelector('.image__setting')
let showUser = document.querySelector('.user__setting')

openUser.addEventListener('click',function(){
    showUser.classList.toggle('active')
})

//search result
let searchResult = document.getElementsByClassName('search_result')[0]

Songs.forEach(element =>{
    const {id,songName,poster} = element
    let cardSearch = document.createElement('a')
    // cardSearch.href ="#" + id
    cardSearch.classList.add('cart__search')
    cardSearch.innerHTML = `
    <img src="${poster}" alt="">
    <div class="content__search">
        <h1>${songName}</h1>
    </div>
    `
    searchResult.appendChild(cardSearch)
})

let inputSeach = document.getElementsByClassName('input__seach-result')[0]
inputSeach.addEventListener('keyup',()=>{
    let inputSearchValue = inputSeach.value.toUpperCase().trim()
    let itemsSearch = searchResult.getElementsByTagName('a')

    for(let index = 0;index<itemsSearch.length;index++){
        let elementItems = itemsSearch[index].getElementsByClassName('content__search')[0]
        let textValue = elementItems.textContent || elementItems.innerHTML
        if(textValue.toUpperCase().indexOf(inputSearchValue) > -1){
            itemsSearch[index].style.display = 'flex'
        }
        else{
            itemsSearch[index].style.display = 'none'
        }
        if(inputSeach.value ==0){
            searchResult.style.display = 'none'
        }
        else{
            searchResult.style.display = 'block'
        }
    }

})
//openSetting
const openSetting = document.querySelector('.open__setting')
const showSetting = document.querySelector('.setting__color')

openSetting.addEventListener('click',()=>{
    showSetting.classList.add('active')
})

//close setting
const closeSetting = document.querySelector('.setting__color--close')
closeSetting.addEventListener('click',()=>{
    showSetting.classList.remove('active')
})

//change color setting
const changeBackgroundColor = document.querySelector('.song-side')
document.querySelector('.changecolor__white').addEventListener('click',function(){
    changeBackgroundColor.style.backgroundColor = 'white'
})
document.querySelector('.changecolor__blue').addEventListener('click',function(){
    changeBackgroundColor.style.backgroundColor = 'rgb(43, 175, 228)'
})
document.querySelector('.changecolor__red').addEventListener('click',function(){
    changeBackgroundColor.style.backgroundColor = 'rgb(238, 61, 61)'
})

document.querySelector('.changecolor__green').addEventListener('click',function(){
    changeBackgroundColor.style.backgroundColor = 'rgb(67, 170, 72)'
})

document.querySelector('.changecolor__pink').addEventListener('click',function(){
    changeBackgroundColor.style.backgroundColor = 'rgb(248, 61, 148)'
})

document.querySelector('.changecolor__yellow').addEventListener('click',function(){
    changeBackgroundColor.style.backgroundColor = 'rgb(221, 192, 26)'
})

document.querySelector('.changecolor-default').addEventListener('click',function(){
    changeBackgroundColor.style.backgroundColor = '#0b1320'
})


// const hidenSongs = document.querySelector(".active-songside")
// hidenSongs.addEventListener("scroll",()=>{
//     if(hidenSongs.scrollHeight >= 100){
//         hidenSongs.style.position = "fixed";
//         hidenSongs.style.backgroundColor = "red";
//     }
// })