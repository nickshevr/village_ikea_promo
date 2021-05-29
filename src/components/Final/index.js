import React, {useContext} from 'react';

import {
  GlobalStateContext,
} from "../../context/GlobalContextProvider"
import result_1 from '../../images/Result/1.png';
import result_2 from '../../images/Result/2.png';
import result_3 from '../../images/Result/3.png';
import result_4 from '../../images/Result/4.png';

import * as styles from './styles.module.css';
import Hyperlinks from '../Hyperlinks';

const disabledViewStyle = {
    display: 'none',
  };

const noStyle = {};

const Image = ({src, style}) => (
    <img
        style={style}
        src={src}
        className={styles.image}
    />
);

const Final = ({style}) => {
    const state = useContext(GlobalStateContext);
    const profile = Object.keys(state).sort((a, b) => state[a] - state[b] > 0 ? -1 : 1);
    const isEnded = state.currentStep === 6;

    return (
        <div style={style}>
            <Image src={result_1} style={profile[1] === "1" ? noStyle : disabledViewStyle}/>
            <Image src={result_2} style={profile[1] === "2" ? noStyle : disabledViewStyle}/>
            <Image src={result_3} style={profile[1] === "3" ? noStyle : disabledViewStyle}/>
            <Image src={result_4} style={profile[1] === "4" ? noStyle : disabledViewStyle}/>
            {isEnded && <Hyperlinks profile={profile[1]}/>}
        </div>
    )
};

export default Final;
