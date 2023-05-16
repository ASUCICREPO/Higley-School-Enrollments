/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component37OverridesProps = {
    Component37?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 49"?: PrimitiveOverrideProps<ViewProps>;
    No?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component37Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component37OverridesProps | undefined | null;
}>;
export default function Component37(props: Component37Props): React.ReactElement;
