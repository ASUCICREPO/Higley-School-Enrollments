/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component25OverridesProps = {
    Component25?: PrimitiveOverrideProps<ViewProps>;
    "enrollment_grades.csv"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 50"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "Enrollment Grades (.csv) *"?: PrimitiveOverrideProps<TextProps>;
    "noun-x-2147847 3"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component25Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component25OverridesProps | undefined | null;
}>;
export default function Component25(props: Component25Props): React.ReactElement;
