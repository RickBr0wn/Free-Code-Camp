import React from 'react'

const Buttons = () => {
  return <div>
      <ul>
        <li>
          <label>
            <input type="checkbox" name="" />
            <i class="fas fa-power-off" />
            <span class="check" />
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="" />
            <div className="keyboard-letter">#1</div>
            <span class="check" />
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="" />
          <div className="keyboard-letter letter-power-on">#2</div>
            <span class="check" />
          </label>
        </li>
      </ul>
    </div>
}

export default Buttons
