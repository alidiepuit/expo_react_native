import React from 'react';
import { Countdown } from 'react-native-countdown-text';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,SafeAreaView
} from 'react-native';

import { Text, Button } from 'galio-framework';
import { FlatGrid } from 'react-native-super-grid';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const items = [
      { name: 'Tạo đơn hàng', code: '#3ce', image: require('../assets/images/robot-dev.png') }, 
      { name: 'EMERALD', code: '#3ce', image: '' },
      { name: 'PETER RIVER', code: '#3ce', image: '' }, 
      { name: 'AMETHYST', code: '#3ce', image: '' },
      { name: 'WET ASPHALT', code: '#3ce', image: '' }, 
      { name: 'GREEN SEA', code: '#3ce', image: '' },
    ];
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.topView}>
            <Text h3>MKH</Text><Text h3>Tên KH</Text>
          </View>
          <FlatGrid
            itemDimension={100}
            items={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            spacing={1}
            renderItem={({ item, index }) => (
              <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Image
                  source={item.image}
                  style={styles.itemImage}
                />

                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            )}
          />
        </ScrollView>

      </SafeAreaView>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  topView: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 150,
    textAlign: 'center',
  },
  itemName: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000',
  },
  itemImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    textAlign: 'center',
  }
});
