/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Component10Props } from "./Component10";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThankyouOverridesProps = {
    Thankyou?: PrimitiveOverrideProps<ViewProps>;
    "Component 10"?: Component10Props;
} & EscapeHatchProps;
export declare type ThankyouProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ThankyouOverridesProps | undefined | null;
}>;
export default function Thankyou(props: ThankyouProps): React.ReactElement;
