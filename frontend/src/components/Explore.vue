<script>
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
      users: [],
      loading: false,
      lastId: "",
      seeMore: true,
      numOfElemInRow: 3,
    };
  },
  methods: {
    loadFromFirebase: function () {
      if (this.loading) return;
      const db = getDatabase();

      const refs = query(
        ref(db, "users"),
        orderByKey(),
        limitToFirst(this.numOfElemInRow - 1)
      );
      onValue(refs, (snapshot) => {
        let count = 0;
        const users = snapshot.val();
        for (var id in users) {
          this.users.push(users[id]);
          this.lastId = id;
          count++;
        }
        this.loading = true;
        if (count + 1 < this.numOfElemInRow) this.seeMore = false;
        console.log(this.users);
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
        const users = snapshot.val();
        for (var id in users) {
          this.users.push(users[id]);
          this.lastId = id;
          count++;
        }

        if (count < this.numOfElemInRow) this.seeMore = false;
        console.log(this.users);
      });
    },
  },
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

      {{ loadFromFirebase() }}

      <div v-if="loading">
        <!-- Row -->
        <div class="uk-width-1-1">
          <div class="uk-child-width-1-2@s uk-child-width-1-3@l uk-padding" uk-grid>
            <!-- Connected -->
            <div v-if="1">
              <div>
                <a href="#modal-center" uk-toggle>
                <div class="people-card uk-card uk-card-default" type="button">
                  <div class="uk-card-badge uk-label uk-background-mint">MINT</div>
                  <div class="uk-card-media-top">
                    <img src="../img/add.png" width="900" height="900" alt="" />
                  </div>
                  <div class="uk-padding uk-padding-remove-bottom align-left">
                    <span uk-icon="heart"></span>
                    <span class="token-name">0x1ab1239f3458916</span>
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
            <div v-for="(user, idx) in users" :key="{ idx }">
              <PeopleCard
                :name="user.name"
                :price="user.price"
                :priceHistory="user.priceHistory"
                :desc="user.desc"
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
