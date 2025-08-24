import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, Text, View } from 'react-native';

const videoSource =
  'https://nerdy.dev/media/switch-homescreen-demo.mp4';

export default function App() {
  const player = useVideoPlayer(videoSource);
  const { status, error } = useEvent(player, 'statusChange', { status: player.status });
  console.log(error);

  return (
    <View style={styles.contentContainer}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
      <Text>{status}</Text>
      <Text>{error?.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
});
