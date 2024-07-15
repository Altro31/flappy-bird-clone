import { PipeSet } from "@/components/PipeSet";
import { DISTANCE, SPEED } from "@/constants/GameSpeed";
import { useEffect, useRef, useState } from "react";
import { Pressable, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function Index() {

  const left = useSharedValue(0)
  const count = useRef(2)
  const [set, setSet] = useState([] as React.JSX.Element[])

  const style = useAnimatedStyle(() => ({
    left: withTiming(left.value, {
      duration: SPEED,
      easing: Easing.linear
    })
  }))

  useEffect(() => {
    left.value = -DISTANCE
    const interval = setInterval(() => {
      setSet([...set, <PipeSet key={count.current}/>])
      count.current += 1
      //width.value += 1000
    }, 500)

    return () => clearInterval(interval)
  })

  return (
    <View className="flex-1">
      <Pressable className="flex-1">
        <Animated.View
          className="flex-1 flex-row"
          style={style}
        >
          {set}
        </Animated.View>
      </Pressable>
    </View >
  );
}
