/* eslint-disable operator-linebreak */
/* eslint-disable space-before-function-paren */
/* eslint-disable max-len */
import React, { useContext } from 'react';
import { theme } from '../../styles';
import { ContentLayout } from '../shared/ContentLayout';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  MainElement,
  PathAndBack,
  Title,
  H2,
  H3,
  P,
  Theader,
  THead,
  TRow,
  DescriptionWrapper,
  ItemCard,
  ImagesBox,
  CardInfo,
  AboutBlock,
  SpecsBlock,
  CardWrapper,
  TechScecsInfo,
  TableRow,
  TableHeader,
  TableData,
  ChoiseWrapper,
  ChoiseButtons,
  MemoryButton,
  TitleChoise,
  ColorButton,
  DeviceId,
  ImageSizeBox,
  ImagesSizeBox,
  CardImage,
  ImagesWrapper,
  SmallCardImage,
  RecommendedBlock,
} from './ProductCard.styled';

import {
  CurrentPrice,
  DescrBox,
  DescrTitle,
  DescrWrapper,
  DescrValue,
  OldPrice,
  PriceWrapper,
  ButtonsWrapper,
  ButtonAdd,
  ButtonLike,
} from './../shared/PhoneCard/PhoneCard.styled';
import { Icon, IconSprite, Loader } from '../shared';
import { colorMappings } from './colorMappings';
import { getOnePhone } from '../../api/phonesAPI';
import { Phone } from '../../types/Phone';
import { BackButton } from '../shared/BackButton';
import {
  CartContext,
  FavoriteContext,
  PhonesContext,
  useTheme,
} from '../../context';
import { ProductsSlider } from '../HomePage/components/ProductsSlider/ProductsSlider';
import { Breadcrumbs } from '../shared/Breadcrumbs';

function extractData(obj: Record<string, any>) {
  const result: Record<string, any> = {};
  let isDescriptionSection = false;

  for (const [key, value] of Object.entries(obj)) {
    if (isDescriptionSection) {
      result[key] = value;
    }

    if (key === 'description') {
      isDescriptionSection = true;
    }
  }

  return result;
}

