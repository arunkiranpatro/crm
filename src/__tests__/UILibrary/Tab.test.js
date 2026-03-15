import React from 'react';
import { render } from '@testing-library/react';
import Tab from '../../components/UILibrary/Tab';

describe('A Tab Test Suite', () => {
  it('should render children when active', () => {
    const { container } = render(
      <Tab id="1" activeId="1">
        <div>Test1</div>
      </Tab>
    );
    expect(container.querySelectorAll('div')).toHaveLength(2);
    expect(container.firstChild).toHaveClass('tab-body');
  });
  it('should render children when inactive', () => {
    const { container } = render(
      <Tab id="1" activeId="2">
        <div>Test1</div>
      </Tab>
    );
    expect(container.querySelectorAll('div')).toHaveLength(2);
    expect(container.firstChild).toHaveClass('tab-body');
  });
  it('should not render children when inactive', () => {
    const { container } = render(
      <Tab id="1" activeId="2" deferLoaded>
        <div>Test1</div>
      </Tab>
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(container.firstChild).toHaveClass('tab-body');
  });
  it('should render children when active', () => {
    const { container } = render(
      <Tab id="1" activeId="1" deferLoaded>
        <div>Test1</div>
      </Tab>
    );
    expect(container.querySelectorAll('div')).toHaveLength(2);
    expect(container.firstChild).toHaveClass('tab-body');
  });
});
