import React, {useContext} from "react"
import {
  GlobalStateContext,
} from "../context/GlobalContextProvider"
import Pool from '../components/Pool';
import FinalMobile from '../components/FinalMobile';
import {
  FIRST_IMAGES,
  SECOND_IMAGES,
  THIRD_IMAGES,
  FOURTH_IMAGES,
  FITH_IMAGES,
} from '../data/images';

import './styles.css'

const disabledViewStyle = {
  display: 'none',
};

const noStyle = {};

const IndexPage = () => {
  const state = useContext(GlobalStateContext);

  return (
    <div id="main_mobile">
      <title>Village IKEA Promo</title>
      <Pool images={FIRST_IMAGES} style={state.currentStep === 1 ? noStyle : disabledViewStyle} />
      <Pool images={SECOND_IMAGES} style={state.currentStep === 2 ? noStyle : disabledViewStyle} />
      <Pool images={THIRD_IMAGES} style={state.currentStep === 3 ? noStyle : disabledViewStyle} />
      <Pool images={FOURTH_IMAGES} style={state.currentStep === 4 ? noStyle : disabledViewStyle} />
      <Pool images={FITH_IMAGES} style={state.currentStep === 5 ? noStyle : disabledViewStyle} />
      <FinalMobile style={state.currentStep === 6 ? noStyle : disabledViewStyle} />
    </div>
  )
}

export default IndexPage
