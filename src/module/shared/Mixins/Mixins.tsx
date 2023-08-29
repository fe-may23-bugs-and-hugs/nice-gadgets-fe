type StylesFunction = (styles: string) => string;

export const onTablet: StylesFunction = styles => `
  @media (min-width: 640px) {
    ${styles}
  }
`;

export const onDesktop: StylesFunction = styles => `
  @media (min-width: 1200px) {
    ${styles}
  }
`;

export const pageGridMixin = `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
  padding-inline: 16px;

  ${onTablet(`
    grid-template-columns: repeat(12, 1fr);
    padding-inline: 24px;
  `)}

  ${onDesktop(`
    grid-template-columns: repeat(24, 32px);
    padding-inline: calc((100% - 1136px) / 2);
  `)}
`;
