import React from 'react';
import { TextField } from '@material-ui/core';

const formControls = [{ id: 'firstName', label: 'First Name' }];

const Form = () => (
  <>
    <form>
      {formControls.map((control) => (
        <TextField
          key={control.id}
          value={control.value}
          label={control.label}
          variant='outlined'
          fullWidth
        />
      ))}
    </form>
  </>
);

export default Form;
