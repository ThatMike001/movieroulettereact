import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderHeader() {
    //TODO: A variable that will return JSX elements for watchlist, spin, logout, and render the users name

    //TODO: A variable that will return the spin page and ask the user to log in to view their watchlist
    const loggedOutHeader = <div>Logged out</div>;

    if (this.props.isLoggedIn) {
      //TODO: We need to add functionality to logout
      return (
        <div className="ui menu">
          <div>
            <Link to="/watchlist" className="header item">
              Watchlist
            </Link>
          </div>
          <div>
            <Link to="/spin" className="header item">
              Spin
            </Link>
          </div>
          <div className="right menu">
            <div className="item">
              <img
                className="image"
                src={`https://www.gravatar.com/avatar/${this.props.sessionDetails.accountDetails.avatar.gravatar.hash}`}
                alt="profile avatar"
              />
            </div>

            <div className="item">{this.props.sessionDetails.accountDetails.name}</div>
            <div className="header item">Logout</div>
          </div>
        </div>
      );
    } else if (!this.props.isLoggedIn) {
      return loggedOutHeader;
    }
  }

  render() {
    return <div>{this.renderHeader()}</div>;
  }
}

const mapStateToProps = state => {
  console.log('state details', state);

  return {
    sessionDetails: state.session,
    isLoggedIn: state.session.isLoggedIn
  };
};

// get our props into our header
export default connect(mapStateToProps)(Header);
