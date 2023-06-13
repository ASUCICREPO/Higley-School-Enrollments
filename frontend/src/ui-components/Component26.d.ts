/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component26OverridesProps = {
    Component26?: PrimitiveOverrideProps<ViewProps>;
    "housing_population.csv"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 51"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "Housing Population (.csv) *"?: PrimitiveOverrideProps<TextProps>;
    "noun-x-2147847 4"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component26Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component26OverridesProps | undefined | null;
}>;
export default function Component26(props: Component26Props): React.ReactElement;
