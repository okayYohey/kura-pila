<template>
  <v-card
    class="mx-auto"
    color="#26c6da"
    max-width="800"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">{{ platform }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      {{ postContent }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey">
          <v-img
            class="elevation-6"
            :src=iconImg
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ postUser }}</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-btn>
            <v-icon class="mr-1">mdi-heart</v-icon>
            <span class="subheading mr-2">{{ likes }}</span>
          </v-btn>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name:'card-posted',
    props:[
      'postUser',
      'platform',
      'postUser',
      'postContent',
      'likes',
      'iconImg'
    ]
  }
</script>