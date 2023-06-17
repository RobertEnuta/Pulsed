<script setup lang="ts">
import Content from './components/Content.vue'
</script>

<template>
  <div class="min-h-screen bg-bgc font-roboto text-black p-2">
    <span
      class="text-xl text-bgc w-100 box-decoration-clone bg-gradient-to-r from-pulsed to-accent hover:box-decoration-slice hover:text-red"
    >
      <span class="">Apes and music <br /></span>
      <span class="text-huge">Apes and music <br /></span>
      <span class="text-giant">Apes and music <br /></span>
    </span>
    <div class="flex flex-1 flex-row text-sm text-black text-pulsed cursor-vertical-text">
      <div class="flex-1">by robert</div>
      <div class="flex-1"><img width="20px" height="20px" src="./assets/EU.jpg" /></div>
    </div>
    <br />
    <div class="flex flex-row flex-nowrap">
      <div class="flex-auto w-1/2">tssssssssssssssssssssssssssssss</div>
      <div class="flex-auto w-1/2">
        tsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
      </div>
    </div>
    <div class="text-base flex-auto">base</div>
    <div class="text-sm">small</div>
    <!-- <Content msg="Apes and music" /> <br />
    <div class="font-roboto font-black">Robert Enuta</div>
    <Content msg="2dasdasd" />
    <Content msg="3sa" /> -->
  </div>
</template>

<style scoped></style>
