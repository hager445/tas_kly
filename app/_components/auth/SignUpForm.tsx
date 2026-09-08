import React from "react";
import FormContainer from "./FormContainer";
import FormTitle from "./FormTitle";
import Input from "./Input";
import Button from "../ui/Button";
import AuthPrompt from "./AuthPrompt";

export default function SignUpForm() {
  return (
    <FormContainer
      formContainerProps={{
        height: "auto",
        maxWidth: "[576px]",
        padding: "[48px]",
      }}
    >
      <FormTitle
        mainTitle="Create your workspace"
        subTitle="Join the editorial approach to task management."
      />
      <div className="flex flex-col gap-y-6 mb-4">
        {/* ===========title============= */}
        {/* ==================== inputs=========================== */}
        <Input
          inputWidth="120"
          label="name"
          type="text"
          placeholder="enter your full name"
        >
          3-50 characters, letters only.
        </Input>
        <Input
          inputWidth="120"
          label="email"
          type="email"
          placeholder="enter your email address"
        />
        <Input
          inputWidth="120"
          label="job title"
          type="text"
          placeholder="enter your job title"
        />
        <div className="flex flex-row gap-x-1 justify-between w-120">
          <Input
            label="password"
            type="password"
            placeholder="enter your password"
          />
          <Input
            label="confirm password"
            type="password"
            placeholder="confirm your password"
          />
        </div>
        {/* ================= submit button=========================== */}
        <Button type="submit">Create Account</Button>
        {/* ============ redirect link============= */}
      </div>
      <AuthPrompt link="sign-in" text="Already have an account? " />
    </FormContainer>
  );
}
