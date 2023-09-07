import { useLocation, useNavigate } from 'react-router-dom';
import { Icon, IconSprite } from '../Sprites';
import { Button, IconWrapper } from './BackButton.styled';
import { useTheme } from '../../../context';

export const BackButton = () => {
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

  const handleGoBack = () => {
    if (currentLocation.key !== 'default') {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <Button isDarkTheme={isDarkTheme} onClick={handleGoBack}>
      <IconSprite />
      <IconWrapper>
        {isDarkTheme ? (
          <Icon spriteName="arrow-left" size="12px" fill="#fff" />
        ) : (
          <Icon spriteName="arrow-left" size="12px" />
        )}
      </IconWrapper>
      <p>Back</p>
    </Button>
  );
};
