 <template>
  <div>
    <div class="flex justify-center">
      <div class="flex-col w-1/2">
        <div class="form-heading">
          Popuni prijavu za stipendiju
        </div>

        <div class="flex">
          <div class="form-box mr-3">
            <label for="" class="form-label">Ime</label>
            <input type="text" class="form-text-input">
          </div>

          <div class="form-box">
            <label for="" class="form-label">Prezime</label>
            <input type="text" class="form-text-input">
          </div>
        </div>

        <div class="flex">
          <div class="form-box mr-3">
            <label for="" class="form-label">OIB</label>
            <input type="text" class="form-text-input">
          </div>

          <div class="form-box">
            <label for="" class="form-label">Sveučilište</label>
            <input type="text" class="form-text-input">
          </div>
        </div>

        <div class="form-box">
          <label for="" class="form-label">Priloži presliku osobne</label>
          <div class="form-file-input form-file-input:hover">
            <div class="p-10">
              <p class="form-file-label">Dodaj dokument</p>
              <input type="file" class="hidden">
            </div>
          </div>
        </div>

        <div class="form-box">
          <button class="form-submit-button form-submit-button:hover">Pošalji</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    msg: String
  }
}
</script>

