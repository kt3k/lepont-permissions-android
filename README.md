# lepont-permissions-android v0.1.0

> [lepont][] bridge for [PermissionsAndroid][] feature

# Install

```
npm i lepont @lepont/permissions-android
```

# Usage

RN side:

```tsx
import { WebView } from 'react-native-webview'
import { useBridge } from 'lepont'
import { PermissionsAndroidBridge } from '@lepont/permissions-android'
import { PermissionsAndroid } from 'react-native'

const App = () => {
  const [ref, onMessage] = useBridge(
    PermissionsAndroidBridge(PermissionsAndroid)
  )

  return (
    <WebView
      source={{ uri }}
      ref={ref}
      onMessage={onMessage}
      javaScriptEnabled
    />
  )
}
```

On browser side:

```ts
import { PermissionsAndroid } from '@lepont/permissions-android'

const permission = await PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  {
    title: 'Storage Permission',
    message: 'The App needs access to your storage.',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  }
)

if (granted === PermissionAndroid.RESULTS.GRANTED) {
  alert('WRITE_EXTERNAL_STORAGE permission is granted!')
} else {
  alert('WRITE_EXTERNAL_STORAGE permission is denied!')
}
```

# APIs: Methods

## `PermissionsAndroid.request(perm: Permission, rationale?: Rationale): Promise<Result>`

Requests the give permissions with the given rationale.

## `PermissionsAndroid.check(perm: Permission): Promise<Result>`

Checks the given permission.

## `PermissionsAndroid.requestMultiple(perms: Permission[]): Promise<{ [K in Permission]: Result }>`

Requests the given mutiple permissions.

# APIs: Constants

## `PermissionsAndroid.PERMISSIONS`

See [shared.ts](https://github.com/kt3k/lepont-permissions-android/blob/main/src/shared.ts) for details.

## `PermissionsAndroid.RESULTS`

See [shared.ts](https://github.com/kt3k/lepont-permissions-android/blob/main/src/shared.ts) for details.

# License

MIT

[lepont]: https://github.com/kt3k/lepont
[PermissionsAndroid]: https://reactnative.dev/docs/permissionsandroid
