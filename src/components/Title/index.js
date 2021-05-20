import * as React from 'react';

import * as styles from './styles.module.css';

const Title = ({children}) => (
    <h1 className={styles.root}>
        {children}
    </h1>
);

export default Title;