#!/bin/bash -ex

# Approve unapproved SDK licenses
yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses

source $(dirname "$0")/ci.sh

pushd detox/test
run_f "npm run integration"
popd

pushd detox/android
run_f "./gradlew test"
popd

mkdir -p coverage

pushd detox/test

# Workaround until react android issue will be fixed - react-native: 0.55
mv node_modules/react-native/ReactAndroid/release.gradle node_modules/react-native/ReactAndroid/release.gradle.bak
cp extras/release.gradle node_modules/react-native/ReactAndroid/

run_f "npm run build:android"
cp ../coverage/lcov.info ../../coverage/unit.lcov

run_f "npm run e2e:android-ci-genymotion"
cp coverage/lcov.info ../../coverage/e2e-android-ci.lcov

run_f "scripts/ci_unhappy.sh android"

# run_f "npm run verify-artifacts:android"
popd
