import { render, screen } from '@testing-library/react';

import NotFoundPage from '@/pages/404';
import FeaturesInDevelopment from '../../components/shared/features-in-development/features-in-development';

describe('404', () => {
  it('renders a heading', () => {
    render(<FeaturesInDevelopment />);

    const heading = screen.getByText(/not found/i);

    expect(heading).toBeInTheDocument();
  });
});
