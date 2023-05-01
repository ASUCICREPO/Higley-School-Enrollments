/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Rectangle35OverridesProps = {
    Rectangle35?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 35"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Rectangle35Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Rectangle35OverridesProps | undefined | null;
}>;
export default function Rectangle35(props: Rectangle35Props): React.ReactElement;
