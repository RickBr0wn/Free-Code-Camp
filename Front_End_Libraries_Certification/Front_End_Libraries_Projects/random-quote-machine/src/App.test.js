import React from 'react'
import ReactDOM from 'react-dom'
import App, { Link } from './App'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<App /> shallow rendering', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('should contain a <div> with an id of "quote-box"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#quote-box').exists()).toBe(true)
  })
  it('should contain a an element with a corresponding id="text"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#text').exists()).toBe(true)
  })
})
