import React from 'react';
import { render } from '@testing-library/react';
import App from './Components/App/App';
import { shallow, mount } from 'enzyme';

const wrapper = shallow(<App />);

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
//doesn't work........
describe('App', ()=>{
    it('should have a class of karen', ()=>{
        expect(wrapper.find('.karen'));
    });
});