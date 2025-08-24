import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet } from "react-native";

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
