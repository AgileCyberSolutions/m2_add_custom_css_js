require(["jquery"],function($){
    var currentURL = window.location.href;
    if (currentURL){
        var hash_shipping = window.location.hash;
        // console.log(hash_shipping);
        if (hash_shipping == '#shipping'){
            localStorage.setItem('page-info', 'shipping');
        }
        if (hash_shipping == '#payment'){
            localStorage.setItem('page-info', 'payment');
        }
    }
});