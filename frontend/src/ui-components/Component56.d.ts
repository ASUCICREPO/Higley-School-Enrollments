/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component56OverridesProps = {
    Component56?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 64"?: PrimitiveOverrideProps<ViewProps>;
    Continue?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component56Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component56OverridesProps | undefined | null;
}>;
export default function Component56(props: Component56Props): React.ReactElement;
