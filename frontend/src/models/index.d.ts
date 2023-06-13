import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLoginInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LoginInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username: string;
  readonly Password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLoginInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LoginInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username: string;
  readonly Password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LoginInfo = LazyLoading extends LazyLoadingDisabled ? EagerLoginInfo : LazyLoginInfo

export declare const LoginInfo: (new (init: ModelInit<LoginInfo>) => LoginInfo) & {
  copyOf(source: LoginInfo, mutator: (draft: MutableModel<LoginInfo>) => MutableModel<LoginInfo> | void): LoginInfo;
}