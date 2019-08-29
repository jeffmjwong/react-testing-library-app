import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

test('shows "Hello world!" in main App component', () => {
  const { queryByText } = render(<App />);

  expect(queryByText("Hello world!")).toBeInTheDocument();
});
