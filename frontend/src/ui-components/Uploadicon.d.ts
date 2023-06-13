/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploadiconOverridesProps = {
    Uploadicon?: PrimitiveOverrideProps<ViewProps>;
    uploadicon?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type UploadiconProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UploadiconOverridesProps | undefined | null;
}>;
export default function Uploadicon(props: UploadiconProps): React.ReactElement;
