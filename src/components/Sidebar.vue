<template>
  <div class="sidebar">
    <div class="flex flex-col">
      <router-link to="/" exact tag="button" class="sidebar-button sidebar-button:hover m-1">
        Naslovnica
      </router-link>
      <router-link to="/admin" exact tag="button" class="sidebar-button sidebar-button:hover m-1">
        Upravljanje
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

