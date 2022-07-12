var $$casj = {};
$$casj.regExp = /\(([^)]+)\)/;
$$casj.init = function() {
    document.querySelectorAll('[casj]').forEach(function(el) {
        el.innerHTML = el.innerHTML.replace($$casj.regExp , '<casj id="' + el.innerHTML.match($$casj.regExp)[1]  + '"></casj>');
    });
}
$$casj.repeat = function(id, data) {
    const repeat = document.getElementById(id).innerHTML;
    data.forEach((elem, key, arr) => {
        $casj.cast(elem);
        for (const key of Object.keys(elem)) {
            document.querySelector('casj#'+key).removeAttribute('id');
        }
        if (!Object.is(arr.length - 1, key)) {
            document.getElementById(id).insertAdjacentHTML('beforeend', repeat);  
        } 
    });
}
$$casj.cast = function(data) {
    for (const element of Object.keys(data)) {
        document.querySelector("casj#"+element).innerHTML = data[element];
    }
}
var $casj = new Proxy($$casj, {
    get: function (func, name) {
        if( name in $$casj) {
            return $$casj[name];
        }
        return document.querySelector("casj#"+name);
    }
});
$casj.init();

