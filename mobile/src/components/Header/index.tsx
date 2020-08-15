import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Shoes } from '../../@types/shoes';
import { CartAction, CartActions } from '../../store/reducers/cart';
import {
  Container,
  Hero,
  Title,
  Description,
  CartButton,
  CartIcon,
  DeleteIcon,
} from './styles';

interface HeaderProps {
  title: string;
  description?: string;
  resetCart?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, description, resetCart }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  function handleNavigateToCart() {
    navigate('Cart');
  }

  function handleResetCart() {
    dispatch<CartAction>({
      type: CartActions.RESET,
      data: {} as Shoes,
    });
  }

  return (
    <Container>
      <Hero>
        <Title>{title}</Title>
        {resetCart ? (
          <CartButton onPress={handleResetCart}>
            <DeleteIcon />
          </CartButton>
        ) : (
          <CartButton onPress={handleNavigateToCart}>
            <CartIcon />
          </CartButton>
        )}
      </Hero>
      {description && <Description>{description}</Description>}
    </Container>
  );
};

export default Header;
