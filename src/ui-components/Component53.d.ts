/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component53OverridesProps = {
    Component53?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 48"?: PrimitiveOverrideProps<IconProps>;
    Continue?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component53Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component53OverridesProps | undefined | null;
}>;
export default function Component53(props: Component53Props): React.ReactElement;
