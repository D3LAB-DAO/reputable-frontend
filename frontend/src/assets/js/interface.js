/* Constants */
// Page Types
const PAGES = ['home', 'top', 'people', 'lend', 'mint', 'govern', 'wallet'];
const LEND_PAGE = 3;
const MINT_PAGE = 4;
const WALLET_PAGE = 6;

/* Saved Values on Frontend */
let current_page = 0;
let try_page = -1;

/*
 * Onclick functions
 */
async function connectOnClick() {
    if (account !== '') return;

    // connect to metamask
    let success = await connectMetamask();

    if (success) {
        // set elements
        $('.connect-btn-text').html(account.substr(0, 4) + '..' + account.substr(account.length - 2, 2));
        $('.connect-btn-text-sm').html(account.substr(0, 4));
        $('.connect-btn').attr('uk-tooltip', 'title: ' + account);

        // update elements by request

        // update try page
        if (try_page != -1)
            movePageOnClick(try_page);
    }
    else {
        console.log("metamask connection failed!");
    }
}

function movePageOnClick(targetIdx) {
    if (targetIdx == current_page) return;
    if (targetIdx == try_page) try_page = -1;

    // WALLET PAGE FEATURE
    if (account == '' && (targetIdx == LEND_PAGE || targetIdx == MINT_PAGE)) {
        try_page = targetIdx;
        targetIdx = WALLET_PAGE;
    }
    
    $('#page-' + PAGES[current_page]).hide();
    $('#page-' + PAGES[targetIdx]).fadeIn(500);

    $('.menu-' + PAGES[current_page]).removeClass('uk-active');
    $('.menu-' + PAGES[targetIdx]).addClass('uk-active');

    current_page = targetIdx;
    $("html, body").animate({ scrollTop: 0 }, "fast");
}