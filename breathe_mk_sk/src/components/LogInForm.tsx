import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  IFormInputs,
  ILIFormInputs,
  LogInFormProps,
  SignUpFormProps,
} from "../types/signup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email.").required("Email is required."),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .required("Password is required."),
});

const LogInForm: React.FC<LogInFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILIFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const onSubmitHandler = (data: ILIFormInputs) => {
    onSubmit(data);
    reset();
  };

  return (
    <Grid
      component="form"
      onSubmit={handleSubmit(onSubmitHandler)}
      item
      xs={11}
      sm={8}
      md={6}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <TextField
        label="Е-маил адреса"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Лозинка"
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
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Најави се
      </Button>
    </Grid>
  );
};

export default LogInForm;
