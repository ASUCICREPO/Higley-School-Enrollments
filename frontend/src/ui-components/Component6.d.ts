/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component6OverridesProps = {
    Component6?: PrimitiveOverrideProps<ViewProps>;
    "Welcome back to Enrollment Prediction!"?: PrimitiveOverrideProps<TextProps>;
    "Steps: Upload new data Trigger model Upload prediction data Link to dashboard"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component6Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component6OverridesProps | undefined | null;
}>;
export default function Component6(props: Component6Props): React.ReactElement;
