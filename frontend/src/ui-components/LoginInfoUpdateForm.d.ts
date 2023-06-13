/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LoginInfo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LoginInfoUpdateFormInputValues = {
    Username?: string;
    Password?: string;
};
export declare type LoginInfoUpdateFormValidationValues = {
    Username?: ValidationFunction<string>;
    Password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginInfoUpdateFormOverridesProps = {
    LoginInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Username?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoginInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: LoginInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    loginInfo?: LoginInfo;
    onSubmit?: (fields: LoginInfoUpdateFormInputValues) => LoginInfoUpdateFormInputValues;
    onSuccess?: (fields: LoginInfoUpdateFormInputValues) => void;
    onError?: (fields: LoginInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoginInfoUpdateFormInputValues) => LoginInfoUpdateFormInputValues;
    onValidate?: LoginInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LoginInfoUpdateForm(props: LoginInfoUpdateFormProps): React.ReactElement;
