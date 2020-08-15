import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import Header from '../../components/Header';
import { ApplicationState } from '../../store/reducers';
import { CartState } from '../../store/reducers/cart';
import { FavoriteState } from '../../store/reducers/favorite';
import { Container, List, Button, ButtonText } from './styles';

const Cart: React.FC = () => {
  const { items: shoes } = useSelector<ApplicationState, CartState>(
    state => state.cart,
  );
  const { items: favorites } = useSelector<ApplicationState, FavoriteState>(
    state => state.favorite,
  );

  return (
    <Container>
      <Header title='GoShoes' description='Cart' resetCart />
      {shoes.length > 0 && (
        <>
          <List showsVerticalScrollIndicator={false}>
            {shoes.map(shoe => (
              <Card
                key={shoe.id}
                shoes={shoe}
                addedToCart
                favorite={favorites.findIndex(item => item.id === shoe.id) >= 0}
              />
            ))}
          </List>
          <Button>
            <ButtonText>Checkout</ButtonText>
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
