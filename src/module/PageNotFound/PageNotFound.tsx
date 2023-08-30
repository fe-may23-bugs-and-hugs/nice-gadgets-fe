import {
  NotFoundText,
  NotFoundTitle,
  NotFoundWrapper,
  ButtonGoHome,
  NotFoundGif,
} from './PageNotFound.styled';
import notFoundGif from '../../assets/images/not_found_img.gif';

export const PageNotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>Page not found!</NotFoundTitle>
      <NotFoundGif src={notFoundGif} />

      <NotFoundText>
        Please try again later or return on Home page.
      </NotFoundText>

      <ButtonGoHome href="/">Go home</ButtonGoHome>
    </NotFoundWrapper>
  );
};
