import { useLocation, useNavigate } from 'react-router-dom';
import { Icon, IconSprite } from '../Sprites';
import { Button, Back, IconWrapper } from './BackButton.styled';

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
        <Icon spriteName="arrow-left" size='12px' />
      </IconWrapper>
      <Back>Back</Back>
    </Button>
  );
};

// import { useNavigate, useLocation } from 'react-router-dom';

// export const MyComponent = () => {
//   const navigate = useNavigate();
//   const currentLocation = useLocation();

//   const handleGoBack = () => {
//     const previousPath = currentLocation.state?.from;

//     if (previousPath) {
//       navigate(-1);
//     }
//   };

//   return (
//       {currentLocation.state?.from && (
//         <Button onClick={handleGoBack}>
//           <IconSprite />
//           <IconWrapper>
//             <Icon spriteName="arrow-left" size='12px' />
//           </IconWrapper>
//           <Back>Back</Back>
//         </Button>
//   );
// }
