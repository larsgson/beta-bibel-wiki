import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab'
import NavClose from '@mui/icons-material/Close'
import VideoPlayer from './video'
import useMediaPlayer from "../hooks/useMediaPlayer"
import useBrowserData from '../hooks/useBrowserData'
import { useTranslation } from 'react-i18next'
import {apiObjGetStorage,apiObjSetStorage} from '../utils/api'

let styles = {
  floatingButton: {
    margin: 0,
    left: 'auto',
    position: 'absolute',
    right: 0,
    zIndex: 1000,
  },
  footerFullsize: {
    height: '100%',
    position: 'fixed',
    right: 0,
    left: 0,
    bottom: 0,
    margin: 0,
    zIndex: 3,
    fontSize: 18,
  },
  footerFB: {
    height: '90%',
    position: 'fixed',
    right: 0,
    left: 0,
    bottom: 0,
    margin: 0,
    zIndex: 3,
    fontSize: 18,
  },
  footerVideo: {
    position: 'fixed',
    right: 0,
    left: 0,
    bottom: 0,
    margin: 0,
    zIndex: 3,
    fontSize: 18,
  },
  footer: {
    display: 'block',
    zIndex: 3,
    fontSize: 18,
    height: 64,
    position: 'fixed',
    right: 0,
    left: 0,
    paddingLeft: 64,
    bottom: 0,
    margin: 0,
    cursor: 'pointer'
  },
}

const Footer = () => {
  const {width, height} = useBrowserData()
  const player = useMediaPlayer()
  const { t } = useTranslation()
  const { curPlay,
          onStopPlaying, onPlaying, onFinishedPlaying,
          isPaused} = player
  let tmpPlay = player.curPlay
  if (!tmpPlay) tmpPlay = {curSerie: undefined, curEp: undefined}
  const {curSerie,curEp} = tmpPlay

  const curEpInx = 0
  if (curSerie && curSerie.epList && curEpInx) {
//    curEp = curSerie.epList[curEpInx-1]
  }
  const [hasFinishedPlay, setHasFinishedPlay] = useState(false)
  const [startPos, setStartPos] = useState(0)
  const [curMsPos, setCurMsPos] = useState(undefined)
  const [curPos, setCurPos] = useState()
  const [curDur, setCurDur] = useState()
  const storePos = (msPos) => apiObjSetStorage(curPlay,"mSec",msPos)
  const ytbURL = t("videoURL.YT")
  useEffect(() => {
    let didCancel = false
    const restorePos = async (obj) => {
      await apiObjGetStorage(obj,"mSec").then((value) => {
        if (value==null) {
          if ((obj.curSerie!=null) && (obj.curEp!=null)) {
            value = curEp.begTimeSec * 1000
          } else {
            value=0
          }
        }
        if (!didCancel) {
          setStartPos(value)
          setCurMsPos(value)
        }
      }).catch((err) => console.error(err))
      await apiObjGetStorage(obj,"mSecDur").then((dur) => {
        if (!didCancel) setCurDur(dur)
      }).catch((err) => console.error(err))
    }
    if ((curSerie!=null) && (curEp!=null)){
      restorePos({curSerie, curEp})
    }
    return () => didCancel = true
  },[curPlay,curEp])

  const closeFooter = () => {
console.log(curMsPos)
    storePos(curMsPos)
    if (onStopPlaying) onStopPlaying()
  }

  const handleVideoDuration = (dur) => {
    const durMSec = dur * 1000
    apiObjSetStorage(curPlay,"mSecDur",durMSec)
    setCurDur(durMSec)
  }

  const handleVideoProgress = (pos) => {
    const posMSec = pos.playedSeconds *1000
    if (pos.playedSeconds>curEp.endTimeSec){
      // closeFooter()
      storePos(curEp.begTimeSec * 1000) // reset to beginning
      if (onStopPlaying) onStopPlaying()
    } else {
      storePos(posMSec)
      setCurMsPos(posMSec)
      if (onPlaying){
        const cur = {position: posMSec, duration: curDur}
        onPlaying(cur)
      }
    }
  }

  const handleStop = () => setHasFinishedPlay(false)
  const handleSetPaused = (isPaused) => {
console.log("handleSetPaused")
    setIsPaused(isPaused)
    if (!isPaused) setHasFinishedPlay(false)
  }

  const handleLoading = (cur) => {
    if (curDur !== cur.duration){
      apiObjSetStorage(curPlay,"mSecDur",cur.duration)
      setCurDur(cur.duration)
    }
  }

  const updatePos = (cur) => {
    const newPos = Math.floor(cur.position / 1000)
    if (curPos !== newPos) {
      storePos(cur.position)
    }
    if (curDur !== cur.duration){
      apiObjSetStorage(curPlay,"mSecDur",cur.duration)
      setCurMsPos(cur.position)
      setCurPos(newPos)
      setCurDur(cur.duration)
    } else {
      setCurMsPos(cur.position)
      setCurPos(newPos)
    }
  }

  const handlePlaying = (cur) => {
// BUG FIX !!!
    const soundPlayerBugFix = hasFinishedPlay
    if (!soundPlayerBugFix){
      updatePos(cur)
      if (onPlaying) onPlaying(cur)
    }
  }

  const handleFinishedVideoPlaying = () => {
    if (onFinishedPlaying) onFinishedPlaying()
  }

  const handleFinishedPlaying = () => {
console.log("handleFinishedPlaying")
    setHasFinishedPlay(true)
    handleFinishedVideoPlaying()
  }

  const topMargin = 60

  let curHeight = Math.trunc(width*9/16)
  if (curHeight>height-topMargin){
    curHeight = height-topMargin
  }

  let useSec
  let useDur
  let downloadName
  if (curMsPos!=null) useSec = Math.floor(curMsPos / 1000)
  if (curDur!=null) useDur = Math.floor(curDur / 1000)
  let locURL = ""
  let locPath = ""
  let videoFound = false
  const btnStyle =  Object.assign({}, styles.floatingButton)
  let idStr = "footer"
  if ((curPlay!=null)) {
    if (curEp!=null) {
//      locURL = curEp.filename
        locURL = ytbURL
        locPath = locURL
    } else if ((curSerie!=null)&&(curSerie.curPath!=null)) {
      locURL = ytbURL
    }
//    locPath = getLocalMediaFName(locURL)
    locPath = locURL
    const typeFound = (type) => {
      if (curEp && curEp.mediaType) return curEp.mediaType===type
      return (curSerie &&(curSerie.mediaType===type))
    }
    videoFound = typeFound("vid")
  }
  if (videoFound){
    idStr = "footer-video"
  }
  const fullSizeFound = videoFound
  const isFB = curEp && curEp.fb
  const position = 'relative'
  const top = '0px'
  if (locURL.length>0) {
    return (
      <footer
        id={idStr}
        style={isFB ?  styles.footerFB : videoFound ? styles.footerVideo : fullSizeFound ? styles.footerFullsize : styles.footer}>
        <div style={{position, top: top, height: '80%', width: '100%', maxWidth: isFB ? 450 : width}}>
          <Fab
            size="small"
            onClick={closeFooter}
            style={btnStyle}
          >
            <NavClose />
          </Fab>
          {videoFound && (
            <VideoPlayer
              url={locPath}
              fullSize={fullSizeFound}
              isFB={curEp.fb}
              isPaused={isPaused}
              playFromPosition={startPos}
              onEnded={handleFinishedVideoPlaying}
              onDuration={handleVideoDuration}
              onProgress={handleVideoProgress}
              width={width}
              height={curHeight}
              playing
              controls />
          )}
        </div>
      </footer>
    )
  } else {
     return (
       <footer id="footer" style={{display: 'none' }}>
       </footer>
    )
  }

}

