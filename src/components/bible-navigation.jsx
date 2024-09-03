import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { pad } from '../utils/obj-functions'
import { rangeArray } from '../utils/obj-functions'
import { osisIconId, osisIconList } from '../constants/osisIconList'
import { getOsisChTitle, getChoiceTitle } from '../constants/osisChTitles'
import useBrowserData from '../hooks/useBrowserData'
// import useMediaPlayer from "../hooks/useMediaPlayer"
import BibleviewerApp from './bible-viewer-app'
import GospelJohnNavi from './gospel-john-video-navi'
import OBSPictureNavigationApp from './obs-viewer-app'
import { bibleDataEN, bibleDataDE_ML_1912 } from '../constants/bibleData'
import { naviSortOrder, chInBook,
          naviBooksLevel1, naviBooksLevel2, naviChapters } from '../constants/naviChapters'
import DailyTeaserView from './daily-teaser-view'

const topObjList = [
  {
    title: "Das Johannesevangelium",
    key: "de-jhn-serie",
    imgSrc: "/navIcons/VB-John1v1.png",
    subtitle: "Videoserie"
  },
  {
    title: "Gospel of John",
    key: "en-jhn-serie",
    imgSrc: "/navIcons/VB-John1v1.png",
    subtitle: "Video serie"
  },
  {
    title: "Das Johannesevangelium",
    key: "de-jhn-plan",
    imgSrc: "/navIcons/VB-John1v3.png",
    subtitle: "täglich - in 90 Tagen"
  },
  {
    title: "Gospel of John",
    key: "en-jhn-plan",
    imgSrc: "/navIcons/VB-John1v3.png",
    subtitle: "daily - in 90 days"
  },
  {
    title: "Hörbibel",
    key: "de-audio-bible-ML",
    imgSrc: "/navIcons/40_Mt_03_08.png",
    subtitle: "einfach zum Navigieren"
  },
  {
    title: "Audio Bible",
    key: "en-audio-bible-WEB",
    imgSrc: "/navIcons/40_Mt_08_12.png",
    subtitle: "with easy navigation"
  },
  {
    title: "Audio Bible Stories",
    key: "en-audio-OBS",
    imgSrc: "/navIcons/Bible_NT.png",
    subtitle: "with easy navigation"
  },
]
          
const useSerie = {
  "de-audio-bible-ML": bibleDataDE_ML_1912,
  "en-audio-bible-WEB": bibleDataEN,
}

const serieLang = {
  "de-audio-bible-ML": "de",
  "en-audio-bible-WEB": "en",
  "de-jhn-serie": "de",
  "en-jhn-serie": "en",
  "de-jhn-plan": "de",
  "en-jhn-plan": "en",
  "en-audio-OBS": "en",
}

const serieNaviType = {
  "de-audio-bible-ML": "audioBible",
  "en-audio-bible-WEB": "audioBible",
  "de-jhn-serie": "videoSerie",
  "en-jhn-serie": "videoSerie",
  "de-jhn-plan": "videoPlan",
  "en-jhn-plan": "videoPlan",
  "en-audio-OBS": "audioStories",
}

const SerieGridBar = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { classes, title, subtitle } = props
  return (
      <ImageListItemBar
        title={title}
        subtitle={subtitle}
      />
  )
}

