import styled from 'styled-components';

export const TitleSpan = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;
TitleSpan.displayName = 'TitleSpan';

export const DescriptionSpan = styled.span`
  font-size: 1.6rem;

  @media only screen and (max-width: 700px) {
    display: none;
    margin-bottom: 3rem;
  }
`;
DescriptionSpan.displayName = 'DescriptionSpan';