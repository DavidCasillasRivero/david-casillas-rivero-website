import React, { useState } from 'react';
import css from './credits.module.css';
import ClassBuilder from '../services/ClassBuilder';
import { Link } from 'gatsby';

function Credits() {
  const [showCredits, setShowCredits] = useState(false);

  const cb = new ClassBuilder([css.main]).class();

  const toggleCredits = () => {
    setShowCredits(showCredits => !showCredits);
  };

  return (
    <div className={cb}>
      <button class="button is-text is-small" onClick={toggleCredits}>
        {showCredits ? 'Hide credits' : 'Show credits'}
      </button>
      <div className={showCredits ? 'box' : 'box is-hidden'}>
        Thanks to the great open source community ecosystem who made posible to
        build so great software to anyone. These are the main projects used to
        build this site (many more are not listed):
        <ul>
          <li>
            <Link to="https://www.gatsbyjs.org/">Gatsby</Link>
          </li>
          <li>
            <Link to="https://www.reactjs.org/">React</Link>
          </li>
          <li>
            <Link to="https://bulma.io/">Bulma</Link>
          </li>
          <li>
            <Link to="https://react-icons.netlify.com/#/">React Icons</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Credits;
