import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TabLink from '../../components/UILibrary/TabLink';
import Tabs from '../../components/UILibrary/Tabs';

describe('A TabLink Test Suite', () => {
  it('should have active class', () => {
    const { container } = render(
      <TabLink id="1" activeId="1" handleClick={() => {}}>
        s Tab-1
      </TabLink>
    );
    const li = container.querySelector('li');
    expect(container.querySelectorAll('li')).toHaveLength(1);
    expect(li).toHaveClass('tab-link');
    expect(li).toHaveClass('active-tab');
    expect(li.getAttribute('aria-selected')).toBe('true');
    expect(li.getAttribute('role')).toBe('tab');
  });
  it('should not have active class', () => {
    const { container } = render(
      <TabLink id="1" activeId="2" handleClick={() => {}}>
        Tab-1
      </TabLink>
    );
    const li = container.querySelector('li');
    expect(container.querySelectorAll('li')).toHaveLength(1);
    expect(li).toHaveClass('tab-link');
    expect(li).not.toHaveClass('active-tab');
    expect(li.getAttribute('aria-selected')).toBe('false');
    expect(li.getAttribute('role')).toBe('tab');
  });
  it('should have active class after click', () => {
    const { container } = render(
      <Tabs defaultActive="2">
        <TabLink id="1">Tab-1</TabLink>
      </Tabs>
    );
    const li = container.querySelector('li');
    expect(container.querySelectorAll('li')).toHaveLength(1);
    expect(li).toHaveClass('tab-link');
    expect(li).not.toHaveClass('active-tab');
    fireEvent.click(li);
    expect(li).toHaveClass('active-tab');
  });
  it('should have aria labels', () => {
    const { container } = render(
      <Tabs defaultActive="2">
        <TabLink id="1">Tab-1</TabLink>
      </Tabs>
    );
    const li = container.querySelector('li');
    expect(container.querySelectorAll('li')).toHaveLength(1);
    expect(li).toHaveClass('tab-link');
    expect(li).not.toHaveClass('active-tab');
    fireEvent.click(li);
    expect(li).toHaveClass('active-tab');
    expect(li.getAttribute('aria-selected')).toBe('true');
    expect(li.getAttribute('role')).toBe('tab');
  });
});
