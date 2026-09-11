// import AuthPrompt from "@/app/_components/auth/AuthPrompt";
// import FormContainer from "@/app/_components/auth/FormContainer";
// import FormTitle from "@/app/_components/auth/FormTitle";
// import InputsGroup from "@/app/_components/auth/InputsGroup";
// import Button from "@/app/_components/ui/Button";
// import { SignupFormData } from "@/app/_lib/schemas/validationSchema";

import SignUpForm from "@/app/_components/auth/SignUpForm";

// import { signupAction } from "@/app/actions/auth/signupAction";
export default function page() {
  // const onSubmit = (data: SignupFormData) => {
  //   signupAction(data);
  // };

  // return (
  //   <FormContainer
  //     onSubmit={onSubmit}
  //     formContainerProps={{
  //       height: "h-auto",
  //       width: "sm:max-w-[576px] w-full",
  //       padding: "sm:p-[48px]",
  //     }}
  //   >
  //     <FormTitle
  //       mainTitle="Create your workspace"
  //       subTitle="Join the editorial approach to task management."
  //     />
  //     <InputsGroup />
  //     <Button type="submit">Create Account</Button>
  //     {/* ============ redirect link============= */}
  //     <AuthPrompt link="sign-in" text="Already have an account? " />
  //   </FormContainer>
  // );
  return <SignUpForm />;
}
