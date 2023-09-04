/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { MainElement } from './ProductCard.styled';
import { onDesktop, onTablet } from '../shared/Mixins';
import { theme } from '../../styles';
import { ContentLayout } from '../shared/ContentLayout';
import { useParams, useNavigate } from 'react-router-dom';

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
import { Icon, IconSprite } from '../shared';
import { colorMappings } from './colorMappings';
import { getOnePhone } from '../../api/phonesAPI';
import { Phone } from '../../types/Phone';

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

const PathAndBack = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
`;

const Span1Element = styled.span``;

const Span2Element = styled.span``;

const Title = styled.h1`
  grid-column: 1 / -1;
  font-size: ${theme.fonts.sizeM};
  line-height: ${theme.fonts.lineHeightXl};
  color: ${theme.colors.grayPrimary};
  margin-bottom: 32px;

  ${onTablet(`
    font-size: ${theme.fonts.sizeXxl};
    line-height: ${theme.fonts.lineHeightXxl};
    margin-bottom: 40px;
  `)}
`;

const H2 = styled.h2`
  color: ${theme.colors.grayPrimary};
  font-size: ${theme.fonts.sizeM};
  line-height: ${theme.fonts.lineHeightL};
  font-weight: ${theme.fonts.weightBold};
  border-bottom: 1px solid ${theme.colors.grayElements};
  margin-bottom: 32px;
  height: 42px;

  ${onTablet(`
    font-size: ${theme.fonts.sizeL};
    line-height: ${theme.fonts.lineHeightXl};
  `)}
`;

const Theader = styled.th`
  display: block;
  color: ${theme.colors.grayPrimary};
  font-size: ${theme.fonts.sizeM};
  line-height: ${theme.fonts.lineHeightL};
  font-weight: ${theme.fonts.weightBold};
  border-bottom: 1px solid ${theme.colors.grayElements};
  height: 42px;
  width: 100%;
  text-align: left;

  ${onTablet(`
    font-size: ${theme.fonts.sizeL};
    line-height: ${theme.fonts.lineHeightXl};
  `)}
`;

const TRow = styled.tr`
  display: block;
  width: 100%;
  margin-bottom: 32px;
`;

const DescriptionWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

const H3 = styled.h3`
  color: ${theme.colors.grayPrimary};
  font-size: ${theme.fonts.sizeS};
  line-height: ${theme.fonts.lineHeightM};
  font-weight: ${theme.fonts.weightSemiBold};
  margin-bottom: 16px;

  ${onTablet(`
    font-size: ${theme.fonts.sizeM};
    line-height: ${theme.fonts.lineHeightL};
  `)}
`;

const P = styled.p`
  font-size: ${theme.fonts.sizeXs};
  line-height: ${theme.fonts.lineHeightM};
  font-weight: ${theme.fonts.weightRegular};

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const ItemCard = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 64px;
  row-gap: 56px;

  ${onTablet(`
    grid-template-columns:repeat(2, 1fr);
    row-gap: 80px;
  `)}
`;

const ImagesBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${onTablet(`
    flex-direction: row-reverse;
    gap: 16px;
  `)}
`;

const CardInfo = styled.div`
  position: relative;
`;
const AboutBlock = styled.div``;
const SpecsBlock = styled.table``;

const CardWrapper = styled.div`
  width: 100%;

  ${onDesktop(`
    max-width: 320px;
  `)}
`;

const TechScecsInfo = styled.tbody`
  display: flex;
  flex-direction: column;
`;
const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;

  font-size: ${theme.fonts.sizeXxs};
  line-height: ${theme.fonts.lineHeightS};
`;
const TableHeader = styled.th`
  font-weight: 500;
`;
const TableData = styled.td`
  color: ${theme.colors.grayPrimary};
  font-weight: ${theme.fonts.weightRegular};
`;

const ChoiseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  border-bottom: 1px solid ${theme.colors.grayElements};
`;

const ChoiseButtons = styled.div`
  margin-bottom: 24px;
`;

