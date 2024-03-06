import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <View style={styles.picture}>
          <Image 
            source = {require ('./me.png')}
            style={styles.profile}
            />
       </View>
           <View style={styles.text1}>
            <Text>Sophia Makhetha</Text>
              <Text style={styles.time}>10hrs</Text>
           </View>
           <Image 
            source = {require ('./menu.png')}
            style={styles.menu}
            />
      </View>
      <Text>Caught in a moment of laughter and pure joy with my amazing friend Lineo!
         Sharing this snapshot of our friendship that's filled with countless memories, laughter, 
         and unwavering support.</Text>
         <View>
         <Image
              source={require ('./us.png')}
              style={styles.Us}
            />
           </View>
           <Text style={styles.likes}>62 likes</Text>
           <View style={styles.Icons}>
           <Image 
            source = {require ('./like.png')}
            style={styles.likeButton}
            />
            <Text style={styles.text2}>Like</Text>
            <View>
            <Image
            source = {require('./message.png')}
            style={styles.comment}
            />
            </View>
            <Text style={styles.text2}>Comment</Text>
            <View>
              <Image
                source = {require('./share.png')}
                style={styles.share}
              />
            </View>
            <Text style={styles.text2}>Share</Text>
           </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingTop: 50,
  },
  profile:{
    width: 50,
    height: 50,
    borderRadius: 90,
    marginRight: 10,
  },
  text1:{
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  time:{
    fontSize: 12,
    color: '#999',
  },
  menu:{
    width:30,
    height:30,
    marginLeft:150,
  },
  Us:{
    height:620,
    width:400,
  },
  likes:{
    padding:20,
    color: '#999',
  },
  likeButton:{
    width:20,
    height:20,
    marginLeft:30,
  },
  Icons:{
    flexDirection: 'row', 
    alignItems: 'center', 
    marginLeft:30,
  },
  text2:{
    fontSize:10,
    marginLeft:10,
  },
  comment:{
    width:20,
    height:20,
    marginLeft:50,
  },
  share: {
    width:20,
    height:20,
    marginLeft:50,
  }
});

