import TextField from '@mui/material/TextField';

import React from 'react';
import { Controller } from 'react-hook-form';

import { FormInputProps } from './FormInputProps';
export const FormInputText = ({
  name,
  control,
  label,
  className, 
  errors,
  inputType,
  required,
}: FormInputProps) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        
        control={control}
        defaultValue=""
        render={({ field }: any) => (
          <TextField
          InputLabelProps={{ shrink: true }}  
            {...field}
            required={required}
            className={className}
            error={!!errors?.[name]}
            type={inputType}
            helperText={errors?.[name]?.message}
            fullWidth
            label={label}
            variant="outlined"
          />
        )}
      />
    </div>
  );
};
