/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useState, useRef, useEffect } from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalBody,
  ModalImage,
  ModalText,
  ModalIconClose,
  ModalTitleContainer,
} from './CartPageModal.styled';

interface ModalProps {
  title: string;
  content: string;
  actions: React.ReactNode;
  handleToggle: () => void;
}

const CartPageModal: React.FC<ModalProps> = ({
  title,
  content,
  actions,
  handleToggle,
}: ModalProps) => {
  const [isOpen] = useState(true);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleDocumentClick = () => {
    if (
      !modalRef.current
      || !modalRef.current.contains(document.activeElement)
    ) {
      handleToggle();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleToggle();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick, true);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return isOpen ? (
    <ModalContainer>
      <ModalContent ref={modalRef}>
        <ModalTitleContainer>
          <ModalTitle>{title}</ModalTitle>
          <ModalIconClose>{actions}</ModalIconClose>
        </ModalTitleContainer>
        <ModalBody>
          <ModalImage
            src="https://cdn2.iconfinder.com/data/icons/shopping-e-commerce-2-1/32/Success-Place-Order-Complete-Shopping-Tick-512.png"
            alt="order-completed-image"
          />
          <ModalText>{content}</ModalText>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  ) : null;
};

export default CartPageModal;
