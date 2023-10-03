import { useState } from 'react';
import PropTypes from 'prop-types';

import { TextAreaStyled } from './styled';

const AutoExpandTextArea = (props) => {
  const { value, change } = props;
  const [textareaHeight, setTextareaHeight] = useState('30px');

  const handleTextChange = (e) => {
    change(e.target.value);

    // Calcula a altura necessária do textarea com base no conteúdo
    const lineHeight = 30; // A altura de uma linha (ajuste conforme sua preferência)
    const minRows = 1; // Número mínimo de linhas
    const maxRows = 10; // Número máximo de linhas (ajuste conforme sua preferência)

    const lines = e.target.value.split('\n').length;
    const newHeight = Math.min(
      maxRows * lineHeight,
      Math.max(minRows * lineHeight, lines * lineHeight),
    );

    setTextareaHeight(`${newHeight}px`);
  };

  return (
    <TextAreaStyled
      $textareaHeight={textareaHeight}
      value={value}
      onChange={handleTextChange}
      placeholder="Edite seu Post digitando aqui..."
    />
  );
};

export default AutoExpandTextArea;

AutoExpandTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
