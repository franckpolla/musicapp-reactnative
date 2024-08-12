import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "@/components/CustomButton";
import { Audio } from "expo-av";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/meditationData";
import { TimerContexte } from "@/context/TimerContext";

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const [imag, SetImag] = useState<number>();
  // const [time, SetTime] = useState<number>(10);
  const { duration: time, setDuration: SetTime } = useContext(TimerContexte);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const FindIndex = () => {
      {
        for (let i = 0; i < MEDITATION_IMAGES.length; i++) {
          if (i + 1 === Number(id)) {
            SetImag(i);
          }
        }
      }
    };
    FindIndex();
  }, []);
  // Handle the timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying && time > 0) {
      timer = setTimeout(() => {
        SetTime((prevCount) => prevCount - 1);
      }, 1000);
    }
    if (time === 0) {
      setIsPlaying(false);
      return;
    }
    // Stop the timer when time reaches 0
    if (time <= 0) {
      setIsPlaying(false);
    }

    // Cleanup the timeout
    return () => clearTimeout(timer);
  }, [isPlaying, time]);

  // this useEffect function is called to unmmount the timer and stop the music when the use leave the page
  useEffect(() => {
    return () => {
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  // setting the  status of the timer
  const toggleMedtationSessionStatus = async () => {
    if (time === 0) SetTime(10);
    setIsPlaying(!isPlaying);
    await toggleSound();
  };

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initializeSound();
    //This method is used to get the current status of the sound object, such as whether it is loaded, playing, paused, etc. The ?
    const status = await sound?.getStatusAsync();

    if (status?.isLoaded && !isPlayingAudio) {
      // The playAsync() method is called on the sound object to start playback.
      await sound?.playAsync();
      setIsPlayingAudio(true);
    } else {
      //The pauseAsync() method is called on the sound object to pause the audio.
      await sound?.pauseAsync();
      setIsPlayingAudio(false);
    }
  };
  const initializeSound = async () => {
    const audiFileName = MEDITATION_DATA[Number(id) - 1].audio;
    //This is a method provided by Expo's Audio API that loads an audio file and returns an object that allows you to control the playback (play, pause, stop, etc.) of the audio.
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audiFileName]);
    setAudioSound(sound);
    return sound;
  };

  const startTimer = () => {
    if (time > 0) {
      setIsPlaying(true);
    }
  };

  const formatTimeToMinute = String(
    Math.floor(time / 60)
      .toString()
      .padStart(2, "0")
  );
  const formatTimeToSecond = String(
    Math.floor(time % 60)
      .toString()
      .padStart(2, "0")
  );

  const HandleAdjustDuration = () => {
    if (isPlaying) toggleMedtationSessionStatus();
    router.push("/(modal)/adjust-meditation");
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[imag]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={32} color="white" />
          </Pressable>

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-600 font-rmono">
                {formatTimeToMinute}:{formatTimeToSecond}
              </Text>
            </View>
          </View>
          <View className=" mb-5">
            <CustomButton
              title="Adjust Duration "
              onPress={() => HandleAdjustDuration()}
              containerStyle="mb-4"
            />
            <CustomButton
              title="Start  Meditation "
              onPress={() => toggleMedtationSessionStatus()}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
