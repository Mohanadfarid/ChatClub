<script lang="ts" setup>
import ActiveChatContainer from '@/views/chat/ActiveChatContainer.vue';
import MessagesInput from '@/views/chat/MessagesInput.vue';
import SideBar from '@/views/chat/SideBar.vue';

  //
</script>


<template>

<VContainer>
  <div class="py-5" style="height: 100vh">
    <VRow class="h-100" style="border: 1px solid green;">
      <VCol cols="4">
        <SideBar/>
      </VCol>
      <VCol cols="8">
        <ActiveChatContainer/>
        <MessagesInput/>
      </VCol>
    </VRow>
  </div>
</VContainer>
</template>

