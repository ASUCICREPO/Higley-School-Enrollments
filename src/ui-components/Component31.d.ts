/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component31OverridesProps = {
    Component31?: PrimitiveOverrideProps<ViewProps>;
    "student_attendance.csv"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 56"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "Student Attendance (.csv) *"?: PrimitiveOverrideProps<TextProps>;
    "noun-x-2147847 9"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component31Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component31OverridesProps | undefined | null;
}>;
export default function Component31(props: Component31Props): React.ReactElement;
