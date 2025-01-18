<script lang="ts" setup>
import { state, socket } from "@/socket";
import ActiveChatContainer from "@/views/chat/ActiveChatContainer.vue";
import MessagesInput from "@/views/chat/MessagesInput.vue";
import SideBar from "@/views/chat/SideBar.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";

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

const showSideBar = computed(() => {
  if (!isMobileView.value) {
    // always show the side bar on desktop view
    return true;
  } else {
    // but show it on mobile only if its the active tab
    return activeView.value === "menu";
  }
});

const showActiveChat = computed(() => {
  if (!isMobileView.value) {
    return true;
  } else {
    return activeView.value === "chat";
  }
});
onMounted(() => {
console.log(socket)
})
</script>

<template>

  <p>state : {{ state }}</p>
  {{ isMobileView }}
  <button
    v-if="isMobileView"
    @click="
      activeView === 'chat' ? (activeView = 'menu') : (activeView = 'chat')
    "
  >
    click to switch views on mobile
  </button>
  <VContainer class="pa-0">
    <div class="py-5" style="height: 100vh">
      <VRow class="h-100 px-2" style="border: 1px solid green">
        <VCol cols="12" md="4" v-if="showSideBar">
          <SideBar />
        </VCol>
        <VCol cols="12" md="8" v-if="showActiveChat">
          <ActiveChatContainer />
          <MessagesInput />
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>
