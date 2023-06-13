/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component38OverridesProps = {
    Component38?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 50"?: PrimitiveOverrideProps<ViewProps>;
    "Return home"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component38Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component38OverridesProps | undefined | null;
}>;
export default function Component38(props: Component38Props): React.ReactElement;
