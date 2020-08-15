import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 160px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  border-bottom-left-radius: ${props => props.theme.borders.normal}px;
  border-bottom-right-radius: ${props => props.theme.borders.normal}px;
  padding: ${props => props.theme.spacing.normal + Constants.statusBarHeight}px
    ${props => props.theme.spacing.normal}px;
  padding-bottom: 0;
`;

export const Hero = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.medium};
  font-size: 26px;
`;

export const CartButton = styled(BorderlessButton)`
  padding: ${props => props.theme.spacing.small / 2}px;
`;

export const CartIcon = styled(Feather).attrs({
  name: 'shopping-cart',
})`
  color: ${props => props.theme.colors.text};
  font-size: 24px;
`;

export const DeleteIcon = styled(Feather).attrs({
  name: 'trash',
})`
  color: ${props => props.theme.colors.text};
  font-size: 24px;
`;

export const Description = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.light};
  font-size: 18px;
`;
