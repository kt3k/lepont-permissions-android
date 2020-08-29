# lepont-permissions-android

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
```

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

# License

MIT

[lepont]: https://github.com/kt3k/lepont-permissions-android
[PermissionsAndroid]: https://reactnative.dev/docs/permissionsandroid
