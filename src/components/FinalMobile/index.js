import React, {useContext} from 'react';

import {
  GlobalStateContext,
} from "../../context/GlobalContextProvider"
import result_1 from '../../images/Result/result_mobile_1.jpg';
import result_2 from '../../images/Result/result_mobile_2.jpg';
import result_3 from '../../images/Result/result_mobile_3.jpg';
import result_4 from '../../images/Result/result_mobile_4.jpg';
import Hyperlinks from '../Hyperlinks';
import Text from '../Text';
import Title from '../Title';
import TEXTS from '../../data/text';

import * as styles from './styles.module.css';

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

const TextInfo = ({profile}) => {
    const {title, text} = TEXTS[Number(profile) - 1];

    return (
        <div>
            <Title>
                {title}
            </Title>
            <Text>
                {text}
            </Text>
        </div>
    );
};

const Final = ({style}) => {
    const state = useContext(GlobalStateContext);
    const profile = Object.keys(state).sort((a, b) => state[a] - state[b] > 0 ? -1 : 1);
    const isEnded = state.currentStep === 6;

    return (
        <div style={style}>
            {isEnded && <TextInfo  profile={profile[1]} />}
            <Image src={result_1} style={profile[1] === "1" ? noStyle : disabledViewStyle}/>
            <Image src={result_2} style={profile[1] === "2" ? noStyle : disabledViewStyle}/>
            <Image src={result_3} style={profile[1] === "3" ? noStyle : disabledViewStyle}/>
            <Image src={result_4} style={profile[1] === "4" ? noStyle : disabledViewStyle}/>
            {isEnded && <Hyperlinks profile={profile[1]}/>}
        </div>
    )
};

export default Final;
