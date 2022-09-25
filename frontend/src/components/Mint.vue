<template>
  <div id="page-mint">
    <div class="section">
      <h3 class="title-font section-title">&emsp;Mint&emsp;</h3>

      <!-- mint card -->
      <div id="mint-card">
        <div class="uk-width-3xlarge inline-block">
          <div class="uk-card uk-card-default margin-30 padding-bottom">
            <span class="uk-padding section-text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.</span
            >
            <img class="uk-width-small uk-padding" src="../img/mint.png" />
            <form>
              <div class="uk-margin">
                <input
                  class="uk-input uk-form-success uk-form-width-medium uk-form-large"
                  type="text"
                  placeholder="✏️ Name"
                />
                <button class="uk-button uk-button-success uk-button-large">MINT!</button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <span class="small-text">
            <a href="https://www.flaticon.com/free-icons/mint" title="mint icons"
              >Mint icons created by Aldo Cervantes - Flaticon</a
            >
          </span>
        </div>
      </div>

      <!-- mypage card-->
      <div id="mypage-card">
        <div class="uk-width-3xlarge inline-block">
          <div class="uk-width-3xlarge inline-block">
            <div
              class="chart-card uk-card uk-card-default margin-30 uk-margin-remove-bottom padding-bottom"
            >
              <div class="uk-padding align-left">
                <span class="token-icon" uk-icon="heart"></span>
                <span class="token-name">PSH</span>
                <span class="token-fullname">Mycoin</span>
                <br />
                <span class="token-price">39,590,000</span>
                <span class="token-price-diff uk-text-primary">▼ 272,000 (-0.68%)</span>
              </div>
              <div class="chart">
                <canvas id="chart-my"></canvas>
              </div>
            </div>
          </div>
          <div class="uk-width-3xlarge inline-block">
            <div class="uk-card uk-card-default margin-30 padding-bottom">
              <article class="uk-padding uk-comment">
                <header class="uk-comment-header">
                  <div class="uk-grid-medium uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                      <img
                        class="uk-comment-avatar govern-token-img"
                        src="../profile/profile_1.png"
                        width="80"
                        height="80"
                        alt=""
                      />
                    </div>
                    <div class="uk-width-expand">
                      <h4 class="uk-comment-title uk-margin-remove align-left">
                        <a class="uk-link-reset" href="#">Luke Park</a>
                      </h4>
                      <ul
                        class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top"
                      >
                        <li><a href="#">12 days ago</a></li>
                        <li><a href="#">Edit</a></li>
                      </ul>
                    </div>
                  </div>
                </header>
                <form>
                  <h4>Description</h4>
                  <div class="uk-margin">
                    <textarea class="uk-textarea" rows="5" placeholder="Description">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</textarea
                    >
                  </div>
                </form>
                <h4 class="uk-padding-remove-top">Request</h4>
                <div class="uk-overflow-auto">
                  <table id="request-table" class="uk-table uk-table-striped">
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
                        <td>
                          <span
                            class="ask-accept-btn uk-badge margin-x-small"
                            type="button"
                            >accept</span
                          ><span
                            class="ask-reject-btn uk-badge uk-background-secondary margin-x-small"
                            type="button"
                            >reject</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>0xae0..</td>
                        <td>50.35</td>
                        <td>
                          <span
                            class="ask-accept-btn uk-badge margin-x-small"
                            type="button"
                            >accept</span
                          ><span
                            class="ask-reject-btn uk-badge uk-background-secondary margin-x-small"
                            type="button"
                            >reject</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>0xae0..</td>
                        <td>50.35</td>
                        <td>
                          <span
                            class="ask-accept-btn uk-badge margin-x-small"
                            type="button"
                            >accept</span
                          ><span
                            class="ask-reject-btn uk-badge uk-background-secondary margin-x-small"
                            type="button"
                            >reject</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.uk-comment-avatar {
  opacity: 0.1;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  -o-transition: all 0.4s;
}

.uk-comment-avatar:hover {
  transform: scale(1.08, 1.08);
  opacity: 1;
}
</style>
