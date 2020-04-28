<template>
  <div>
    <div class="flex flex-row">
      <div class="w-1/2">
        <h1 class="content-heading">Stipendije</h1>
      </div>
      <div class="w-1/2">
        <button class="submit-request-button submit-request-button:hover">Predaj zahtjev</button>
      </div>
    </div>

    <div class="mt-2">
      <h1 class="content-subheading">Ovo je pregled vaših stipendija.</h1>
    </div>

    <div class="mt-20">
      <table class="table">
        <thead class="table-head">
        <tr>
          <th class="th text-left">Natječaj</th>
          <th class="th">Datum</th>
          <th class="th">Status</th>
          <th colspan="3"></th>
        </tr>
        </thead>
        <tbody class="table-body">
        <tr class="tr tr:hover">
          <td class="td text-left">Natječaj za studetsku stipendiju Grada Vukovara godina 2010.</td>
          <td class="td">10/12/10</td>
          <td class="td">Odobreno</td>
          <td class="td">
            <i class="far fa-eye fa-lg hover:text-blue-800 cursor-pointer"></i>
          </td>
          <td class="td">
            <i class="fas fa-pen fa-lg hover:text-blue-800 cursor-pointer"></i>
          </td>
          <td class="td">
            <i class="fas fa-trash fa-lg text-red-600 hover:text-red-700 cursor-pointer"></i>
          </td>
        </tr>
        <tr class="tr tr:hover">
          <td class="td text-left">Natječaj za studetsku stipendiju Grada Vukovara godina 2013.</td>
          <td class="td">10/11/14</td>
          <td class="td">Odbijeno</td>
          <td class="td">
            <i class="far fa-eye fa-lg cursor-pointer"></i>
          </td>
          <td class="td">
            <i class="fas fa-pen fa-lg cursor-pointer"></i>
          </td>
          <td class="td">
            <i class="fas fa-trash fa-lg text-red-600 hover:text-red-700 cursor-pointer"></i>
          </td>
        </tr>
        <tr class="tr tr:hover">
          <td class="td text-left">Natječaj za studetsku stipendiju Grada Vukovara godina 2015.</td>
          <td class="td">9/12/12</td>
          <td class="td">Opravdano</td>
          <td class="td">
            <i class="far fa-eye fa-lg cursor-pointer"></i>
          </td>
          <td class="td">
            <i class="fas fa-pen fa-lg cursor-pointer"></i>
          </td>
          <td class="td">
            <i class="fas fa-trash fa-lg cursor-pointer text-red-600 hover:text-red-700"></i>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    msg: String
  }
}
</script>

