package com.temacucar;

import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.devfd.RNGeocoder.RNGeocoderPackage;
import com.facebook.react.ReactActivity;
import com.AirMaps.AirPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.magus.fblogin.FacebookLoginPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.oney.gcm.GcmPackage;
import io.neson.react.notification.NotificationPackage;
import com.idehub.GoogleAnalyticsBridge.GoogleAnalyticsBridgePackage;
// 1. Import the plugin class
import com.microsoft.codepush.react.CodePush;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    // 2. Override the getJSBundleFile method in order to let
    // the CodePush runtime determine where to get the JS
    // bundle location from on each app start
    @Override
    protected String getJSBundleFile() {
        return CodePush.getBundleUrl("main.jsbundle");
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "TemAcucar";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

   /**
   * A list of packages used by the app. If the app uses additional views
   * or modules besides the default ones, add more packages here.
   */
    @Override
    protected List<ReactPackage> getPackages() {
      // 3. Instantiate an instance of the CodePush runtime and add it to the list of
      // existing packages, specifying the right deployment key. If you don't already
      // have it, you can run "code-push deployment ls <appName> -k" to retrieve your key.
      return Arrays.<ReactPackage>asList(
        new ReactNativeConfigPackage(),
        new RNGeocoderPackage(),
        new FacebookLoginPackage(),
        new AirPackage(),
        new LinearGradientPackage(),
        new GcmPackage(),
        new NotificationPackage(this),
        new GoogleAnalyticsBridgePackage(),
        new MainReactPackage(),
        new CodePush(BuildConfig.CODEPUSH_DEPLOYMENT_KEY_ANDROID, this, BuildConfig.DEBUG)
      );
    }
}
