import React from 'react';
import { render } from '@testing-library/react';
import TabLink from '../../components/UILibrary/TabLink';
import TabLinks from '../../components/UILibrary/TabLinks';

describe('A TabLinks Test Suite', () => {
  it('should render ul', () => {
    const { container } = render(
      <TabLinks activeId="1">
        <TabLink id="1">Tab-1</TabLink>
        <TabLink id="2">Tab-2</TabLink>
      </TabLinks>
    );
    expect(container.querySelector('ul')).toBeTruthy();
    expect(container.querySelector('ul')).toHaveClass('tab-links');
  });
  it('should have li children', () => {
    const { container } = render(
      <TabLinks activeId="1">
        <TabLink id="1">Tab-1</TabLink>
        <TabLink id="2">Tab-2</TabLink>
      </TabLinks>
    );
    const listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveClass('tab-link');
    expect(listItems[0]).toHaveClass('active-tab');
    expect(container.querySelector('ul[role="tablist"]')).toBeTruthy();
  });
});
