import {
  SignupFormData,
  validationSchema,
} from "@/app/_lib/schemas/signupValidationSchema";
import { CircleCheck, Circle } from "lucide-react";
import { useFormContext, UseFormWatch } from "react-hook-form";
import { ZodIssue } from "zod";
const defaultList = {
  password: {
    messages: [
      "Password must be at least 8 characters",
      // "Password must be at most 64 characters",
      // "Password must not contain whitespace",
      "Password must contain at least one uppercase letter",
      "Password must contain at least one lowercase letter",
      "Password must contain at least one numeric digit",
      "Password must contain at least one special character",
    ],
  },
};

export default function ValidationHints({
  watch,
}: {
  watch: UseFormWatch<SignupFormData>;
}) {
  const labelName = watch();
  const result = validationSchema.safeParse(labelName);
  const errors = result.error?.issues;
  const passwordErrors =
    errors
      ?.filter((el: ZodIssue) => el.path[0] === "password")
      .map((el: ZodIssue) => el.message) || [];

  const displayedErrors = defaultList.password.messages.map((msg) => {
    return {
      message: msg,
      isChecked: !passwordErrors.includes(msg),
    };
  });
  return (
    <div className="w-full rounded-8 p-4 bg-surface-lowest">
      {displayedErrors.map((item) => (
        <div className="flex gap-1 items-center" key={item.message}>
          {item.isChecked ? (
            <CircleCheck className="text-[#004E32]" size={11.6} />
          ) : (
            <Circle className="text-neutral-light" size={11.6} />
          )}
          <p className="text-[#434654] text-nowrap text-label-sm font-body-md">
            {item.message}
          </p>
        </div>
      ))}
    </div>
  );
}
