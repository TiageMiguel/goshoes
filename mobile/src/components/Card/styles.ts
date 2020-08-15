import { Feather, Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
export const Container = styled.View`
  background: ${props => props.theme.colors.backgroundDarker};
  border-radius: ${props => props.theme.borders.normal}px;
  margin-bottom: ${props => props.theme.spacing.normal}px;
`;

export const Header = styled.View`
  background: ${props => props.theme.colors.backgroundDark};
  padding: ${props => props.theme.spacing.normal}px;
  border-radius: ${props => props.theme.borders.normal}px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Banner = styled.View`
  height: 120px;
  width: 100%;
  border-radius: ${props => props.theme.borders.normal}px;
  margin-bottom: ${props => props.theme.spacing.normal}px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.medium};
  font-size: 18px;
`;

export const Price = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.medium};
  font-size: 26px;
`;

export const Type = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.light};
  font-size: 13px;
`;

export const Actions = styled.View`
  background: ${props => props.theme.colors.backgroundDarker};
  border-bottom-left-radius: ${props => props.theme.borders.normal}px;
  border-bottom-right-radius: ${props => props.theme.borders.normal}px;
  padding: ${props => props.theme.spacing.normal}px
    ${props => props.theme.spacing.small}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface ButtonProps {
  active?: boolean;
}

export const Button = styled(RectButton)<ButtonProps>`
  background: ${props =>
    props.active
      ? props.theme.colors.secondary
      : props.theme.colors.backgroundDark};
  border-radius: ${props => props.theme.borders.normal / 2}px;
  padding: ${props => props.theme.spacing.small}px;
  flex-direction: row;
  align-items: center;
  elevation: 10;
`;

export const CartIcon = styled(Feather).attrs({
  name: 'shopping-cart',
})`
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  margin-right: ${props => props.theme.spacing.small}px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.medium};
  font-size: 13px;
  text-transform: uppercase;
  text-align: center;
`;

export const FavoriteIcon = styled(Ionicons).attrs({
  name: 'ios-heart-empty',
})`
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
`;

export const RightActions = styled.View`
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding-left: ${props => props.theme.spacing.normal}px;
  padding-bottom: ${props => props.theme.spacing.normal}px;
`;

export const RightActionsButton = styled(Button)`
  width: 110px;
  height: 40%;
  padding: ${props => props.theme.spacing.small / 2}px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightActionsCartIcon = styled(CartIcon)`
  font-size: 23px;
  margin-bottom: ${props => props.theme.spacing.small}px;
`;
export const RightActionsFavoriteIcon = styled(FavoriteIcon)`
  font-size: 26px;
`;

export const FavoritedIcon = styled(Ionicons).attrs({
  name: 'ios-heart-dislike',
})`
  color: ${props => props.theme.colors.background};
  font-size: 14px;
`;

export const RightActionsFavoritedIcon = styled(FavoritedIcon)`
  color: ${props => props.theme.colors.background};
  font-size: 26px;
`;
