(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    141: function(e, n, t) {
      "use strict";
      t.r(n);
      var o = t(7),
        i = t.n(o),
        a = t(0),
        r = t.n(a),
        c = t(142),
        u = t(144),
        l = c.b.section.withConfig({
          displayName: "ErrorPageView__Section",
          componentId: "kyu9oo-0"
        })([
          "display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;"
        ]),
        p = c.b.span.withConfig({
          displayName: "ErrorPageView__Text",
          componentId: "kyu9oo-1"
        })(
          [
            "font-size:",
            ";font-weight:500;display:block;border-bottom:1px solid #eaeaea;text-align:center;padding-bottom:",
            ";width:100px;"
          ],
          Object(u.a)(1),
          Object(u.a)(1)
        ),
        s = c.b.p.withConfig({
          displayName: "ErrorPageView__SubText",
          componentId: "kyu9oo-2"
        })(
          ["font-size:", ";font-weight:400;margin:20px 0 0 0;"],
          Object(u.a)(0.5)
        ),
        d = function() {
          return r.a.createElement(
            l,
            null,
            r.a.createElement(p, null, "404"),
            r.a.createElement(s, null, "Page not found")
          );
        },
        f = (function(e) {
          function n() {
            return e.apply(this, arguments) || this;
          }
          return (
            i()(n, e),
            (n.prototype.render = function() {
              return r.a.createElement(d, null);
            }),
            n
          );
        })(a.Component);
      n.default = f;
    },
    144: function(e, n, t) {
      "use strict";
      t.d(n, "a", function() {
        return u;
      });
      var o = t(146),
        i = t.n(o),
        a = t(147),
        r = t.n(a),
        c = new i.a(r.a),
        u = c.rhythm;
    }
  }
]);
//# sourceMappingURL=component---src-pages-404-js-31a40ae2fab5a0952bff.js.map
