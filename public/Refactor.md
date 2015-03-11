function loginFactory(tokenHolder, userSession) {
  var isLoggedIn;
  if(tokenHolder.token){
    userSession.isLoggedIn = true;
  }
  return userSession;
}


loginSuccess = function(token, cb) {
  tokenHolder.token = token;
  userSession.isLoggedIn = true;
  return cb(userSession);
}

loginFailure = function(err) {
  console.log(err);
}

login(tokenHolder, success).then(loginResponder, loginFailure)

loginResponder = function(response) {
  return loginSuccess(response.token));
}

// Change
function login(tokenHolder, success, cb) {
  return function(credentials) {
    authenticator.submit(credentials); // must return ES6 Promise : http://www.html5rocks.com/en/tutorials/es6/promises/
  } 
}

// Change
function logout(tokenHolder, userSession){
  tokenHolder.removeItem('token');
  userSession.isLoggedIn = false; 
  return true;
}

// Change
function authInterceptor(tokenHolder, config) {
  return {
    request: function(config) {
      if (tokenHolder.token) {
        config.headers.Authorization = 'Bearer ' + tokenHolder.token; 
      } 
      return httpHeaders;
    }
  } 
}