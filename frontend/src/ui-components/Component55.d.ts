/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component55OverridesProps = {
    Component55?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 63"?: PrimitiveOverrideProps<ViewProps>;
    Submit?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component55Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component55OverridesProps | undefined | null;
}>;
export default function Component55(props: Component55Props): React.ReactElement;
