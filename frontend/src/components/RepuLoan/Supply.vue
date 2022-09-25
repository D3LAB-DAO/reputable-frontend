<template>
  <div id="page-lend">
    <div class="section">
      <div class="title">Supply</div>
      <div class="uk-width-1-1 inline-block">
        <div class="uk-width-1-1 inline-block">
          <div class="uk-card uk-card-default">
            <div class="uk-padding align-left">
              <span class="token-icon" uk-icon="heart"></span>
              <span class="token-name">YOUR SUPPLIES</span>
              <br />
              <div class="uk-overflow-auto">
                <table id="lend-table" class="uk-table uk-table-divider uk-table-hover">
                  <thead>
                    <tr>
                      <th class="uk-table-shrink"></th>
                      <th class="uk-table-shrink">Asset (APY)</th>
                      <th>Balance</th>
                      <th>Colleteral</th>
                    </tr>
                  </thead>
                  <tbody class="align-right">
                    <tr uk-toggle="target: #lend-modal-1" type="button">
                      <td>
                        <img
                          class="uk-preserve-width uk-border-circle"
                          src="../../profile/talia_square.png"
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>
                        <span class="token-name">Talia</span><br /><span
                          class="token-percent uk-text-primary"
                          >+7.37%</span
                        >
                      </td>
                      <td>
                        <span class="token-name">0.8500</span><br /><span
                          class="token-fullname"
                          >$34.7159</span
                        >
                      </td>
                      <td>
                        <label class="switch">
                          <input type="checkbox" checked />
                          <span class="slider"></span>
                        </label>
                      </td>
                    </tr>
                    <tr uk-toggle="target: #lend-modal-1" type="button">
                      <td>
                        <img
                          class="uk-preserve-width uk-border-circle"
                          src="../../profile/carl_square.png"
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>
                        <span class="token-name">Carl</span
                        ><span class="token-percent uk-text-primary">+3.37%</span>
                      </td>
                      <td>
                        <span class="token-name">1.6325</span><br /><span
                          class="token-fullname"
                          >$39.5782</span
                        >
                      </td>
                      <td>
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-1-1 inline-block">
          <div class="uk-card uk-card-default">
            <div class="uk-padding">
              <div class="uk-text-left">
                <span class="token-icon" uk-icon="heart"></span>
                <span class="token-name">ASSETS TO SUPPLY</span>
              </div>
              <div class="uk-overflow-auto">
                <table id="lend-table" class="uk-table uk-table-divider uk-table-hover">
                  <thead>
                    <tr>
                      <th class="uk-table-shrink"></th>
                      <th class="uk-table-shrink">Asset (APY)</th>
                      <th>Balance</th>
                      <th>Colleteral</th>
                    </tr>
                  </thead>
                  <tbody class="align-right">
                    <tr uk-toggle="target: #lend-modal-1" type="button">
                      <td>
                        <img
                          class="uk-preserve-width uk-border-circle"
                          src="../../profile/nina_square.png"
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>
                        <span class="token-name">Nina</span><br /><span
                          class="token-percent uk-text-primary"
                          >+2.12%</span
                        >
                      </td>
                      <td>
                        <span class="token-name">0.0000</span><br /><span
                          class="token-fullname"
                          >$0.0000</span
                        >
                      </td>
                      <td>
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider"></span>
                        </label>
                      </td>
                    </tr>
                    <tr uk-toggle="target: #lend-modal-1" type="button">
                      <td>
                        <img
                          class="uk-preserve-width uk-border-circle"
                          src="../../profile/steve_square.png"
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>
                        <span class="token-name">Steve</span
                        ><span class="token-percent uk-text-primary">+0.05%</span>
                      </td>
                      <td>
                        <span class="token-name">0.0001</span><br /><span
                          class="token-fullname"
                          >$0.0026</span
                        >
                      </td>
                      <td>
                        <label class="switch">
                          <input type="checkbox" checked />
                          <span class="slider"></span>
                        </label>
                      </td>
                    </tr>
                    <tr uk-toggle="target: #lend-modal-1" type="button">
                      <td>
                        <img
                          class="uk-preserve-width uk-border-circle"
                          src="../../profile/zoe_square.png"
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>
                        <span class="token-name">Zoe</span
                        ><span class="token-percent uk-text-primary">+5.88%</span>
                      </td>
                      <td>
                        <span class="token-name">0.0000</span><br /><span
                          class="token-fullname"
                          >$0.0000</span
                        >
                      </td>
                      <td>
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="uk-width-1-1" style="display: flex">
                <div class="uk-width-5-6 inline-block">
                  <form class="uk-width-1-1 uk-search uk-search-default">
                    <a href="" uk-search-icon></a>
                    <input class="uk-search-input" type="search" placeholder="Search" />
                  </form>
                </div>
                <div class="uk-width-1-6 inline-block">
                  <button class="uk-button uk-button-default" style="padding-right: 20px; padding-left:20px;">ADD</button>
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
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
.title {
  font-family: "Righteous", cursive;
  font-size: 2rem;
  color: grey;
  text-align: center;
  padding-left: 20px;
}
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
</style>
