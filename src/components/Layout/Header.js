import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <header className={classes.headerButton}>
          <h1>Delicious Meals</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
      </div>

      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
}

export default Header;