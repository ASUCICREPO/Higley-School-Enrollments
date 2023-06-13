/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component23OverridesProps = {
    Component23?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 48"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "birthrate_gdp_us.csv"?: PrimitiveOverrideProps<TextProps>;
    "Birthrate GDP US (.csv) *"?: PrimitiveOverrideProps<TextProps>;
    "noun-x-2147847 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component23Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component23OverridesProps | undefined | null;
}>;
export default function Component23(props: Component23Props): React.ReactElement;
