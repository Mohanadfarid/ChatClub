<script lang="ts" setup>
import SystemMessage from './messagesComponents/SystemMessage.vue';
import UserReceivedMessage from './messagesComponents/UserReceivedMessage.vue';
import UserSentMessage from './messagesComponents/UserSentMessage.vue';

//
</script>

<template>
  <div class="active-chat-container mb-2 border">
    <v-toolbar title="Application">
      <template v-slot:title>
        <div class="d-flex align-center">
          <!-- this arrow is used to go back to the list of chats  -->
           <!-- to do handle this arrow with a v-if -->
          <!-- <v-icon>mdi-arrow-left</v-icon> -->

          <v-avatar class="me-2">
            <img  src="https://picsum.photos/200/300" alt="" />
          </v-avatar>

          <div>
            <p>active chat title</p>
            <p class="text-subtitle-2">2 memebers</p>
          </div>

        </div>
      </template>

      <template v-slot:append>
        <v-icon class="me-2">mdi-dots-vertical</v-icon>
      </template>
    </v-toolbar>

    <!-- to do put messages here  -->

    <div class="d-flex flex-column pa-4">
      <UserReceivedMessage/>
      <UserSentMessage/>
      <SystemMessage/>
    </div>
  </div>
</template>

<style>
.active-chat-container {
  height: calc(100% - 60px);
}
</style>
