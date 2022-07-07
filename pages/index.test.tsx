import { render } from '@testing-library/react';
import Home from 'pages/index.page';
import { wrapper } from 'tests/testUtils';

describe('Home', () => {
  it('renders a listing list', () => {
    const screen = render(<Home />, { wrapper });
    const list = screen.getByTestId('listing-list');

    expect(list).toBeInTheDocument();
  });
});
