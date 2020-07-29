import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ViewPage = (props) => (
  <>
    <Typography variant='h4' style={{ marginTop: '16px' }}>
      View Page
    </Typography>
    {props.formData.firstName ? (
      <Card>
        <CardContent>
          <Typography color='secondary'>{props.formData.firstName}</Typography>
          <Typography color='secondary'>{props.formData.lastName}</Typography>
          <Typography color='secondary'>{props.formData.email}</Typography>
          <Typography color='secondary'>{props.formData.phone}</Typography>
          <Typography color='secondary'>{props.formData.address}</Typography>
          <Typography color='secondary'>{props.formData.message}</Typography>
        </CardContent>
      </Card>
    ) : (
      <Typography variant='body1' style={{ marginTop: '8px' }}>
        Please provide your data on the form page.
      </Typography>
    )}
  </>
);

ViewPage.propTypes = {
  formData: PropTypes.object
};

const mapStateToProps = (state) => ({
  formData: state.formData
});

export default connect(mapStateToProps)(ViewPage);
