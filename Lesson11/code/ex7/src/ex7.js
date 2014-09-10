function renderTemplate(name, data, fn) {
    rulejs.loadTemplate(name, function(template) {
        Object.keys(data).forEach(function (placeholder) {
            template = template.replace('{{' + placeholder + '}}', data[placeholder]);
        });
        fn(template);
    });
}
