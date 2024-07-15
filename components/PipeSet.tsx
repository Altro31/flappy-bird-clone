import { ImageBackground, Text } from "react-native";

const bg = require("@/assets/images/bg.png")

export function PipeSet() {

    return (
        <ImageBackground source={bg} className="h-full w-[1200px]" resizeMode="cover">
            
        </ImageBackground>
    )
}