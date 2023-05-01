/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Component3Props } from "./Component3";
import { Component5Props } from "./Component5";
import { Component4Props } from "./Component4";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FirsttimeuserOverridesProps = {
    Firsttimeuser?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 33"?: PrimitiveOverrideProps<ViewProps>;
    "Higley School District"?: PrimitiveOverrideProps<TextProps>;
    "Component 3"?: Component3Props;
    "Component 5"?: Component5Props;
    "Component 4"?: Component4Props;
} & EscapeHatchProps;
export declare type FirsttimeuserProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FirsttimeuserOverridesProps | undefined | null;
}>;
export default function Firsttimeuser(props: FirsttimeuserProps): React.ReactElement;
