<template>
  <div class="flex justify-center">
    <div class="flex-col w-1/2">
      <div class="form-heading">
        Pregled stipendije
      </div>

      <div class="mt-10">
        <table class="table">
          <tr class="tr tr:hover">
            <th class="text-xl  px-2 py-4 border-b-2 text-blue-800 font-extrabold text-left">Natječaj</th>
            <td class="text-xl p-2  border-b-2 text-blue-800">Natječaj za stipendiju godine 2020</td>
          </tr>

          <tr class="tr tr:hover">
            <th class="text-xl px-2 py-4 border-b-2 text-blue-800 font-bold text-left">Ime</th>
            <td class="text-xl p-2  border-b-2 text-blue-800">Luka</td>
          </tr>

          <tr class="tr tr:hover">
            <th class="text-xl px-2 py-4  border-b-2 text-blue-800 font-bold text-left">Prezime</th>
            <td class="text-xl p-2  border-b-2 text-blue-800">Vavetić</td>
          </tr>

          <tr class="tr tr:hover">
            <th class="text-xl px-2 py-4  border-b-2 text-blue-800 font-bold text-left">Datum rođenja</th>
            <td class="text-xl p-2  border-b-2 text-blue-800">18/12/1994</td>
          </tr>

          <tr class="tr tr:hover">
            <th class="text-xl px-2 py-4  border-b-2 text-blue-800 font-bold text-left">Mjesto rođenja</th>
            <td class="text-xl p-2  border-b-2 text-blue-800">Vinkovci</td>
          </tr>

          <tr class="tr tr:hover">
            <th class="text-xl px-2 py-4  border-b-2 text-blue-800 font-extrabold text-left">Datum</th>
            <td class="text-xl p-2  border-b-2 text-blue-800">18/12/20</td>
          </tr>

          <tr class="tr tr:hover">
            <th class="text-xl px-2 py-4  border-b-2 text-blue-800 font-bold text-left">Status</th>
            <td class="text-xl p-2  border-b-2 text-blue-800">Odbijeno</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  props: {
    msg: String
  }
}
</script>

