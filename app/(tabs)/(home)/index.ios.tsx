
import React, { useRef, useState, useCallback } from 'react';
import { StyleSheet, View, ActivityIndicator, Platform, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WEB_APP_URL = 'https://steadysteps.lovable.app';

export default function HomeScreen() {
  const theme = useTheme();
  const webViewRef = useRef<WebView>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadStart = () => {
    console.log('WebView started loading');
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    console.log('WebView finished loading');
    setIsLoading(false);
  };

  const handleError = (syntheticEvent: any) => {
    const { nativeEvent } = syntheticEvent;
    console.error('WebView error:', nativeEvent);
  };

  // Handle external links - open in Safari
  const handleShouldStartLoadWithRequest = (request: any) => {
    const url = request.url;
    console.log('Navigation request to:', url);

    // Allow the main app URL and its subdomains
    if (url.startsWith(WEB_APP_URL)) {
      console.log('Loading internal URL in WebView:', url);
      return true;
    }

    // Open external URLs in Safari
    console.log('Opening external URL in Safari:', url);
    Linking.openURL(url).catch((err) => {
      console.error('Failed to open URL in Safari:', err);
    });
    return false;
  };

  const loadingIndicatorColor = theme.dark ? '#fff' : '#000';

  return (
    <SafeAreaView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      edges={['top']}
    >
      <WebView
        ref={webViewRef}
        source={{ uri: WEB_APP_URL }}
        style={styles.webview}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
        allowsBackForwardNavigationGestures={true}
        sharedCookiesEnabled={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={false}
        scalesPageToFit={true}
        bounces={true}
        originWhitelist={['*']}
      />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={loadingIndicatorColor} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
