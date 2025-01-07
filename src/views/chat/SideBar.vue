<script lang="ts" setup>
import ChatCard from './ChatCard.vue';
import Search from './Search.vue';

  //
</script>


<template>
  <div class="h-100 d-flex flex-column">
    <Search/>
    <div class="chat-container" style="overflow-y: auto; ">
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
    </div>
  </div>
</template>

<style>
.chat-container{
  height: calc(100vh - 160px);
}
</style>

