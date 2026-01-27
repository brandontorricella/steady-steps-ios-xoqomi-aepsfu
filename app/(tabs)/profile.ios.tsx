
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';

export default function ProfileScreen() {
  const theme = useTheme();

  const handleOpenWebsite = () => {
    console.log('User tapped Open Website button');
    Linking.openURL('https://steadysteps.lovable.app');
  };

  const textColor = theme.colors.text;
  const secondaryTextColor = theme.dark ? '#98989D' : '#666';
  const cardBackgroundColor = theme.dark ? '#1C1C1E' : '#F2F2F7';

  return (
    <SafeAreaView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      edges={['top']}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={[styles.title, { color: textColor }]}>
            About
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
          <View style={styles.cardHeader}>
            <IconSymbol
              ios_icon_name="info.circle.fill"
              android_material_icon_name="info"
              size={24}
              color={textColor}
            />
            <Text style={[styles.cardTitle, { color: textColor }]}>
              Steady Steps
            </Text>
          </View>
          <Text style={[styles.cardDescription, { color: secondaryTextColor }]}>
            This is a native iOS wrapper for the Steady Steps web application. 
            The app loads the web version in a native WebView for a seamless mobile experience.
          </Text>
        </View>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#0A84FF' }]}
          onPress={handleOpenWebsite}
          activeOpacity={0.7}
        >
          <IconSymbol
            ios_icon_name="safari"
            android_material_icon_name="open-in-browser"
            size={20}
            color="#FFFFFF"
          />
          <Text style={styles.buttonText}>
            Open in Browser
          </Text>
        </TouchableOpacity>

        <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
          <View style={styles.cardHeader}>
            <IconSymbol
              ios_icon_name="gear"
              android_material_icon_name="settings"
              size={24}
              color={textColor}
            />
            <Text style={[styles.cardTitle, { color: textColor }]}>
              Features
            </Text>
          </View>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <Text style={[styles.featureBullet, { color: secondaryTextColor }]}>
                •
              </Text>
              <Text style={[styles.featureText, { color: secondaryTextColor }]}>
                Native iOS navigation gestures
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={[styles.featureBullet, { color: secondaryTextColor }]}>
                •
              </Text>
              <Text style={[styles.featureText, { color: secondaryTextColor }]}>
                Persistent cookies and sessions
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={[styles.featureBullet, { color: secondaryTextColor }]}>
                •
              </Text>
              <Text style={[styles.featureText, { color: secondaryTextColor }]}>
                Full web app functionality
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={[styles.featureBullet, { color: secondaryTextColor }]}>
                •
              </Text>
              <Text style={[styles.featureText, { color: secondaryTextColor }]}>
                Dark mode support
              </Text>
            </View>
          </View>
        </View>

        <Text style={[styles.version, { color: secondaryTextColor }]}>
          Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 8,
  },
  cardDescription: {
    fontSize: 15,
    lineHeight: 22,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  featureList: {
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  featureBullet: {
    fontSize: 15,
    marginRight: 8,
    lineHeight: 22,
  },
  featureText: {
    fontSize: 15,
    lineHeight: 22,
    flex: 1,
  },
  version: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
});
