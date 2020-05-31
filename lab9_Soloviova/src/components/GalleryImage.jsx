import React from 'react';
import styled from 'styled-components';

const Inner = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;

  cursor: pointer;
  border-radius: 0.35rem;
`;

export function GalleryImage({ src, onClick }) {
  return <Inner src={src} onClick={onClick} alt="Kitten pic" />;
}

GalleryImage.Root = Inner;
