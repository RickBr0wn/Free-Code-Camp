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
  it('should contain only one <div> with and id of `quote-box`', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#quote-box')).to.have.lengthOf(1)
  })
})
