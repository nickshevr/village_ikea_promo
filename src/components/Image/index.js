import * as React from 'react';

import * as styles from './styles.module.css';

const Image = ({src, onClick, alt}) => (
    <img
        className={styles.image}
        alt={alt}
        src={src}
        onClick={onClick}
    />
);

export default Image;