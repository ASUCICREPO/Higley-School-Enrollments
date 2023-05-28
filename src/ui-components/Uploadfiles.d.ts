/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploadfilesOverridesProps = {
    Uploadfiles?: PrimitiveOverrideProps<ViewProps>;
    "Upload files"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UploadfilesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UploadfilesOverridesProps | undefined | null;
}>;
export default function Uploadfiles(props: UploadfilesProps): React.ReactElement;
