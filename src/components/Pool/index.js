import React, {useContext} from "react"

import * as styles from './styles.module.css';

import {
    GlobalDispatchContext,
} from "../../context/GlobalContextProvider"
import Gallery from '../Gallery';
import Image from '../Image';

import {shuffleArray} from '../../utils';

const FirstPool = ({images}) => {
    const dispatch = useContext(GlobalDispatchContext)
    const shuffledImages = shuffleArray(images);

    const makeOnclick = i => () => {
        dispatch({type: 'add', payload: i})
        dispatch({type: 'next'})
    };

    return (
        <div className={styles.root}>
            <Gallery>
                {
                    shuffledImages.map((value, key) => (
                        <Image
                            onClick={makeOnclick(value)}
                            src={value}
                        />
                    ))
                }
            </Gallery>
        </div>
    );
};

export default FirstPool;