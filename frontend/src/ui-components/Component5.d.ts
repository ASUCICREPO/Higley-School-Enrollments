/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component5OverridesProps = {
    Component5?: PrimitiveOverrideProps<ViewProps>;
    "Steps: Upload raw data Trigger model Upload prediction data Link to dashboard"?: PrimitiveOverrideProps<TextProps>;
    "Welcome to Enrollment Prediction!"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component5Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component5OverridesProps | undefined | null;
}>;
export default function Component5(props: Component5Props): React.ReactElement;
