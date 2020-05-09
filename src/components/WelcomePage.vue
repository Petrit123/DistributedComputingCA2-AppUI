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

                await fetch("https://localhost:5094/api/logoff", {
                method: 'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({
                  username: "petrit"
                })
              }).then(res => res.text())
              .then(text => apiResponse = text)

              this.apiResponse = apiResponse;
              console.log(apiResponse);

                this.$router.push('/')
              
    }

    }
    }
</script>