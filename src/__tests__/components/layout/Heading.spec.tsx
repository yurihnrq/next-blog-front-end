import { render } from '@testing-library/react';

import { Heading } from '@src/components/layout/Heading';

describe('Heading', () => {
  it('should render correctly', () => {
    const { container } = render(<Heading>Heading</Heading>);

    expect(container).toMatchSnapshot();
  });

  it('should render as h1 when using default size', () => {
    const { container } = render(<Heading>Heading</Heading>);

    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('should render as h1 when size is large', () => {
    const { container } = render(<Heading size='large'>Heading</Heading>);

    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('should render as h2 when size is medium', () => {
    const { container } = render(<Heading size='medium'>Heading</Heading>);

    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  it('should render as h3 when size is small', () => {
    const { container } = render(<Heading size='small'>Heading</Heading>);

    expect(container.querySelector('h3')).toBeInTheDocument();
  });
});
