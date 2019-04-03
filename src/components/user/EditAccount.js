import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

// import styled from "styled-components";
import FullWidth from "../elements/FullWidth";
import StyledHeadingOne from "../elements/StyledHeadingOne";
import PatternedHeader from "../elements/PatternedHeader";
import FormBox from "../elements/FormBox";

class EditAccount extends Component {
  state = {
    bizDesc: "",
    bizName: "",
    category: "",
    email: "",
    extURL: "",
    firstName: "",
    imgURL: "",
    lastName: "",
    password: "",
    phone: "",
    avatar: "",
    isUploading: false,
    progress: 0
  };

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ imgURL: url }));
  };

  //To input current as value and make it editable.
  componentDidUpdate() {
    const { user } = this.props;
    //the if statement needs to be there to make sure you don't keep updating state, you'll get errors otherwise. That should let it run only the once, and once the user is loaded.
    if (
      user &&
      //The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
      //The every() method tests whether all elements in the array pass the test implemented by the provided function.

      Object.keys(this.state).every(index => this.state[index].length === 0)
    ) {
      this.setState(state => ({ ...user }));
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const { user, firestore, history } = this.props;
    const {
      bizDesc,
      bizName,
      category,
      email,
      extURL,
      imgURL,
      firstName,
      lastName,
      password,
      phone
    } = this.state;

    let userEdits = {
      //If something is put in the input field, added to the userEdits object. Otherwise the value is not changed from what is in Firestore (aka user.whatever).
      firstName: firstName === "" ? user.firstName : firstName,
      lastName: lastName === "" ? user.lastName : lastName,
      bizName: bizName === "" ? user.bizName : bizName,
      category: category === "" ? user.category : category,
      bizDesc: bizDesc === "" ? user.bizDesc : bizDesc,
      extURL: extURL === "" ? user.extURL : extURL,
      imgURL: imgURL === "" ? user.imgURL : imgURL,
      phone: phone === "" ? user.phone : phone,
      email: email === "" ? user.email : email,
      password: password === "" ? user.password : password
    };

    //Update the info in Firestore
    firestore
      .update({ collection: "users", doc: user.id }, userEdits)
      .then(() => history.push(`/profile/${user.user_id}`));
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { user } = this.props;

    if (user) {
      return (
        <FullWidth>
          <PatternedHeader />
          <FormBox>
            <StyledHeadingOne
              content="Edit Your Account Info"
              color="var(--dark-teal)"
            />
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder={user.firstName}
                  value={this.state.firstName}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder={user.lastName}
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bizName">Business Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="bizName"
                  placeholder={user.bizName}
                  value={this.state.bizName}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label>Image/Logo</label>
                {this.state.isUploading && (
                  <p>Progress: {this.state.progress}</p>
                )}
                {this.state.imgURL && <img src={this.state.imgURL} />}
                <FileUploader
                  accept="image/*"
                  name="avatar"
                  randomizeFilename
                  storageRef={firebase.storage().ref("images")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Business Category</label>
                <select
                  type="text"
                  className="form-control"
                  name="category"
                  placeholder={user.category}
                  value={this.state.category}
                  onChange={this.onChange}
                >
                  {/* <option value="" selected disabled hidden>
                    Select a category
                  </option> */}
                  <option value="Art & Photography">Art & Photography</option>
                  <option value="Clothing & Accessories">
                    Clothing & Accessories
                  </option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Hair & Beauty">Hair & Beauty</option>
                  <option value="Health & Fitness">Health & Fitness</option>
                  <option value="Kids & Baby">Kids & Baby</option>
                  <option value="Household=">Household</option>
                  <option value="Pets=">Pets</option>
                  <option value="Professional Services=">
                    Professional Services
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="bizDesc">
                  Business Description (1-2 sentences about what you offer!)
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  name="bizDesc"
                  placeholder={user.bizDesc}
                  value={this.state.bizDesc}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="extURL">Website URL</label>
                <input
                  type="url"
                  className="form-control"
                  name="extURL"
                  placeholder={user.extURL}
                  value={this.state.extURL}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone (xxx-xxx-xxxx)</label>
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="form-control"
                  name="phone"
                  placeholder={user.phone}
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder={user.email}
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  Password (Minimum 6 characters)
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder={user.password}
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>

              <input
                type="submit"
                value="Update"
                className="btn btn-primary btn-block"
              />
            </form>
          </FormBox>
        </FullWidth>
      );
    } else {
      return <p>Waiting...</p>;
    }
  }
}

EditAccount.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    //we already have "users" from users.js, and we only need one here, so we will get the user id from URL and store the respective user data as "user"
    { collection: "users", storeAs: "user", doc: props.match.params.id }
  ]),
  //Below we are replacing the "state" param with destructuring of state.firestore.ordered, which if broken out would look like this:
  // { firestore } = state
  // and then
  // { ordered } = firestore
  // So when you use the "ordered" variable, it reflects state.firestore.ordered
  connect(({ firestore: { ordered } }, props) => ({
    user: ordered.user && ordered.user[0]
  }))
)(EditAccount);
