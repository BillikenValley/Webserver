import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';

import styles from './styles.module.css';

export class coc extends React.Component {
  render() {
    return (
      <div id='page' className={styles.wrapper}>
        <div id='content' className={styles.content}>
          <h1>CoC Member Login Page</h1>
        </div>
      </div>
    )
  }
}

export default coc;
