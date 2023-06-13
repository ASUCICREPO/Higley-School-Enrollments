/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component27OverridesProps = {
    Component27?: PrimitiveOverrideProps<ViewProps>;
    "land_developments.csv"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 52"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "Land Developments (.csv) *"?: PrimitiveOverrideProps<TextProps>;
    "noun-x-2147847 5"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component27Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component27OverridesProps | undefined | null;
}>;
export default function Component27(props: Component27Props): React.ReactElement;
