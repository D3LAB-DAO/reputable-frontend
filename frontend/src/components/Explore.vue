<template>
  <div id="page-people">
    <div class="section">
      <h3 class="title-font section-title">&emsp;People&emsp;</h3>

      <div class="uk-width-2xlarge inline-block">
        <div class="uk-width-1-1">
          <div class="uk-width-1-2 uk-width-1-2@s padding-bottom-10-s inline-block">
            <form class="white-bg uk-width-1-1 uk-search uk-search-default">
              <a href="" uk-search-icon></a>
              <input class="uk-search-input" type="search" placeholder="Search" />
            </form>
          </div>
          <div class="uk-width-1-2 uk-width-1-6@s inline-block">
            <button class="uk-button uk-button-default white-bg">SEARCH</button>
          </div>
        </div>
        <div class="uk-child-width-1-2@s uk-padding" uk-grid>
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
          <div>
            <div
              class="people-card uk-card uk-card-default"
              uk-toggle="target: #people-modal-1"
              type="button"
            >
              <div class="uk-card-badge uk-label">NEW</div>
              <div class="uk-card-media-top">
                <img src="src/profile/full_2.png" width="1800" height="1200" alt="" />
              </div>
              <div class="uk-padding uk-padding-remove-bottom align-left">
                <span uk-icon="heart"></span>
                <span class="token-name">ZOE</span>
                <span class="token-fullname">Zoe</span>
                <br />
                <span class="token-price">0.68</span>
                <span class="token-price-diff uk-text-danger">▼ 0.03 (-4.2%)</span>
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
        </div>
        <div class="uk-child-width-1-2@s uk-padding" uk-grid>
          <div>
            <div
              class="people-card uk-card uk-card-default"
              uk-toggle="target: #people-modal-1"
              type="button"
            >
              <div class="uk-card-media-top">
                <img src="src/profile/full_1.png" width="1800" height="1200" alt="" />
              </div>
              <div class="uk-padding uk-padding-remove-bottom align-left">
                <span uk-icon="heart"></span>
                <span class="token-name">TAL</span>
                <span class="token-fullname">Talia</span>
                <br />
                <span class="token-price">45.96</span>
                <span class="token-price-diff uk-text-danger">▼ 3.62 (-7.30%)</span>
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
          <div>
            <div
              class="people-card uk-card uk-card-default"
              uk-toggle="target: #people-modal-1"
              type="button"
            >
              <div class="uk-card-media-top">
                <img src="src/profile/full_4.png" width="1800" height="1200" alt="" />
              </div>
              <div class="uk-padding uk-padding-remove-bottom align-left">
                <span uk-icon="heart"></span>
                <span class="token-name">JAM</span>
                <span class="token-fullname">James</span>
                <br />
                <span class="token-price">2.20</span>
                <span class="token-price-diff text-green">▲ 0.05 (+2.22%)</span>
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
        </div>
        <button class="uk-button uk-button-large">SEE MORE...</button>
      </div>
    </div>
  </div>

  <!-- people-modal -->
  <div id="people-modal-1" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
      <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
      <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
        <div
          class="uk-background-cover"
          style="background-image: url('src/profile/full_3.png')"
          uk-height-viewport
        ></div>
        <div class="uk-padding-large">
          <h1>Carl</h1>
          <div class="uk-overflow-auto">
            <table class="uk-table uk-table-striped">
              <thead>
                <tr>
                  <th>From</th>
                  <th>Amount</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0xae0..</td>
                  <td>50.35</td>
                  <td><span class="uk-badge uk-background-secondary">reject</span></td>
                </tr>
                <tr>
                  <td>0xae0..</td>
                  <td>50.35</td>
                  <td><span class="uk-badge uk-background-danger">cancel</span></td>
                </tr>
                <tr>
                  <td>0xae0..</td>
                  <td>50.35</td>
                  <td><span class="uk-badge">accept</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div id="people-button-group" class="uk-width-1-1 uk-button-group">
            <button class="uk-width-1-3 uk-button uk-button-danger">DEPOSIT</button>
            <button class="uk-width-1-3 uk-button uk-button-primary">SWAP</button>
            <button class="uk-width-1-3 uk-button uk-button-secondary">REQUEST</button>
          </div>
          <div id="people-button-group-md" class="uk-width-1-1">
            <button class="uk-width-1-1 uk-button uk-button-danger">DEPOSIT</button>
            <button class="uk-width-1-1 uk-button uk-button-primary">SWAP</button>
            <button class="uk-width-1-1 uk-button uk-button-secondary">REQUEST</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.people-card {
  opacity: 0.9;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  -o-transition: all 0.4s;
}

.people-card:hover {
  transform: scale(1.08, 1.08);
  opacity: 1;
}
</style>