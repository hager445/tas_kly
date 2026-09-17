"use client";
import Input from "../auth/Input";
import FormTitle from "../auth/FormTitle";
import BarIcon from "../ui/BarIcon";
import { useFormContext } from "react-hook-form";
import CharacterCounter from "./CharacterCounter";

import Button from "../ui/Button";

import NavigateBack from "../ui/NavigateBack";
import TextError from "../auth/TextError";

export default function CreateNewProjectInputs({
  creationErrorMessage,
  successState,
}: {
  creationErrorMessage: string;
  successState: string;
}) {
  const {
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useFormContext();
  const description = watch("description");
  const maxLength = 500;
  const hasErrors = Object.keys(errors).length > 0;
  console.log(creationErrorMessage);

  return (
    <div className="flex flex-col  w-full pt-8  sm:px-8 px-6 ">
      <div className="flex gap-4 sm:pb-10 pb-8 items-center justify-center sm:border-b-1 border-b-surface-low  ">
        <div className="flex items-center justify-center rounded-4 p-3 opacity-10 bg-primary-container">
          <BarIcon iconName="checkPlus" width={22} height={20} />
        </div>
        <div className="text-left">
          <FormTitle
            variant="createNewProjectTitle"
            mainTitle="Initialize New Project"
            subTitle="Define the scope and foundational details of your project."
          />
        </div>
      </div>
      {/* ================= */}
      <div className="space-y-8 pb-4 pt-8">
        <Input
          requiredBadge={<span className="text-error">*</span>}
          className=" w-full rounded-4"
          label="project title"
          name="name"
          type="text"
          placeholder="Tasks Management project"
        />

        <div className="flex flex-col gap-2 ">
          <div className="flex items-center justify-between">
            <label
              className="uppercase text-label-sm font-label-sm text-neutral-medium"
              htmlFor={"description"}
            >
              description
            </label>
            <span className="text-neutral-medium text-label-sm font-label-sm">
              optional
            </span>
          </div>
          <textarea
            {...register("description")}
            maxLength={maxLength}
            placeholder={
              "Provide a high-level overview of the project's architectural objectives and key milestones..."
            }
            className={`min-h-32  overflow-y-auto rounded-4
    resize-none border-none focus:border-0 w-full sm:py-3.5 py-4.5 px-4   focus:ring-0 focus:outline-none   bg-surface-highest placeholder:text-placeholder placeholder:text-title-sm placeholder:font-body-md  `}
          />
          <div className="ml-auto">
            <CharacterCounter
              maxLength={maxLength}
              characterLength={description?.length}
            />
          </div>
        </div>

        {/* ==================btn */}
        <div className="flex flex-col items-center mb-0 gap-4 sm:flex-row sm:justify-between pt-4">
          <Button
            disabled={hasErrors || isSubmitting}
            style="primary-button rounded-2 px-6 py-3 sm:w-fit w-full sm:order-2"
            type="submit"
          >
            {isSubmitting ? "creating..." : "create project"}
          </Button>
          <div className="sm:order-1">
            <NavigateBack />
          </div>
        </div>
        {creationErrorMessage && (
          <div className="py-8 w-auto text-center">
            <TextError errorMessage={creationErrorMessage} />
          </div>
        )}
        {/* <div className="py-8 w-auto text-center text-success">
           
        <span className=" text-center text-label-sm">
          {successState}
        </span>
          </div> */}
      </div>
    </div>
  );
}
