/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AhusdL1OverridesProps = {
    AhusdL1?: PrimitiveOverrideProps<ViewProps>;
    "_ahusdL 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type AhusdL1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AhusdL1OverridesProps | undefined | null;
}>;
export default function AhusdL1(props: AhusdL1Props): React.ReactElement;
