import React,{useState,useRef} from 'react';
import { View, StyleSheet, Button, TouchableOpacity , Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';

export default function VideoPlayer(){
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert('Permission to access camera roll is required!');
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Videos
        });
        if (pickerResult.cancelled === true) {
          return;
        }
    
        setSelectedImage(pickerResult.uri);
      };
    
    const VideoPlay=(selectedImage)=>{
        if(selectedImage==null){
            return <View></View>
        }
        else{
            return(
             <View>
                <Video
                  ref={video}
                  style={styles.video}
                  source={{
                   uri: selectedImage,
                  }}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
             <View style={styles.buttons}>
             <Button
                 title={status.isPlaying ? 'Pause' : 'Play'}
                 onPress={() =>
                 status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
             />
            </View>
            </View>
          )
        }
    }
    return(
     <View> 
     
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.buttonV}>
        <Text style={styles.buttonText}>Pick a Video</Text>
      </TouchableOpacity>
      {VideoPlay(selectedImage)}
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:5,
      marginBottom:10
    },
    buttonV: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width:'45%',
        alignSelf:'center',
        alignItems:'center',
        marginBottom: 10
      },
      buttonText: {
        fontSize: 20,
        color: '#fff',
      },
  });