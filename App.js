import React,{useState,useEffect} from 'react';
import { View, StyleSheet, Button, TouchableOpacity , Text, ScrollView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import VideoPlayer from './components/video'
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <VideoPlayer />
      <VideoPlayer />
      <VideoPlayer />
      <StatusBar style='dark'/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    backgroundColor: '#ecf0f1',
  }
});