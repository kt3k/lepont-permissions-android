import { Registry } from "lepont";
import {
  TYPE_REQUEST,
  TYPE_CHECK,
  TYPE_REQUEST_MULTIPLE,
  REQUEST_PAYLOAD,
  CHECK_PAYLOAD,
  REQUEST_MULTIPLE_PAYLOAD,
  Permission,
  Rationale,
  Result,
} from "./shared";

type PermissionsAndroidModule = {
  request: (permission: Permission, rationale?: Rationale) => Promise<Result>;
  check: (permission: Permission, rationale?: Rationale) => Promise<Result>;
  requestMultiple: (
    permisions: Permission[]
  ) => Promise<{ [K in Permission]?: Result }>;
};

export const PermissionsAndroidBridge = (
  PermissionsAndroid: PermissionsAndroidModule
) => (registry: Registry) => {
  registry.register(
    TYPE_REQUEST,
    ({ permission, rationale }: REQUEST_PAYLOAD) =>
      PermissionsAndroid.request(permission, rationale)
  );
  registry.register(TYPE_CHECK, ({ permission }: CHECK_PAYLOAD) =>
    PermissionsAndroid.check(permission)
  );
  registry.register(
    TYPE_REQUEST_MULTIPLE,
    ({ permissions }: REQUEST_MULTIPLE_PAYLOAD) =>
      PermissionsAndroid.requestMultiple(permissions)
  );
};
