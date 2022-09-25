<script>
import MintModal from "./MintModal.vue";
export default {
  components: {
    MintModal,
  },
}
</script>
<template>
  <div>
    <a href="#modal-center" uk-toggle>
      <div class="people-card uk-card uk-card-default" type="button">
        <div class="uk-card-badge uk-label uk-background-mint">MINT</div>
        <div class="uk-card-media-top">
          <img src="../img/add.png" width="900" height="900" alt="" />
        </div>
        <div class="uk-padding uk-padding-remove-bottom align-left">
          <span class="token-icon" uk-icon="heart"></span>
          <span class="token-name">0x1ab1239f3458916</span>
          <br />
          <span class="token-price">0</span>
          <span class="token-price-diff">-</span>
        </div>
        <hr />
        <div class="uk-padding uk-padding-remove-top align-left" style="height: 100px">
          <dl class="uk-description-list">
            <dt><span class="bold">Description</span></dt>
            <dd>Mint your own token!</dd>
          </dl>
        </div>
      </div>
    </a>
  </div>
  <MintModal />
</template>
