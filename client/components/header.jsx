import React, { Component } from 'react';
import Accounts from './accounts';

class Header extends Component {
  onBinClick(event) {
    event.preventDefault();

    Meteor.call('bins.insert');
  }

  render() {
    return (
      <nav className='nav navbar-default'>
        <div className='navbar-header'>
          <a className='navbar-brand'>Markbin</a>
          <ul className='nav navbar-nav'>
            <li>
              <Accounts />
            </li>
            <li>
              <a href='#' onClick={this.onBinClick.bind(this)}>Create bin</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;