const theme = {
  colors: {
    text: 'hsl(0, 0%, 17%)',
    lightText: 'hsl(0, 0%, 59%)',
    alt: '#3a8',
    error: '#e22',
  },
  mobile: '650px',
  tablet: '768px',
}

export type MyProps = {
  theme: typeof theme
}

export default theme