/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { MainElement } from './ProductCard.styled';
import { onTablet } from '../shared/Mixins';
import { theme } from '../../styles';
import { ContentLayout } from '../shared/ContentLayout';

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

const device = {
  id: 'apple-iphone-7-32gb-black',
  namespaceId: 'apple-iphone-7',
  name: 'Apple iPhone 7 32GB Black',
  capacityAvailable: ['32GB', '64GB', '128GB'],
  capacity: '32GB',
  priceRegular: 400,
  priceDiscount: 375,
  colorsAvailable: ['black', 'rosegold', 'gold', 'silver'],
  color: 'black',
  images: [
    'img/phones/apple-iphone-7/black/00.jpg',
    'img/phones/apple-iphone-7/black/01.jpg',
    'img/phones/apple-iphone-7/black/02.jpg',
    'img/phones/apple-iphone-7/black/03.jpg',
    'img/phones/apple-iphone-7/black/04.jpg',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "4.7' IPS",
  resolution: '1334x750',
  processor: 'Apple A10',
  ram: '2GB',
  camera: '12 Mp + 7 Mp',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

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

const deviceData = extractData(device);

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

  ${onTablet(`
    font-size: ${theme.fonts.sizeXxl};
    line-height: ${theme.fonts.lineHeightXxl};
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

const Div1 = styled.div``;
const CardInfo = styled.div``;
const AboutBlock = styled.div``;
const SpecsBlock = styled.div``;

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

  &::before,
  &::after {
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

export const CardImage = styled.img`
  height: 100%;
  display: block;
  object-fit: cover;

  margin: 0 auto;
`;

export const ProductCard = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [selectedCapacity, setSelectedCapacity] = React.useState(
    device.capacity,
  );
  const [selectedColor, setSelectedColor] = React.useState(device.color);

  const toggleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleButtonClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  const handleColorClick = (capacity: string) => {
    setSelectedColor(capacity);
  };

  return (
    <ContentLayout>
      <MainElement>
        <PathAndBack>
          <Span1Element>шлях додому</Span1Element>
          <Span2Element>повернутись на попередню сторінку</Span2Element>
        </PathAndBack>
        <Title>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</Title>
        <ItemCard>
          <Div1>
            <CardImage src={device.images[0]} alt="phone"></CardImage>
          </Div1>
          <CardInfo>
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
          </CardInfo>
          <AboutBlock>
            <H2>About</H2>
            {device.description.map((info) => (
              <DescriptionWrapper key={info.title}>
                <H3>{info.title}</H3>
                {info.text.map((text) => (
                  <P>{text}</P>
                ))}
              </DescriptionWrapper>
            ))}
          </AboutBlock>
          <SpecsBlock>
            <H2>Tech Specs</H2>
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
