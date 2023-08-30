import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Textarea } from '@chakra-ui/react';

export const Container = styled(motion.section)`
  padding: 1rem;
`;

export const TextareaStyled = styled(Textarea)`
  margin-top: 1rem;
  font-family: 'IBM Plex Sans';
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;
