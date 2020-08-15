import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

export const List = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    paddingHorizontal: props.theme.spacing.normal,
    paddingBottom: 60,
  },
}))`
  margin-top: -40px;
`;

export const Button = styled(RectButton)`
  background: ${props => props.theme.colors.secondary};
  padding: 0 ${props => props.theme.spacing.normal}px;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 90%;
  align-self: center;
  border-radius: ${props => props.theme.borders.normal}px;
  margin-bottom: ${props => props.theme.spacing.normal}px;
  position: absolute;
  bottom: 0;
`;

export const ButtonText = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  color: white;
  font-size: 16px;
  text-transform: uppercase;
`;
