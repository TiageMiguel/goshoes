import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import Header from '../../components/Header';
import { ApplicationState } from '../../store/reducers';
import { CartState } from '../../store/reducers/cart';
import { FavoriteState } from '../../store/reducers/favorite';
import { Container, List } from './styles';

const Favorites: React.FC = () => {
  const { items: favorites } = useSelector<ApplicationState, FavoriteState>(
    state => state.favorite,
  );
  const { items: cart } = useSelector<ApplicationState, CartState>(
    state => state.cart,
  );

  return (
    <Container>
      <Header title='GoShoes' description='Favorites' />
      <List showsVerticalScrollIndicator={false}>
        {favorites.map(favorite => (
          <Card
            key={favorite.id}
            shoes={favorite}
            favorite
            addedToCart={cart.findIndex(item => item.id === favorite.id) >= 0}
          />
        ))}
      </List>
    </Container>
  );
};

export default Favorites;
