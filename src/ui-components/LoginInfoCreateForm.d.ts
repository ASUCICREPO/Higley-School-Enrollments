/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LoginInfoCreateFormInputValues = {
    Username?: string;
    Password?: string;
};
export declare type LoginInfoCreateFormValidationValues = {
    Username?: ValidationFunction<string>;
    Password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginInfoCreateFormOverridesProps = {
    LoginInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Username?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoginInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: LoginInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LoginInfoCreateFormInputValues) => LoginInfoCreateFormInputValues;
    onSuccess?: (fields: LoginInfoCreateFormInputValues) => void;
    onError?: (fields: LoginInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoginInfoCreateFormInputValues) => LoginInfoCreateFormInputValues;
    onValidate?: LoginInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function LoginInfoCreateForm(props: LoginInfoCreateFormProps): React.ReactElement;
