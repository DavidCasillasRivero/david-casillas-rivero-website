import React from 'react';
import css from './blockSocial.module.css';

function BlockSocial(props) {
  const { items = [] } = props;

  const className = [css.main].join(' ');

  return (
    <div className={className}>
      {items.map(item => (
        <SocialItem url={item.url} Icon={item.Icon} label={item.label} />
      ))}
    </div>
  );
}

function SocialItem(props) {
  const { Icon, url, label } = props;

  const className = [css.item, 'has-text-centered'].join(' ');

  return (
    <div className={className}>
      <a className={css.link} href={url} title={label}>
        <Icon size={30} alt={label} />
      </a>
    </div>
  );
}

export default BlockSocial;
