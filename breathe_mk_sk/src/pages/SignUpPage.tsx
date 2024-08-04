import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import * as yup from "yup";

interface IFormInputs {
  nameSurname: string;
  username: string;
  email: string;
  personal_no?: string | undefined;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  nameSurname: yup.string().required("Name and surname is required."),
  username: yup.string().required("Username is required."),
  personal_no: yup.string().optional(),
  email: yup.string().email("Invalid email.").required("Email is required."),
  password: yup
    .string()
    .min(8, "Password must be at least 6 characters")
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .min(8, "Password must be at least 6 characters")
    .required("Password is required."),
});

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    // Handle form sumbission
  };
  return (
    <Box
      sx={{
        width: "100%",
        margin: 0,
        p: 2,
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginInline: "auto",
        }}
      >
        <Grid
          item
          xs={11}
          md={8}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Креирај профил</Typography>
          <TextField
            label="Внеси име и презиме"
            {...register("nameSurname")}
            error={!!errors.nameSurname}
            helperText={errors.nameSurname?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Избери име на корисник"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Внеси е-маил адреса"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Внеси телефонски број"
            {...register("personal_no")}
            error={!!errors.personal_no}
            helperText={errors.personal_no?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Внеси лозинка"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Потврди лозинка"
            type="confirmPassword"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpPage;
