import React from 'react'
import LandingPageCards from './LandingPageCards'

type Props = {}


const LandingPageCardContainer = (props: Props) => {
  return (
      <div className="right w:1/3 md:h-full h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-prussian-blue-600 to-prussian-blue-1000 overflow-y-hidden grow">
          <LandingPageCards />
          {/* <LandingPageCards /> */}
      </div>
  )
}

export default LandingPageCardContainer