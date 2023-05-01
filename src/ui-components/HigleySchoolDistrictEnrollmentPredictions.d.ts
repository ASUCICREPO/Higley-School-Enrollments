/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HigleySchoolDistrictEnrollmentPredictionsOverridesProps = {
    HigleySchoolDistrictEnrollmentPredictions?: PrimitiveOverrideProps<ViewProps>;
    "Higley School District Enrollment Predictions"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HigleySchoolDistrictEnrollmentPredictionsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HigleySchoolDistrictEnrollmentPredictionsOverridesProps | undefined | null;
}>;
export default function HigleySchoolDistrictEnrollmentPredictions(props: HigleySchoolDistrictEnrollmentPredictionsProps): React.ReactElement;
