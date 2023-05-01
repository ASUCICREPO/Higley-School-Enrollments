/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component30OverridesProps = {
    Component30?: PrimitiveOverrideProps<ViewProps>;
    "student_activities.csv"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 55"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "Student Activities (.csv) *"?: PrimitiveOverrideProps<TextProps>;
    "noun-x-2147847 8"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component30Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component30OverridesProps | undefined | null;
}>;
export default function Component30(props: Component30Props): React.ReactElement;
