/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component34OverridesProps = {
    Component34?: PrimitiveOverrideProps<ViewProps>;
    "student_enrollments.csv"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 59"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "Student Enrollments (.csv) *"?: PrimitiveOverrideProps<TextProps>;
    "noun-x-2147847 12"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component34Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component34OverridesProps | undefined | null;
}>;
export default function Component34(props: Component34Props): React.ReactElement;
