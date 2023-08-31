/* eslint-disable max-len */
import { Icon, IconSprite } from '../shared/Sprites';
import phoneImg1 from '../../assets/images/phones/apple-iphone-xs-max/spacegray/04.jpg';
import phoneImg2 from '../../assets/images/phones/apple-iphone-xs-max/spacegray/02.jpg';
import phoneImg3 from '../../assets/images/phones/apple-iphone-xs-max/spacegray/03.jpg';
import { ContentLayout } from '../shared/ContentLayout';
import {
  CartContainer,
  CartBack,
  CartBar,
  IconArrow,
  CartHeader,
  CartList,
  CartItem,
  ImgContainer,
  ImgElement,
  ItemDescription,
  MobileContainer,
  IconContainer,
  IconPriceContainer,
  IconClose,
  IconElement,
  ItemQuantity,
  ItemPrice,
  CartSummary,
  TotalPrice,
  TotalItems,
  CartCheckout,
} from './CartPage.styled';

export const CartPage = () => {
  return (
    <ContentLayout>
      <CartBack>
        <CartBar>
          <IconArrow>
            <IconSprite />
            <Icon spriteName="arrow-left" size="10px" fill="#B4BDC3" />
          </IconArrow>
          <p>Back</p>
        </CartBar>
      </CartBack>
      <CartHeader>
        <h1>Cart</h1>
      </CartHeader>
      <CartContainer>
        <CartList>
          <CartItem>
            <MobileContainer>
              <IconClose>
                <IconSprite />
                <Icon spriteName="close" size="16px" fill="#B4BDC3" />
              </IconClose>
              <ImgContainer>
                <ImgElement src={phoneImg1} />
              </ImgContainer>
              <ItemDescription>
                <p>Apple iPhone 14 Pro 128GB Silver (MQ023)</p>
              </ItemDescription>
            </MobileContainer>
            <IconPriceContainer>
              <IconContainer>
                <IconElement>
                  <IconSprite />
                  <Icon spriteName="minus" size="16px" fill="#B4BDC3" />
                </IconElement>
                <ItemQuantity>
                  <p>1</p>
                </ItemQuantity>
                <IconElement>
                  <IconSprite />
                  <Icon spriteName="plus" size="16px" />
                </IconElement>
              </IconContainer>
              <ItemPrice>
                <p>$999</p>
              </ItemPrice>
            </IconPriceContainer>
          </CartItem>
          <CartItem>
            <MobileContainer>
              <IconClose>
                <IconSprite />
                <Icon spriteName="close" size="16px" fill="#B4BDC3" />
              </IconClose>
              <ImgContainer>
                <ImgElement src={phoneImg2} />
              </ImgContainer>
              <ItemDescription>
                <p>Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)</p>
              </ItemDescription>
            </MobileContainer>
            <IconPriceContainer>
              <IconContainer>
                <IconElement>
                  <IconSprite />
                  <Icon spriteName="minus" size="16px" fill="#B4BDC3" />
                </IconElement>
                <ItemQuantity>
                  <p>1</p>
                </ItemQuantity>
                <IconElement>
                  <IconSprite />
                  <Icon spriteName="plus" size="16px" />
                </IconElement>
              </IconContainer>
              <ItemPrice>
                <p>$859</p>
              </ItemPrice>
            </IconPriceContainer>
          </CartItem>
          <CartItem>
            <MobileContainer>
              <IconClose>
                <IconSprite />
                <Icon spriteName="close" size="16px" fill="#B4BDC3" />
              </IconClose>
              <ImgContainer>
                <ImgElement src={phoneImg3} />
              </ImgContainer>
              <ItemDescription>
                <p>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</p>
              </ItemDescription>
            </MobileContainer>
            <IconPriceContainer>
              <IconContainer>
                <IconElement>
                  <IconSprite />
                  <Icon spriteName="minus" size="16px" fill="#B4BDC3" />
                </IconElement>
                <ItemQuantity>
                  <p>1</p>
                </ItemQuantity>
                <IconElement>
                  <IconSprite />
                  <Icon spriteName="plus" size="16px" />
                </IconElement>
              </IconContainer>
              <ItemPrice>
                <p>$799</p>
              </ItemPrice>
            </IconPriceContainer>
          </CartItem>
        </CartList>
        <CartSummary>
          <TotalPrice>
            <p>$2657</p>
          </TotalPrice>
          <TotalItems>
            <p>Total for 3 items</p>
          </TotalItems>
          <CartCheckout>
            <p>Checkout</p>
          </CartCheckout>
        </CartSummary>
      </CartContainer>
    </ContentLayout>
  );
};
