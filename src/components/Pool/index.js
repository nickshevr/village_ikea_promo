import React, {useContext} from "react"

import * as styles from './styles.module.css';

import {
    GlobalDispatchContext,
} from "../../context/GlobalContextProvider"
import Gallery from '../Gallery';
import Image from '../Image';

import {shuffleArray} from '../../utils';

const FirstPool = ({images, style}) => {
    const dispatch = useContext(GlobalDispatchContext)
    const shuffledImages = shuffleArray(images);

    const makeOnclick = i => () => {
        dispatch({type: 'add', payload: i})
        dispatch({type: 'next'})
    };

    return (
        <div style={style} className={styles.root}>
            <Gallery>
                {
                    shuffledImages.map(value => (
                        <Image
                            onClick={makeOnclick(value)}
                            src={value}
                            key={value}
                        />
                    ))
                }
            </Gallery>
        </div>
    );
};

export default FirstPool;