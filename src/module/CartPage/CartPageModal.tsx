/* eslint-disable max-len */
import React, { useState, useEffect, useRef, ReactElement } from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalActions,
  ModalBody,
  ModalImage,
  ModalText,
  ModalFooter,
} from './CartPageModal.styled';

interface ModalProps {
  title: string;
  content: string;
  actions: React.ReactNode;
}

const CartPageModal = ({
  title,
  content,
  actions,
}: ModalProps): ReactElement | null => {
  const [showModal, setShowModal] = useState(true);

  const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    callback: () => void,
  ) => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);

      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [ref, callback]);
  };

  const useKeyDown = (callback: (e: KeyboardEvent) => void) => {
    useEffect(() => {
      document.addEventListener('keydown', callback);

      return () => {
        document.removeEventListener('keydown', callback);
      };
    }, [callback]);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, handleClose);

  useKeyDown((e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  });

  return showModal ? (
    <ModalContainer>
      <ModalContent ref={modalRef}>
        <ModalTitle>{title}</ModalTitle>
        <ModalBody>
          <ModalImage
            src="https://cdn2.iconfinder.com/data/icons/shopping-e-commerce-2-1/32/Success-Place-Order-Complete-Shopping-Tick-512.png"
            alt="order-completed-image"
          />
          <ModalText>{content}</ModalText>
        </ModalBody>
        <ModalFooter>
          <ModalActions>{actions}</ModalActions>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  ) : null;
};

export default CartPageModal;
