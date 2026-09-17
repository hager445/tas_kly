"use client";
import { useForm, useFormContext } from "react-hook-form";
import FormContainer from "../auth/FormContainer";
import FormTitle from "../auth/FormTitle";
import Input from "../auth/Input";
import {
  createProjectValidationSchema,
  newProjectFormData,
} from "@/app/_lib/schemas/createProjectValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import BarIcon from "../ui/BarIcon";
import CreateNewProjectInputs from "./CreateNewProjectInputs";
import { createNewProjectAction } from "@/app/actions/dashboard/createNewProjectAction";
import { useState } from "react";

export default function CreateNewProjectForm() {
  const [creationErrorMessage, setCreationErrorMessage] = useState("");
  const [successState, setSuccessState] = useState("");

  const onSubmit = async (data: newProjectFormData) => {
    try {
      const res = await createNewProjectAction(data);
      if (!res.success) setCreationErrorMessage(res.message);
      setSuccessState(res.message);
    } catch (error) {
      throw error;
    } finally {
    }
  };
  const formMethods = useForm<newProjectFormData>({
    resolver: zodResolver(createProjectValidationSchema),
    mode: "onTouched",
  });

  return (
    <>
      <FormContainer
        onSubmit={onSubmit}
        formMethods={formMethods}
        variant="createNewProject"
      >
        <CreateNewProjectInputs
          successState={successState}
          creationErrorMessage={creationErrorMessage}
        />
        <div className="bg-surface-low p-6 w-full flex items-start gap-x-1.25 mx-6 sm:mx-0">
          <BarIcon iconName="light" width={11.25} height={15} />
          <p className="text-label-md xl:text-nowrap font-title-light-sm text-neutral-medium">
            <span className="font-label-md">Pro Tip:</span>
            You can invite project members and assign epics immediately after
            the initial creation process
          </p>
        </div>
      </FormContainer>
    </>
  );
}
