<template>
  <div id="app" class="h-full">
    <Header></Header>

    <div class="flex flex-row">
      <Sidebar></Sidebar>

      <div class="page-content">
        <router-view :key="$route.path"></router-view>
      </div>
   </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
  }
}
</script>



