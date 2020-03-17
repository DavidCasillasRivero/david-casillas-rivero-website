import '../styles/styles.scss';
import css from './index.module.css';
import React from 'react';
import SEO from '../components/seo';
import BlockContainer from '../components/blockContainer';
import Block from '../components/block';
import Credits from '../components/credits';
import { GiComputing, GiFClef } from 'react-icons/gi';
import ClassBuilder from '../services/ClassBuilder';
import { AiFillLinkedin, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import Title from '../components/title';

const IndexPage = () => {
  const className = new ClassBuilder([css.main]).class();

  const socialDeveloper = [
    {
      Icon: AiFillLinkedin,
      url: 'https://www.linkedin.com/in/david-casillas-rivero-36a17894',
      label: 'LinkedIn profile',
    },
    {
      Icon: DiGithubBadge,
      url: 'https://github.com/DavidCasillasRivero',
      label: 'GitHub account',
    },
  ];

  const socialMusician = [
    {
      Icon: AiFillYoutube,
      url:
        'https://www.youtube.com/channel/UCpFtVKO38lsy9soOZTXIqRQ?view_as=subscriber',
      label: 'Youtube musician channel',
    },
    {
      Icon: AiFillFacebook,
      url: 'https://www.facebook.com/david.casillas.7923',
      label: 'Facebook profile',
    },
    {
      Icon: AiFillYoutube,
      url:
        'https://www.youtube.com/channel/UCpFtVKO38lsy9soOZTXIqRQ?view_as=subscriber',
      label: 'Youtube education channel',
    },
  ];

  return (
    <React.Fragment>
      <SEO title="Home" />
      <div className={className}>
        <div className={css.firstPage}>
          <Title label="Hi, I'm David Casillas Rivero" />
          <BlockContainer>
            <Block
              Icon={GiComputing}
              label="Developer"
              description="I'm a full stack developer who tries to take care of quality and standards, be aware of community knowledge, but also focus on get the job done."
              social={socialDeveloper}
            ></Block>
            <Block
              Icon={GiFClef}
              label="Musician"
              description="I'm mainly a double bass player who loves to play any kind of good music and teach what I have learn, trying to spread the passion about this wonderful art."
              social={socialMusician}
            ></Block>
          </BlockContainer>
        </div>
        <Credits />
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
