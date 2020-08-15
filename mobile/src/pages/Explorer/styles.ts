import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

export const List = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    paddingHorizontal: props.theme.spacing.normal,
  },
}))`
  margin-top: -40px;
`;
