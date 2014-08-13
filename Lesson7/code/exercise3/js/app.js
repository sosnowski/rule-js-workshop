(function (window, document) {
    'use strict';

    /**
    userName: string
    time: Date
    message: string
    @return documentFragment
    */
    function renderMessageRow (userName, time, message) {
        var docF = document.createDocumentFragment();
        var li = document.createElement('li');
        var span = document.createElement('span');
        var small = document.createElement('small');
        var em = document.createElement('em');
        var text = document.createTextNode(message);

        em.textContent = '>';
        small.textContent = time.getHours() + ':' + time.getMinutes();
        span.textContent = userName;
        span.className = 'user';

        li.appendChild(span);
        li.appendChild(small);
        li.appendChild(em);
        li.appendChild(text);

        docF.appendChild(li);
        return docF;
    }

    function init () {
        var form = document.getElementById('writeForm');
        form.addEventListener('submit', function (event) {
            event.preventDefault();

        })
    }

    window.App = {
        renderMessage: renderMessageRow,
        init: init
    };
})(window, document);

App.init();
