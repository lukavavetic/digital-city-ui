<template>
  <div class="sidebar">
    <div class="flex flex-col">
      <button class="sidebar-button sidebar-button:hover m-1">Naslovnica</button>
      <button class="sidebar-button sidebar-button:hover m-1">Stipendije</button>
      <button class="sidebar-button sidebar-button:hover m-1">Subvencije za prijevoz</button>
      <button class="sidebar-button sidebar-button:hover m-1">Subvencije za vrtić</button>
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

