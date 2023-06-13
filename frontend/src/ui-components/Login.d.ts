/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Rectangle35Props } from "./Rectangle35";
import { HigleySchoolDistrictProps } from "./HigleySchoolDistrict";
import { HigleySchoolDistrictEnrollmentPredictionsProps } from "./HigleySchoolDistrictEnrollmentPredictions";
import { Component1Props } from "./Component1";
import { Component2Props } from "./Component2";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginOverridesProps = {
    Login?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 35"?: Rectangle35Props;
    "Higley School District"?: HigleySchoolDistrictProps;
    "Higley School District Enrollment Predictions"?: HigleySchoolDistrictEnrollmentPredictionsProps;
    "Component 1"?: Component1Props;
    "Component 2"?: Component2Props;
} & EscapeHatchProps;
export declare type LoginProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginOverridesProps | undefined | null;
}>;
export default function Login(props: LoginProps): React.ReactElement;
