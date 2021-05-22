import React from 'react';

import TEXTS from '../../data/links';

import * as styles from './styles.module.css';

const Link = ({href, idx, text, lastIdx}) => (
    <div className={styles.url}>
        <p className={styles.text}>
            {idx + 1} &mdash; &nbsp;
        </p>
        <a href={href} target='_blank' className={styles.link}>
            {text}{lastIdx !== idx + 1 && ','}
        </a>
    </div>
);

const Final = ({profile}) => {
    const links = TEXTS[Number(profile) - 1];

    return (
        <div className={styles.root}>
            {
                links.map(({text, url}, i) => (
                    <Link key={text} text={text} href={url} idx={i} lastIdx={links.length}/>
                ))
            }
        </div>
    );
};

export default Final;
