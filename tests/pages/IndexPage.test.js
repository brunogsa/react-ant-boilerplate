import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import { HashRouter, Switch } from 'react-router-dom';
import IndexPage from '../../src/pages/IndexPage';

configure({ adapter: new Adapter() });

describe('IndexPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<IndexPage />);
  });

  describe('is responsible for the most routing', () => {
    it('should have <HashRouter /> component', () => {
      const hasRouterComponent = wrapper.find(HashRouter);
      expect(hasRouterComponent).toBeTruthy();
    });

    it('should have <Switch /> component', () => {
      const hasRouterComponent = wrapper.find(Switch);
      expect(hasRouterComponent).toBeTruthy();
    });
  });
});