const BibleNavigation = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { size, largeScreen } = useBrowserData()
  // const { curPlay } = useMediaPlayer()
  const { t } = useTranslation()
  const { onExitNavigation, onStartPlay } = props

  const [curLevel, setCurLevel] = useState(0)
  const [level0, setLevel0] = useState("")
  const [level1, setLevel1] = useState(1)
  const [level2, setLevel2] = useState("")
  const [level3, setLevel3] = useState("")
  const [skipLevelList,setSkipLevelList] = useState([])
  // ToDo !!! find a bibleBookList and use this here
  // eslint-disable-next-line no-unused-vars
  const preNav = "/navIcons/"
  const getSort = (val) => naviSortOrder.indexOf(parseInt(val))
  const addSkipLevel = (level) => setSkipLevelList([...skipLevelList,level])

  // eslint-disable-next-line no-unused-vars
  const getOsisIcon = (osisId) => {
    const exceptionBook = ["1Sam","2Sam","1Kgs","2Kgs","1Chr","2Chr"]
    let bookNameEng = t(osisId, { lng: 'en' })
    if (exceptionBook.indexOf(osisId)>=0){
      bookNameEng = bookNameEng.slice(2,2+bookNameEng.length)
    }
    return bookNameEng.replace(/ /g,"-").toLowerCase()
  }

  const getChIcon = (key,lev1,lev2,bookObj,ch) => {
    let checkIcon = "000-" + pad(lev1)
    if (lev2!=null) checkIcon = "00-" + pad(level1) + lev2
    let imgSrc
    let checkTitle
    const lng = serieLang[level0]
    const bk = (bookObj!=null)?bookObj.bk:null
    if (bk!=null){ // level 3
      const checkObj = osisIconList[bk]
      if (checkObj!=null){
        let useCh
        if (ch==null){
          const entry = Object.entries(checkObj)[0]
          useCh = entry[0]
          if (bk!=null){ // level 3
            const {beg,end} = bookObj
            if ((beg!=null)&&(end!=null)){
              useCh = Object.keys(checkObj).find(key => key>=beg)
            }
          }
        } else {
          if (checkObj[ch]!=null) useCh = ch
        }
        if (useCh!=null){
          const firstId = pad(parseInt(useCh))
          const firstEntry = checkObj[useCh][0]
          checkIcon = osisIconId[bk] + "_" + firstId + "_" + firstEntry
        }
      }
// Book Icon - To Do - to be added in the future
//    imgSrc = preBook +getOsisIcon(bk) +".png"
      checkTitle = t(bk, { lng })
    } else {
      checkTitle = t(checkIcon, { lng })
    }
    imgSrc = preNav +checkIcon +".png"
    let title = (ch!=null) ? getOsisChTitle(bk,ch,lng) : checkTitle
    let subtitle
    if (bk==null){ // level 1 and 2
      const checkStr = checkIcon + "-descr"
      subtitle = t(checkStr, { lng: serieLang[level0] })
      if (subtitle===checkStr) subtitle = ""
    } else if (ch==null){ // level 3
      const {beg,end} = bookObj
      if ((beg!=null)&&(end!=null)){
        subtitle = (beg===end) ? beg : beg + " - " + end
      }
      const choiceTitle = getChoiceTitle(bk,key+1,lng)
      if (choiceTitle!=null) {
        title += " " + subtitle
        subtitle = choiceTitle
      }
    }
    return {
      imgSrc,
      key,
      subtitle,
      title,
      isBookIcon: false
    }
  }

  // eslint-disable-next-line no-unused-vars
  const handleClick = (ev,id,_isBookIcon) => {
    if (curLevel===0) {
      setLevel0(id)
      setCurLevel(1)
    } else if (curLevel===1) {
      setLevel1(id)
      setCurLevel(2)
    } else if (curLevel===2) {
      setLevel2(id)
      if (naviChapters[level1][id].length===1){
        setLevel3(0)
        setCurLevel(4)
      } else setCurLevel(3)  
    } else if (curLevel===3) {
      setLevel3(id)
      setCurLevel(4)
    } else {
      const bookObj = naviChapters[level1][level2][level3]
      const curSerie = useSerie[level0]
      // const {curSerie} = curPlay  
      onStartPlay(curSerie,bookObj,id)
    }
  }

  const navigateUp = (level) => {
    if (skipLevelList.includes(level)) {
      navigateUp(level-1)
    } else {
      setCurLevel(level)
      if (level===0) setLevel0("audioBible")
    }
  }

  const handleReturn = () => {
    if ((curLevel===4)&&(naviChapters[level1][level2].length===1)){
      navigateUp(2)
    } else
    if (curLevel>0){
      navigateUp(curLevel-1)
    } else {
      onExitNavigation()
    }
  }
  const handleClose = () => {
    navigateUp(0)
  }
    
  let validIconList = []
  let validBookList = []
  if (curLevel===0){
    validIconList = topObjList
  } else if (curLevel===1){
    let lastInx
    const curSerie = useSerie[level0]
    const curList = (curSerie!=null) ? curSerie.bibleBookList : []
    Object.keys(naviBooksLevel1).sort((a,b)=>getSort(a)-getSort(b)
    ).forEach(iconInx => {
      const foundList = naviBooksLevel1[iconInx].filter(x => curList.includes(x))
      validBookList.push(...foundList)
      if (foundList.length>0){
        lastInx = iconInx
        validIconList.push(getChIcon(iconInx,iconInx))
      }
    })
    if (validIconList.length===1) {
      setLevel1(lastInx)
      setCurLevel(2)
      addSkipLevel(1)
      validIconList = []
      validBookList = []
    }
  }
  if (curLevel===2){
    let lastLetter
    const curSerie = useSerie[level0]
    const curList = (curSerie!=null) ? curSerie.bibleBookList : []
    Object.keys(naviChapters[level1]).forEach(iconLetter => {
      const foundList = naviBooksLevel2[level1][iconLetter].filter(x => curList.includes(x))
      validBookList.push(...foundList)
      if (foundList.length>0) {
        lastLetter = iconLetter
        validIconList.push(getChIcon(iconLetter,level1,iconLetter))
      }
    })
    if (validIconList.length===1) {
      setLevel2(lastLetter)
      setCurLevel(3)
      addSkipLevel(2)
      validIconList = []
      validBookList = []
    }
  }
  if (curLevel===3){
    naviChapters[level1][level2].forEach((bookObj,i) => {
      validIconList.push(getChIcon(i,level1,level2,bookObj))
    })
  } else if (curLevel===4){
    const bookObj = naviChapters[level1][level2][level3]
    const {bk} = bookObj
    if (bk!=null){
      if (bookObj.beg==null) bookObj.beg = 1
      if (bookObj.end==null) bookObj.end = chInBook[bk]
      const {beg,end} = bookObj
      rangeArray(beg,end).forEach(ch => {
        validIconList.push(getChIcon(ch,level1,level2,bookObj,ch))
//          validIconList.push(getChIcon(index here,level1,bookObj,ch,ch))
      })
    }
  }
  let useCols = 3
  if (size==="xs") useCols = 2
  else if (size==="lg") useCols = 4
  else if (size==="xl") useCols = 5
  const rootLevel = (curLevel===0)
  const naviType = serieNaviType[level0] || "audioBible"
  const lng = serieLang[level0]
  return (
    <div>
      {!rootLevel && (naviType==="audioBible") && (
        <Fab
          onClick={handleReturn}
          // className={largeScreen ? classes.exitButtonLS : classes.exitButton}
          color="primary"
        >
          <ChevronLeft />
        </Fab>
      )}
      {rootLevel && (naviType==="audioBible") && (<Typography
        type="title"
      >Today</Typography>)}
      {rootLevel && (naviType==="audioBible") && (
        <DailyTeaserView
          onClick={() => handleClick(undefined,"en-jhn-plan")} 
          lng={"en"}
        />      
      )}
      {/* ToDo: implement this !!! */}
      {/* {rootLevel && (naviType==="audioBible") && (<Typography
        type="title"
      >My List</Typography>)}
      {rootLevel && (naviType==="audioBible") && (
        <HistoryView
          onClick={(serieIdStr,epId) => handleHistoryClick(serieIdStr,epId)} 
          lng={lng}
        />      
      )} */}
      {(naviType==="audioBible") && (<Typography
        type="title"
      >Bibel Wiki</Typography>)}
      {(naviType==="videoPlan") && <BibleviewerApp onClose={handleClose} lng={lng}/>}
      {(naviType==="videoSerie") && <GospelJohnNavi onClose={handleClose} lng={lng}/>}
      {(naviType==="audioStories") && <OBSPictureNavigationApp onClose={handleClose}/>}
      {(naviType==="audioBible") && (<ImageList
        rowHeight="auto"
        cols={useCols}
      >
        {validIconList.map(iconObj => {
          const {key,imgSrc,title,subtitle,isBookIcon} = iconObj
          return (
            <ImageListItem
              onClick={(ev) => handleClick(ev,key,isBookIcon)}
              key={key}
            >
              <img
                src={imgSrc}
                alt={title}/>
              <SerieGridBar
                title={title}
                subtitle={subtitle}
              />
            </ImageListItem>
          )
        })}
      </ImageList>)}
    </div>
  )
}

export default BibleNavigation
