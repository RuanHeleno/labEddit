import { Checkbox, Input } from '@chakra-ui/react';
import { useContext } from 'react';

import { GlobalContext } from '../../contexts/GlobalContext';
import Button from '../../components/Button';

import { Container, Form } from './styled';

const SignUp = () => {
  const context = useContext(GlobalContext);
  const { nickname, setNickname, email, setEmail, password, setPassword } =
    context;

  return (
    <Container
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <h2>Olá, boas vindas ao LabEddit ;)</h2>

      <Form>
        <Input
          type="text"
          id="nickname"
          variant="outline"
          placeholder="Apelido"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          isRequired={true}
        />
        <Input
          type="email"
          id="email"
          variant="outline"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isRequired={true}
        />
        <Input
          type="password"
          id="password"
          variant="outline"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isRequired={true}
        />

        <p className="first">
          Ao continuar, você concorda com o nosso{' '}
          <span>Contrato de usuário</span> e nossa{' '}
          <span>Política de Privacidade</span>
        </p>

        <Checkbox colorScheme="green" id="check">
          <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
        </Checkbox>

        <Button value={'Cadastrar'} />
      </Form>
    </Container>
  );
};

export default SignUp;
