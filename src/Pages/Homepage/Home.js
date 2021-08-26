import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection.js'
import { homeObjOne, homeObjthree, homeObjtwo } from "./Data";
import Pricing from "./../../Components/Pricing/Pricing";
const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjtwo} />
      <InfoSection {...homeObjthree} />
      <Pricing></Pricing>
    </>
  )
}

export default Home
