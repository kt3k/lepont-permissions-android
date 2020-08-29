export const TYPE_REQUEST = "@lepont/permissions-android:request" as const;
export const TYPE_CHECK = "@lepont/permissions-android:check" as const;
export const TYPE_REQUEST_MULTIPLE = "@lepont/permissions-android:requestMultiple" as const;

export const PERMISSIONS = {
  READ_CALENDAR: "android.permission.READ_CALENDAR" as const,
  WRITE_CALENDAR: "android.permission.WRITE_CALENDAR" as const,
  CAMERA: "android.permission.CAMERA" as const,
  READ_CONTACTS: "android.permission.READ_CONTACTS" as const,
  WRITE_CONTACTS: "android.permission.WRITE_CONTACTS" as const,
  GET_ACCOUNTS: "android.permission.GET_ACCOUNTS" as const,
  ACCESS_FINE_LOCATION: "android.permission.ACCESS_FINE_LOCATION" as const,
  ACCESS_COARSE_LOCATION: "android.permission.ACCESS_COARSE_LOCATION" as const,
  ACCESS_BACKGROUND_LOCATION: "android.permission.ACCESS_BACKGROUND_LOCATION" as const,
  RECORD_AUDIO: "android.permission.RECORD_AUDIO" as const,
  READ_PHONE_STATE: "android.permission.READ_PHONE_STATE" as const,
  CALL_PHONE: "android.permission.CALL_PHONE" as const,
  READ_CALL_LOG: "android.permission.READ_CALL_LOG" as const,
  WRITE_CALL_LOG: "android.permission.WRITE_CALL_LOG" as const,
  ADD_VOICEMAIL: "com.android.voicemail.permission.ADD_VOICEMAIL" as const,
  USE_SIP: "android.permission.USE_SIP" as const,
  PROCESS_OUTGOING_CALLS: "android.permission.PROCESS_OUTGOING_CALLS" as const,
  BODY_SENSORS: "android.permission.BODY_SENSORS" as const,
  SEND_SMS: "android.permission.SEND_SMS" as const,
  RECEIVE_SMS: "android.permission.RECEIVE_SMS" as const,
  READ_SMS: "android.permission.READ_SMS" as const,
  RECEIVE_WAP_PUSH: "android.permission.RECEIVE_WAP_PUSH" as const,
  RECEIVE_MMS: "android.permission.RECEIVE_MMS" as const,
  READ_EXTERNAL_STORAGE: "android.permission.READ_EXTERNAL_STORAGE" as const,
  WRITE_EXTERNAL_STORAGE: "android.permission.WRITE_EXTERNAL_STORAGE" as const,
} as const;

type Permissions = typeof PERMISSIONS;

export type Permission = Permissions[keyof Permissions];

export type Rationale = {
  title: string;
  message: string;
  buttonNeutral: string;
  buttonNegative: string;
  buttonPositive: string;
};

export const RESULTS = {
  GRANTED: "granted" as const,
  DENIED: "denied" as const,
  NEVER_ASK_AGAIN: "never_ask_again" as const,
} as const;

type Results = typeof RESULTS;

export type Result = Results[keyof Results];

export type REQUEST_PAYLOAD = {
  permission: Permission;
  rationale?: Rationale;
};

export type CHECK_PAYLOAD = {
  permission: Permission;
};

export type REQUEST_MULTIPLE_PAYLOAD = {
  permissions: Permission[];
};
