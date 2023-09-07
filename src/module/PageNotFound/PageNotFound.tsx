import {
  NotFoundText,
  NotFoundTitle,
  NotFoundWrapper,
  ButtonGoHome,
  NotFoundGif,
} from './PageNotFound.styled';
import notFoundGif from '../../assets/images/404.gif';
import { ContentLayout } from '../shared/ContentLayout';
import { useTheme } from '../../context';

export const PageNotFound = () => {
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

  return (
    <ContentLayout>
      <NotFoundWrapper>
        <NotFoundTitle isDarkTheme={isDarkTheme}>Page not found!</NotFoundTitle>
        <NotFoundGif src={notFoundGif} />

        <NotFoundText isDarkTheme={isDarkTheme}>
          Please try again later or return on Home page.
        </NotFoundText>

        <ButtonGoHome isDarkTheme={isDarkTheme} href="/">
          Go home
        </ButtonGoHome>
      </NotFoundWrapper>
    </ContentLayout>
  );
};
