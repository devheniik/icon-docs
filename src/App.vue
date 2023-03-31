<script setup>
import {ref} from 'vue'
import * as icons from '@devheniik/icons'
import {MagnifyingGlassPlusIcon, FileDocumentIcon, CubeIcon} from "@devheniik/icons"

const list = ref([])

Object.entries(icons).forEach(([componentName]) => {
  if (componentName !== 'default') {
    list.value.push(String(componentName))
  }
})

const search = ref('')
</script>

<template>
  <div class="flex flex-col w-12/12">
    <div class="flex items-center justify-between px-5 py-2 text-white font-semibold" id="header">
      <img src="/LogoDevheniikIcon.png" alt="logo" class="h-10" />
      <div class="flex items-center justify-end space-x-2">
        <a href="https://github.com/devheniik/icons" target="_blank" class="rounded-md py-1 px-2 button flex flex-row cursor-pointer flex items-center">
          <FileDocumentIcon class="w-5 h-5 mr-1" />
          Docs
        </a>
        <a href="https://www.npmjs.com/package/@devheniik/icons" target="_blank" class="rounded-md py-1 px-2 button flex flex-row cursor-pointer flex items-center">
          <CubeIcon class="w-5 h-5 mr-1" />
          npm
        </a>
      </div>
    </div>
    <div class="pointer-events-auto relative bg-white mt-5 pb-4 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center">
        <div class="relative flex-auto">
          <input aria-label="Search all icons"
                 class="focus:outline-none border-0 focus:ring-0  block w-full appearance-none rounded-lg bg-transparent py-3 pr-4 pl-9 text-base text-slate-900 transition placeholder:text-slate-400"
                 placeholder="Search all icons..."
                 type="search"
                 v-model="search">
          <MagnifyingGlassPlusIcon class="pointer-events-none absolute inset-y-0 left-2 h-full w-5 transition" />
        </div>
      </div>
    </div>
    <div class="p-5 grid grid-cols-2 md:grid-cols-6 gap-5">
      <div v-for="icon in list.filter(name => name.toLowerCase().includes(search.toLowerCase()))"
           :key="icon" class="p-3 rounded-md shadow-md border flex flex-col items-center justify-center">
        <div class="icon-block">
          <component :is="icon" class="w-7 h-7 text-gray-800"/>
        </div>
        <div class="mt-2 text-sm text-gray-800 truncate whitespace-nowrap">{{ icon }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header{
  background-color: #0EA47A;
}

.button:hover{
  background-color: #0A7557;
}
</style>
