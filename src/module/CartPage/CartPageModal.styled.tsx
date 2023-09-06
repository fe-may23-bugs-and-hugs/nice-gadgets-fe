import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    padding: 30px;
  }
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 10px;
`;

export const ModalTitleContainer = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ModalTitle = styled.h2`
  display: flex;
  margin-top: 0;
  color: ${({ theme }) => theme.colors.accentSecondary};
  font-family: ${({ theme }) => theme.fonts.name};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  text-align: center;

  @media (max-width: 400px) {
    margin-top: 5px;
    display: flex;
    font-size: ${({ theme }) => theme.fonts.sizeL};
  }
`;

export const ModalIconClose = styled.div`
  display: flex;
  align-self: flex-end;
  position: absolute;
  top: 5px;
  right: 5px;

  @media (max-width: 400px) {
    position: absolute;
    top: 1px;
    right: 1px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
`;

export const ModalBody = styled.div`
  margin-bottom: 10px;
  padding: 16px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
`;

export const ModalImage = styled.img`
  width: 300px;
  height: auto;
  margin: 16px;
  margin-bottom: 48px;
`;

export const ModalText = styled.p`
  margin-left: 10px;
  text-align: center;

  
  color: ${({ theme }) => theme.colors.accentSecondary};
  font-family: ${({ theme }) => theme.fonts.name};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
`;
