import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { ButtonStyled } from './styled';

const Button = (props) => {
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const [text, setText] = useState(props.value);

  return (
    <ButtonStyled
      as={motion.button}
      initial={{
        background: 'linear-gradient(90deg, #ff6489 0%, #f9b24e 100%)',
      }}
      animate={{
        background: 'linear-gradient(90deg, #f9b24e 0%, #ff6489 100%)',
        transition: {
          repeat: Infinity,
          duration: 3,
        },
      }}
    >
      {text}
    </ButtonStyled>
  );
};

Button.prototype = {
  value: PropTypes.string.isRequired,
};

export default Button;
