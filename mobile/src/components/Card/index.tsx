import React, { useEffect, useState } from 'react';
import { Image } from 'react-native-expo-image-cache';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useDispatch } from 'react-redux';

import { Shoes } from '../../@types/shoes';
import { CartActions, CartAction } from '../../store/reducers/cart';
import { FavoriteAction, FavoriteActions } from '../../store/reducers/favorite';
import {
  Container,
  Header,
  Info,
  Banner,
  Title,
  Price,
  Type,
  Actions,
  Button,
  CartIcon,
  ButtonText,
  FavoriteIcon,
  RightActions,
  RightActionsButton,
  RightActionsFavoriteIcon,
  RightActionsCartIcon,
  RightActionsFavoritedIcon,
  FavoritedIcon,
} from './styles';

interface CardProps {
  shoes: Shoes;
  addedToCart?: boolean;
  favorite?: boolean;
}

const Card: React.FC<CardProps> = ({
  shoes,
  addedToCart = false,
  favorite = false,
}) => {
  const dispatch = useDispatch();

  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(addedToCart);
  const [isFavorited, setIsFavorited] = useState<boolean>(favorite);

  function addToCart() {
    setIsAddedToCart(true);
    dispatch<CartAction>({
      type: CartActions.ADD,
      data: shoes,
    });
  }

  function removeFromCart() {
    setIsAddedToCart(false);
    dispatch<CartAction>({
      type: CartActions.REMOVE,
      data: shoes,
    });
  }

  function handleFavorited() {
    if (isFavorited) {
      setIsFavorited(false);
      dispatch<FavoriteAction>({
        type: FavoriteActions.REMOVE,
        data: shoes,
      });
    } else {
      setIsFavorited(true);
      dispatch<FavoriteAction>({
        type: FavoriteActions.ADD,
        data: shoes,
      });
    }
  }

  useEffect(() => {
    setIsAddedToCart(addedToCart);
  }, [addedToCart]);

  useEffect(() => {
    setIsFavorited(favorite);
  }, [favorite]);

  function renderRightActions() {
    return (
      <RightActions>
        {isAddedToCart ? (
          <RightActionsButton onPress={removeFromCart} active>
            <RightActionsCartIcon />
            <ButtonText>Added to cart</ButtonText>
          </RightActionsButton>
        ) : (
          <RightActionsButton onPress={addToCart}>
            <RightActionsCartIcon />
            <ButtonText>Add to cart</ButtonText>
          </RightActionsButton>
        )}
        <RightActionsButton onPress={handleFavorited} active={isFavorited}>
          {isFavorited ? (
            <RightActionsFavoritedIcon />
          ) : (
            <RightActionsFavoriteIcon />
          )}
        </RightActionsButton>
      </RightActions>
    );
  }

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Container>
        <Header>
          <Banner>
            <Image
              uri={shoes.image}
              transitionDuration={200}
              preview={{
                cache: 'force-cache',
                uri: shoes.image,
              }}
              resizeMode='contain'
              style={{ width: '100%', height: '100%' }}
            />
          </Banner>
          <Info>
            <Title>{shoes.title}</Title>
            <Price>{shoes.price} €</Price>
          </Info>
          <Type>{shoes.description}</Type>
        </Header>
        <Actions>
          {isAddedToCart ? (
            <Button onPress={removeFromCart} active>
              <CartIcon />
              <ButtonText>Added to cart</ButtonText>
            </Button>
          ) : (
            <Button onPress={addToCart}>
              <CartIcon />
              <ButtonText>Add to cart</ButtonText>
            </Button>
          )}
          <Button onPress={handleFavorited} active={isFavorited}>
            {isFavorited ? <FavoritedIcon /> : <FavoriteIcon />}
          </Button>
        </Actions>
      </Container>
    </Swipeable>
  );
};

export default Card;
