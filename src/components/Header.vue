<template>
  <div class="header-bg py-2">
    <div class="flex">
      <div class="flex w-1/2">
        <div>
          <img
              src="https://vukovar.hr/images/grb-zastava/Grb-grada.png"
              class="logo"
              alt="">
        </div>
        <div class="">
          <h1 class="organisation-name">GRAD VUKOVAR</h1>
          <p class="organisation-description">Digitalni grad</p>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex float-right mr-3 mt-3">
          <img class="nav-user-avatar"
               src="https://cdn.newsapi.com.au/image/v1/34c08d9ea8f97574578e5fcc030d2036"
               alt="">
          <div class="nav-user-name">
            <p>User</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