export const MediaPlayer = (props) => {
  const [isWaitingForPlayInfo, setIsWaitingForPlayInfo] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [curCheckPos, setCurCheckPos] = useState(undefined)
  const [curPos, setCurPos] = useState()
  const player = useMediaPlayer()
  const {curSerie, curEp} = player

  const handlePlaying = (cur) => {
    if ((cur!=null) && (cur.position!=null)
      && isWaitingForPlayInfo){
      if (cur.position!==curCheckPos){
        setCurCheckPos(cur.position)
        setIsWaitingForPlayInfo(false)
      } else {
        setCurCheckPos(cur.position)
      }
    }
    const {curSerie} = props
    if ((curSerie!=null)&&(curSerie.nextLevelPos!=null)){
console.log(cur)
      if (cur.position-(curSerie.nextLevelPos*1000)>=cur.duration){
        if (props.onEndOfLevel!=null) props.onEndOfLevel()
      }
    }
    if (props.onPlaying) props.onPlaying({position: cur.position, duration: cur.duration})
console.log(cur)
    setCurPos(cur)
  }

  const handleStopPlaying = () => {
    player.onStopPlaying()
    setIsPaused(false)
    setIsWaitingForPlayInfo(false)
    setCurCheckPos(undefined)
    if (props.onStopPlaying) props.onStopPlaying()
  }

  return (
      <Footer
        curSerie={curSerie}
        curEp={curEp}
        isPaused={isPaused}
        isWaitingForPlayInfo={isWaitingForPlayInfo}
        curPos={curPos}
        onSetPaused={(isPaused) => setIsPaused(isPaused)}
        onPlaying={handlePlaying}
        onFinishedPlaying={() => props.onFinishedPlaying()}
        onStopPlaying={handleStopPlaying}
      />
  )
}

export default MediaPlayer
