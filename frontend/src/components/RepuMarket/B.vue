<template>
  <div id="page-lend">
    <div class="section">
      <div class="uk-width-1-1 inline-block">
        <div class="uk-width-1-1 inline-block">
          <div class="uk-card uk-card-default">
            <div class="uk-padding align-left">
              <div>
                <img
                  class="token-chart-img"
                  src="../../profile/steve_square.png"
                  width="100"
                  height="100"
                  alt=""
                />
              </div>
              <div>
                <span class="token-icon" uk-icon="heart"></span>
                <span class="token-name">Steve</span>
                <br />
                <div class="uk-card-badge uk-label uk-label-wide uk-background-mint">
                  7 Remain
                </div>
                <span class="borrow-price">$26.1363<br /></span>
                <hr />
                <span class="borrow-text">Description<br /></span>
                <span
                  >I love taking pictures, drawing and writing lyrics. <br />
                  If you would like to work with me, please place an order using the form
                  below.
                  <br /><br />
                  * filming
                  <br />
                  - Personal Profile/Business Photo<br />
                  - Wedding Snap
                </span>
                <hr />
                <span class="borrow-text">Funding Rate</span>
                <span class="uk-align-right borrow-text">55%</span>
                <div class="gray-bar margin-top-10">
                  <div class="primary-bar" style="height: 20px; width: 55%"></div>
                </div>
              </div>
              <div class="uk-child-width-expand@s uk-text-center" uk-grid>
                <div>
                  <div class="uk-card uk-card-default uk-card-body uk-work-card">
                    <div class="uk-card-badge uk-label uk-background-danger">1 Remain</div>
                    <br />
                    Filming
                    <br />
                    spend 50 Steve
                  </div>
                </div>
                <div>
                  <div class="uk-card uk-card-default uk-card-body uk-work-card">
                    <div class="uk-card-badge uk-label uk-background-danger">1 Remain</div>
                    <br />
                    Drawing
                    <br />
                    spend 30 Steve
                  </div>
                </div>
                <div>
                  <div class="uk-card uk-card-default uk-card-body uk-work-card">
                    <div class="uk-card-badge uk-label uk-background-mint">5 Remain</div>
                    <br />
                    Writing lyrics
                    <br />
                    spend 100 Steve
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.uk-card {
  margin-top: 20px;
}
.uk-card-default {
  border-radius: 25px;
  opacity: 0.7;
}
.section {
  padding-top: 0px;
}
.uk-label-wide {
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
}

.uk-work-card {
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  -o-transition: all 0.4s;
  margin-bottom: 0;
}

.uk-work-card:hover {
  transform: scale(1.08, 1.08);
  opacity: 1;
}
</style>
