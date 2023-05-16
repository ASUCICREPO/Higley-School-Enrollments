/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component39OverridesProps = {
    Component39?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 48"?: PrimitiveOverrideProps<IconProps>;
    Continue?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component39Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component39OverridesProps | undefined | null;
}>;
export default function Component39(props: Component39Props): React.ReactElement;
