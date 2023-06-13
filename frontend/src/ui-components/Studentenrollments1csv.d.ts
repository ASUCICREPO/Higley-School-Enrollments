/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Studentenrollments1csvOverridesProps = {
    Studentenrollments1csv?: PrimitiveOverrideProps<ViewProps>;
    "student_enrollments.csv"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Studentenrollments1csvProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Studentenrollments1csvOverridesProps | undefined | null;
}>;
export default function Studentenrollments1csv(props: Studentenrollments1csvProps): React.ReactElement;
