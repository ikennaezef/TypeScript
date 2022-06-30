const theme = {
  colors: {
    text: 'hsl(0, 0%, 17%)',
    lightText: 'hsl(0, 0%, 59%)',
  },
  mobile: '650px',
  tablet: '768px',
}

export type MyProps = {
  theme: typeof theme
}

export default theme