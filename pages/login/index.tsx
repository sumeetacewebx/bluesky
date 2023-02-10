import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import { FormInputText } from "../../src/components/shared/formInputs/FormInputText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import type { SubmitHandler } from "react-hook-form";
import * as yup from 'yup';
import _ from "lodash";

import { Box, Button } from "@mui/material";
import {
  errorMsg,
  successMsg,
} from "../../src/components/shared/toaster-msg/error-msg";
import { useRouter } from "next/router";
import authApis from "../../services/authApi";

export default function LoginPage() {

  //VALIDATION
  const LoginFormSchema = yup.object().shape({
    email: yup.string().email('You must enter a valid email').required('You must enter a email'),
    password: yup
      .string()
      .required('Please enter your password.')
      .min(4, 'Password is too short - should be 4 chars minimum.'),
  });

  const defaultValues = {
    email: "",
    password: "",
  };
  const { control, setValue, formState, trigger, reset, handleSubmit } =
    useForm({
      mode: "onChange",
      defaultValues,
      resolver: yupResolver(LoginFormSchema),
    });

  const { isValid, dirtyFields, errors } = formState;
  const router = useRouter();

  const onSubmit: SubmitHandler<any> = async (data, e: any) => {
    try {
      const result = await authApis.authLogin(data);
      if(result.data.status === true){
        console.log(result, 'result')
        const accessToken = result.data.data.accessToken;
        // localStorage.setItem("userAccessToken", accessToken);
        localStorage.setItem("userDetailsStorage", JSON.stringify(data.email));
        router.push('/dashboard')
        successMsg(result.data.message);
      }else{
        errorMsg(result.data.message);
      }
    } catch (error: any) {
      errorMsg(error.message);
    }


  };

  
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <Box className="login_form">
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
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign in to continue.</Typography>
            </div>

            <FormInputText
              name="email"
              control={control}
              label="Email "
              required={true}
              errors={errors}
            />

            <FormInputText
              name="password"
              control={control}
              label="Password "
              required={true}
              errors={errors}
              inputType="password"
            />
            <Button
              type="submit"
              variant="contained"
              disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Log in
            </Button>

            <Typography
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
             Don&apos;t have an account? <Link href="/register">Sign up</Link> | 
             <Link href="/auth/forgot-password">Forgot Password</Link>
             
            </Typography>
          </Sheet>
        </form>
      </>
    );
  
}
