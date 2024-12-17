import ScrollAnimation from 'react-animate-on-scroll';
import HeroImgSvg from './HeroImgSvg';

import './styles.scss';

const HeroImage = () => (
  <div className="hero-image">
    <ScrollAnimation animateIn="fadeInRight">
      <HeroImgSvg width={'115%'} height={'125%' } />
    </ScrollAnimation>
  </div>
);

export default HeroImage;
