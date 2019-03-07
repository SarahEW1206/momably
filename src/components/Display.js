import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class Display extends Component {
  render() {
    const { clients } = this.props;
    console.log(clients);

    if (clients) {
      return (
        <div>
          <h1>Featured Listings</h1>

          <div className="container">
            {clients.map(client => (
              <div className="card col-xs-12 col-sm-6 col-md-3">
                <h3>
                  {client.firstName} {client.lastName}
                </h3>
                <h4>{client.email}</h4>
                <p>${client.balance}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

Display.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Display);
