/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component16OverridesProps = {
    Component16?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 53"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "School Lunch (.csv) *"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component16Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component16OverridesProps | undefined | null;
}>;
export default function Component16(props: Component16Props): React.ReactElement;
