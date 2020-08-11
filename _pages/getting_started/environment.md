---
permalink: /environment
title: "Development Environment"
classes: wide
---

The environment to build the SHPE app consists of the following:

| **React Native** |  "Framework that builds a hierarchy of UI components to build the JavaScript code," *from [Thinkwik, Medium](https://medium.com/@thinkwik/react-native-what-is-it-and-why-is-it-used-b132c3581df)*. It allows us to code natively for both iOS and Android without having to code individually with Java or Swift. |
| **Node**         | "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser," *from [Ryan Dahl, Wikipedia](https://en.wikipedia.org/wiki/Node.js)*. |
| **Android SDK**  | "The Android SDK (software development kit) is a set of development tools used to develop applications for Android platform," *from [Meenal Deshpande, Quora](https://www.quora.com/What-is-Android-SDK)*. We use this to build the Android emulator (where the Android app is rendered) and then later build the release version for the Play Store. |
| **Xcode**        | "Xcode is an integrated development environment for macOS containing a suite of software development tools developed by Apple for developing [Apple] software," *from [Apple](https://developer.apple.com/xcode/)*. Similar to the Android SDK, we use Xcode to build the iOS emulator and render the contents of the app. |
| **Python**       | "Python is an interpreted, high-level, general-purpose programming language," *from [Wikipedia](https://en.wikipedia.org/wiki/Python_(programming_language))*. Python, strangely, is needed for React Native's build system - at least according to [this comment](https://stackoverflow.com/questions/42442732/is-it-necessary-to-install-python-for-react-native-on-windows-for-react-native). |

To set these up, you can look at our SHPE App [Readme](https://github.com/SHPEUCF/shpeucfapp/blob/master/README.md), since it's already broken down in steps in a nice, organized way.