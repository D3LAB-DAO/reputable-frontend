<script>
import { getAccount, store, retrieve } from "../assets/js/interface_request.js";
import { getDatabase, ref, set } from "firebase/database";

export default {
  data() {
    return {
      name: '',
      url:'',
      desc:'',
    }
  },
  methods: {
    writeToFirebase: function () {
      console.log("Write To Firebase! : ", this.name, this.url, this.desc);
      const db = getDatabase();
      set(ref(db, "users/" + getAccount()), {
        name: this.name,
        url: this.url,
        desc: this.desc,
      });
    },
  },
};
</script>

<template>
  <div id="modal-center" class="uk-flex-top" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <button class="uk-modal-close-default" type="button" uk-close></button>

      <h3 class="title-font section-title">&emsp;Mint&emsp;</h3>

      <!-- mint card -->
      <div class="section">
        <div class="uk-width-3xlarge inline-block">
          <span class="section-text"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</span
          >
          <img class="uk-width-medium uk-padding" :src="url" />
          <form @submit.prevent="writeToFirebase">
            <div>
              <input
                class="uk-input uk-form-success uk-form-width-large uk-form-large"
                type="text"
                v-model="url"
                placeholder="✏️ Image Url (Optional)"
              />
            </div>
            <div class="uk-margin">
              <input
                class="uk-input uk-form-success uk-form-width-large uk-form-large"
                type="text"
                v-model="desc"
                placeholder="✏️ Description (Optional)"
              />
            </div>
            <div class="uk-margin">
              <input
                class="uk-input uk-form-success uk-form-width-medium uk-form-large"
                type="text"
                v-model="name"
                placeholder="✏️ Name*"
              />
              <button class="uk-button uk-button-success uk-button-large">MINT!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  padding-top: 0;
}
</style>
