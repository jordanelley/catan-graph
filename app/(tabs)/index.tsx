import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { InputInitialResourceCount } from "@/components/InputInitialResourceCount";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/generic-catan.png')}
          style={styles.genericCatan}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Track the value of your resources </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Starting Items</ThemedText>
        <InputInitialResourceCount resourceName="Wood"/>
        <InputInitialResourceCount resourceName="Clay"/>
        <InputInitialResourceCount resourceName="Stone"/>
        <InputInitialResourceCount resourceName="Sheep"/>
        <InputInitialResourceCount resourceName="Wheat"/>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  genericCatan: {
    height: 230,
  },
});
