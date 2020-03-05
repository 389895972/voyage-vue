<template>

    <div>
        <p>{{msg}}</p>
    </div>


</template>
<script>

   import Keycloak from '../ventor/keycloak'
 
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    mounted() {
      window.console.info(this.$route.query)
      let keycloak = null;
      keycloak = Keycloak({
        url: 'http://10.0.20.250:10008/auth',
        realm: 'test',
        clientId: 'web_app'
      });
 
      keycloak.init({onLoad: 'login-required'}).success(function (authenticated) {
        //alert(authenticated ? 'authenticated' : 'not authenticated');
        if (!authenticated) {
          alert('not authenticated')
        } else {
 
          keycloak.loadUserProfile().success(data => {
            window.console.info(data)
          })
        }
        window.console.info(keycloak)
      }).error(function () {
        alert('failed to initialize');
      });
   }
}

</script>
