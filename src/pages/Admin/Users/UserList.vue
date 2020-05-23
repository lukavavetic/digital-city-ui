<template>
  <div id="test">
      <p>Registered users</p>
      <br/>
      <input type="text" v-model="search" placeholder="Search users..." />
      <br>
      <br>
      <div v-if="search.length > 0">
          <div v-for="user in filteredUsers" v-bind:key="user.id">
              {{ user.firstName }} {{ user.lastName }}, identifier: {{ user. identifier }}
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      search: ''
    }
  },
   name: 'UserList',
    created () {
    this.$http.get('http://192.168.1.12:80/api/user.list', {
    }).then(response => {
        this.users = response.data.data;
    })
  },
    computed: {
        filteredUsers: function() {
            return this.users.filter((user) => {
                return user.lastName.toLowerCase().startsWith(this.search.toLowerCase());
            })
        }
    }
}
</script>

<style scoped>
    input {
        border: 1px solid;
        width: 150px;
        height: 30px;
    }
</style>


