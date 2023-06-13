/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component8OverridesProps = {
    Component8?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 34"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 44"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Component8Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component8OverridesProps | undefined | null;
}>;
export default function Component8(props: Component8Props): React.ReactElement;
