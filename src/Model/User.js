var UserProfile = (function() {
    
    var id = "";
    var email = "";
    var roles = [];

    var full_name = "";

    var getName = function() {
      return full_name;    // O bien, sacar esto de cookie/localStorage
    };
  
    var setName = function(name) {
      full_name = name;     
      // También se puede establecer esto en cookie/localStorage
    };

    var getId = function() {
        return id;    // O bien, sacar esto de cookie/localStorage
    };
    
    var setId = function(id_usuario) {
    id = id_usuario;     
    // También se puede establecer esto en cookie/localStorage
    };

    var getEmail = function() {
        return email;    // O bien, sacar esto de cookie/localStorage
    };
    
    var setEmail = function(email_usuario) {
    email = email_usuario;     
    // También se puede establecer esto en cookie/localStorage
    };
  
    var getRoles = function() {
        return roles;    // O bien, sacar esto de cookie/localStorage
    };
    
    var setRoles = function(rol_usuario) {
    roles.push(rol_usuario);     
    // También se puede establecer esto en cookie/localStorage
    };

    return {
      getName: getName,
      setName: setName,
      getId: getId,
      setId: setId,
      getEmail: getEmail,
      setEmail: setEmail,
      getRoles: getRoles,
      setRoles: setRoles
    }
  
  })();
  
  export default UserProfile;