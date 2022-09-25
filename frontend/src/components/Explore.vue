<script>
import { getAccount } from "../assets/js/interface_request.js";
import PeopleCard from "./PeopleCard.vue";
import MintModal from "./MintModal.vue";
import {
  getDatabase,
  ref,
  onValue,
  query,
  limitToFirst,
  orderByKey,
  startAfter,
} from "firebase/database";

export default {
  components: {
    PeopleCard,
    MintModal,
  },
  setup() {},
  data() {
    return {
      users: {},
      myTokenInfo: {},
      loading: false,
      lastId: "",
      seeMore: true,
      numOfElemInRow: 6,
      mine: false,
      testvalue: 0,
    };
  },
  methods: {
    loadFromFirebase: function () {
      if (this.loading) return;
      const db = getDatabase();

      const refs_mine = ref(db, "users/" + getAccount());

      onValue(refs_mine, (snapshot_mine) => {
        const users_mine = snapshot_mine.val();
        if (users_mine) {
          this.mine = true;
          this.myTokenInfo = users_mine;
        }

        const refs = query(
          ref(db, "users"),
          orderByKey(),
          limitToFirst(this.numOfElemInRow)
        );
        onValue(refs, (snapshot) => {
          let count = 0;
          const users_ref = snapshot.val();
          for (var id in users_ref) {
            this.lastId = id;
            if (id in this.users) continue;
            if (id === getAccount() ) { this.mine = true; this.myTokenInfo = users_ref[id]; continue; }
            this.users[id] = users_ref[id];
            count++;
          }
          this.loading = true;
          //if (!this.mine && count < this.numOfElemInRow) this.seeMore = false;
          //else if (this.mine && count < this.numOfElemInRow - 1) this.seeMore = false;
        });
      });
    },
    loadMore: function () {
      const db = getDatabase();

      const refs = query(
        ref(db, "users"),
        orderByKey(),
        startAfter(this.lastId),
        limitToFirst(this.numOfElemInRow)
      );
      onValue(refs, (snapshot) => {
        let count = 0;
        const users_ref = snapshot.val();
        for (var id in users_ref) {
          this.lastId = id;
          if (id === getAccount() || id in this.users ) continue;
          this.users[id] = users_ref[id];
          count++;
        }
        if (count < this.numOfElemInRow) this.seeMore = false;
      });
    },
    getAccount: function () {
      let account = getAccount();
      return account.substr(0, 8) + '....' + account.substr(account.length - 8, 8);
    }
  },
  mounted() {
    this.loadFromFirebase();
  }
};
</script>

<template>
  <div id="page-people">
    <div class="section">
      <h3 class="title-font section-title">&emsp;Explore&emsp;</h3>

      <!-- Search -->
      <div class="uk-width-3xlarge inline-block">
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
      </div>
      <div v-if="loading">
        <!-- Row -->
        <div class="uk-width-1-1">
          <div class="uk-child-width-1-2@s uk-child-width-1-3@l uk-padding" uk-grid>
            <!-- Connected -->
            <div v-if="!mine">
              <div>
                <a href="#modal-center" uk-toggle>
                  <div class="people-card uk-card uk-card-default" type="button">
                    <div class="uk-card-badge uk-label uk-background-mint">MINT</div>
                    <div class="uk-card-media-top">
                      <img src="../img/add.png" width="900" height="900" alt="" />
                    </div>
                    <div class="uk-padding uk-padding-remove-bottom align-left">
                      <span uk-icon="heart"></span>
                      <span class="token-name">{{ getAccount() }}</span>
                      <br />
                      <span class="token-price">0</span>
                      <span class="token-price-diff">-</span>
                    </div>
                    <hr />
                    <div
                      class="uk-padding uk-padding-remove-top align-left"
                      style="height: 100px"
                    >
                      <dl class="uk-description-list">
                        <dt>Description</dt>
                        <dd>Mint your own token!</dd>
                      </dl>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div v-else>
              <PeopleCard
                :name="myTokenInfo.name"
                :price="myTokenInfo.price"
                :priceHistory="myTokenInfo.priceHistory"
                :desc="myTokenInfo.desc"
                :url="myTokenInfo.url"
                :mine=true
              />
            </div>
            <div v-for="user in users">
              <PeopleCard
                :name="user.name"
                :price="user.price"
                :priceHistory="user.priceHistory"
                :desc="user.desc"
                :url="user.url"
              />
            </div>
          </div>
        </div>
        <button v-if="seeMore" class="uk-button uk-button-large" @click="loadMore">
          SEE MORE...
        </button>
      </div>
      <div v-else class="uk-padding-large">
        <span uk-spinner="ratio: 4.5"></span>
      </div>
    </div>
  </div>
  <MintModal />
</template>
<style scoped></style>
