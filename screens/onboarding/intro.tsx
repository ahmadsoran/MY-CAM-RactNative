import { Text, View } from "../../components/Themed";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from "react-native";
import { OnboardingSlide } from "../../Data/onboarding-slide";
import { Image } from "@rneui/themed";
import { OnboardingSlideType } from "../../@types/Onboard-slide";
import Layout from "../../constants/Layout";
import OnboardIndicator from "../../components/onboard-indicator";
import { IndicatorStore } from "../../States/onboarding/indecator-index";
import { useRef, useState } from "react";
import CustomButton from "../../components/Custom-Button";
import { ShowOnboardingStore } from "../../States/onboarding/ShowOnboarding";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
export default function IntroOnboarding() {
  const setIndicatorIndex = IndicatorStore((state) => state.setIndex);
  const IndicatorIndex = IndicatorStore((state) => state.index);
  const [Index, setIndex] = useState(0);
  const listRef = useRef<FlatList>(null);
  listRef.current?.scrollToIndex({ index: Index, animated: true });
  const setStep = ShowOnboardingStore((state) => state.setSteps);
  const { navigate } = useNavigation();
  const incrmentIndicatorIndexHandler = () => {
    if (Index < OnboardingSlide.length - 1) {
      setIndex((prv) => prv + 1);
      setIndicatorIndex(IndicatorIndex + 1);
    }
    if (Index === 2) {
      setStep("2");
      navigate("Auth");
    }
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <FlatList
        horizontal
        ref={listRef}
        showsHorizontalScrollIndicator={false}
        data={OnboardingSlide}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        pagingEnabled
        scrollEnabled={false}
      />
      <OnboardIndicator />
      <CustomButton
        onPress={incrmentIndicatorIndexHandler}
        text={Index === 2 ? "Start" : "Next"}
      />
    </View>
  );
}

function renderItem({ index, item }: ListRenderItemInfo<OnboardingSlideType>) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={item.image}
        fadeDuration={300}
        transition={true}
        transitionDuration={300}
        placeholderStyle={{ backgroundColor: "#ffffff" }}
        PlaceholderContent={
          <ActivityIndicator animating color={Colors.light.primary} />
        }
      />
      <Text style={styles.titleColor}>{item.title}</Text>
      <Text style={styles.descriptrion}>{item.description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    height: Layout.window.height * 0.75,
  },
  container: {
    alignItems: "center",
    width: Layout.window.width,
    backgroundColor: "#fff",
    padding: "5%",
  },
  image: {
    width: Layout.window.width / 1.3,
    height: Layout.window.width / 1.3,
  },
  titleColor: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "#172b4d",
    fontFamily: "dm-sans-bold",
    fontWeight: "bold",
  },
  descriptrion: {
    fontSize: 14,
    textAlign: "center",
    margin: 10,
    color: "#7a869a",
    fontFamily: "dm-sans",
    // lineHeight: 30,
    marginTop: 20,
  },
});
