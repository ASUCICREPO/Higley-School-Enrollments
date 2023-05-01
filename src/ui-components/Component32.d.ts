/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component32OverridesProps = {
    Component32?: PrimitiveOverrideProps<ViewProps>;
    "student_benchmarks.csv"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 57"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "Student Benchmarks (.csv) *"?: PrimitiveOverrideProps<TextProps>;
    "noun-x-2147847 10"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component32Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component32OverridesProps | undefined | null;
}>;
export default function Component32(props: Component32Props): React.ReactElement;
