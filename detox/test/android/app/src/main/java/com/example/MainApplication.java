package com.example;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnativecommunity.slider.ReactSliderPackage;
import com.reactnativecommunity.checkbox.ReactCheckBoxPackage;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.soloader.SoLoader;
import com.example.newarchitecture.MainApplicationReactNativeHost;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;

import java.util.Arrays;
import java.util.List;
import android.webkit.WebView;

public class MainApplication extends Application implements ReactApplication {
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.asList(
                    new MainReactPackage(),
                    new ReactSliderPackage(),
                    new GeolocationPackage(),
                    new RNCWebViewPackage(),
                    new NativeModulePackage(),
                    new AsyncStoragePackage(),
                    new ReactCheckBoxPackage()
            );
        }
    };

    private final ReactNativeHost mNewArchitectureNativeHost = new MainApplicationReactNativeHost(this);

    @Override
    public ReactNativeHost getReactNativeHost() {
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            return mNewArchitectureNativeHost;
        }

        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        // If you opted-in for the New Architecture, we enable the TurboModule system
        ReactFeatureFlags.useTurboModules = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;

        SoLoader.init(this, /* native exopackage */ false);
        WebView.setWebContentsDebuggingEnabled(true);
    }
}
