import { lazy, Suspense } from "react";
import { ActivityIndicator } from "react-native";
import { View } from "../../components/Themed";
const Camera = lazy(() => import("./CameraView"));
export default function CameraModal() {
  return (
    <View>
      <Suspense fallback={<ActivityIndicator color="white" size={30} />}>
        <Camera />
      </Suspense>
    </View>
  );
}
