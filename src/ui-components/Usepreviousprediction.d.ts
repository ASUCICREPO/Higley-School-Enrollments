/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
import { HigleySchoolDistrictProps } from "./HigleySchoolDistrict";
import { Component9Props } from "./Component9";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsepreviouspredictionOverridesProps = {
    Usepreviousprediction?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 36"?: PrimitiveOverrideProps<ViewProps>;
    "Higley School District"?: HigleySchoolDistrictProps;
    "Component 9"?: Component9Props;
} & EscapeHatchProps;
export declare type UsepreviouspredictionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UsepreviouspredictionOverridesProps | undefined | null;
}>;
export default function Usepreviousprediction(props: UsepreviouspredictionProps): React.ReactElement;
