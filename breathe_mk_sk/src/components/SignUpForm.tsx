import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IFormInputs, SignUpFormProps } from "../types/signup";

const schema = yup.object().shape({
  nameSurname: yup.string().required("Name and surname is required."),
  username: yup.string().required("Username is required."),
  personal_no: yup.string().optional(),
  email: yup.string().email("Invalid email.").required("Email is required."),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match.")
    .required("Confirm password is required."),
});

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const onSubmitHandler = (data: IFormInputs) => {
    onSubmit(data);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmitHandler)}>
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
          type={showPassword ? "text" : "password"}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Потврди лозинка"
          type={showConfirmPassword ? "text" : "password"}
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowConfirmPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </Grid>
    </Box>
  );
};

export default SignUpForm;
