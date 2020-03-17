import React from 'react';
import css from './block.module.css';
import ClassBuilder from '../services/ClassBuilder';
import BlockSocial from './blockSocial';

function Block(props) {
  const { Icon, label, description, social } = props;

  const cb = new ClassBuilder([css.main, 'column is-half']).class();
  const cbInner = new ClassBuilder([css.inner, 'box']).class();

  return (
    <div className={cb}>
      <div className={cbInner}>
        <div className="has-text-centered">
          <div>
            <Icon className={css.icon} size="80" />
          </div>
          <div className={css.label}>{label}</div>
          <div className={css.description}>{description}</div>
        </div>
        <BlockSocial items={social} />
      </div>
    </div>
  );
}

export default Block;
