<template>
<v-card class="form-signup" min-height="300px">
  <form-wizard
    @on-complete='createUser'
    shape="tab"
    color="#66bb6a"
    title="ログイン"
    subtitle="メールアドレスとパスワードを入力します"
    finishButtonText="完了！"
  >
  
  <tab-content title="パスワードの登録" >
    <v-container justify-center>
        <v-col class="col-6 mx-auto">
            <v-row class="mx-auto">
                <v-text-field v-model="email" label="メールアドレス" color="success" loading></v-text-field>
            </v-row>
            <v-row class="mx-auto">
                <v-text-field v-model="name" label="ユーザーネーム" color="success" loading></v-text-field>
            </v-row>
            <v-row class="mx-auto">
                <v-text-field password v-model="pass" label="パスワード" color="success" loading></v-text-field>
            </v-row>
        </v-col>
    </v-container>
   </tab-content>
  </form-wizard>
</v-card>
</template>

<script>
// import {FormWizard, TabContent} from 'vue-form-wizard'
// import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import firebase from '~/components/firebaseInit.js'

export default {
    name:'form-signup',
    // components:{
    //     'form-wizard': FormWizard,
    //     'tab-content': TabContent
    // },
    created(){
        this.$parent.userID= this.email;
        this.$parent.userName= this.name;
        this.$parent.password = this.pass
    },
    data(){
      return{
        makeAccount:false,
        email:null,
        pass: null,
        name:null
      }
    },
    methods:{
        createUser(){
            this.makeAccount = true;
            firebase.auth().createUserWithEmailAndPassword(this.email, this.pass).catch(function(error) {
              var errorMessage =error.message
              alert(errorMessage)
              if (firebase.auth().createUser) {
                this.$router.go({ path: this.currentRoutePath });
                alert('you succeeded')
              }else{
                alert('you failed')
              }
            });
        }
    }
}
</script>

<style>
</style>