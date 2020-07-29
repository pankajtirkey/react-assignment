import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { debounce } from 'lodash';

import * as actionTypes from '../../store/actions';

class Form extends Component {
  state = {
    formData: {
      firstName: {
        id: 'firstName',
        label: 'First Name',
        type: 'text',
        value: '',
        touched: false,
        valid: false,
        validation: { required: true },
        errors: []
      },
      lastName: {
        id: 'lastName',
        label: 'Last Name',
        type: 'text',
        value: '',
        touched: false,
        valid: false,
        validation: { required: true },
        errors: []
      },
      email: {
        id: 'email',
        label: 'Email',
        type: 'email',
        value: '',
        touched: false,
        valid: false,
        validation: { required: true, email: true },
        errors: []
      },
      phone: {
        id: 'phone',
        label: 'Phone',
        type: 'number',
        value: '',
        touched: false,
        valid: false,
        validation: { required: true, min: 1000000000, max: 9999999999 },
        errors: []
      },
      address: {
        id: 'address',
        label: 'Address',
        type: 'textarea',
        value: '',
        touched: false,
        valid: false,
        validation: { required: true },
        errors: []
      },
      message: {
        id: 'message',
        label: 'Message',
        type: 'textarea',
        value: '',
        touched: false,
        valid: false,
        validation: { required: true },
        errors: []
      }
    },
    formIsValid: false
  };

  changeHandler = (event, identifier) => {
    const updatedForm = { ...this.state.formData };
    const updatedFormField = { ...updatedForm[identifier] };
    updatedFormField.value = event.target.value;
    updatedFormField.valid = this.checkValidation(
      updatedFormField.value,
      updatedFormField.validation
    );
    updatedFormField.touched = true;
    updatedForm[identifier] = updatedFormField;

    let formIsValid = true;
    for (let formField in updatedForm) {
      formIsValid = updatedForm[formField].valid && formIsValid;
    }

    this.setState({ formData: updatedForm, formIsValid: formIsValid });
  };

  checkValidation = (value, rules) => {
    if (!rules) {
      return;
    }
    let isValid = true;
    if (rules && rules.required) {
      isValid = !!value.trim() && isValid;
    }
    if (rules && rules.email) {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValid = pattern.test(value);
    }
    if (rules && rules.min) {
      isValid = value >= rules.min && isValid;
    }
    if (rules && rules.max) {
      isValid = value <= rules.max && isValid;
    }
    return isValid;
  };

  submitHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let key in this.state.formData) {
      formData[key] = this.state.formData[key].value;
    }
    // console.log(formData);
    this.props.onSubmitForm(formData);
    this.props.history.push('/view');
  };

  render() {
    let formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push(this.state.formData[key]);
    }
    const formElements = formElementsArray.map((formElement) => {
      return (
        <TextField
          key={formElement.id}
          id={formElement.id}
          label={formElement.label}
          type={formElement.type === 'textarea' ? 'text' : formElement.type}
          value={formElement.value}
          onChange={(event) => this.changeHandler(event, formElement.id)}
          variant='outlined'
          fullWidth
          multiline={formElement.type === 'textarea' ? true : false}
          rowsMax={formElement.type === 'textarea' ? 3 : null}
          style={{
            marginTop: '5px',
            marginBottom: '5px',
            backgroundColor:
              formElement.touched && !formElement.valid ? 'salmon' : 'white'
          }}
        />
      );
    });

    return (
      // <>
      <form onSubmit={this.submitHandler}>
        {formElements}
        <Button
          type='submit'
          disabled={!this.state.formIsValid}
          variant='contained'
          color='primary'
          fullWidth
        >
          Submit
        </Button>
      </form>
      // </>
    );
  }
}

Form.propTypes = {
  history: PropTypes.object,
  onSubmitForm: PropTypes.func
};

const mapStateToProps = (state) => ({ formData: state.formData });

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (formdata) =>
    dispatch({ type: actionTypes.SAVE_FORM, payload: formdata })
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
