/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EnrollmentCountscsvOverridesProps = {
    EnrollmentCountscsv?: PrimitiveOverrideProps<ViewProps>;
    "Enrollment Counts (.csv) *"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EnrollmentCountscsvProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EnrollmentCountscsvOverridesProps | undefined | null;
}>;
export default function EnrollmentCountscsv(props: EnrollmentCountscsvProps): React.ReactElement;