const MemoryButton = styled.button`
  box-sizing: content-box;
  background-color: ${theme.colors.grayBackground};
  color: ${theme.colors.grayPrimary};
  border: 1px solid ${theme.colors.grayIcons};
  border-radius: 4px;
  width: 60px;
  height: 32px;
  cursor: pointer;

  font-size: ${theme.fonts.sizeXs};
  line-height: ${theme.fonts.lineHeightM};

  margin-right: 8px;

  &.active {
    background-color: ${theme.colors.grayPrimary};
    color: ${theme.colors.white};
  }
`;

const TitleChoise = styled.span`
  font-size: ${theme.fonts.sizeXxs};
  line-height: ${theme.fonts.lineHeightS};
  font-weight: ${theme.fonts.weightRegular};
  margin-bottom: 8px;
`;

const ColorButton = styled.button`
  position: relative;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;

  margin-right: 8px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid ${theme.colors.white};
    box-sizing: border-box;
  }

  &::after {
    border-radius: 50%;
    border: 1px solid ${theme.colors.grayElements};
  }

  &.active {
    border: 1px solid ${theme.colors.grayPrimary};
  }
`;

const DeviceId = styled.span`
  font-size: ${theme.fonts.sizeXxs};
  line-height: ${theme.fonts.lineHeightS};
  font-weight: ${theme.fonts.weightSemiBold};
  color: ${theme.colors.grayIcons};

  position: absolute;
  top: 0;
  right: 0;
`;

const ImageSizeBox = styled.div`
  width: 100%;
`;

const ImagesSizeBox = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;

  border: 1px solid #C4C4C4;
  border-radius: 4px;

  &:hover {
    border-color: ${theme.colors.grayPrimary};
  }

  &.active {
    border-color: ${theme.colors.grayPrimary};
  }

  ${onDesktop(`
    width: 80px;
    height: 80px;
  `)}
`;

export const CardImage = styled.img`
  width: auto;
  height: 288px;
  display: block;

  margin: 0 auto;

  ${onTablet(`
    width: auto;
    height: auto;
    max-height: 288px;
  `)}

  ${onDesktop(`
    width: auto;
    height: auto;
    max-height: 464px;
  `)}
`;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  gap: 8px;

  width: 100%;
  height: 50px;

  ${onTablet(`
    flex-direction: column;
    width: 49px;
    height: 288px;
    margin-top: 0;
  `)}

  ${onDesktop(`
    justify-content: space-between;
    width: 80px;
    height: 464px;
  `)}
`;

export const SmallCardImage = styled.img`
  height: 41px;
  display: block;
  object-fit: cover;
  margin: auto;
  margin-top: 2px;

  ${onDesktop(`
    margin: auto;
    margin-top: 4px;
    height: 70px;
  `)}
`;

