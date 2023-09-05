import { ContentLayout } from '../shared/ContentLayout';
import { WelcomeSlider } from './components/WelcomeSlider/WelcomeSlider';

export const HomePage = () => {
  return (
    <ContentLayout>
      <h2>Home page</h2>
      <WelcomeSlider />
    </ContentLayout>
  );
};
