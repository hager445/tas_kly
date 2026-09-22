"use client";

import React, { useState } from "react";
import FormContainer from "../auth/FormContainer";
import ProjectInputsGroup from "./ProjectInputsGroup";
import ProjectFormFooter from "./ProjectFormFooter";
import { useForm } from "react-hook-form";
import {
  projectFormData,
  projectValidationFormSchema,
} from "@/app/_lib/schemas/projectValidationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePaginationContext } from "@/app/contexts/PaginationContext";
import { useCurrentProjectContext } from "@/app/contexts/CurrentProjectContext";
import { editCurrentProjectAction } from "@/app/actions/dashboard/editCurrentProjectAction";

export default function EditCurrentProjectForm() {
  const [creationErrorMessage, setCreationErrorMessage] = useState("");
  const [successState, setSuccessState] = useState("");
  const { currentPage } = usePaginationContext();
  const { currentProject } = useCurrentProjectContext();
  const project_id = currentProject?.id;
  const onSubmit = async (data: projectFormData) => {
    if (!project_id) throw Error("Is invalid project ID ");
    try {
      const res = await editCurrentProjectAction(data, project_id, currentPage);
      if (!res.success) setCreationErrorMessage(res.message);
      setSuccessState(res.message);
    } catch (error) {
      throw error;
    } finally {
    }
  };
  const formMethods = useForm<projectFormData>({
    resolver: zodResolver(projectValidationFormSchema),
    mode: "onTouched",
  });

  return (
    <>
      <FormContainer
        onSubmit={onSubmit}
        formMethods={formMethods}
        variant="project"
      >
        <ProjectInputsGroup
          currentProject={currentProject}
          mode="edit"
          successState={successState}
          errorMessage={creationErrorMessage}
        />
        <ProjectFormFooter />
      </FormContainer>
    </>
  );
}