export const ProductCard = () => {
  const { productId } = useParams();
  const [device, setDevice] = React.useState<Phone | null>(null);
  const { addItem, cartProducts } = React.useContext(CartContext);
  const { addFavoriteProduct, favoriteProducts } =
    React.useContext(FavoriteContext);
  const [selectedCapacity, setSelectedCapacity] = React.useState<string>('');
  const [selectedColor, setSelectedColor] = React.useState<string>('');
  const [currentImage, setCurrentImage] = React.useState(device?.images[0]);
  const [selectedImage, setSelectedImage] = React.useState<string>('');
  const [loading, setLoading] = React.useState(true);
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

  const { loadRecommendedData, recommendedData } = useContext(PhonesContext);
  const { pathname } = useLocation();

  const path = pathname.split('/')[pathname.split('/').length - 1];
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        if (productId) {
          const response = await getOnePhone(productId);
          const responseData = response as Phone;

          if (responseData.capacity) {
            setSelectedCapacity(responseData.capacity);
          }

          if (!responseData.capacity) {
            setSelectedCapacity(
              productId.split('-')[productId.split('-').length - 2],
            );
          }

          if (responseData.color) {
            setSelectedColor(responseData.color);
          }

          if (!responseData.color) {
            setSelectedColor(
              productId.split('-')[productId.split('-').length - 1],
            );
          }

          setDevice(responseData);

          setCurrentImage(responseData.images[0]);
          setSelectedImage(responseData.images[0]);
        }

        if (path) {
          loadRecommendedData(path);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId, path]);

  if (!device) {
    return <Loader visible={loading} />;
  }

  const deviceData = extractData(device);

  const isSelected = cartProducts.find((product) => product._id === device._id);
  const isFavorite = favoriteProducts.find(
    (product) => product._id === device._id,
  );

  const toggleClick = (phoneData: Phone) => {
    addItem(phoneData);
  };

  const toggleFavorite = (phoneData: Phone) => {
    addFavoriteProduct(phoneData);
  };

  const handleButtonClick = (capacity: string) => {
    const firstPartCurrentPoductId = productId
      ?.split('-')
      .slice(0, -2)
      .join('-');
    const newProductId = `${firstPartCurrentPoductId}-${capacity?.toLowerCase()}-${selectedColor}`;

    navigate(`./../${newProductId}`);
  };

  const handleColorClick = (color: string) => {
    const firstPartCurrentPoductId = productId
      ?.split('-')
      .slice(0, -2)
      .join('-');
    const newProductId = `${firstPartCurrentPoductId}-${selectedCapacity?.toLowerCase()}-${color}`;

    navigate(`./../${newProductId}`);
  };

  return (
    <ContentLayout>
      <MainElement>
        <PathAndBack>
          <Breadcrumbs />
          <BackButton />
        </PathAndBack>
        <Title isDarkTheme={isDarkTheme}>{device.name}</Title>
        <ItemCard>
          <ImagesBox>
            <ImageSizeBox>
              <CardImage src={currentImage} alt="Phone image" />
            </ImageSizeBox>
            <ImagesWrapper>
              {device.images.map((img) => (
                <ImagesSizeBox
                  onClick={() => {
                    setCurrentImage(img);
                    setSelectedImage(img);
                  }}
                  className={selectedImage === img ? 'active' : ''}
                >
                  <SmallCardImage key={img} src={img} alt="Small phone image" />
                </ImagesSizeBox>
              ))}
            </ImagesWrapper>
          </ImagesBox>
          <CardInfo>
            <CardWrapper>
              {device.colorsAvailable && (
                <ChoiseWrapper>
                  <TitleChoise>Available colors</TitleChoise>
                  <ChoiseButtons>
                    {device.colorsAvailable.map((color) => (
                      <ColorButton
                        className={selectedColor === color ? 'active' : ''}
                        onClick={() => handleColorClick(color)}
                        style={{ backgroundColor: colorMappings[color] }}
                      ></ColorButton>
                    ))}
                  </ChoiseButtons>
                </ChoiseWrapper>
              )}

              {device.capacityAvailable && (
                <ChoiseWrapper>
                  <TitleChoise>Select capacity</TitleChoise>
                  <ChoiseButtons>
                    {device.capacityAvailable.map((capacity) => (
                      <MemoryButton
                        className={
                          selectedCapacity === capacity ? 'active' : ''
                        }
                        onClick={() => handleButtonClick(capacity)}
                      >
                        {capacity}
                      </MemoryButton>
                    ))}
                  </ChoiseButtons>
                </ChoiseWrapper>
              )}

              <PriceWrapper className="card-price" isDarkTheme={isDarkTheme}>
                <CurrentPrice
                  className="card-current-price"
                  isDarkTheme={isDarkTheme}
                >
                  {`$${device.priceDiscount}`}
                </CurrentPrice>
                <OldPrice className="card-old-price" isDarkTheme={isDarkTheme}>
                  {`$${device.priceRegular}`}
                </OldPrice>
              </PriceWrapper>

              <ButtonsWrapper className="card-button">
                <ButtonAdd
                  isDarkTheme={isDarkTheme}
                  onClick={() => {
                    toggleClick(device);
                  }}
                  type="button"
                  isClicked={isSelected}
                  className="card-button-add"
                >
                  {isSelected ? 'Added' : 'Add to cart'}
                </ButtonAdd>
                <ButtonLike
                  isDarkTheme={isDarkTheme}
                  isClicked={!!isFavorite}
                  type="button"
                  onClick={() => {
                    toggleFavorite(device);
                  }}
                  className="card-button-like"
                >
                  <IconSprite />
                  {isFavorite && (
                    <Icon
                      spriteName="heart-field"
                      fill={theme.colors.accentSecondary}
                    />
                  )}

                  {!isFavorite && <Icon spriteName="heart" />}

                  {isDarkTheme && isFavorite && (
                    <Icon
                      spriteName="heart-field"
                      fill={theme.colors.accentSecondary}
                    />
                  )}

                  {isDarkTheme && !isFavorite && (
                    <Icon spriteName="heart-white" />
                  )}
                </ButtonLike>
              </ButtonsWrapper>

              <DescrWrapper>
                <DescrBox>
                  {device.screen && (
                    <DescrTitle isDarkTheme={isDarkTheme}>Screen</DescrTitle>
                  )}
                  {device.resolution && (
                    <DescrTitle isDarkTheme={isDarkTheme}>
                      Resolution
                    </DescrTitle>
                  )}
                  {device.processor && (
                    <DescrTitle isDarkTheme={isDarkTheme}>Processor</DescrTitle>
                  )}
                  {device.ram && (
                    <DescrTitle isDarkTheme={isDarkTheme}>Ram</DescrTitle>
                  )}
                </DescrBox>

                <DescrBox>
                  <DescrValue isDarkTheme={isDarkTheme}>
                    {device.screen}
                  </DescrValue>
                  <DescrValue isDarkTheme={isDarkTheme}>
                    {device.resolution}
                  </DescrValue>
                  <DescrValue isDarkTheme={isDarkTheme}>
                    {device.processor}
                  </DescrValue>
                  <DescrValue isDarkTheme={isDarkTheme}>
                    {device.ram}
                  </DescrValue>
                </DescrBox>
              </DescrWrapper>
            </CardWrapper>
            <DeviceId>ID: {device._id}</DeviceId>
          </CardInfo>
          <AboutBlock>
            <H2 isDarkTheme={isDarkTheme}>About</H2>
            {device.description &&
              device.description.map((info) => (
                <DescriptionWrapper key={info.title}>
                  <H3 isDarkTheme={isDarkTheme}>{info.title}</H3>
                  {Array.isArray(info.text) &&
                    info.text.map((text: string) => <P>{text}</P>)}
                </DescriptionWrapper>
              ))}
          </AboutBlock>
          <SpecsBlock>
            <THead>
              <TRow>
                <Theader isDarkTheme={isDarkTheme}>Tech Spec</Theader>
              </TRow>
            </THead>
            <TechScecsInfo>
              {Object.entries(deviceData).map(
                ([key, value]) =>
                  value && (
                    <TableRow key={key}>
                      <TableHeader>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </TableHeader>
                      <TableData isDarkTheme={isDarkTheme}>
                        {Array.isArray(value) ? value.join(' ') : value}
                      </TableData>
                    </TableRow>
                  ),
              )}
            </TechScecsInfo>
          </SpecsBlock>
        </ItemCard>
      </MainElement>
      {!loading && (
        <RecommendedBlock>
          <ProductsSlider
            data={recommendedData}
            uniqueKey="recommended"
            subtitle="You may also like"
          />
        </RecommendedBlock>
      )}
    </ContentLayout>
  );
};
