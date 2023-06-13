/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HigleyLoginInputValues = {
    Field1?: string;
    Field0?: string;
};
export declare type HigleyLoginValidationValues = {
    Field1?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HigleyLoginOverridesProps = {
    HigleyLoginGrid?: PrimitiveOverrideProps<GridProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type HigleyLoginProps = React.PropsWithChildren<{
    overrides?: HigleyLoginOverridesProps | undefined | null;
} & {
    onSubmit: (fields: HigleyLoginInputValues) => void;
    onChange?: (fields: HigleyLoginInputValues) => HigleyLoginInputValues;
    onValidate?: HigleyLoginValidationValues;
} & React.CSSProperties>;
export default function HigleyLogin(props: HigleyLoginProps): React.ReactElement;
