<template>
  <div>
    <div class="flex items-center justify-center h-full pb-24">
      <div class="max-w-3xl w-1/4">
        <div class="bg-white p-8">
          <form action="" class="text-gray-600">
            <div class="my-3 border-b border-b-2 border-teal-500 py-2">
              <input type="email" placeholder="Email" class="text-lg border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
            </div>
            <div class="my-3 border-b border-b-2 border-teal-500 py-2">
              <input type="password" placeholder="Password" class="text-lg border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
            </div>
            <div class="my-6 flex justify-between">
              <label><input type="checkbox" /> Remember me</label>
            </div>
            <div class="my-6 flex">
              <button class="border rounded w-1/2 hover:bg-gray-100 py-2">Registriraj se</button>
              <button class="border rounded w-1/2 py-2 border-blue-700 bg-blue-300 text-white hover:bg-blue-400 ml-2">Prijavi se</button>
            </div>
            <div class="my-6 flex">
              <a href="" class="text-blue-500 ml-2">Forgot email or password?</a>
            </div>
            <div class="my-3 text-center text-xs text-gray-500">
              &copy;2020 Digital City. All rights reserved.
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>

