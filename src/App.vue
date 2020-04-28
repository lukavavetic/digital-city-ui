<template>
  <div id="app" class="h-full">
    <Header></Header>

<!--    <div class="flex flex-row">-->
<!--      <Sidebar></Sidebar>-->

<!--      <div class="page-content">-->
<!--        <Form></Form>-->
<!--      </div>-->
<!--    </div>-->
    <div>
      <Login></Login>
    </div>


  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Sidebar from './components/Sidebar.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Header,

    Login,
  }
}
</script>


