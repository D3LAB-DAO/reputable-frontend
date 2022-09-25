<template>
  <div id="page-lend">
    <div class="section">
      <div class="title">Borrow</div>
      <div class="uk-width-1-1 inline-block">
        <div class="uk-width-1-1 inline-block">
          <div class="uk-card uk-card-default">
            <div class="uk-padding align-left">
              <span class="token-icon" uk-icon="heart"></span>
              <span class="token-name">BTC</span>
              <span class="token-fullname">Bitcoin</span>
              <br />
              <span class="borrow-price">$21,802.82<br /></span>
              <span class="borrow-text">Available Credit<br /></span>
              <span class="borrow-text">Borrow Limit</span>
              <span class="uk-align-right borrow-text">75%</span>
              <div class="gray-bar margin-top-10">
                <div class="primary-bar" style="height: 20px; width: 75%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-1-1 inline-block">
          <div class="uk-card uk-card-default">
            <div class="uk-padding">
              <div class="uk-overflow-auto">
                <table id="lend-table" class="uk-table uk-table-divider uk-table-hover">
                  <thead>
                    <tr>
                      <th class="uk-table-shrink"></th>
                      <th class="uk-table-shrink">Asset</th>
                      <th>Balance</th>
                      <th>Colleteral</th>
                    </tr>
                  </thead>
                  <tbody class="align-right">
                    <tr uk-toggle="target: #lend-modal-1" type="button">
                      <td>
                        <img
                          class="uk-preserve-width uk-border-circle"
                          src="../../profile/luke_square.png"
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>
                        <span class="token-name">LUKE</span><br /><span
                          class="token-percent uk-text-primary"
                          >7.37%</span
                        >
                      </td>
                      <td>
                        <span class="token-name">$0</span><br /><span
                          class="token-fullname"
                          >0.0001 USDC</span
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
                          src="../../profile/luke_square.png"
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>
                        <span class="token-name">LUKE</span
                        ><span class="token-percent uk-text-primary">7.37%</span>
                      </td>
                      <td>
                        <span class="token-name">$0</span><br /><span
                          class="token-fullname"
                          >0.0001 USDC</span
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
                          src="../../profile/luke_square.png"
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>
                        <span class="token-name">LUKE</span
                        ><span class="token-percent uk-text-primary">7.37%</span>
                      </td>
                      <td>
                        <span class="token-name">$0</span><br /><span
                          class="token-fullname"
                          >0.0001 USDC</span
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
                  <button class="uk-button uk-button-default">ADD</button>
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
  opacity: .7;
}
.section {
  padding-top: 0px;
}
</style>