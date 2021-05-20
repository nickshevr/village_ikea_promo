import React, {useContext} from "react"
import {
  GlobalStateContext,
} from "../context/GlobalContextProvider"

import Pool from '../components/Pool';
import {FIRST_IMAGES, SECOND_IMAGES} from '../data/images';

const IndexPage = () => {
  const state = useContext(GlobalStateContext);

  return (
    <div>
      <title>Village IKEA Promo</title>
      {state.currentStep === 1 && (<Pool images={FIRST_IMAGES} />)}
      {state.currentStep === 2 && (<Pool images={SECOND_IMAGES} />)}
      {state.currentStep === 3 && (<Pool images={FIRST_IMAGES} />)}
      {state.currentStep === 4 && (<Pool images={FIRST_IMAGES} />)}
      {state.currentStep === 5 && (<Pool images={FIRST_IMAGES} />)}
    </div>
  )
}

export default IndexPage
