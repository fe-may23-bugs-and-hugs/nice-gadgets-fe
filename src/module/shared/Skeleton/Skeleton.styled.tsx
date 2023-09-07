import { styled } from 'styled-components';

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  box-sizing: border-box;
  padding: 32px;
  width: 272px;

  border-radius: 8px;
  border: ${(props) => `1px solid ${props.theme.colors.grayElements}`};
  background: ${({ theme }) => theme.colors.white};
`;
