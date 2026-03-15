import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../../components/UILibrary/Loading';

describe('A Loading Test Suite', () => {
  it('should render without children', () => {
    const { container } = render(<Loading />);
    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(screen.getByText(/Loading\.\./)).toBeTruthy();
    expect(container.firstChild).toHaveClass('loading-div');
  });
  it('should render with string', () => {
    const { container } = render(<Loading>In Progress</Loading>);
    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(screen.getByText(/In Progress/)).toBeTruthy();
    expect(container.firstChild).toHaveClass('loading-div');
  });
  it('should render with children', () => {
    const { container } = render(
      <Loading>
        <div>test</div>
      </Loading>
    );
    expect(container.querySelectorAll('div')).toHaveLength(2);
    expect(container.firstChild).toHaveClass('loading-div');
  });
});
