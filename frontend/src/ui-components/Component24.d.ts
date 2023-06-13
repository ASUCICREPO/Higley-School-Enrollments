/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component24OverridesProps = {
    Component24?: PrimitiveOverrideProps<ViewProps>;
    "enrollment_counts.csv"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 49"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "Enrollment Counts (.csv) *"?: PrimitiveOverrideProps<TextProps>;
    "noun-x-2147847 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component24Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component24OverridesProps | undefined | null;
}>;
export default function Component24(props: Component24Props): React.ReactElement;
