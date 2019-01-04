(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    137: function(M, t, e) {
      "use strict";
      e.r(t);
      var n = e(0),
        i = e.n(n),
        a = e(139),
        o = e(141),
        N = e.n(o),
        g = e(142),
        u = e.n(g),
        c = new N.a(u.a),
        D = c.rhythm,
        r = "320px",
        s = "768px",
        L = "1024px",
        l = "2560px",
        j = {
          mobileS: "(max-width: " + r + ")",
          mobileM: "(max-width: " + "375px" + ")",
          mobileL: "(max-width: " + "425px" + ")",
          mobile: "(min-width: " + r + ") and (max-width: " + s + ")",
          tablet: "(max-width: " + s + ")",
          laptop: "(max-width: " + L + ")",
          laptopL: "(max-width: " + "1440px" + ")",
          desktop: "(min-width: " + L + ") and (max-width: " + l + ")",
          desktopL: "(max-width: " + l + ")"
        },
        y = a.a.div.withConfig({
          displayName: "Layout__Container",
          componentId: "sc-1rr8mdx-0"
        })(
          [
            "display:flex;align-items:center;justify-content:center;padding:",
            ";@media ",
            "{flex-direction:column;}"
          ],
          D(0.75),
          j.mobile
        ),
        w = function(M) {
          var t = M.children;
          return i.a.createElement(y, null, t);
        },
        I = e(7),
        T = e.n(I),
        z = (e(154),
        a.a.div.withConfig({
          displayName: "Card__Container",
          componentId: "qnuhtc-0"
        })(
          [
            "display:flex;flex-direction:column;background:rgba(255,255,255,1);box-shadow:rgba(0,0,0,0.08) 0px 4px 8px;z-index:2;border-radius:",
            ";overflow:hidden;margin:5px 0;padding:",
            ";@media not screen and ",
            "{&:first-child{margin-top:0;}margin:5px;}"
          ],
          D(0.5),
          D(0.5),
          j.mobile
        )),
        x = a.a.div.withConfig({
          displayName: "Card__Header",
          componentId: "qnuhtc-1"
        })([
          "color:#d32f2f;text-align:center;align-self:flex-start;font-size:12px;font-weight:600;border-bottom:1px solid #ef9a9a;background-color:#ffebee;padding:5px 10px;"
        ]),
        d = (a.a.div.withConfig({
          displayName: "Card__Title",
          componentId: "qnuhtc-2"
        })([
          "display:flex;flex-direction:column;justify-content:center;align-items:center;padding:15px 0;"
        ]),
        a.a.div.withConfig({
          displayName: "Card__Description",
          componentId: "qnuhtc-3"
        })(["color:#d32f2f;font-size:12px;text-align:center;"])),
        E = function() {
          return i.a.createElement(
            z,
            null,
            i.a.createElement(x, null, "Richard Hamming on Luck"),
            i.a.createElement(
              d,
              null,
              i.a.createElement(
                "blockquote",
                null,
                i.a.createElement(
                  "p",
                  null,
                  "There is indeed an element of luck, and no, there isn’t. The prepared mind sooner or later finds something important and does it. So yes, it is luck.",
                  " ",
                  i.a.createElement(
                    "em",
                    null,
                    "The particular thing you do is luck, but that you do something is not."
                  )
                )
              )
            )
          );
        },
        m = (function(M) {
          function t() {
            return M.apply(this, arguments) || this;
          }
          return (
            T()(t, M),
            (t.prototype.render = function() {
              return i.a.createElement(E, null);
            }),
            t
          );
        })(n.Component),
        C = function() {
          var M = Array(10)
            .fill(1)
            .map(function(M, t) {
              return t;
            });
          return i.a.createElement(
            A,
            null,
            M.map(function(M, t) {
              return i.a.createElement(m, { key: t });
            })
          );
        },
        A = a.a.div.withConfig({
          displayName: "ProjectsView__ProjectsContainer",
          componentId: "sc-1wki2uf-0"
        })(
          ["@media not screen and ", "{overflow:scroll;height:95vh;}"],
          j.mobile
        ),
        p = (function(M) {
          function t() {
            return M.apply(this, arguments) || this;
          }
          return (
            T()(t, M),
            (t.prototype.render = function() {
              return i.a.createElement(C, null);
            }),
            t
          );
        })(n.Component),
        O = e(156),
        S = e.n(O),
        k = (e(31), e(157)),
        Q = e.n(k),
        b = e(158),
        f = e.n(b),
        h = e(159),
        U = e.n(h),
        Y = e(160),
        B = e.n(Y),
        v = e(161),
        G = e.n(v),
        Z = a.a.div.withConfig({
          displayName: "LogosView__Mentions",
          componentId: "rrtzyg-0"
        })([
          "display:flex;height:48px;margin-bottom:1rem;flex-direction:row;justify-content:space-around;"
        ]),
        P = a.a.img.withConfig({
          displayName: "LogosView__MentionsLogo",
          componentId: "rrtzyg-1"
        })(
          ["width:", ";transform:", ";height:48px;margin-bottom:0;"],
          function(M) {
            return M.width || "48px";
          },
          function(M) {
            return M.transform || "";
          }
        ),
        H = a.a.a.withConfig({
          displayName: "LogosView__Link",
          componentId: "rrtzyg-2"
        })(["&:hover,&:active{box-shadow:0 0 0 0;}"]),
        V = function(M) {
          var t = M.href,
            e = M.title,
            n = M.imgsrc,
            a = Q()(M, ["href", "title", "imgsrc"]);
          return i.a.createElement(
            H,
            { target: "_blank", href: t },
            n ? i.a.createElement(P, Object.assign({ src: n }, a), e) : e
          );
        },
        R = function() {
          var M = [
            {
              href: "https://www.quora.com/profile/Dixit-Patel-4",
              imgsrc: B.a,
              alt: "Quora",
              width: "75px",
              transform: "scale(0.85)"
            },
            {
              href: "http://strava.com/athletes/19109068/badge",
              imgsrc: f.a,
              alt: "Strava",
              transform: "scale(0.65)"
            },
            {
              href: "https://twitter.com/dixitk13",
              imgsrc: U.a,
              alt: "Twitter",
              transform: "scale(0.65)"
            },
            {
              href: "https://github.com/dixitk13",
              imgsrc: G.a,
              alt: "Github",
              width: "65px",
              transform: "scale(0.85)"
            }
          ];
          return i.a.createElement(
            Z,
            null,
            M.map(function(M, t) {
              return i.a.createElement(
                V,
                Object.assign({ key: "mentions-" + t }, M)
              );
            })
          );
        },
        J = (function(M) {
          function t() {
            return M.apply(this, arguments) || this;
          }
          return (
            T()(t, M),
            (t.prototype.render = function() {
              return i.a.createElement(R, null);
            }),
            t
          );
        })(n.Component),
        W = e(162),
        F = e.n(W),
        K = a.a.a.withConfig({
          displayName: "DownloadButtonsView__DownloadLink",
          componentId: "sc-18f51up-0"
        })(["text-align:center;&:hover{box-shadow:none;}"]),
        X = a.a.button.withConfig({
          displayName: "DownloadButtonsView__SimpleButton",
          componentId: "sc-18f51up-1"
        })(
          [
            "text-decoration:none;background:transparent;padding:0;border:none;width:90px;cursor:pointer;margin:",
            ";font-size:",
            ";text-align:center;background:rgb(236,237,238);border-radius:3px;outline:none;&:active{background:rgba(0,0,0,0.1);}"
          ],
          D(0.25),
          D(0.5)
        ),
        q = Object(a.a)(X).withConfig({
          displayName: "DownloadButtonsView__DownloadButton",
          componentId: "sc-18f51up-2"
        })([
          "&:hover{background:rgb(226,227,228);transition-delay:0.2s;}&:before{opacity:0;position:absolute;content:attr(data-hover);transform:translate(-150%,0);transition:0.4s,opacity 0.6s;}&:hover:before{opacity:1;transform:translate(25%,0);transition-delay:0.2s;}span{width:100%;transition:0.6s;transition-delay:0.2s;display:inline-block;&:hover,&:focus{opacity:0;transform:scale(0.3);}}"
        ]),
        _ = a.a.div.withConfig({
          displayName: "DownloadButtonsView__Buttons",
          componentId: "sc-18f51up-3"
        })([
          "display:inline-flex;flex-direction:row;margin-bottom:1rem;justify-content:space-evenly;"
        ]),
        $ = function() {
          return i.a.createElement(
            _,
            null,
            i.a.createElement(
              K,
              { download: !0, target: "_blank", href: F.a },
              i.a.createElement(
                q,
                {
                  type: "button",
                  "data-hover": "Download",
                  "data-active": "Starting..."
                },
                i.a.createElement("span", null, "Resume")
              )
            ),
            i.a.createElement(X, null, i.a.createElement("span", null, "no-op"))
          );
        },
        MM = (function(M) {
          function t() {
            return M.apply(this, arguments) || this;
          }
          return (
            T()(t, M),
            (t.prototype.render = function() {
              return i.a.createElement($, null);
            }),
            t
          );
        })(n.Component),
        tM = a.a.div.withConfig({
          displayName: "AboutMeView__AboutMeContainer",
          componentId: "sc-6yyncv-0"
        })(
          [
            "height:95vh;width:20vw;display:flex;flex-direction:column;padding:",
            ";border-radius:",
            ";background:rgba(255,255,255,1);box-shadow:rgba(0,0,0,0.08) 0px 4px 8px;z-index:2;margin-right:10px;@media ",
            "{height:unset;margin-right:unset;width:100%;}"
          ],
          D(0.5),
          D(0.5),
          j.mobile
        ),
        eM = a.a.h1.withConfig({
          displayName: "AboutMeView__Name",
          componentId: "sc-6yyncv-1"
        })(
          [
            "color:rgba(0,0,0,0.75);font-size:",
            ";margin:0 0 ",
            " 0;cursor:pointer;&:hover{font-size:",
            ";color:rgba(0,0,0,0.66);}"
          ],
          D(1.5),
          D(0.5),
          D(1.51)
        ),
        nM = a.a.div.withConfig({
          displayName: "AboutMeView__Footer",
          componentId: "sc-6yyncv-2"
        })([
          "justify-self:flex-end;color:#666;margin-top:auto;a{transition:all 0.5s;&:hover{color:#555;z-index:1;}}"
        ]),
        iM = a.a.span.withConfig({
          displayName: "AboutMeView__Heart",
          componentId: "sc-6yyncv-3"
        })(['color:#d32f2f;&:after{content:"❤";}']),
        aM = a.a.blockquote.withConfig({
          displayName: "AboutMeView__Quote",
          componentId: "sc-6yyncv-4"
        })(["margin-left:unset;margin-bottom:1rem;"]),
        oM = a.a.span.withConfig({
          displayName: "AboutMeView__ToggleHeartContainer",
          componentId: "sc-6yyncv-5"
        })([
          'position:relative;top:-25px;display:flex;left:40px;height:0;transform:rotate(45deg);margin-left:auto;@keyframes heart{0%,17.5%{font-size:0;}}[for="toggle-heart"]{color:#aab8c2;font-size:2em;cursor:pointer;visibility:hidden;}[id="toggle-heart"]{display:none;&:checked + label{color:#e2264d;visibility:unset;will-change:font-size;animation:heart 1s cubic-bezier(0.17,0.89,0.32,1.49);}&:unchecked + label{transition:1s ease-all;}}'
        ]),
        NM = function(M) {
          var t = M.on,
            e = M.toggleOn;
          return i.a.createElement(
            tM,
            null,
            i.a.createElement(
              oM,
              null,
              i.a.createElement("input", {
                id: "toggle-heart",
                checked: t,
                onChange: e,
                type: "checkbox"
              }),
              i.a.createElement("label", { htmlFor: "toggle-heart" }, "❤")
            ),
            i.a.createElement(eM, { onClick: e }, "Dixit Keshavbhai Patel"),
            i.a.createElement("img", { src: S.a, alt: "Dixit" }),
            i.a.createElement(aM, null, "just another software engineer"),
            i.a.createElement(J, null),
            i.a.createElement(MM, null),
            i.a.createElement(
              nM,
              null,
              "Made with ",
              i.a.createElement(iM, null),
              " using",
              " ",
              i.a.createElement(
                "a",
                { href: "https://www.gatsbyjs.org/" },
                "Gatsby"
              ),
              " and",
              " ",
              i.a.createElement(
                "a",
                { href: "https://www.styled-components.com/" },
                "Styled Components"
              )
            )
          );
        },
        gM = (function(M) {
          function t() {
            for (
              var t, e = arguments.length, n = new Array(e), i = 0;
              i < e;
              i++
            )
              n[i] = arguments[i];
            return (
              ((t = M.call.apply(M, [this].concat(n)) || this).state = {
                on: !1
              }),
              (t.toggleOn = function() {
                t.setState(function(M) {
                  return { on: !M.on };
                }),
                  (t.toggleHeart = setTimeout(function() {
                    t.setState(function(M) {
                      return { on: !M.on };
                    });
                  }, 1e3));
              }),
              t
            );
          }
          T()(t, M);
          var e = t.prototype;
          return (
            (e.componentWillUnmount = function() {
              clearTimeout(this.toggleHeart);
            }),
            (e.render = function() {
              return i.a.createElement(NM, {
                on: this.state.on,
                toggleOn: this.toggleOn
              });
            }),
            t
          );
        })(n.Component);
      t.default = function() {
        return i.a.createElement(
          w,
          null,
          i.a.createElement(gM, null),
          i.a.createElement(p, null)
        );
      };
    },
    156: function(M, t, e) {
      M.exports = e.p + "static/dixitk13-34e056d5a67771f90b62e1f1ded49baf.jpg";
    },
    158: function(M, t) {
      M.exports =
        "data:image/png;base64,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";
    },
    159: function(M, t) {
      M.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS41MzcgNTExLjUzNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjUzNyA1MTEuNTM3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojNjVCQkYyOyIgZD0iTTM1Ny4wMzgsNDkuMTcyYy01OS4yODQsMC44OTgtMTA1Ljk5Myw1Mi4wOTgtMTA1Ljk5MywxMTEuMzgydjE0LjM3Mg0KCUMxNDUuMDUyLDE1Ni4wNjMsOTIuOTU0LDEyNy4zMTksMzUuNDY2LDY3LjEzN2MtMzQuMTMzLDY2LjQ3LDMuNTkzLDEyMi4xNjEsNDQuOTEyLDE1Mi43MDJjLTI3Ljg0NiwwLTUxLjItMy41OTMtNjkuMTY1LTE5Ljc2MQ0KCWMtMS43OTYtMC44OTgtMy41OTMsMC0yLjY5NSwxLjc5N2MxNS4yNyw1NS42OTEsNjcuMzY4LDk2LjExMiwxMDcuNzg5LDEwNy43ODljLTM2LjgyOCwwLTYxLjA4MSw1LjM4OS04Ny4xMy0xMC43NzkNCgljLTEuNzk2LTAuODk4LTMuNTkzLDAtMi42OTUsMS43OTZjMTkuNzYxLDU0Ljc5Myw1OS4yODQsNzEuODYsMTE2Ljc3Miw3MS44NmMtMjguNzQ0LDIxLjU1OC02Ny4zNjgsNDMuMTE2LTE0MC4xMjYsNDQuOTEyDQoJYy0yLjY5NSwwLTQuNDkxLDMuNTkzLTEuNzk2LDUuMzg5YzI2Ljk0NywyMi40NTYsOTMuNDE4LDM5LjUyMywxODYuODM1LDM5LjUyM2MxNTMuNiwwLDI3OC40NTYtMTM2LjUzMywyNzguNDU2LTMwNS40MDR2LTguOTgyDQoJYzI0LjI1My04Ljk4MiwzNy43MjYtMzAuNTQsNDQuOTEyLTUyLjA5OGMwLTAuODk4LTAuODk4LTEuNzk2LTEuNzk3LTEuNzk2bC01MS4yLDE3Ljk2NWMtMC44OTgsMC0xLjc5Ni0xLjc5Ni0wLjg5OC0yLjY5NQ0KCUM0NzkuMiw5Mi4yODgsNDk1LjM2OCw3MC43Myw1MDIuNTU0LDUwLjA3YzAsMC0wLjg5OC0wLjg5OC0xLjc5Ny0wLjg5OGMtMjQuMjUzLDkuODgxLTQ3LjYwNywxOS43NjEtNjUuNTcyLDI1LjE1MQ0KCWMtMi42OTUsMC44OTgtNi4yODgsMC44OTgtOC45ODItMC44OThDNDE0LjUyNiw2Ny4xMzcsMzc5LjQ5NCw0OS4xNzIsMzU3LjAzOCw0OS4xNzIiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";
    },
    160: function(M, t) {
      M.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMXB4IiBoZWlnaHQ9IjU2cHgiIHZpZXdCb3g9IjAgMCAyMDEgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjIuMiAoOTk4MykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+SW1wb3J0ZWQgTGF5ZXJzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9IkltcG9ydGVkLUxheWVycyIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI2I5MmIyNyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC45ODYsNDMuNjIzIEMyNy4wNjgsMzkuODQ4IDI0LjgxOCwzNi4wMzUgMjAuNDI5LDM2LjAzNSBDMTkuNTksMzYuMDM1IDE4Ljc1MiwzNi4xNzQgMTcuOTgzLDM2LjUyNSBMMTYuNDkyLDMzLjU0MSBDMTguMzA5LDMxLjk4MiAyMS4yNDUsMzAuNzQ2IDI1LjAxOSwzMC43NDYgQzMwLjg5LDMwLjc0NiAzMy45MDMsMzMuNTc0IDM2LjI5NSwzNy4xODQgQzM3LjcxNSwzNC4xMDIgMzguMzksMjkuOTQgMzguMzksMjQuNzgxIEMzOC4zOSwxMS44OTggMzQuMzYxLDUuMjgzIDI0Ljk1LDUuMjgzIEMxNS42NzYsNS4yODMgMTEuNjY5LDExLjg5OCAxMS42NjksMjQuNzgxIEMxMS42NjksMzcuNTk2IDE1LjY3Niw0NC4xNDMgMjQuOTUsNDQuMTQzIEMyNi40MjQsNDQuMTQzIDI3Ljc1OSw0My45ODEgMjguOTg2LDQzLjYyMyBMMjguOTg2LDQzLjYyMyBaIE0zMS4yODUsNDguMTE5IEMyOS4yNTIsNDguNjY0IDI3LjA5Miw0OC45NjUgMjQuOTUsNDguOTY1IEMxMi42MDEsNDguOTY1IDAuNTEsMzkuMTExIDAuNTEsMjQuNzgxIEMwLjUxLDEwLjMxNSAxMi42MDEsMC40NTkgMjQuOTUsMC40NTkgQzM3LjUwNiwwLjQ1OSA0OS40ODEsMTAuMjQ0IDQ5LjQ4MSwyNC43ODEgQzQ5LjQ4MSwzMi44NjcgNDUuNzA4LDM5LjQzOCA0MC4yMjQsNDMuNjg1IEM0MS45OTYsNDYuMzQgNDMuODIsNDguMTAzIDQ2LjM2LDQ4LjEwMyBDNDkuMTMyLDQ4LjEwMyA1MC4yNSw0NS45NjEgNTAuNDM3LDQ0LjI4MSBMNTQuMDQ3LDQ0LjI4MSBDNTQuMjU4LDQ2LjUxOCA1My4xMzksNTUuODE1IDQzLjA1LDU1LjgxNSBDMzYuOTM5LDU1LjgxNSAzMy43MDgsNTIuMjczIDMxLjI4NSw0OC4xMTkgTDMxLjI4NSw0OC4xMTkgWiIgaWQ9IkZpbGwtMSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNTcuNDIsMzUuODI2IEw1Ny40MiwxOS4yNiBDNTcuNDIsMTcuMzczIDU2LjcyMywxNi41MzUgNTQuNTU2LDE2LjUzNSBMNTIuMjQ5LDE2LjUzNSBMNTIuMjQ5LDEyLjEzMyBMNjcuMzIyLDEyLjEzMyBMNjcuMzIyLDM1LjYxNyBDNjcuMzIyLDM5LjU3NiA2OS40NjUsNDEuMzIyIDcyLjcyOCw0MS4zMjIgQzc1LjQwNiw0MS4zMjIgNzguMDg1LDQwLjEzNyA3OS41MywzNy40MzIgTDc5LjUzLDE5LjI2IEM3OS41MywxNy4zNzMgNzguODMxLDE2LjUzNSA3Ni42NjUsMTYuNTM1IEw3NC4yMTksMTYuNTM1IEw3NC4yMTksMTIuMTMzIEw4OS40MzMsMTIuMTMzIEw4OS40MzMsMzYuNzMyIEM4OS40MzMsMzkuMTgyIDkwLjM0MSw0MC4yOTkgOTMuMTM2LDQwLjI5OSBMOTMuNjI2LDQwLjI5OSBMOTMuNjI2LDQ0Ljg0MiBMODAuMDIsNDcuMDA4IEw4MC4wMiw0Mi4zMjYgTDc5Ljc0LDQyLjMyNiBDNzcuMTA4LDQ1LjUzOSA3My40MDQsNDcuNzA3IDY4LjExNSw0Ny43MDcgQzYyLjE3NCw0Ny43MDcgNTcuNDIsNDQuNzAzIDU3LjQyLDM1LjgyNiIgaWQ9IkZpbGwtMiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEzLjQxNSw0My4zMDUgQzExOC43NzQsNDMuMzA1IDEyMC44MSwzOC42NDMgMTIwLjkxNywyOS4yNTYgQzEyMS4wMjEsMjAuMDc0IDExOC43NzQsMTUuNjI5IDExMy40MTUsMTUuNjI5IEMxMDguNzMzLDE1LjYyOSAxMDUuNzk3LDIwLjA3NiAxMDUuNzk3LDI5LjI1NiBDMTA1Ljc5NywzOC42NDUgMTA4LjY4NSw0My4zMDUgMTEzLjQxNSw0My4zMDUgTDExMy40MTUsNDMuMzA1IFogTTExMy40MTUsNDcuNzA3IEMxMDMuNzI0LDQ3LjcwNyA5NC45ODUsNDAuMjk3IDk0Ljk4NSwyOS4yNTYgQzk0Ljk4NSwxOC40MjIgMTAzLjUxMywxMS4yMjMgMTEzLjQxNSwxMS4yMjMgQzEyMy43MzYsMTEuMjIzIDEzMi4wMDcsMTguNTYgMTMyLjAwNywyOS4yNTYgQzEzMi4wMDcsNDAuMjk3IDEyMy43MzYsNDcuNzA3IDExMy40MTUsNDcuNzA3IEwxMTMuNDE1LDQ3LjcwNyBaIiBpZD0iRmlsbC0zIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMzIuMzE5LDQ3LjAwOCBMMTMyLjMxOSw0Mi42MDUgTDEzMy43ODcsNDIuNjA1IEMxMzcuNDIyLDQyLjYwNSAxMzcuNzcxLDQxLjU1NyAxMzcuNzcxLDM4LjQxMiBMMTM3Ljc3MSwxOS4yNiBDMTM3Ljc3MSwxNy4zNzMgMTM2Ljc5MywxNi41MzUgMTM0LjU1NywxNi41MzUgTDEzMi42LDE2LjUzNSBMMTMyLjYsMTIuMTMzIEwxNDYuNDE0LDEyLjEzMyBMMTQ3LjExMywxOS4zMzIgTDE0Ny4zOTQsMTkuMzMyIEMxNDguOTMyLDE0LjE1OCAxNTMuMDU1LDExLjQzMiAxNTYuOTIxLDExLjQzMiBDMTYwLjExMywxMS40MzIgMTYyLjYwNSwxMy4yNSAxNjIuNjA1LDE2LjkzMiBDMTYyLjYwNSwxOS40OTQgMTYxLjM3MywyMi4yMjEgMTU3LjkyNCwyMi4yMjEgQzE1NC44MjQsMjIuMjIxIDE1NC4yMiwyMC4xMjMgMTUxLjY1NiwyMC4xMjMgQzE0OS4zNzQsMjAuMTIzIDE0Ny42MDIsMjIuMjkxIDE0Ny42MDIsMjUuNDgxIEwxNDcuNjAyLDM4LjQxMiBDMTQ3LjYwMiw0MS41NTcgMTQ4LjM3Miw0Mi42MDUgMTUxLjkzNyw0Mi42MDUgTDE1My45NjMsNDIuNjA1IEwxNTMuOTYzLDQ3LjAwOCBMMTMyLjMxOSw0Ny4wMDgiIGlkPSJGaWxsLTQiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE3OC4zMDcsNDEuODgzIEMxODIuNzExLDQxLjg4MyAxODQuNTI3LDM3LjcxMyAxODQuNTI3LDMzLjUyMiBMMTg0LjUyNywyNy45MjggQzE4MS4zMTMsMzEuMjU4IDE3My44MzMsMzEuMzc1IDE3My44MzMsMzcuMzE2IEMxNzMuODMzLDQwLjIyOCAxNzUuNTU5LDQxLjg4MyAxNzguMzA3LDQxLjg4MyBMMTc4LjMwNyw0MS44ODMgWiBNMTg0LjczOCw0MS44NTkgQzE4Mi45Miw0NS4zNTMgMTc5LjE5MSw0Ny43MDcgMTczLjk3NCw0Ny43MDcgQzE2Ny45MTcsNDcuNzA3IDE2NC4wMDMsNDQuNDkgMTY0LjAwMywzOC44MyBDMTY0LjAwMywyNy40NCAxNzkuODY4LDMwLjQ2NyAxODQuNTI3LDIyLjkyIEwxODQuNTI3LDIyLjEwMyBDMTg0LjUyNywxNi4zMDMgMTgyLjI0NCwxNS4zOTUgMTc5LjcyOCwxNS4zOTUgQzE3Mi42NjksMTUuMzk1IDE3NS44ODMsMjIuOTg2IDE2OS4zODMsMjIuOTg2IEMxNjYuMjYyLDIyLjk4NiAxNjUuMDUsMjEuMTAyIDE2NS4wNSwxOC45ODIgQzE2NS4wNSwxNC42OTUgMTcwLjE3NiwxMS4yMjMgMTc5Ljc5OSwxMS4yMjMgQzE4OC45MDYsMTEuMjIzIDE5NC40OTksMTMuNzQgMTk0LjQ5OSwyMi44MDMgTDE5NC40OTksMzcuMjcgQzE5NC40OTksMzkuNTA2IDE5NS4zMTUsNDAuNzE5IDE5Ny4yNzIsNDAuNzE5IEMxOTguMTEsNDAuNzE5IDE5OC44MDksNDAuNDg2IDE5OS4zNDQsNDAuMTEzIEwyMDAuNTEsNDIuOTUzIEMxOTkuNTU0LDQ0LjQyMiAxOTcuMDE0LDQ3LjAwOCAxOTIuMTkxLDQ3LjAwOCBDMTg3Ljk5OSw0Ny4wMDggMTg1LjM2Niw0NS4wNTEgMTg1LjAxNiw0MS44NTkgTDE4NC43MzgsNDEuODU5IEwxODQuNzM4LDQxLjg1OSBaIiBpZD0iRmlsbC01IiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
    },
    161: function(M, t, e) {
      M.exports = e.p + "static/github-5d292e21532ea5857531cdb8b0180637.jpg";
    },
    162: function(M, t, e) {
      M.exports =
        e.p +
        "static/Dixit_Keshavbhai_Patel_2018-00d9413ffe456c72bb50ede90dc578e4.pdf";
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-fc9c253f9a5c429dee93.js.map
