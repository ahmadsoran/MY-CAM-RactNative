import { ImageSourcePropType } from "react-native";

export type AvatarProps = {
  radius: number;
  icon: React.ReactNode;
  src: ImageSourcePropType;
  iconColor: string;
  otherProps: unknown;
};
