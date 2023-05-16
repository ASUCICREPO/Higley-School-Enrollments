/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Birthrategdpus1csvOverridesProps = {
    Birthrategdpus1csv?: PrimitiveOverrideProps<ViewProps>;
    "birthrate_gdp_us.csv"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Birthrategdpus1csvProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Birthrategdpus1csvOverridesProps | undefined | null;
}>;
export default function Birthrategdpus1csv(props: Birthrategdpus1csvProps): React.ReactElement;
