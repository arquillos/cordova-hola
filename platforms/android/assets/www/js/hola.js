var app = {
    empezar: function() {
        document.addEventListener('deviceready', this.dispositivoListo, false);
    },
	
    dispositivoListo: function() {
        var posEnDoc = document.getElementById('todoListo');
        var elementoEsperando = posEnDoc.querySelector('.esperando');
        var elementoListo = posEnDoc.querySelector('.listo');

        elementoEsperando.setAttribute('style', 'display:none;');
        elementoListo.setAttribute('style', 'display:block;');
    }
};
