import { sendMessage } from "lepont/browser";

import {
  TYPE_REQUEST,
  TYPE_CHECK,
  TYPE_REQUEST_MULTIPLE,
  PERMISSIONS,
  Permission,
  Rationale,
  RESULTS,
  REQUEST_MULTIPLE_PAYLOAD,
  Result,
  CHECK_PAYLOAD,
  REQUEST_PAYLOAD,
} from "./shared";

/**
 * Requests the permission.
 */
const request = (permission: Permission, rationale?: Rationale) =>
  sendMessage<Result, REQUEST_PAYLOAD>({
    type: TYPE_REQUEST,
    payload: { permission, rationale },
  });

/**
 * Checks the permission.
 */
const check = async (permission: Permission) =>
  sendMessage<Result, CHECK_PAYLOAD>({
    type: TYPE_CHECK,
    payload: { permission },
  });

const requestMultiple = async (permissions: Permission[]) =>
  sendMessage<{ [K in Permission]?: Result }, REQUEST_MULTIPLE_PAYLOAD>({
    type: TYPE_REQUEST_MULTIPLE,
    payload: { permissions },
  });

export const PermissionsAndroid = {
  PERMISSIONS,
  RESULTS,
  request,
  check,
  requestMultiple,
};
