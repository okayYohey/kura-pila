<template>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      dark
    >
        <v-toolbar-title class="font-weight-bold display-1" v-text="title"/>
        <v-spacer></v-spacer>
        <v-btn class="mx-1" to="/studios/" color="secondary">スタジオ</v-btn>
        <v-btn class="mx-1" to="/blogs/" color="secondary">ブログ</v-btn>
        <v-btn class="mx-1" to="/community/" color="secondary">コミュニティ</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name:'common-nav',
    data () {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      extended: true,
      title: 'くらぴら',
      }
    },
}
</script>

<style scoped>

</style>