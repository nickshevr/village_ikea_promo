import React from 'react';

import TEXTS from '../../data/text';

import * as styles from './styles.module.css';

const Link = ({href, idx, text}) => (
    <div className={styles.url}>
        <p className={styles.text}>
            {idx + 1}.
        </p>
        <a href={href} target='_blank' className={styles.link}>
            {text}
        </a>
    </div>
);

const Final = ({profile}) => {
    const links = TEXTS[Number(profile) - 1];

    return (
        <div className={styles.root}>
            {
                links.map(({text, url}, i) => (
                    <Link key={text} text={text} href={url} idx={i} />
                ))
            }
        </div>
    );
};

export default Final;
