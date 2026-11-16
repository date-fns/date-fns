(function () {
  console.log(
    "date-fns CDN files have moved to @date-fns/cdn. Please update your URLs. See: https://date-fns.org/docs/CDN",
  );

  var re = /src="(.+\/date-fns\/.*(cdn|cdn.min).js)"/;
  var html =
    document.currentScript && cloneScriptHtml(document.currentScript.outerHTML);

  try {
    html && document.write(html);
  } catch (_) {
    insertScriptFromHTML(html);
  }

  function cloneScriptHtml(html) {
    return (
      re.test(html) &&
      html.replace(re, function (_, src) {
        return 'src="' + src.replace("/date-fns/", "/@date-fns/cdn/") + '"';
      })
    );
  }

  function insertScriptFromHTML(html) {
    const template = document.createElement("template");
    template.innerHTML = html;

    const script = template.content.querySelector("script");
    const newScript = document.createElement("script");

    for (const attr of script.attributes) {
      newScript.setAttribute(attr.name, attr.value);
    }

    document.head.appendChild(newScript);
  }
})();
