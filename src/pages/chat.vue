<script lang="ts" setup>
import ActiveChatContainer from "@/views/chat/ActiveChatContainer.vue";
import MessagesInput from "@/views/chat/MessagesInput.vue";
import SideBar from "@/views/chat/SideBar.vue";
import { onMounted, onUnmounted, ref } from "vue";

//1
const isMobileView = ref<boolean>(false);
const activeView = ref<"menu" | "chat">("menu"); // defult view for mobile
let mediaQuery: null | MediaQueryList;

const handleWindowRsize = (e: MediaQueryListEvent) => {
  isMobileView.value = e.matches;
};

onMounted(() => {
  mediaQuery = window.matchMedia("(max-width: 960px)");
  isMobileView.value = mediaQuery.matches;

  mediaQuery.addEventListener("change", handleWindowRsize);
});

onUnmounted(() => {
  mediaQuery?.removeEventListener("change", handleWindowRsize);
});
</script>

<template>
  {{ isMobileView }}
  <VContainer class="pa-0">
    <div class="py-5" style="height: 100vh">
      <VRow class="h-100 px-2" style="border: 1px solid green">
        <VCol cols="12" md="4">
          <SideBar />
        </VCol>
        <VCol cols="12" md="8">
          <ActiveChatContainer />
          <MessagesInput />
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>
