import * as React from 'react';

import * as styles from './styles.module.css';

const Gallery = ({children}) => (
    <div className={styles.root}>
        {children}
    </div>
);

export default Gallery;