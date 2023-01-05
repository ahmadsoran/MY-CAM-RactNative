import create from "zustand";
import { CameraType } from "expo-camera";
interface Props {
  CameraTypes: CameraType.back | CameraType.front;
  CameraToggle(): void;
}

export const SwitchCameraType = create<Props>((set) => ({
  CameraTypes: CameraType.front,
  CameraToggle() {
    set((state) => ({
      CameraTypes:
        state.CameraTypes === CameraType.back
          ? CameraType.front
          : CameraType.back,
    }));
  },
}));
