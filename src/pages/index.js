import React, {useContext} from "react"
import {
  GlobalStateContext,
} from "../context/GlobalContextProvider"
import Pool from '../components/Pool';
import Final from '../components/Final';
import {
  FIRST_IMAGES,
  SECOND_IMAGES,
  THIRD_IMAGES,
  FOURTH_IMAGES,
  FITH_IMAGES,
} from '../data/images';

import './styles.css'

const IndexPage = () => {
  const state = useContext(GlobalStateContext);

  return (
    <div id="main">
      <title>Village IKEA Promo</title>
      {state.currentStep === 1 && (<Pool images={FIRST_IMAGES} />)}
      {state.currentStep === 2 && (<Pool images={SECOND_IMAGES} />)}
      {state.currentStep === 3 && (<Pool images={THIRD_IMAGES} />)}
      {state.currentStep === 4 && (<Pool images={FOURTH_IMAGES} />)}
      {state.currentStep === 5 && (<Pool images={FITH_IMAGES} />)}
      {state.currentStep === 6 && (<Final />)}
    </div>
  )
}

export default IndexPage
