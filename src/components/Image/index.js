import * as React from 'react';

import * as styles from './styles.module.css';

const Image = ({src, onClick, alt}) => (
    <button className={styles.root} onClick={onClick}>
        <img
            className={styles.image}
            alt={alt}
            src={src}
        />
    </button>
);

export default Image;