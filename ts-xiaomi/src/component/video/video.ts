import { format } from "path";
import { setTimeout } from "timers";

let style=require('./video.css')
let styles=style.default

interface Ivideo {
  url :string;
  elem:string|HTMLElement;
  width?:string;
  height?:string;
  autoplay?:boolean;
}

interface Icomponent {
  tempContainer:HTMLElement;
  init:() => void;
  template:() => void;
  handle:() => void;
}

function video(options:Ivideo ){
  return new Video(options)
}

class  Video implements Icomponent{
  tempContainer
  constructor(private settings :Ivideo ){
      this.settings=Object.assign({
      width :'100%',
      height:'100%',
      autoplay:false,
    },this.settings);
    this.init()

  }
  //初始化
  init(){
    this.template()
    this.handle()
  }
  // 创建模板
  template(){
    this.tempContainer =document.createElement('div')
    this.tempContainer.className=styles.video   
    this.tempContainer.style.width=this.settings.width
    this.tempContainer.style.height=this.settings.height

    this.tempContainer.innerHTML = ` 
    <video class="${styles['video-content']}" src="${this.settings.url}" ></video>
    <div class="${styles['video-controls']}">
        <div class="${styles['video-progress']}">
            <div class="${styles['video-progress-now']}"></div>
            <div class="${styles['video-progress-suc']}"></div>
            <div class="${styles['video-progress-bar']}"></div>
        </div>
    <div class="toolbar" >  
    <div class="toolbar-left">
        <div class="${styles['video-play']}">
          <i class="iconfont iconbofang1" ></i>
        </div>
        <div class="${styles['video-time']}">
          <span>00:00</span> / <span>00:00</span>
        </div>
      </div>
    </div>
    <div class="toolbar-right">
      <div class="${styles['video-full']}">
        <i class="iconfont iconfullScreen" ></i>
      </div>
      <div class="${styles['video-volume']}">
          <i class="iconfont iconyinliang" ></i>
          <div class="${styles['video-volprogress']}">
              <div class="${styles['video-volprogress-now']}"></div>
              <div class="${styles['video-volprogress-bar']}"></div>
          </div>
      </div>
    </div>
    </div>  

    `;

    if(typeof this.settings.elem ==='object') {
      this.settings.elem.appendChild(this.tempContainer)
    }
    else {     
      document.querySelector(`${this.settings.elem}`).appendChild(this.tempContainer)
    }

  }
  // 事件操作
  handle(){
    let videoContent:HTMLVideoElement=this.tempContainer.querySelector(`.${styles['video-content']} `)
    let videoControls =this.tempContainer.querySelector(`.${styles['video-controls']} `)
    let videoPlay =this.tempContainer.querySelector(`.${styles['video-play']} i`)
    let videoTimes =this.tempContainer.querySelectorAll(`.${styles['video-time']} span`)
    let videoFull =this.tempContainer.querySelector(`.${styles['video-full']} i`)
    let videoProgress =this.tempContainer.querySelectorAll(`.${styles['video-progress']} div`)
    let videoVolProgress =this.tempContainer.querySelectorAll(`.${styles['video-volprogress']} div`)
    let timer

    videoContent.volume =0.5

    // 自动播放
    if(this.settings.autoplay) {
      timer =setInterval(playing,1000)
      videoContent.play()
    }

    // 进度条隐藏 显示
    this.tempContainer.addEventListener('mouseenter',()=>{
      videoControls.style.bottom = 0
    })
    this.tempContainer.addEventListener('mouseleave',()=>{
      videoControls.style.bottom = '-55px'
    })
    // 视频是否加载完毕
    videoContent.addEventListener('canplay',()=>{
      // console.log('canplay');      
      videoTimes[1].innerHTML=formatTime( videoContent.duration)
    })
    // 视频播放事件
    videoContent.addEventListener('play',()=>{
      videoPlay.className='iconfont iconstop'
      timer= setInterval(playing,1000)
    })

    // 视频暂停事件
    videoContent.addEventListener('pause',()=>{
      videoPlay.className='iconfont iconbofang1'
      clearInterval(timer)
    })

    // // 双击全屏
    // videoContent.addEventListener('dblclick',()=>{       
    //   videoContent.requestFullscreen()
    // })

    // 点击左键暂停
    videoContent.addEventListener('click',()=>{       
      if(videoContent.paused){
        videoContent.play()
      } else {
        videoContent.pause()
        
      }
    })

    // 播放 暂停
    videoPlay.addEventListener('click',()=>{
      if(videoContent.paused){
        videoContent.play()
      } else {
        videoContent.pause()
        
      }
    })

    // 拖动视频进度条
    videoProgress[2].addEventListener('mousedown',function(ev:MouseEvent){       
      let downX =ev.pageX
      let downL=this.offsetLeft
      document.onmousemove=(ev:MouseEvent) => {
        let scale = (ev.pageX - downX + downL +8 ) / this.parentNode.offsetWidth
        if (scale < 0){
          scale =0 
        }
        else if(scale > 1){
          scale = 1
        }
        videoProgress[0].style.width=scale * 100 + '%'
        videoProgress[1].style.width=scale * 100 + '%'
        this.style.left=scale * 100 + '%'
        videoContent.currentTime = scale * videoContent.duration
      }

      document.onmouseup =() => {
        document.onmousemove = document.onmouseup = null
      }
      ev.preventDefault()
    })

    // 拖动音量进度条
    videoVolProgress[1].addEventListener('mousedown',function(ev:MouseEvent){       
      let downX =ev.pageX
      let downL=this.offsetLeft
      document.onmousemove=(ev:MouseEvent) => {
        let scale = (ev.pageX - downX + downL +8 ) / this.parentNode.offsetWidth
        if (scale < 0){
          scale =0 
        }
        else if(scale > 1){
          scale = 1
        }
        videoVolProgress[0].style.width=scale * 100 + '%'
        this.style.left=scale * 100 + '%'
        videoContent.volume = scale
      }

      document.onmouseup =() => {
        document.onmousemove = document.onmouseup = null
      }
      ev.preventDefault()
    })


    // 全屏
    videoFull.addEventListener('click',()=>{
      videoContent.requestFullscreen()
    })


    // 正在播放
    function playing (){

      let scale =videoContent.currentTime / videoContent.duration
      let scaleSuc =videoContent.buffered.end(0) / videoContent.duration
      videoTimes[0].innerHTML=formatTime(videoContent.currentTime)
      videoProgress[0].style.width=scale * 100 + '%'
      videoProgress[1].style.width=scaleSuc * 100 + '%'
      videoProgress[2].style.left=scale * 100 + '%'
    }

    function  formatTime(number :number) :string{
        number= Math.round(number)
        let min =Math.floor(number/60)
        let sec=number%60
        return setZero(min) + ':' + setZero(sec)
    }

    function  setZero(number :number) :string{
      if(number <10 ){
        return '0'+ number
      }
      else{
        return ''+ number
      }
    }

  }

}

export default video 