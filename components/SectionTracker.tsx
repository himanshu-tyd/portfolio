'use client'

import { useActiveSectionContext } from '@/context/ActiveSectionProvider'
import React from 'react'

const SectionTracker = (Element, idName) => {

   console.log('section tracker')

  return function (){
    return <div>
      <Element/>
    </div>
  }
}

export default SectionTracker