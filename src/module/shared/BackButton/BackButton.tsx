import { useLocation, useNavigate } from 'react-router-dom';
import { Icon, IconSprite } from '../Sprites';
import { Button, IconWrapper } from './BackButton.styled';

export const BackButton = () => {
  const currentLocation = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (currentLocation.key !== 'default') {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <Button onClick={handleGoBack}>
      <IconSprite />
      <IconWrapper>
        <Icon spriteName="arrow-left" size="12px" />
      </IconWrapper>
      <p>Back</p>
    </Button>
  );
};
