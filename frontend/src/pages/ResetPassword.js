import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "api/user/useResetPasswordMutation";
import {
  passwordConfirmValidator,
  createPasswordValidator,
} from "../util/validator";
import * as yup from "yup";
import useStatus from "hooks/useStatus";
import AuthFormTitle from "components/Auth/form/AuthFormTitle";
import AuthForm from "components/Auth/form/AuthForm";

const resetPasswordInput = [
  {
    name: "password",
    type: "password",
    placeholder: "New password",
    id: "password",
  },
  {
    name: "passwordConfirm",
    type: "password",
    placeholder: "Verify new password",
    id: "passwordConfirm",
  },
];

export default function ResetPassword() {
  const resetPasswordToken = useParams().token;

  const navigate = useNavigate();

  const { status, setStatus } = useStatus();

  const { mutate: onResetPassword, isLoading } = useResetPasswordMutation(
    resetPasswordToken,
    navigate,
    setStatus
  );

  const schemaObj = {
    password: createPasswordValidator,
    passwordConfirm: passwordConfirmValidator([yup.ref("password"), "", null]),
  };

  return (
    <div className="m-auto text-center py-10">
      <div className="mx-auto flex flex-col gap-5 w-80">
        <AuthFormTitle title="Reset Password" />
        <AuthForm
          submit={onResetPassword}
          formInputs={resetPasswordInput}
          status={status}
          isLoading={isLoading}
          btnTxt="Submit"
          btnDisabledTxt="Submitting"
          schemaObj={schemaObj}
        />
      </div>
    </div>
  );
}
