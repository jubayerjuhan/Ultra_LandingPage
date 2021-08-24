import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection.js'
import { homeObjOne } from "./Data";
const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
    </>
  )
}

export default Home
