import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';


const FormInputRadio = ({
  name,
  control, 
  label,
  className,
  data,
}: FormInputProps) => {
  const generateRadioOptions = () => {
    return data.map((singleOption: any) => (
      <React.Fragment key={singleOption.label}>
        <FormControlLabel
          value={singleOption.value}
          label={singleOption.label}
          control={<Radio required={true} />}
        />
      </React.Fragment>
    ));
  };

  return (
    <>
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup {...field} row className={className} name={name}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </>
  );
};

export default FormInputRadio;
