import React from 'react';
import styles from './HomePage.css';
import img from './test.png'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div  className={styles.linkText} >Test</div>
    );
  }
}

export default HomePage;
