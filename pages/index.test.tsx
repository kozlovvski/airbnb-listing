import { render, screen } from '@testing-library/react';
import Home from 'pages/index.page';
import { wrapper } from 'tests/testUtils';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />, { wrapper });

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
