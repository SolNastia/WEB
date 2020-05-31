import React, { useCallback, useState, useMemo } from 'react';
import { FiTrash, FiPlus } from 'react-icons/fi';

import { GalleryImage } from 'components/GalleryImage';
import { AddImagePopup } from 'components/AddImagePopup';
import { Overlay } from 'components/Overlay';

import * as S from './styled';

const getNextIndex = (max, current, change) => (max + current + change) % max;

export function Gallery({ images = [], onImageAdd, onImageDelete }) {
  const [addImageShown, setAddImageShown] = useState(false);
  const [focusedIdx, setFocusedIdx] = useState(null);

  const indexes = useMemo(
    () =>
      focusedIdx === null
        ? null
        : {
            prev: getNextIndex(images.length, focusedIdx, -1),
            next: getNextIndex(images.length, focusedIdx, 1),
          },
    [images.length, focusedIdx]
  );

  const handleImageToggle = useCallback(
    (newFocusedIdx) => (e) => {
      e.stopPropagation();

      setFocusedIdx((prevFocused) =>
        prevFocused === newFocusedIdx ? null : newFocusedIdx
      );
    },
    []
  );

  return (
    <S.Background>
      <S.Container>
        <S.ImagesContainer>
          {images.map((imageLink, idx) => (
            <GalleryImage
              src={imageLink}
              onClick={handleImageToggle(idx)}
              key={idx}
            />
          ))}
        </S.ImagesContainer>
        <S.Toolbar>
          <S.AddButton
            onClick={() => setAddImageShown(true)}
            title="Add a new image"
          >
            <FiPlus color="#fff" />
          </S.AddButton>
        </S.Toolbar>

        {focusedIdx !== null && indexes && (
          <Overlay onClick={() => setFocusedIdx(null)}>
            <S.Preview>
              <GalleryImage
                src={images[indexes.prev]}
                onClick={handleImageToggle(indexes.prev)}
                alt="Kitten pic"
              />

              <S.PreviewFocus>
                <GalleryImage
                  src={images[focusedIdx]}
                  onClick={(e) => e.stopPropagation()}
                  alt="Kitten pic"
                />
                <S.DeleteButton
                  onClick={() => onImageDelete(images[focusedIdx])}
                  title="Delete this image"
                >
                  <FiTrash color="#fff" />
                </S.DeleteButton>
              </S.PreviewFocus>

              <GalleryImage
                src={images[indexes.next]}
                onClick={handleImageToggle(indexes.next)}
                alt="Kitten pic"
              />
            </S.Preview>
          </Overlay>
        )}

        {addImageShown && (
          <AddImagePopup
            onImageAdd={onImageAdd}
            onClose={() => setAddImageShown(false)}
          />
        )}
      </S.Container>
    </S.Background>
  );
}
