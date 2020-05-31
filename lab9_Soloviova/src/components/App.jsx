import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Gallery } from 'components/Gallery';

const IMAGES = [
  'https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/4462784/pexels-photo-4462784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/4328962/pexels-photo-4328962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/3278768/pexels-photo-3278768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/3876328/pexels-photo-3876328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/3563888/pexels-photo-3563888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(to top, #333, #555);
`;

export function App() {
  const [images, setImages] = useState(IMAGES);

  const addImage = useCallback(
    (imageLink) => setImages((prev) => [...prev, imageLink]),
    []
  );

  const deleteImage = useCallback(
    (imageLink) => setImages((prev) => prev.filter((l) => l !== imageLink)),
    []
  );

  return (
    <Container>
      <Gallery
        images={images}
        onImageAdd={addImage}
        onImageDelete={deleteImage}
      />
    </Container>
  );
}
