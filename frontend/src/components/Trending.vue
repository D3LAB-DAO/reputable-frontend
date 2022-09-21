<script>
import ChartCard from "./ChartCard.vue";
import { getDatabase, ref, onValue } from "firebase/database";

let trendingUserLists = [];
/*
async function loadFromFirebase() {
  const db = getDatabase();
  const refs = ref(db, "trending");
  onValue(refs, (snapshot) => {
    const trendingUserIDs = snapshot.val();

    for (let i = 0; i < trendingUserIDs.length; i++) {
      const key = trendingUserIDs[i];
      const refTrendingUser = ref(db, "users/" + key);
      onValue(refTrendingUser, (snap) => {
        const trendingUser = snap.val();
        trendingUserLists.push(trendingUser);
      });
    }
  });
}
*/

export default {
  components: {
    ChartCard,
  },
  setup() {},
  data() {
    return {
      trendingUsers: [],
      loading: false,
    };
  },
  mounted: async function () {
    //await loadFromFirebase();
    //this.loading = true;
  },
  methods: {
    loadFromFirebase: function () {
      if (this.loading) return;
      const db = getDatabase();
      const refs = ref(db, "trending");
      onValue(refs, (snapshot) => {
        const trendingUserIDs = snapshot.val();

        for (let i = 0; i < trendingUserIDs.length; i++) {
          const key = trendingUserIDs[i];
          const refTrendingUser = ref(db, "users/" + key);
          onValue(refTrendingUser, (snap) => {
            const trendingUser = snap.val();
            this.trendingUsers.push(trendingUser);
          });
        }
        this.loading = true;
      });
    },
  },
};
</script>

<template>
  <div id="page-top">
    <div class="section">
      <h3 class="title-font section-title">&emsp;Trending Now&emsp;</h3>
      {{ loadFromFirebase() }}
      <div v-if="loading">
        <div v-for="(user, idx) in trendingUsers" :key="{ idx }">
          <ChartCard
            :name="user.name"
            :price="user.price"
            :priceHistory="user.priceHistory"
          />
        </div>
      </div>
      <div v-else class="uk-padding-large">
        <span uk-spinner="ratio: 4.5"></span>
      </div>
    </div>
  </div>
</template>
