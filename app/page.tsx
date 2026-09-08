import AuthPrompt from "./_components/auth/AuthPrompt";
import Button from "./_components/ui/Button";
import FormTitle from "./_components/auth/FormTitle";
import Input from "./_components/auth/Input";
import PasswordIcon from "./_components/auth/PasswordIcon";
import ValidationHints from "./_components/auth/ValidationHints";
import SignUpForm from "./_components/auth/SignUpForm";

export default function Home() {
  const hager: string = "Hager";
  return (
    <div className="w-full ">
      <main className="flex w-full  items-center justify-center ">
        {/* <FormTitle
          mainTitle="Create your workspace"
          subTitle="Join the editorial approach to task management."
        /> */}
        {/* <AuthPrompt link="login" text="Already have an account? " />
        <Input
          label="Workspace Name"
          type="text"
          placeholder="Enter workspace name"
          icon={<PasswordIcon />}
        >
          3-50 characters, letters only.
        </Input>
        {/* <ValidationHints
          validationList={["3-50 characters", "Letters only"]}
          checked={false}
        /> 
        <Button>Sign up with Google</Button> */}
        <SignUpForm />
      </main>
    </div>
  );
}
