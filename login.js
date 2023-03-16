window.fbAsyncInit = function() {
  FB.init({
    appId      : '{your-app-id}',
    cookie     : true,
    xfbml      : true,
    version    : 'v13.0'
  });
    
  FB.AppEvents.logPageView();   
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

document.getElementById('fb-login-btn').addEventListener('click', function() {
  FB.login(function(response) {
    if (response.authResponse) {
      console.log('You are now logged in with Facebook.');
      // You can now make API calls with response.authResponse.accessToken
    } else {
      console.log('There was an error logging in with Facebook.');
    }
  }, {scope: 'email'});
});
