import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection.js'
import { homeObjOne, homeObjthree, homeObjtwo } from "./Data";
const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjtwo} />
      <InfoSection {...homeObjthree} />
    </>
  )
}

export default Home
