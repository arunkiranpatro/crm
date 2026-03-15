import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from '../../components/UILibrary/ReadOnlyData';

describe('A read only div suite', () => {
  it('should render with class name', () => {
    const { container } = render(
      <Details label="test label" value="test" className="test" />
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(container.querySelectorAll('label')).toHaveLength(1);
    expect(container.querySelectorAll('span')).toHaveLength(1);
    expect(container.querySelectorAll('button')).toHaveLength(0);
    expect(screen.getByText(/test label/)).toBeTruthy();
    expect(screen.getByText('test')).toBeTruthy();
    expect(container.firstChild).toHaveClass('test');
    expect(container.querySelector('span.field-value')).toBeTruthy();
  });
  it('should render without class name', () => {
    const { container } = render(<Details label="test label" value="test" />);
    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(container.querySelectorAll('label')).toHaveLength(1);
    expect(container.querySelectorAll('span')).toHaveLength(1);
    expect(container.querySelectorAll('button.cc-icon')).toHaveLength(0);
    expect(screen.getByText(/test label/)).toBeTruthy();
    expect(screen.getByText('test')).toBeTruthy();
    expect(container.querySelector('span.field-value')).toBeTruthy();
  });
  it('should render without class name with ccicon', () => {
    const { container } = render(
      <Details label="test label" value="test" ccicon />
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(container.querySelectorAll('label')).toHaveLength(1);
    expect(container.querySelectorAll('span')).toHaveLength(1);
    expect(container.querySelectorAll('button')).toHaveLength(1);
    expect(screen.getByText(/test label/)).toBeTruthy();
    expect(screen.getByText('test')).toBeTruthy();
    expect(container.querySelector('span.field-value')).toBeTruthy();
  });
  it('should render children', () => {
    const { container } = render(
      <Details label="test label" ccicon>
        <div className="test-field">Test Children</div>
      </Details>
    );
    expect(container.querySelectorAll('div')).toHaveLength(2);
    expect(container.querySelectorAll('label')).toHaveLength(1);
    expect(container.querySelectorAll('span')).toHaveLength(0);
    expect(container.querySelectorAll('button')).toHaveLength(1);
    expect(screen.getByText(/test label/)).toBeTruthy();
    expect(container.querySelector('span.field-value')).toBeNull();
    expect(screen.getByText('Test Children')).toBeTruthy();
    expect(container.querySelector('div.test-field')).toBeTruthy();
  });
  it('should render children even it has value props', () => {
    const { container } = render(
      <Details label="test label" ccicon value="dummy">
        <div className="test-field">Test Children</div>
      </Details>
    );
    expect(container.querySelectorAll('div')).toHaveLength(2);
    expect(container.querySelectorAll('label')).toHaveLength(1);
    expect(container.querySelectorAll('span')).toHaveLength(0);
    expect(container.querySelectorAll('button')).toHaveLength(1);
    expect(screen.getByText(/test label/)).toBeTruthy();
    expect(container.querySelector('span.field-value')).toBeNull();
    expect(screen.getByText('Test Children')).toBeTruthy();
    expect(container.querySelector('div.test-field')).toBeTruthy();
  });
});
