<script>
import GovernCard from "./GovernCard.vue";

export default {
  components: {
    GovernCard,
  }
}
</script>

<template>
  <div id="page-govern">
    <div class="section">
      <h3 class="title-font section-title">
        &emsp;Governance&emsp;
      </h3>

      <div class="uk-width-3xlarge inline-block">
        <ul
          class="uk-grid-small uk-child-width-1-1 uk-child-width-1-3@s"
          uk-sortable="handle: .uk-card"
          uk-grid
        >
          <li>
            <div class="govern-token-card uk-card uk-card-default uk-card-body">
              <div class="align-left">
                <span class="govern-token-rate">ANC PRICE</span>
                <br />
                <span class="token-price">39,590,000</span>
              </div>
              <hr class="margin-y-small" />
              <div class="align-left">
                <span class="govern-token-rate">ANC PRICE</span>
                <br />
                <span class="token-price">39,590,000</span>
              </div>
            </div>
          </li>
          <li>
            <div class="govern-token-card uk-card uk-card-default uk-card-body">
              <img
                class="govern-token-img"
                src="../profile/luke_square.png"
                width="60"
                height="60"
                alt=""
              />
              <span class="govern-token-name">Anchor (ANC)</span>
              <span class="uk-badge uk-background-secondary">APR</span>
              <span class="govern-token-rate padding-left-small">40.32 %</span>
            </div>
          </li>
          <li>
            <div class="govern-token-card uk-card uk-card-default uk-card-body">
              <img
                class="govern-token-img"
                src="../profile/luke_square.png"
                width="60"
                height="60"
                alt=""
              />
              <span class="govern-token-name">ANC-UST LP</span>
              <span class="uk-badge uk-background-secondary">APR</span>
              <span class="govern-token-rate padding-left-small">66.49 %</span>
              <br />
              <span class="uk-badge uk-background-secondary">Total Staked</span>
              <span class="govern-token-rate padding-left-small">22.62M</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="uk-width-3xlarge inline-block">
        <GovernCard :state="0" :title="`Anchor (ANC) 2.0`" :expiredate="`Estimated end time Sat, Oct 1, 2022, 1:42:01`" :remaindays="7" :progress="30" />
        <GovernCard :state="1" :title="`Dinner Menu`" :expiredate="`Estimated end time Sat, Sep 24, 2022, 0:00:00`" :remaindays="0" :progress="90" />
      </div>
    </div>
  </div>
</template>