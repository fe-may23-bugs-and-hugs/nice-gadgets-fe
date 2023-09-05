import { ContentLayout } from '../shared/ContentLayout';
import { ProductsSlider } from './components/ProductsSlider/ProductsSlider';
import { WelcomeSlider } from './components/WelcomeSlider/WelcomeSlider';

export const HomePage = () => {
  return (
    <ContentLayout>
      <h2>Home page</h2>
      <WelcomeSlider />
      <ProductsSlider />
    </ContentLayout>
  );
};
