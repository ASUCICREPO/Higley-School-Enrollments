/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component29OverridesProps = {
    Component29?: PrimitiveOverrideProps<ViewProps>;
    "person_address_history.csv"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 54"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "Person Address History (.csv) *"?: PrimitiveOverrideProps<TextProps>;
    "noun-x-2147847 7"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component29Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component29OverridesProps | undefined | null;
}>;
export default function Component29(props: Component29Props): React.ReactElement;
