import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

test('shows "Hello world!" in main App component', () => {
  const { queryByText, getByText } = render(
    <App examples="blabla" />
  );

  expect(queryByText("Hello world!")).toBeNull();
});