export const ProductCard = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [device, setDevice] = React.useState<Phone | null>(null);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [selectedCapacity, setSelectedCapacity] = React.useState<string | null>(productId ? productId.split('-')[3] : null);
  const [selectedColor, setSelectedColor] = React.useState<string | null>(productId ? productId.split('-')[4] : null);
  const [currentImage, setCurrentImage] = React.useState(device?.images[0]);
  const [selectedImage, setSelectedImage] = React.useState<string>('');
  const [currentPoductId, setCurrentProductId] = React.useState(productId);

  // eslint-disable-next-line no-console
  console.log(currentPoductId);

  React.useEffect(() => {
    const fetchData = async() => {
      try {
        if (currentPoductId) {
          const response = await getOnePhone(currentPoductId);
          const responseData = response as Phone;

          setDevice(responseData);
          setSelectedCapacity(responseData.capacity);
          setSelectedColor(responseData.color);
          setCurrentImage(responseData.images[0]);
          setSelectedImage(responseData.images[0]);
        }
      } catch (error) {
      }
    };

    fetchData();
  }, [productId]);

  React.useEffect(() => {
    const newProductId = `apple-iphone-11-${selectedCapacity?.toLowerCase()}-${selectedColor}`;

    setCurrentProductId(newProductId);

    navigate(`/phones/${newProductId}`);
  }, [selectedCapacity, selectedColor]);

  if (!device) {
    return null;
  }

  const deviceData = extractData(device);

  const toggleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleButtonClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <ContentLayout>
      <MainElement>
        <PathAndBack>
          <Span1Element>шлях додому</Span1Element>
          <Span2Element>повернутись на попередню сторінку</Span2Element>
        </PathAndBack>
        <Title>{device.name}</Title>
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
                  <SmallCardImage
                    key={img}
                    src={img}
                    alt="Small phone image"
                  />
                </ImagesSizeBox>
              ))}
            </ImagesWrapper>
          </ImagesBox>
          <CardInfo>
            <CardWrapper>
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

              <ChoiseWrapper>
                <TitleChoise>Select capacity</TitleChoise>
                <ChoiseButtons>
                  {device.capacityAvailable.map((capacity) => (
                    <MemoryButton
                      className={selectedCapacity === capacity ? 'active' : ''}
                      onClick={() => handleButtonClick(capacity)}
                    >
                      {capacity}
                    </MemoryButton>
                  ))}
                </ChoiseButtons>
              </ChoiseWrapper>

              <PriceWrapper className="card-price">
                <CurrentPrice className="card-current-price">
                  {`$${device.priceDiscount}`}
                </CurrentPrice>
                <OldPrice className="card-old-price">
                  {`$${device.priceRegular}`}
                </OldPrice>
              </PriceWrapper>

              <ButtonsWrapper className="card-button">
                <ButtonAdd
                  onClick={toggleClick}
                  type="button"
                  isClicked={isClicked}
                  className="card-button-add"
                >
                  {isClicked ? 'Added' : 'Add to cart'}
                </ButtonAdd>
                <ButtonLike
                  type="button"
                  onClick={toggleFavorite}
                  className="card-button-like"
                >
                  <IconSprite />
                  {isFavorite ? (
                    <Icon
                      spriteName="heart-field"
                      fill={theme.colors.accentSecondary}
                    />
                  ) : (
                    <Icon spriteName="heart" />
                  )}
                </ButtonLike>
              </ButtonsWrapper>

              <DescrWrapper>
                <DescrBox>
                  <DescrTitle>Screen</DescrTitle>
                  <DescrTitle>Resolution</DescrTitle>
                  <DescrTitle>Processor</DescrTitle>
                  <DescrTitle>Ram</DescrTitle>
                </DescrBox>

                <DescrBox>
                  <DescrValue>{device.screen}</DescrValue>
                  <DescrValue>{device.resolution}</DescrValue>
                  <DescrValue>{device.processor}</DescrValue>
                  <DescrValue>{device.ram}</DescrValue>
                </DescrBox>
              </DescrWrapper>
            </CardWrapper>
            <DeviceId>ID: {device._id}</DeviceId>
          </CardInfo>
          <AboutBlock>
            <H2>About</H2>
            {device.description && device.description.map((info) => (
              <DescriptionWrapper key={info.title}>
                <H3>{info.title}</H3>
                {Array.isArray(info.text) && info.text.map((text: string) => (
                  <P>{text}</P>
                ))}
              </DescriptionWrapper>
            ))}
          </AboutBlock>
          <SpecsBlock>
            <thead>
              <TRow>
                <Theader>Tech Spec</Theader>
              </TRow>
            </thead>
            <TechScecsInfo>
              {Object.entries(deviceData).map(([key, value]) => (
                <TableRow key={key}>
                  <TableHeader>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </TableHeader>
                  <TableData>
                    {Array.isArray(value) ? value.join(' ') : value}
                  </TableData>
                </TableRow>
              ))}
            </TechScecsInfo>
          </SpecsBlock>
        </ItemCard>
      </MainElement>
    </ContentLayout>
  );
};
