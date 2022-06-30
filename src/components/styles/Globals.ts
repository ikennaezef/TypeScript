import { createGlobalStyle } from 'styled-components';

import { MyProps } from '../../theme';

export const GlobalStyles = createGlobalStyle<MyProps>`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		max-width: 100%;
		transition: 0.3s ease;
	}

	body {
		color: ${({ theme }) => theme.colors.text};
		font-family: 'Rubik', sans-serif;
		overflow-x: hidden;
	}

	@media screen and (min-width:1500px) {
		html {
			font-size: 120%;
		}
	}

`;