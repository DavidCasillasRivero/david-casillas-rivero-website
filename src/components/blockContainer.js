import React from 'react';
import css from './blockContainer.module.css';
import ClassBuilder from '../services/ClassBuilder';

function BlockContainer(props) {
  const { children } = props;

  const className = new ClassBuilder([css.main, 'columns']).class();

  return <div className={className}>{children}</div>;
}

export default BlockContainer;
