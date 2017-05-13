function removeAdsOfType(adViewType) {
    var ads = $("ul.ads-list-" + adViewType).children()
    $.each(ads, function() {
        var adDetails = $(this).children();
        if (!(adDetails.hasClass('ads-list-' + adViewType + '-item-price'))) {
            $(this).remove();
        }
    });
}

function removeAdsOfTableType() {
    var ads = $("table.ads-list-table").children().children();
    var listTableColsExist = false;

    $.each(ads, function() {
        var adDetails = $(this).children();
        if (adDetails.is('[class^="ads-list-table-col"]')) {
            listTableColsExist = true;
            return false;
        }
    });

    if (listTableColsExist) {
        $.each(ads, function() {
            var adDetails = $(this).children();
            if (!(adDetails.is('[class^="ads-list-table-col"]'))) {
                $(this).remove();
            }
        });
    } else {
        $.each(ads, function() {
            var adDetails = $(this).children();
            if ((adDetails.hasClass('ads-list-table-price'))) {
                price = $('.ads-list-table-price', this).text();
                if ($.trim(price) == '') {
                    $(this).remove()
                } else {
                    return false;
                }
            }
        });
    }
}


function adsCleanup() {
    removeAdsOfType('detail');
    removeAdsOfType('photo');
    removeAdsOfTableType();

    $('.numbers-promo-placeholder').remove();
    $('#point_informer').remove();
}


$('.adsbygoogle').remove();
$('.banner-shop').remove();
$('.numbers-promo-placeholder--left').remove();
$('.numbers-promo-placeholder--right').remove();

$(document).ready(adsCleanup);
$(document).on('pjax:success', function() {
    adsCleanup();
});
