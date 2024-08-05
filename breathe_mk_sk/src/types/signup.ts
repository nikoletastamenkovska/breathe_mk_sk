import { SubmitHandler } from "react-hook-form";

export interface IFormInputs {
    username: string;
    email: string;
    personal_no?: string | undefined;
    password: string;
    confirmPassword: string;
}

export interface ILIFormInputs {
    email: string;
    password: string;
}

export interface SignUpFormProps {
    onSubmit: SubmitHandler<IFormInputs>;
}
export interface LogInFormProps {
    onSubmit: SubmitHandler<ILIFormInputs>;
}