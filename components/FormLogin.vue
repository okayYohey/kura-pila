<template>
<v-card class="form-signup" min-height="300px">
  <form-wizard
    @on-complete="login"
    shape="tab"
    color="#00bcd4"
    title="ログイン"
    subtitle="メールアドレスとパスワードを入力します"
    finishButtonText="完了！"
  >
  <tab-content title="パスワードの登録" >
    <v-container justify-center>
        <v-col class="col-6 mx-auto">
            <v-row class="mx-auto">
                <v-text-field v-model="email" label="メールアドレス" color='#00bcd4' loading></v-text-field>
            </v-row>
            <v-row class="mx-auto">
                <v-text-field v-model="pass" label="パスワード" color='#00bcd4' loading></v-text-field>
            </v-row>
        </v-col>
    </v-container>
   </tab-content>
  </form-wizard>
</v-card>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import firebase from '~/components/firebaseInit.js'

export default {
    name:'form-signup',
    components:{
        'form-wizard': FormWizard,
        'tab-content': TabContent
    },
    created(){
        this.$parent.userID= this.email;
        this.$parent.password = this.pass
    },
    data(){
        return{
            email:null,
            pass:null
        }
    },
    methods:{
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            alert(errorCode+errorMessage)
            

            // ...
            });
        }
    }
}
</script>