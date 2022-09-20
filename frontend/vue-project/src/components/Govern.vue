<template>
  <div id="page-govern">
    <div class="section">
      <h3 class="title-font section-title">
        &emsp;Govern&emsp;
        <span
          class="govern-icon"
          uk-icon="icon: sign-out; ratio: 1"
          onClick="window.open('https://www.tally.xyz/')"
          uk-tooltip="title: Go Tally"
        ></span>
      </h3>

      <div class="uk-width-2xlarge inline-block">
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
                src="src/profile/profile_1.png"
                width="60"
                height="60"
                alt=""
              />
              <span class="govern-token-name">Anchor (ANC)</span>
              <span class="uk-badge uk-background-secondary">APR</span>
              <span class="govern-token-rate">40.32 %</span>
            </div>
          </li>
          <li>
            <div class="govern-token-card uk-card uk-card-default uk-card-body">
              <img
                class="govern-token-img"
                src="src/profile/profile_1.png"
                width="60"
                height="60"
                alt=""
              />
              <span class="govern-token-name">ANC-UST LP</span>
              <span class="uk-badge uk-background-secondary">APR</span>
              <span class="govern-token-rate">66.49 %</span>
              <br />
              <span class="uk-badge uk-background-secondary">Total Staked</span>
              <span class="govern-token-rate">22.62M</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
