import React from 'react'
import { BookPreview } from "@oce-editor-tools/base"
import { usfmText as usfmTextEn } from '../constants/John.usfm.en.js'
import { usfmText as usfmTextDe } from '../constants/John.usfm.de.js'
import { rangeArray, arrayToObject } from '../utils/obj-functions'
import { bRefLastVerseInChapter } from '@oce-editor-tools/verse-mapper'

const BibleView = ({curEp,lng}) => {
  const renderFlags = {
    showHeadings: false,
    showTitles: false,
    showChapterLabels: true,
    showVersesLabels: true,
    showWordAtts: false,

    showFootnotes: false,
    showXrefs: false,
    showCharacterMarkup: true,  
  };

  const lngUsfmList = {
    en: usfmTextEn,
    de: usfmTextDe
  }
  const getBcvFilter = (ep) => {
    if (ep?.begin?.ch !== ep?.end?.ch) {
      // We need to iterate through several chapters 
      const begCh = ep?.begin?.ch
      const endCh = ep?.end?.ch
      const chObj = {}
      rangeArray(begCh,endCh).forEach((val) => {
        let curLastV = bRefLastVerseInChapter({bookId: 'John',chapter: val})
        if (val === endCh) curLastV = ep?.end?.v 
        let curBegV = 1
        if (val === begCh) curBegV = ep?.begin?.v
        const vArray = rangeArray(curBegV,curLastV).map((val) => {
          return { inx: val }
        })
        chObj[val] = { 
          v: arrayToObject(vArray,"inx")
        }
      })
      return {
        book: { 
          jhn: {
            ch: chObj
          } 
        } 
      }  
    } else {
      const vArray = rangeArray(ep?.begin?.v,ep?.end?.v).map((val) => {
        return { inx: val }
      })
      // only verses are converted to an array (no chapters and no books)
      return {
        book: { 
          jhn: {
            ch: { 
              [curEp?.begin?.ch]: { 
                v: arrayToObject(vArray,"inx")
              },
            } 
          } 
        } 
      }
    }
  }

  const isValidEp = !!curEp?.begin?.ch && !!curEp?.begin?.v && !!curEp?.end?.v 

  const previewProps = {
    usfmText: lngUsfmList[lng],
    renderFlags,
    bcvFilter: isValidEp ? getBcvFilter(curEp) : undefined,
    verbose: true,
  }

  return (
      <div key="1">
        {isValidEp && <BookPreview {...previewProps} />}
      </div>
  );
}  

export default BibleView
