import {
  NotFoundText,
  NotFoundTitle,
  NotFoundWrapper,
  ButtonGoHome,
  NotFoundGif,
} from './PageNotFound.styled';
import notFoundGif from '../../assets/images/404.gif';
import { ContentLayout } from '../shared/ContentLayout';

export const PageNotFound = () => {
  return (
    <ContentLayout>
      <NotFoundWrapper>
        <NotFoundTitle>Page not found!</NotFoundTitle>
        <NotFoundGif src={notFoundGif} />

        <NotFoundText>
          Please try again later or return on Home page.
        </NotFoundText>

        <ButtonGoHome href="/">Go home</ButtonGoHome>
      </NotFoundWrapper>
    </ContentLayout>
  );
};
