package com.newapp;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
//New
import com.google.android.play.core.review.ReviewInfo;
import com.google.android.play.core.review.ReviewManager;
import com.google.android.play.core.review.ReviewManagerFactory;
import com.google.android.play.core.tasks.Task;
import android.widget.Toast;  
//Close

import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {
  private ReviewInfo reviewInfo;
  private ReviewManager manager;

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
   @Override
    protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here
      super.onCreate(null);
      activateReviewInfo();

    }
  @Override
  protected String getMainComponentName() {
    return "newapp";
  }
   //New
   void activateReviewInfo()
   {
    manager = ReviewManagerFactory.create(this);
    Task<ReviewInfo> request = manager.requestReviewFlow();
request.addOnCompleteListener((task) -> {
    if (task.isSuccessful()) {
//         // We can get the ReviewInfo object
        reviewInfo = task.getResult();
    } else {
         Toast.makeText(this, "Failed",Toast.LENGTH_SHORT).show();
        
        // There was some problem, log or handle the error code.
        // @ReviewErrorCode int reviewErrorCode = ((TaskException) task.getException()).getErrorCode();
    }
});
   }
   
    
    
     
    
void startReviewFlow()
{
  if(reviewInfo!=null)
  {
    
Task<Void> flow = manager.launchReviewFlow(this, reviewInfo);
flow.addOnCompleteListener(task -> {
   Toast.makeText(this,"Succcess",Toast.LENGTH_SHORT).show();
//     // The flow has finished. The API does not indicate whether the user
//     // reviewed or not, or even whether the review dialog was shown. Thus, no
//     // matter the result, we continue our app flow.
});
  }
}
}
  //Close






