/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component36OverridesProps = {
    Component36?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 48"?: PrimitiveOverrideProps<ViewProps>;
    Yes?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component36Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component36OverridesProps | undefined | null;
}>;
export default function Component36(props: Component36Props): React.ReactElement;
