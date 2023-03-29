import { render } from '@testing-library/react';

import { Text } from '@src/components/layout/Text';

describe('Text', () => {
  it('should render correctly', () => {
    const { container } = render(<Text>Hello World!</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should render with small size', () => {
    const { container } = render(<Text size='small'>Hello World!</Text>);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveClass('text-sm');
  });

  it('should render with medium size', () => {
    const { container } = render(<Text size='medium'>Hello World!</Text>);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveClass('text-base');
  });

  it('should render with large size', () => {
    const { container } = render(<Text size='large'>Hello World!</Text>);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveClass('text-lg');
  });

  it('should render as child', () => {
    const { container, getByTestId } = render(
      <Text asChild>
        <span data-testid='child'>Hello World!</span>
      </Text>
    );

    const child = getByTestId('child');

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toEqual(child);
  });
});
