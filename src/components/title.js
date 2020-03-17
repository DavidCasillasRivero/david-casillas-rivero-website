import React from 'react';
import css from './title.module.css';

function Title(props) {
  const { label } = props;

  const className = [css.main, 'title', 'has-text-centered'].join(' ');

  return <h1 className={className}>{label}</h1>;
}

export default Title;
