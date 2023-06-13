/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component9OverridesProps = {
    Component9?: PrimitiveOverrideProps<ViewProps>;
    "Use previous prediction?"?: PrimitiveOverrideProps<TextProps>;
    "The last prediction was on January 22, 2023."?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 48"?: PrimitiveOverrideProps<ViewProps>;
    Yes?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 49"?: PrimitiveOverrideProps<ViewProps>;
    No?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component9Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component9OverridesProps | undefined | null;
}>;
export default function Component9(props: Component9Props): React.ReactElement;
