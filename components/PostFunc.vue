<template>
  <div class="post">
      <v-card v-show="popPost" max-width="700">
          <input type="text">
          <v-btn>投稿する</v-btn>

      </v-card>
      <v-card v-show="popLogin">
          <form-signup></form-signup>
      </v-card>
  </div>
</template>

<script>
import firebase from '~/components/firebaseInit.js'
import FormSignUp from '~/components/FormSignUp.vue'
export default {
    name:'post-func',
    components:{
        'form-signup': FormSignUp
    },
    props:[
        'popBtn'
    ],
    data(){
        return{
            popPost:false,
            popLogin: false,
        }
    },
}
</script>

<style>

</style>