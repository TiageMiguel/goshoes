import React from 'react';
import { useSelector } from 'react-redux';

import { Shoes } from '../../@types/shoes';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { useFetch } from '../../hooks/useFecth';
import { ApplicationState } from '../../store/reducers';
import { CartState } from '../../store/reducers/cart';
import { FavoriteState } from '../../store/reducers/favorite';
import { Container, List } from './styles';

const Explorer: React.FC = () => {
  const { data } = useFetch<Shoes[]>('/products');
  const { items: shoes } = useSelector<ApplicationState, CartState>(
    state => state.cart,
  );
  const { items: favorites } = useSelector<ApplicationState, FavoriteState>(
    state => state.favorite,
  );

  return (
    <Container>
      <Header title='GoShoes' />
      {!!data && data.length > 0 && (
        <List showsVerticalScrollIndicator={false}>
          {data?.map(shoe => (
            <Card
              key={shoe.id}
              shoes={shoe}
              addedToCart={shoes.findIndex(item => item.id === shoe.id) >= 0}
              favorite={
                favorites.findIndex(favorite => favorite.id === shoe.id) >= 0
              }
            />
          ))}
        </List>
      )}
    </Container>
  );
};

export default Explorer;
