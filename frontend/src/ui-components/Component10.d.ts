/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component10OverridesProps = {
    Component10?: PrimitiveOverrideProps<ViewProps>;
    "Thank you!"?: PrimitiveOverrideProps<TextProps>;
    "The upload process is complete. You will receive an email when it is processed to the Quicksight Dashboard."?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 50"?: PrimitiveOverrideProps<ViewProps>;
    "Return home"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component10Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component10OverridesProps | undefined | null;
}>;
export default function Component10(props: Component10Props): React.ReactElement;
