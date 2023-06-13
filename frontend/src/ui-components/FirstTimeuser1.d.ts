/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ClassImageProps } from "./ClassImage";
import { Component5Props } from "./Component5";
import { Component54Props } from "./Component54";
import { AhusdL1Props } from "./AhusdL1";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FirstTimeuser1OverridesProps = {
    FirstTimeuser1?: PrimitiveOverrideProps<ViewProps>;
    ClassImage?: ClassImageProps;
    "Component 5"?: Component5Props;
    "Component 54"?: Component54Props;
    "_ahusdL 2"?: AhusdL1Props;
} & EscapeHatchProps;
export declare type FirstTimeuser1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FirstTimeuser1OverridesProps | undefined | null;
}>;
export default function FirstTimeuser1(props: FirstTimeuser1Props): React.ReactElement;
