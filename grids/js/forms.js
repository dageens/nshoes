window.onload = initAll;
    function initAll() {
      document.getElementById('submit').onclick = validate
    }
    function validate() {
        if(document.form.name.value.length == 0)
        {
          window.alert("Please Enter your Firstname");
          document.getElementById("brname").focus();
          return false;
        }

        
        if(document.form.email.value.length == 0)
        {
          window.alert("Please Enter your Email Address");
          document.getElementById("email").focus();
          return false;
        }
		else if (document.form.email.value.indexOf("@")== "-1" )
        {
          window.alert("Please Enter your Email Address");
          document.getElementById("email").focus();
          return false;
        }
		else if (document.form.email.value.indexOf(".")== "-1" )
        {
          window.alert("Please Enter your Email Address");
          document.getElementById("email").focus();
          return false;
        }
      {}
       return true;
    }