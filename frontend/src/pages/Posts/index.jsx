import Button from '../../components/Button';

import { Container, TextareaStyled } from './styled';

const Posts = () => {
  return (
    <Container
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <TextareaStyled
        variant="filled"
        resize={'none'}
        placeholder="Escreva seu post..."
        h="150px"
      />

      <Button value={'Postar'} />
    </Container>
  );
};

export default Posts;
