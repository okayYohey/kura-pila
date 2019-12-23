<template>
    <v-container>
        <v-col cols="12" md="6">
            <v-row>
                <v-textarea
                solo
                name="input-7-4"
                label="投稿内容をここに入力"
                v-model="postHolder"
                ></v-textarea>
            </v-row>
            <v-row justify-center>
                <v-btn @click="$emit('onPostPushed')" class="mx-auto" dark color="primary">投稿する</v-btn>
            </v-row>
      </v-col>
    </v-container>
</template>

<script>
export default {
    name:'form-post',
    data(){
        return{
            postHolder:''
        }
    },
    methods:{
        toParent(){
            this.$parent.postHolder= this.postHolder
        }
    }
}
</script>
style>