import React, {useContext} from 'react';

import {
  GlobalStateContext,
} from "../../context/GlobalContextProvider"
import result_1 from '../../images/Result/result_1.png';
import result_2 from '../../images/Result/result_2.png';
import result_3 from '../../images/Result/result_3.png';
import result_4 from '../../images/Result/result_4.png';

import * as styles from './styles.module.css';

const Image = ({src}) => (
    <img
        src={src}
        className={styles.image}
    />
);

const Final = () => {
    const state = useContext(GlobalStateContext);
    const profile = Object.keys(state).sort((a, b) => state[a] - state[b] > 0 ? -1 : 1);

    return (
        <React.Fragment>
            {profile[1] === "1" && <Image src={result_1} />}
            {profile[1] === "2" && <Image src={result_2} />}
            {profile[1] === "3" && <Image src={result_3} />}
            {profile[1] === "4" && <Image src={result_4} />}
        </React.Fragment>
    )
};

export default Final;