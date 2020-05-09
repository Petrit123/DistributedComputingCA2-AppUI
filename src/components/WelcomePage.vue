<template>
    <div class="WelcomePage">
        <h1> Welcome </h1>
        <p> You're in! </p>
                 <div class="my-2">
            <v-btn v-on:click="logOff" small color="primary" dark>Log Off</v-btn>


          </div>
                                         <span align="center">
     <b> {{ apiResponse }} </b>
  </span>
  <br>
    </div>

</template>

<script>
export default {
    data(){
        return {
        name: 'WelcomePage',
        apiResponse: null,
        }
    },
    methods: {
          
            async logOff() {
                
              let apiResponse = '';

                fetch("http://localhost:5094/user/loggOff", {
                method: 'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
              }).then(res => res.text())
              .then(text => apiResponse = text)

              this.apiResponse = apiResponse;
              console.log(apiResponse);

                this.$router.push('/')
              
    }

    }
    }
</script>