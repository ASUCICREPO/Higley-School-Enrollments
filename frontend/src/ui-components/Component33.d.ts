/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component33OverridesProps = {
    Component33?: PrimitiveOverrideProps<ViewProps>;
    "student_demographics.csv"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 58"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "Student Demographics (.csv) *"?: PrimitiveOverrideProps<TextProps>;
    "noun-x-2147847 11"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component33Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component33OverridesProps | undefined | null;
}>;
export default function Component33(props: Component33Props): React.ReactElement;
