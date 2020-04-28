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
               src="https://scontent.fzag1-1.fna.fbcdn.net/v/t1.0-9/18881989_1900513286889005_7535478853945541451_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_oc=AQl7bFzcdrgOPNh0SYyEwI4P-iyB7tEn2gapTFr7y93TRBnqFRM5A_scu0DQZ1y7vzs&_nc_ht=scontent.fzag1-1.fna&oh=220041d6062165e8450b9bb77f037a95&oe=5EC7CAB1"
               alt="">
          <div class="nav-user-name">
            <p>Luka Vavetić</p>
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

