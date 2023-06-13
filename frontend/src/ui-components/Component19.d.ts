/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component19OverridesProps = {
    Component19?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 56"?: PrimitiveOverrideProps<ViewProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    "Student Attendance (.csv) *"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component19Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component19OverridesProps | undefined | null;
}>;
export default function Component19(props: Component19Props): React.ReactElement;
