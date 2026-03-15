import React from 'react';
import { render } from '@testing-library/react';
import TabLink from '../../components/UILibrary/TabLink';
import TabLinks from '../../components/UILibrary/TabLinks';
import Tabs from '../../components/UILibrary/Tabs';

describe('A Tabs Test Suite', () => {
  it('should render div', () => {
    const { container } = render(
      <Tabs defaultActive="1">
        <TabLinks>
          <TabLink id="1">Tab-1</TabLink>
          <TabLink id="2">Tab-2</TabLink>
        </TabLinks>
      </Tabs>
    );
    expect(container.querySelector('div')).toBeTruthy();
    expect(container.firstChild).toHaveClass('tab-container');
  });
  it('should render children', () => {
    const { container } = render(
      <Tabs defaultActive="1">
        <TabLinks>
          <TabLink id="1">Tab-1</TabLink>
          <TabLink id="2">Tab-2</TabLink>
        </TabLinks>
      </Tabs>
    );
    const listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveClass('tab-link');
    expect(listItems[0]).toHaveClass('active-tab');
    expect(container.querySelector('ul[role="tablist"]')).toBeTruthy();
  });
  it('should render first tab has active tab', () => {
    const { container } = render(
      <Tabs>
        <TabLinks>
          <TabLink id="0">Tab-1</TabLink>
          <TabLink id="1">Tab-2</TabLink>
        </TabLinks>
      </Tabs>
    );
    const listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveClass('tab-link');
    expect(listItems[0]).toHaveClass('active-tab');
    expect(container.querySelector('ul[role="tablist"]')).toBeTruthy();
  });
});
