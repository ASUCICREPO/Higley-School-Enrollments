/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component54OverridesProps = {
    Component54?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 61"?: PrimitiveOverrideProps<ViewProps>;
    "Start prediction"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component54Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component54OverridesProps | undefined | null;
}>;
export default function Component54(props: Component54Props): React.ReactElement;
