<template>
  <div>
    <div
      id="test"
      class="people-card uk-card uk-card-default"
      uk-toggle="target: #people-modal-1"
      type="button"
    >
      <div class="uk-card-badge uk-label uk-background-danger">HOT</div>
      <div class="uk-card-media-top">
        <img src="src/profile/full_3.png" width="1800" height="1200" alt="" />
      </div>
      <div class="uk-padding uk-padding-remove-bottom align-left">
        <span uk-icon="heart"></span>
        <span class="token-name">CAR</span>
        <span class="token-fullname">Carl</span>
        <br />
        <span class="token-price">33.18</span>
        <span class="token-price-diff text-green">▲ 20.58 (+157.98%)</span>
      </div>
      <hr />
      <div class="uk-padding uk-padding-remove-top align-left">
        <dl class="uk-description-list">
          <dt>Description</dt>
          <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
