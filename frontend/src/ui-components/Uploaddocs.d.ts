/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { HigleySchoolDistrictProps } from "./HigleySchoolDistrict";
import { Component11Props } from "./Component11";
import { Component12Props } from "./Component12";
import { Component13Props } from "./Component13";
import { Component14Props } from "./Component14";
import { Component15Props } from "./Component15";
import { Component16Props } from "./Component16";
import { Component17Props } from "./Component17";
import { Component18Props } from "./Component18";
import { Component19Props } from "./Component19";
import { Component20Props } from "./Component20";
import { Component21Props } from "./Component21";
import { Component22Props } from "./Component22";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploaddocsOverridesProps = {
    Uploaddocs?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 36"?: PrimitiveOverrideProps<ViewProps>;
    "Higley School District"?: HigleySchoolDistrictProps;
    "Component 11"?: Component11Props;
    "Component 12"?: Component12Props;
    "Component 13"?: Component13Props;
    "Component 14"?: Component14Props;
    "Component 15"?: Component15Props;
    "Component 16"?: Component16Props;
    "Component 17"?: Component17Props;
    "Component 18"?: Component18Props;
    "Component 19"?: Component19Props;
    "Component 20"?: Component20Props;
    "Component 21"?: Component21Props;
    "Component 22"?: Component22Props;
    "Upload Raw Data"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 48"?: PrimitiveOverrideProps<IconProps>;
    Continue?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UploaddocsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UploaddocsOverridesProps | undefined | null;
}>;
export default function Uploaddocs(props: UploaddocsProps): React.ReactElement;
