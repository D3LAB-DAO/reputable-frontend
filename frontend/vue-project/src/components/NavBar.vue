<!-- 뭔가 여기에 account 정보를 저장시켜야 하는걸까, 그걸 리턴해서 보유하게하고.. -->
<script>
export default {
  data() {
    return {
      message: "Hello World!",
    };
  },
  methods: {
    async connectMetamask() {
      // metamask installed
      if (typeof window.ethereum !== "undefined") {
        // set global variables (contract, account)
        window.web3 = new Web3(window.ethereum);
        //contract = await new window.web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDR);
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        return true;
      }

      // metamask not installed
      else {
        $(".connect-btn-text").html("Error!");
        $(".connect-btn-text-sm").html("ERR!");
        $(".connect-btn").attr("uk-tooltip", "Metamask required");
        return false;
      }
    },
    async login2() {
      console.log("hhh");
      let account = "";
      if (account !== "") return;

      // connect to metamask
      let success = await this.connectMetamask();

      if (success) {
        // set elements
        $(".connect-btn-text").html(
          account.substr(0, 4) + ".." + account.substr(account.length - 2, 2)
        );
        $(".connect-btn-text-sm").html(account.substr(0, 4));
        $(".connect-btn").attr("uk-tooltip", "title: " + account);

        // update elements by request

        // update try page
        if (try_page != -1) movePageOnClick(try_page);
      } else {
        console.log("metamask connection failed!");
      }
    },
  },
};
</script>

<template>
  <!-- Navigation Bar -->
  <nav class="uk-navbar-container uk-navbar-transparent uk-padding" uk-navbar>
    <div class="uk-navbar-left">
      <a
        id="nav-icon"
        class="uk-navbar-toggle"
        uk-navbar-toggle-icon
        href="#offcanvas-slide"
        uk-toggle
      ></a>
    </div>
    <div class="uk-navbar-center">
      <div id="nav-title" class="uk-navbar-center">
        <span class="title-icon" uk-icon="icon: bookmark; ratio: 2"></span>
        <h1 class="title-font"><a onclick="movePageOnClick(0)">Reputable</a></h1>
      </div>
      <div id="nav-title-sm" class="uk-navbar-center">
        <span class="title-icon" uk-icon="icon: bookmark;"></span>
        <h5 class="title-font"><a onclick="movePageOnClick(0)">Reputable</a></h5>
      </div>
    </div>
    <div class="uk-navbar-right">
      <div id="nav-connect">
        <button
          class="connect-btn uk-button uk-button-secondary uk-button-small"
          @click="login2"
          uk-tooltip="title: Connect to metamask"
        >
          <span class="connect-btn-text">Connect →</span>
        </button>
      </div>
      <div id="nav-connect-sm">
        <button
          class="connect-btn uk-button uk-button-secondary uk-button-small"
          style="font-size: 0.5rem"
          @click="login2"
          uk-tooltip="title: Connect to metamask"
        >
          <span class="connect-btn-text-sm">→</span>
        </button>
      </div>
    </div>
  </nav>
</template>
