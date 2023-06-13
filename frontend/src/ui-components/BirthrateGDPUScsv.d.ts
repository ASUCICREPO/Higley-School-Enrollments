/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BirthrateGDPUScsvOverridesProps = {
    BirthrateGDPUScsv?: PrimitiveOverrideProps<ViewProps>;
    "Birthrate GDP US (.csv) *"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BirthrateGDPUScsvProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BirthrateGDPUScsvOverridesProps | undefined | null;
}>;
export default function BirthrateGDPUScsv(props: BirthrateGDPUScsvProps): React.ReactElement;
