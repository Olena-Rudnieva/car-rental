import {
  Wrapper,
  Img,
  Title,
  Subtitle,
  TextWrapper,
} from './Backgroung.styled';
import image from '../../images/car.png';
import { motion } from 'framer-motion';

export const Backgroung = () => {
  const animationVariants = {
    hidden: { x: '-100%' },
    visible: { x: '0%' },
  };

  const animationTransition = {
    type: 'spring',
    damping: 20,
    stiffness: 40,
  };
  return (
    <div>
      <Wrapper>
        <div>
          <TextWrapper>
            <Title>Rent a Car </Title>
            <Subtitle>Journey near and far</Subtitle>
          </TextWrapper>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={animationTransition}
          >
            <Img src={image} alt="Car" />
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};
