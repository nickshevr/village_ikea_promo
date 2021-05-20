import * as React from 'react';

import * as styles from './styles.module.css';

const Text = ({children}) => (
    <p className={styles.root}>
        {children}
    </p>
);

export default Text;