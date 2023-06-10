import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  createContext
} from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { Slider } from 'antd'
import { AppPlayerBarWrapper, LockWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { message } from 'antd'
import { throttle } from 'underscore'
import { getImageSize, formatTime } from '@/utils/format'
import { getPlayUrl } from '@/utils/handle-player'
import {
  fetchCurrentSongDataAction,
  changeLyricsIndexItemAction,
  changePlayModeAction,
  fetchNextSongAction,
  changeLyricsAction
} from '../store/player'
import AppPlayerPanel from '../app-player-panel'
import {
  getCheckMusic,
  getNewSongUrl,
  getReserveSongUrl
} from '../service/player'
import { playRequetVal } from '@/assets/constants'

interface IProps {
  children?: ReactNode
}

interface ICHECKMUSICRES {
  success: boolean
  message: string
}

message.config({
  prefixCls: 'my-message'
})

//定义context
type TSETSTATE = (arg: boolean) => void
type TPLAYERCONTEXT = {
  panelState: boolean
  setPanelState: TSETSTATE
}
export const PlayerContext = createContext<TPLAYERCONTEXT | null>(null)

const AppPlayerBar: FC<IProps> = (props) => {
  //1.5播放和暂停状态 false暂停,true播放
  const [isPlay, setIsPlay] = useState<boolean>(false)
  //2.1定义当前播放歌曲时间进度(毫秒)
  const [currentMinute, setCurrentMinute] = useState<number>(0)
  //3.0slider的进度（百分比）
  const [progress, setProgress] = useState<number>(0)
  //5.0slider是否拖动 ***默认不拖动
  const [isSliderChange, setIsSliderChange] = useState<boolean>(false)
  //7.8歌词的索引
  // const [lyricIndex, setLyricIndex] = useState<number>(0)
  //歌曲播放进入
  const [duration, setDuration] = useState(0)
  //切换声音按钮
  const [isShowVoice, setIsShowVoice] = useState<boolean>(true)
  //是否显示音量条件功能
  const [isVoiceSlider, setIsVoiceSlider] = useState<boolean>(false)
  //是否显示panel面板
  const [showPanel, setShowPanel] = useState<boolean>(false)
  //播放栏是否固定底部
  const [showPlayerBar, setShowPlayerBar] = useState<boolean>(true)
  //鼠标移入和移出显示播放栏
  const [showMousePlayer, setShowMousePlayer] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  //1.1获取需要播放的歌曲 //7.6获取歌词lyrics //7.11取出歌词索引lyricsItemIndex //8.3取出播放模式
  const {
    currentSong = {},
    lyrics,
    lyricsItemIndex,
    playMode,
    currentList
  } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricsItemIndex: state.player.lyricsItemIndex,
      playMode: state.player.playMode,
      currentList: state.player.currentList
    }),
    shallowEqual
  )

  // : [{ name: singerName = '未知歌手' }]
  const {
    name = '未知歌曲',
    id = 1330348068, //歌曲id
    ar = [{ name: '未知歌手' }],
    al = { picUrl: '' },
    dt = 0 //总时间
  } = currentSong

  //6.3请求歌曲数据
  useEffect(() => {
    dispatch(fetchCurrentSongDataAction(id))
  }, [dispatch])

  //1.2获取audio实例
  const audioRef = useRef<HTMLMediaElement>(null)

  //1.6当页面挂载后，且歌曲数据获取到，设置歌曲url
  useEffect(() => {
    //检查歌曲是否可用
    const checkMusicService = async (id: number) => {
      const { success, message: MESSAGE } = await getCheckMusic(id)
      //如果没有版权
      // if (!success) {
      //   //将歌曲src设置为空
      //   audioRef.current!.src = ''
      //   //将播放按钮设置为false
      //   setIsPlay(false)
      //   //清空歌词数据
      //   dispatch(changeLyricsAction([]))
      //   message.open({
      //     key: 'lyric',
      //     content: MESSAGE,
      //     duration: 0
      //   })
      //   return console.log(MESSAGE)
      // }
      //获取歌曲播放路径
      let songUrl = ''
      try {
        const {
          data: [{ url }]
        } = await getNewSongUrl(id)
        songUrl = url
      } catch (error) {
        const formData = new FormData()
        formData.append('types', 'url')
        formData.append('id', '1405283464')
        formData.append('source', 'netease')
        let result = await getReserveSongUrl(formData)
        result = result
          .replace('jQuery1113021672592618739306_1686291359547(', '')
          .replace(')', '')
        result = JSON.parse(result)
        songUrl = result.url || ''
      }
      audioRef.current!.src = songUrl
      // audioRef.current!.src = getPlayUrl(id)
      //补充 这里播放首次不会触发，第二次触发
      audioRef.current
        ?.play()
        .then(() => {
          setIsPlay(true)
          console.log('success')
        })
        .catch((err) => {
          setIsPlay(false)
          console.log('err:', err)
        })

      setDuration(dt)
    }
    checkMusicService(id)
  }, [currentSong, id, dispatch])

  //1.4播放歌曲方法
  function playAudio() {
    //设置歌曲播放路径 ***注释这里解决每次从头开始播放
    // audioRef.current!.src = getPlayUrl(id)
    setIsPlay(!isPlay)
    //根据isPlay状态判断播放或暂停
    !isPlay
      ? audioRef.current?.play().catch((err) => {
          audioRef.current?.pause()
          setIsPlay(false)
        })
      : audioRef.current?.pause()
  }

  //2.0监听歌曲播放时间的变化currentTime秒
  function audioTimeUpdate() {
    //2.2设置当前歌曲进度
    const currentTime = audioRef.current!.currentTime
    const playCurrentTime = currentTime * 1000
    //5.3拖拽时不设置
    if (!isSliderChange) {
      //设置当前歌曲播放时间
      setCurrentMinute(playCurrentTime)
      //3.1设置当前进度条进度(百分比)
      const currentProgress = (playCurrentTime / duration) * 100
      setProgress(currentProgress)
    }
    //7.9根据时间匹配歌词  ***默认最后一句
    let currentIndex = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      //如果歌词时间大于当前播放时间，获取下一个索引，然后减一
      if (lyrics[i].time > playCurrentTime) {
        currentIndex = i - 1
        break
      }
    }

    //当值未-1return掉 , 7.12如果index和上一次一样也return掉
    if (currentIndex === -1 || lyricsItemIndex === currentIndex) return

    //7.13设置上一次索引
    dispatch(changeLyricsIndexItemAction(currentIndex))

    //7.7设置歌词
    message.open({
      key: 'lyric',
      content: lyrics[currentIndex].text,
      duration: 0
    })
  }

  //5.1slider的change事件 (拖拽时修改歌曲进度及时间)
  const sliderChange = useCallback(
    (value: number) => {
      //5.2拖到了设置isSliderChange状态为true
      setIsSliderChange(true)
      //5.4设置slider进度
      setProgress(value)
      //5.5拖拽的同时设置时间
      setCurrentMinute((value / 100.0) * duration)
    },
    [duration]
  )

  //4.0slider的afterchange事件 (点击修改歌曲进度及时间)
  const sliderAfterChange = useCallback(
    (value: number) => {
      const currentTime = (value / 100.0) * duration
      //修改当前歌曲播放进度(秒)
      audioRef.current!.currentTime = currentTime / 1000
      //设置当前歌曲播放slider进度
      setProgress(value)
      //修改当前currentMinute：当前播放时间 = 总时间 * 百分比
      setCurrentMinute(currentTime)
      //补充 重置slider状态让onTimeUpdate生效
      setIsSliderChange(false)

      // //补充
      // if (!isPlay) {
      //   playAudio()
      // }
    },
    [duration]
  )

  //8.0切换播放模式
  function cutMode() {
    //8.4设置play
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayModeAction(newPlayMode))
  }

  //8.7上一首，下一首
  function nextPlay(isNext: boolean) {
    //如果清空了播放列表则不切换
    if (!currentList.length) return
    //设置slider进度为0
    setProgress(0)
    //设置当前播放时间为0
    setCurrentMinute(0)
    dispatch(fetchNextSongAction(isNext))
    //如果歌曲列表只有一首歌，重新开始播放, 且不是暂停状态
    if (currentList.length === 1) {
      audioRef.current!.src = getPlayUrl(id)
      if (isPlay) {
        audioRef.current?.play().catch((e) => audioRef.current?.pause())
      }
    }
  }

  //9.0播放这一首自动播放下一首
  function audioEnded() {
    //如果是单曲循环仍然播放这一首或歌曲播放列表被清空
    if (playMode === 2 || !currentList.length) {
      audioRef.current!.currentTime = 0
      audioRef.current!.play().catch((e) => {
        console.log('e', e)
        audioRef.current?.pause()
      })
    } else {
      //播放下一首
      nextPlay(true)
    }
  }

  //显示隐藏声音调节
  const voiceBtnClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const id = (event.target as HTMLElement).id
      if (id) {
        console.log('id存在')
        setIsVoiceSlider(!isVoiceSlider)
      }
    },
    [isVoiceSlider]
  )

  //控制音量
  const voiceSliderChange = useCallback(
    (value: number) => {
      if (value / 100 === 0) {
        setIsShowVoice(false)
      } else {
        setIsShowVoice(true)
      }
      audioRef.current!.volume = value / 100
    },
    [audioRef]
  )

  //播放栏是否固定
  const lockClick = () => {
    setShowPlayerBar(!showPlayerBar)
  }

  //播放栏鼠标移入
  const playerMouseEnter = throttle(function (
    e: React.MouseEvent<HTMLDivElement>
  ) {
    if (!showPlayerBar) setShowMousePlayer(true)
  },
  200)

  const timer = useRef<NodeJS.Timeout | null>(null)
  //播放栏鼠标移出
  const playerMouseLeave = throttle(function (
    e: React.MouseEvent<HTMLDivElement>
  ) {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }
    timer.current = setTimeout(() => {
      if (!showPlayerBar) setShowMousePlayer(false)
    }, 500)
  },
  200)

  return (
    <AppPlayerBarWrapper
      className="sprite_playbar"
      isPlay={isPlay}
      playMode={playMode}
      isShowVoice={isShowVoice}
      showPlayerBar={showPlayerBar}
      showMousePlayer={showMousePlayer}
      onMouseEnter={playerMouseEnter}
      onMouseLeave={playerMouseLeave}
    >
      <div className="wrap-v2 playContent">
        <div className="playLeft">
          <div
            className="sprite_playbar playPrev playCut"
            onClick={(e) => nextPlay(false)}
          ></div>
          <div className="sprite_playbar playStop" onClick={playAudio}></div>
          <div
            className="sprite_playbar playNext playCut"
            onClick={(e) => nextPlay(true)}
          ></div>
        </div>
        <div className="playCenter">
          <a className="imgBox" href="#">
            <img src={getImageSize(al.picUrl, 34, 35)} alt="" />
            <div className="sprite_playbar imgCover"></div>
          </a>
          <div className="centerInfo">
            <div className="infoHeader">
              <a className="headerName" href="#">
                {name}
              </a>
              <span className="headerTitle">
                <a href="#">{ar?.name}</a>
              </span>
              <a className="sprite_playbar headerLink" href="#"></a>
            </div>
            <div className="infoBottom">
              <Slider
                className="infoSlider"
                value={progress}
                step={0.1}
                tooltip={{ formatter: null }}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="timeBox">
                <span className="timeLeft">{formatTime(currentMinute)}</span>
                <span className="timeRight">/{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="playRight">
          <div className="wh mini"></div>
          <div className="wh sprite_playbar add"></div>
          <div className="wh sprite_playbar share"></div>
          <div className="sprite_playbar fgx"></div>
          <div
            id="voiceInstance"
            className="wh sprite_playbar voice"
            onClick={voiceBtnClick}
          >
            <div
              className={classNames('sprite_playbar voiceControl', {
                showVoiceControl: isVoiceSlider
              })}
            >
              <div className="voiceTotalDistance">
                <Slider
                  className="voiceSlider"
                  defaultValue={100}
                  vertical
                  step={0.1}
                  onChange={voiceSliderChange}
                />
              </div>
            </div>
          </div>
          <div className="wh sprite_playbar mode" onClick={cutMode}></div>
          <div
            className="num sprite_playbar"
            onClick={(e) => setShowPanel(!showPanel)}
          >
            <span className="numText">{currentList.length}</span>
          </div>
          <div></div>
        </div>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={audioTimeUpdate}
        onEnded={audioEnded}
      />
      <PlayerContext.Provider
        value={{ panelState: showPanel, setPanelState: setShowPanel }}
      >
        {showPanel && <AppPlayerPanel />}
      </PlayerContext.Provider>
      <LockWrapper showPlayerBar={showPlayerBar}>
        <a href={undefined} className="sprite_playbar" onClick={lockClick}></a>
      </LockWrapper>
      <div className="showPlayer" title="展开"></div>
    </AppPlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
