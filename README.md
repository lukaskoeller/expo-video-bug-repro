# expo video bug reproduction

## Repro Steps

1. Create new app:
```zsh
npx create-expo-app@latest
```

2. Add `expo-video`
```zsh
npx expo install expo-video
```

3. Modify the home route:
```tsx
const videoSource =
  'https://nerdy.dev/media/switch-homescreen-demo.mp4';

export default function HomeScreen() {
  const player = useVideoPlayer(videoSource);
  const { status, error } = useEvent(player, 'statusChange', { status: player.status });
  console.log(error);

  return (
    <ThemedView style={styles.contentContainer}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
      <ThemedText>{status}</ThemedText>
      <ThemedText>{error?.message}</ThemedText>
    </ThemedView>
  );
}
```

## Error

The error output is:

> Failed to load the player item: Operation Stopped

This does not happen with the [video from the expo-video example](https://docs.expo.dev/versions/latest/sdk/video/)