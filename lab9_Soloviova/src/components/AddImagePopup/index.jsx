import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { Overlay } from 'components/Overlay';

import * as S from './styled';

export function AddImagePopup({ onImageAdd, onClose }) {
  const [imageLink, setImageLink] = useState('');

  const handleImageAdd = () => {
    if (imageLink) {
      const imgElement = new Image();

      imgElement.src = imageLink;

      imgElement.onerror = () => setImageLink('');
      imgElement.onload = () => (onImageAdd(imageLink), onClose());
    }
  };

  return (
    <Overlay onMouseDown={onClose}>
      <S.Container onMouseDown={(e) => e.stopPropagation()}>
        <S.Input
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
          placeholder="Paste the link to the photo here..."
          autoFocus
        />
        <S.SubmitButton onClick={handleImageAdd} title="Add image by link">
          <FiPlusCircle />
        </S.SubmitButton>
      </S.Container>
    </Overlay>
  );
}
