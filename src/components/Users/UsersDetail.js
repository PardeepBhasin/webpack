import React from 'react';
import styles from './User.css';
import img from './User.png'

class UsersDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div  className={styles.linkText} >Users Bhasins</div>
    );
  }
}

export default UsersDetail;
