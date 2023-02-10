import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import { FormInputText } from "../../src/components/shared/formInputs/FormInputText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import type { SubmitHandler } from "react-hook-form";
import _ from "lodash";
import * as yup from 'yup';

import { Box, Button } from "@mui/material";
import {
  errorMsg,
  successMsg,
} from "../../src/components/shared/toaster-msg/error-msg";
import { useRouter } from "next/router";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import authApis from "../../services/authApi";

export default function RegisterPage() {

  const RegisterFormValidation = yup.object().shape({
    email: yup.string().email('You must enter a valid email').required('You must enter a email'),    
  });
  

  const defaultValues = {
    email: "",
    password: "",
    name:"",
    confirmPassword:"",
    findExperience:"",
    createExperience:""

  };
  const { control, formState, register, handleSubmit } =
    useForm({
      mode: "onChange",
      defaultValues,
      resolver: yupResolver(RegisterFormValidation),
    });

  const { isValid, dirtyFields, errors } = formState;
  const router = useRouter();

  const onSubmit: SubmitHandler<any> = async (data, e: any) => {
    try {
      const result = await authApis.forgotPassword(data);
      if (result.data.status === true) {
        successMsg('Please check your email for new password');
        router.push('/login')
      } else {
        errorMsg(result.data.message);
      }
    } catch (error: any) {
      errorMsg(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <Box className="register_form">
            <h1  className="text-white text-center">
                Blue Sky
              </h1>
          </Box>
        <Sheet
          className="login-form-wrapper border-stone-300 bg-white backgrougColorWhite"
          sx={{
            width: 400,
            mx: "auto",
            my: 5,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",

          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
            </Typography>
            <h3>Forgot you password?</h3>
          </div>

          <FormInputText
            name="email"
            control={control}
            label="Enter Email "
            required={true}
            errors={errors}
          />          
          <Button
            type="submit"
            variant="contained"
            disabled={_.isEmpty(dirtyFields) || !isValid}
          >
            Reset Password
          </Button>        
        </Sheet>
      </form>
    </>
  );
}

