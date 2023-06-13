/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Studentactivities1csvOverridesProps = {
    Studentactivities1csv?: PrimitiveOverrideProps<ViewProps>;
    "student_activities.csv"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Studentactivities1csvProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Studentactivities1csvOverridesProps | undefined | null;
}>;
export default function Studentactivities1csv(props: Studentactivities1csvProps): React.ReactElement;
