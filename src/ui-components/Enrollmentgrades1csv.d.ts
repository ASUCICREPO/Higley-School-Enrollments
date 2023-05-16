/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Enrollmentgrades1csvOverridesProps = {
    Enrollmentgrades1csv?: PrimitiveOverrideProps<ViewProps>;
    "enrollment_grades.csv"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Enrollmentgrades1csvProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Enrollmentgrades1csvOverridesProps | undefined | null;
}>;
export default function Enrollmentgrades1csv(props: Enrollmentgrades1csvProps): React.ReactElement;
