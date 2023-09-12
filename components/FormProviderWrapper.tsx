"use client";
import React, { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

const FormProviderWrapper = ({ children }: { children: ReactNode }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormProviderWrapper;
