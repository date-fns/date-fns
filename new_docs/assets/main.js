;(() => {
  var Ce = Object.create
  var ue = Object.defineProperty
  var Pe = Object.getOwnPropertyDescriptor
  var Oe = Object.getOwnPropertyNames
  var Re = Object.getPrototypeOf,
    _e = Object.prototype.hasOwnProperty
  var Me = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports)
  var De = (t, e, r, n) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let i of Oe(e))
        !_e.call(t, i) &&
          i !== r &&
          ue(t, i, {
            get: () => e[i],
            enumerable: !(n = Pe(e, i)) || n.enumerable,
          })
    return t
  }
  var Fe = (t, e, r) => (
    (r = t != null ? Ce(Re(t)) : {}),
    De(
      e || !t || !t.__esModule
        ? ue(r, 'default', { value: t, enumerable: !0 })
        : r,
      t
    )
  )
  var pe = Me((de, fe) => {
    ;(function () {
      var t = function (e) {
        var r = new t.Builder()
        return (
          r.pipeline.add(t.trimmer, t.stopWordFilter, t.stemmer),
          r.searchPipeline.add(t.stemmer),
          e.call(r, r),
          r.build()
        )
      }
      t.version = '2.3.9'
      ;(t.utils = {}),
        (t.utils.warn = (function (e) {
          return function (r) {
            e.console && console.warn && console.warn(r)
          }
        })(this)),
        (t.utils.asString = function (e) {
          return e == null ? '' : e.toString()
        }),
        (t.utils.clone = function (e) {
          if (e == null) return e
          for (
            var r = Object.create(null), n = Object.keys(e), i = 0;
            i < n.length;
            i++
          ) {
            var s = n[i],
              o = e[s]
            if (Array.isArray(o)) {
              r[s] = o.slice()
              continue
            }
            if (
              typeof o == 'string' ||
              typeof o == 'number' ||
              typeof o == 'boolean'
            ) {
              r[s] = o
              continue
            }
            throw new TypeError(
              'clone is not deep and does not support nested objects'
            )
          }
          return r
        }),
        (t.FieldRef = function (e, r, n) {
          ;(this.docRef = e), (this.fieldName = r), (this._stringValue = n)
        }),
        (t.FieldRef.joiner = '/'),
        (t.FieldRef.fromString = function (e) {
          var r = e.indexOf(t.FieldRef.joiner)
          if (r === -1) throw 'malformed field ref string'
          var n = e.slice(0, r),
            i = e.slice(r + 1)
          return new t.FieldRef(i, n, e)
        }),
        (t.FieldRef.prototype.toString = function () {
          return (
            this._stringValue == null &&
              (this._stringValue =
                this.fieldName + t.FieldRef.joiner + this.docRef),
            this._stringValue
          )
        })
      ;(t.Set = function (e) {
        if (((this.elements = Object.create(null)), e)) {
          this.length = e.length
          for (var r = 0; r < this.length; r++) this.elements[e[r]] = !0
        } else this.length = 0
      }),
        (t.Set.complete = {
          intersect: function (e) {
            return e
          },
          union: function () {
            return this
          },
          contains: function () {
            return !0
          },
        }),
        (t.Set.empty = {
          intersect: function () {
            return this
          },
          union: function (e) {
            return e
          },
          contains: function () {
            return !1
          },
        }),
        (t.Set.prototype.contains = function (e) {
          return !!this.elements[e]
        }),
        (t.Set.prototype.intersect = function (e) {
          var r,
            n,
            i,
            s = []
          if (e === t.Set.complete) return this
          if (e === t.Set.empty) return e
          this.length < e.length
            ? ((r = this), (n = e))
            : ((r = e), (n = this)),
            (i = Object.keys(r.elements))
          for (var o = 0; o < i.length; o++) {
            var a = i[o]
            a in n.elements && s.push(a)
          }
          return new t.Set(s)
        }),
        (t.Set.prototype.union = function (e) {
          return e === t.Set.complete
            ? t.Set.complete
            : e === t.Set.empty
            ? this
            : new t.Set(
                Object.keys(this.elements).concat(Object.keys(e.elements))
              )
        }),
        (t.idf = function (e, r) {
          var n = 0
          for (var i in e) i != '_index' && (n += Object.keys(e[i]).length)
          var s = (r - n + 0.5) / (n + 0.5)
          return Math.log(1 + Math.abs(s))
        }),
        (t.Token = function (e, r) {
          ;(this.str = e || ''), (this.metadata = r || {})
        }),
        (t.Token.prototype.toString = function () {
          return this.str
        }),
        (t.Token.prototype.update = function (e) {
          return (this.str = e(this.str, this.metadata)), this
        }),
        (t.Token.prototype.clone = function (e) {
          return (
            (e =
              e ||
              function (r) {
                return r
              }),
            new t.Token(e(this.str, this.metadata), this.metadata)
          )
        })
      ;(t.tokenizer = function (e, r) {
        if (e == null || e == null) return []
        if (Array.isArray(e))
          return e.map(function (p) {
            return new t.Token(
              t.utils.asString(p).toLowerCase(),
              t.utils.clone(r)
            )
          })
        for (
          var n = e.toString().toLowerCase(),
            i = n.length,
            s = [],
            o = 0,
            a = 0;
          o <= i;
          o++
        ) {
          var u = n.charAt(o),
            l = o - a
          if (u.match(t.tokenizer.separator) || o == i) {
            if (l > 0) {
              var h = t.utils.clone(r) || {}
              ;(h.position = [a, l]),
                (h.index = s.length),
                s.push(new t.Token(n.slice(a, o), h))
            }
            a = o + 1
          }
        }
        return s
      }),
        (t.tokenizer.separator = /[\s\-]+/)
      ;(t.Pipeline = function () {
        this._stack = []
      }),
        (t.Pipeline.registeredFunctions = Object.create(null)),
        (t.Pipeline.registerFunction = function (e, r) {
          r in this.registeredFunctions &&
            t.utils.warn('Overwriting existing registered function: ' + r),
            (e.label = r),
            (t.Pipeline.registeredFunctions[e.label] = e)
        }),
        (t.Pipeline.warnIfFunctionNotRegistered = function (e) {
          var r = e.label && e.label in this.registeredFunctions
          r ||
            t.utils.warn(
              `Function is not registered with pipeline. This may cause problems when serialising the index.
`,
              e
            )
        }),
        (t.Pipeline.load = function (e) {
          var r = new t.Pipeline()
          return (
            e.forEach(function (n) {
              var i = t.Pipeline.registeredFunctions[n]
              if (i) r.add(i)
              else throw new Error('Cannot load unregistered function: ' + n)
            }),
            r
          )
        }),
        (t.Pipeline.prototype.add = function () {
          var e = Array.prototype.slice.call(arguments)
          e.forEach(function (r) {
            t.Pipeline.warnIfFunctionNotRegistered(r), this._stack.push(r)
          }, this)
        }),
        (t.Pipeline.prototype.after = function (e, r) {
          t.Pipeline.warnIfFunctionNotRegistered(r)
          var n = this._stack.indexOf(e)
          if (n == -1) throw new Error('Cannot find existingFn')
          ;(n = n + 1), this._stack.splice(n, 0, r)
        }),
        (t.Pipeline.prototype.before = function (e, r) {
          t.Pipeline.warnIfFunctionNotRegistered(r)
          var n = this._stack.indexOf(e)
          if (n == -1) throw new Error('Cannot find existingFn')
          this._stack.splice(n, 0, r)
        }),
        (t.Pipeline.prototype.remove = function (e) {
          var r = this._stack.indexOf(e)
          r != -1 && this._stack.splice(r, 1)
        }),
        (t.Pipeline.prototype.run = function (e) {
          for (var r = this._stack.length, n = 0; n < r; n++) {
            for (var i = this._stack[n], s = [], o = 0; o < e.length; o++) {
              var a = i(e[o], o, e)
              if (!(a == null || a === ''))
                if (Array.isArray(a))
                  for (var u = 0; u < a.length; u++) s.push(a[u])
                else s.push(a)
            }
            e = s
          }
          return e
        }),
        (t.Pipeline.prototype.runString = function (e, r) {
          var n = new t.Token(e, r)
          return this.run([n]).map(function (i) {
            return i.toString()
          })
        }),
        (t.Pipeline.prototype.reset = function () {
          this._stack = []
        }),
        (t.Pipeline.prototype.toJSON = function () {
          return this._stack.map(function (e) {
            return t.Pipeline.warnIfFunctionNotRegistered(e), e.label
          })
        })
      ;(t.Vector = function (e) {
        ;(this._magnitude = 0), (this.elements = e || [])
      }),
        (t.Vector.prototype.positionForIndex = function (e) {
          if (this.elements.length == 0) return 0
          for (
            var r = 0,
              n = this.elements.length / 2,
              i = n - r,
              s = Math.floor(i / 2),
              o = this.elements[s * 2];
            i > 1 && (o < e && (r = s), o > e && (n = s), o != e);

          )
            (i = n - r), (s = r + Math.floor(i / 2)), (o = this.elements[s * 2])
          if (o == e || o > e) return s * 2
          if (o < e) return (s + 1) * 2
        }),
        (t.Vector.prototype.insert = function (e, r) {
          this.upsert(e, r, function () {
            throw 'duplicate index'
          })
        }),
        (t.Vector.prototype.upsert = function (e, r, n) {
          this._magnitude = 0
          var i = this.positionForIndex(e)
          this.elements[i] == e
            ? (this.elements[i + 1] = n(this.elements[i + 1], r))
            : this.elements.splice(i, 0, e, r)
        }),
        (t.Vector.prototype.magnitude = function () {
          if (this._magnitude) return this._magnitude
          for (var e = 0, r = this.elements.length, n = 1; n < r; n += 2) {
            var i = this.elements[n]
            e += i * i
          }
          return (this._magnitude = Math.sqrt(e))
        }),
        (t.Vector.prototype.dot = function (e) {
          for (
            var r = 0,
              n = this.elements,
              i = e.elements,
              s = n.length,
              o = i.length,
              a = 0,
              u = 0,
              l = 0,
              h = 0;
            l < s && h < o;

          )
            (a = n[l]),
              (u = i[h]),
              a < u
                ? (l += 2)
                : a > u
                ? (h += 2)
                : a == u && ((r += n[l + 1] * i[h + 1]), (l += 2), (h += 2))
          return r
        }),
        (t.Vector.prototype.similarity = function (e) {
          return this.dot(e) / this.magnitude() || 0
        }),
        (t.Vector.prototype.toArray = function () {
          for (
            var e = new Array(this.elements.length / 2), r = 1, n = 0;
            r < this.elements.length;
            r += 2, n++
          )
            e[n] = this.elements[r]
          return e
        }),
        (t.Vector.prototype.toJSON = function () {
          return this.elements
        })
      ;(t.stemmer = (function () {
        var e = {
            ational: 'ate',
            tional: 'tion',
            enci: 'ence',
            anci: 'ance',
            izer: 'ize',
            bli: 'ble',
            alli: 'al',
            entli: 'ent',
            eli: 'e',
            ousli: 'ous',
            ization: 'ize',
            ation: 'ate',
            ator: 'ate',
            alism: 'al',
            iveness: 'ive',
            fulness: 'ful',
            ousness: 'ous',
            aliti: 'al',
            iviti: 'ive',
            biliti: 'ble',
            logi: 'log',
          },
          r = {
            icate: 'ic',
            ative: '',
            alize: 'al',
            iciti: 'ic',
            ical: 'ic',
            ful: '',
            ness: '',
          },
          n = '[^aeiou]',
          i = '[aeiouy]',
          s = n + '[^aeiouy]*',
          o = i + '[aeiou]*',
          a = '^(' + s + ')?' + o + s,
          u = '^(' + s + ')?' + o + s + '(' + o + ')?$',
          l = '^(' + s + ')?' + o + s + o + s,
          h = '^(' + s + ')?' + i,
          p = new RegExp(a),
          v = new RegExp(l),
          b = new RegExp(u),
          y = new RegExp(h),
          E = /^(.+?)(ss|i)es$/,
          f = /^(.+?)([^s])s$/,
          m = /^(.+?)eed$/,
          T = /^(.+?)(ed|ing)$/,
          w = /.$/,
          I = /(at|bl|iz)$/,
          M = new RegExp('([^aeiouylsz])\\1$'),
          B = new RegExp('^' + s + i + '[^aeiouwxy]$'),
          V = /^(.+?[^aeiou])y$/,
          q = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
          $ = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
          H = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
          W = /^(.+?)(s|t)(ion)$/,
          P = /^(.+?)e$/,
          U = /ll$/,
          G = new RegExp('^' + s + i + '[^aeiouwxy]$'),
          z = function (c) {
            var g, O, S, d, x, R, F
            if (c.length < 3) return c
            if (
              ((S = c.substr(0, 1)),
              S == 'y' && (c = S.toUpperCase() + c.substr(1)),
              (d = E),
              (x = f),
              d.test(c)
                ? (c = c.replace(d, '$1$2'))
                : x.test(c) && (c = c.replace(x, '$1$2')),
              (d = m),
              (x = T),
              d.test(c))
            ) {
              var L = d.exec(c)
              ;(d = p), d.test(L[1]) && ((d = w), (c = c.replace(d, '')))
            } else if (x.test(c)) {
              var L = x.exec(c)
              ;(g = L[1]),
                (x = y),
                x.test(g) &&
                  ((c = g),
                  (x = I),
                  (R = M),
                  (F = B),
                  x.test(c)
                    ? (c = c + 'e')
                    : R.test(c)
                    ? ((d = w), (c = c.replace(d, '')))
                    : F.test(c) && (c = c + 'e'))
            }
            if (((d = V), d.test(c))) {
              var L = d.exec(c)
              ;(g = L[1]), (c = g + 'i')
            }
            if (((d = q), d.test(c))) {
              var L = d.exec(c)
              ;(g = L[1]), (O = L[2]), (d = p), d.test(g) && (c = g + e[O])
            }
            if (((d = $), d.test(c))) {
              var L = d.exec(c)
              ;(g = L[1]), (O = L[2]), (d = p), d.test(g) && (c = g + r[O])
            }
            if (((d = H), (x = W), d.test(c))) {
              var L = d.exec(c)
              ;(g = L[1]), (d = v), d.test(g) && (c = g)
            } else if (x.test(c)) {
              var L = x.exec(c)
              ;(g = L[1] + L[2]), (x = v), x.test(g) && (c = g)
            }
            if (((d = P), d.test(c))) {
              var L = d.exec(c)
              ;(g = L[1]),
                (d = v),
                (x = b),
                (R = G),
                (d.test(g) || (x.test(g) && !R.test(g))) && (c = g)
            }
            return (
              (d = U),
              (x = v),
              d.test(c) && x.test(c) && ((d = w), (c = c.replace(d, ''))),
              S == 'y' && (c = S.toLowerCase() + c.substr(1)),
              c
            )
          }
        return function (D) {
          return D.update(z)
        }
      })()),
        t.Pipeline.registerFunction(t.stemmer, 'stemmer')
      ;(t.generateStopWordFilter = function (e) {
        var r = e.reduce(function (n, i) {
          return (n[i] = i), n
        }, {})
        return function (n) {
          if (n && r[n.toString()] !== n.toString()) return n
        }
      }),
        (t.stopWordFilter = t.generateStopWordFilter([
          'a',
          'able',
          'about',
          'across',
          'after',
          'all',
          'almost',
          'also',
          'am',
          'among',
          'an',
          'and',
          'any',
          'are',
          'as',
          'at',
          'be',
          'because',
          'been',
          'but',
          'by',
          'can',
          'cannot',
          'could',
          'dear',
          'did',
          'do',
          'does',
          'either',
          'else',
          'ever',
          'every',
          'for',
          'from',
          'get',
          'got',
          'had',
          'has',
          'have',
          'he',
          'her',
          'hers',
          'him',
          'his',
          'how',
          'however',
          'i',
          'if',
          'in',
          'into',
          'is',
          'it',
          'its',
          'just',
          'least',
          'let',
          'like',
          'likely',
          'may',
          'me',
          'might',
          'most',
          'must',
          'my',
          'neither',
          'no',
          'nor',
          'not',
          'of',
          'off',
          'often',
          'on',
          'only',
          'or',
          'other',
          'our',
          'own',
          'rather',
          'said',
          'say',
          'says',
          'she',
          'should',
          'since',
          'so',
          'some',
          'than',
          'that',
          'the',
          'their',
          'them',
          'then',
          'there',
          'these',
          'they',
          'this',
          'tis',
          'to',
          'too',
          'twas',
          'us',
          'wants',
          'was',
          'we',
          'were',
          'what',
          'when',
          'where',
          'which',
          'while',
          'who',
          'whom',
          'why',
          'will',
          'with',
          'would',
          'yet',
          'you',
          'your',
        ])),
        t.Pipeline.registerFunction(t.stopWordFilter, 'stopWordFilter')
      ;(t.trimmer = function (e) {
        return e.update(function (r) {
          return r.replace(/^\W+/, '').replace(/\W+$/, '')
        })
      }),
        t.Pipeline.registerFunction(t.trimmer, 'trimmer')
      ;(t.TokenSet = function () {
        ;(this.final = !1),
          (this.edges = {}),
          (this.id = t.TokenSet._nextId),
          (t.TokenSet._nextId += 1)
      }),
        (t.TokenSet._nextId = 1),
        (t.TokenSet.fromArray = function (e) {
          for (
            var r = new t.TokenSet.Builder(), n = 0, i = e.length;
            n < i;
            n++
          )
            r.insert(e[n])
          return r.finish(), r.root
        }),
        (t.TokenSet.fromClause = function (e) {
          return 'editDistance' in e
            ? t.TokenSet.fromFuzzyString(e.term, e.editDistance)
            : t.TokenSet.fromString(e.term)
        }),
        (t.TokenSet.fromFuzzyString = function (e, r) {
          for (
            var n = new t.TokenSet(),
              i = [{ node: n, editsRemaining: r, str: e }];
            i.length;

          ) {
            var s = i.pop()
            if (s.str.length > 0) {
              var o = s.str.charAt(0),
                a
              o in s.node.edges
                ? (a = s.node.edges[o])
                : ((a = new t.TokenSet()), (s.node.edges[o] = a)),
                s.str.length == 1 && (a.final = !0),
                i.push({
                  node: a,
                  editsRemaining: s.editsRemaining,
                  str: s.str.slice(1),
                })
            }
            if (s.editsRemaining != 0) {
              if ('*' in s.node.edges) var u = s.node.edges['*']
              else {
                var u = new t.TokenSet()
                s.node.edges['*'] = u
              }
              if (
                (s.str.length == 0 && (u.final = !0),
                i.push({
                  node: u,
                  editsRemaining: s.editsRemaining - 1,
                  str: s.str,
                }),
                s.str.length > 1 &&
                  i.push({
                    node: s.node,
                    editsRemaining: s.editsRemaining - 1,
                    str: s.str.slice(1),
                  }),
                s.str.length == 1 && (s.node.final = !0),
                s.str.length >= 1)
              ) {
                if ('*' in s.node.edges) var l = s.node.edges['*']
                else {
                  var l = new t.TokenSet()
                  s.node.edges['*'] = l
                }
                s.str.length == 1 && (l.final = !0),
                  i.push({
                    node: l,
                    editsRemaining: s.editsRemaining - 1,
                    str: s.str.slice(1),
                  })
              }
              if (s.str.length > 1) {
                var h = s.str.charAt(0),
                  p = s.str.charAt(1),
                  v
                p in s.node.edges
                  ? (v = s.node.edges[p])
                  : ((v = new t.TokenSet()), (s.node.edges[p] = v)),
                  s.str.length == 1 && (v.final = !0),
                  i.push({
                    node: v,
                    editsRemaining: s.editsRemaining - 1,
                    str: h + s.str.slice(2),
                  })
              }
            }
          }
          return n
        }),
        (t.TokenSet.fromString = function (e) {
          for (
            var r = new t.TokenSet(), n = r, i = 0, s = e.length;
            i < s;
            i++
          ) {
            var o = e[i],
              a = i == s - 1
            if (o == '*') (r.edges[o] = r), (r.final = a)
            else {
              var u = new t.TokenSet()
              ;(u.final = a), (r.edges[o] = u), (r = u)
            }
          }
          return n
        }),
        (t.TokenSet.prototype.toArray = function () {
          for (var e = [], r = [{ prefix: '', node: this }]; r.length; ) {
            var n = r.pop(),
              i = Object.keys(n.node.edges),
              s = i.length
            n.node.final && (n.prefix.charAt(0), e.push(n.prefix))
            for (var o = 0; o < s; o++) {
              var a = i[o]
              r.push({ prefix: n.prefix.concat(a), node: n.node.edges[a] })
            }
          }
          return e
        }),
        (t.TokenSet.prototype.toString = function () {
          if (this._str) return this._str
          for (
            var e = this.final ? '1' : '0',
              r = Object.keys(this.edges).sort(),
              n = r.length,
              i = 0;
            i < n;
            i++
          ) {
            var s = r[i],
              o = this.edges[s]
            e = e + s + o.id
          }
          return e
        }),
        (t.TokenSet.prototype.intersect = function (e) {
          for (
            var r = new t.TokenSet(),
              n = void 0,
              i = [{ qNode: e, output: r, node: this }];
            i.length;

          ) {
            n = i.pop()
            for (
              var s = Object.keys(n.qNode.edges),
                o = s.length,
                a = Object.keys(n.node.edges),
                u = a.length,
                l = 0;
              l < o;
              l++
            )
              for (var h = s[l], p = 0; p < u; p++) {
                var v = a[p]
                if (v == h || h == '*') {
                  var b = n.node.edges[v],
                    y = n.qNode.edges[h],
                    E = b.final && y.final,
                    f = void 0
                  v in n.output.edges
                    ? ((f = n.output.edges[v]), (f.final = f.final || E))
                    : ((f = new t.TokenSet()),
                      (f.final = E),
                      (n.output.edges[v] = f)),
                    i.push({ qNode: y, output: f, node: b })
                }
              }
          }
          return r
        }),
        (t.TokenSet.Builder = function () {
          ;(this.previousWord = ''),
            (this.root = new t.TokenSet()),
            (this.uncheckedNodes = []),
            (this.minimizedNodes = {})
        }),
        (t.TokenSet.Builder.prototype.insert = function (e) {
          var r,
            n = 0
          if (e < this.previousWord)
            throw new Error('Out of order word insertion')
          for (
            var i = 0;
            i < e.length &&
            i < this.previousWord.length &&
            e[i] == this.previousWord[i];
            i++
          )
            n++
          this.minimize(n),
            this.uncheckedNodes.length == 0
              ? (r = this.root)
              : (r = this.uncheckedNodes[this.uncheckedNodes.length - 1].child)
          for (var i = n; i < e.length; i++) {
            var s = new t.TokenSet(),
              o = e[i]
            ;(r.edges[o] = s),
              this.uncheckedNodes.push({ parent: r, char: o, child: s }),
              (r = s)
          }
          ;(r.final = !0), (this.previousWord = e)
        }),
        (t.TokenSet.Builder.prototype.finish = function () {
          this.minimize(0)
        }),
        (t.TokenSet.Builder.prototype.minimize = function (e) {
          for (var r = this.uncheckedNodes.length - 1; r >= e; r--) {
            var n = this.uncheckedNodes[r],
              i = n.child.toString()
            i in this.minimizedNodes
              ? (n.parent.edges[n.char] = this.minimizedNodes[i])
              : ((n.child._str = i), (this.minimizedNodes[i] = n.child)),
              this.uncheckedNodes.pop()
          }
        })
      ;(t.Index = function (e) {
        ;(this.invertedIndex = e.invertedIndex),
          (this.fieldVectors = e.fieldVectors),
          (this.tokenSet = e.tokenSet),
          (this.fields = e.fields),
          (this.pipeline = e.pipeline)
      }),
        (t.Index.prototype.search = function (e) {
          return this.query(function (r) {
            var n = new t.QueryParser(e, r)
            n.parse()
          })
        }),
        (t.Index.prototype.query = function (e) {
          for (
            var r = new t.Query(this.fields),
              n = Object.create(null),
              i = Object.create(null),
              s = Object.create(null),
              o = Object.create(null),
              a = Object.create(null),
              u = 0;
            u < this.fields.length;
            u++
          )
            i[this.fields[u]] = new t.Vector()
          e.call(r, r)
          for (var u = 0; u < r.clauses.length; u++) {
            var l = r.clauses[u],
              h = null,
              p = t.Set.empty
            l.usePipeline
              ? (h = this.pipeline.runString(l.term, { fields: l.fields }))
              : (h = [l.term])
            for (var v = 0; v < h.length; v++) {
              var b = h[v]
              l.term = b
              var y = t.TokenSet.fromClause(l),
                E = this.tokenSet.intersect(y).toArray()
              if (E.length === 0 && l.presence === t.Query.presence.REQUIRED) {
                for (var f = 0; f < l.fields.length; f++) {
                  var m = l.fields[f]
                  o[m] = t.Set.empty
                }
                break
              }
              for (var T = 0; T < E.length; T++)
                for (
                  var w = E[T], I = this.invertedIndex[w], M = I._index, f = 0;
                  f < l.fields.length;
                  f++
                ) {
                  var m = l.fields[f],
                    B = I[m],
                    V = Object.keys(B),
                    q = w + '/' + m,
                    $ = new t.Set(V)
                  if (
                    (l.presence == t.Query.presence.REQUIRED &&
                      ((p = p.union($)),
                      o[m] === void 0 && (o[m] = t.Set.complete)),
                    l.presence == t.Query.presence.PROHIBITED)
                  ) {
                    a[m] === void 0 && (a[m] = t.Set.empty),
                      (a[m] = a[m].union($))
                    continue
                  }
                  if (
                    (i[m].upsert(M, l.boost, function (Qe, Ie) {
                      return Qe + Ie
                    }),
                    !s[q])
                  ) {
                    for (var H = 0; H < V.length; H++) {
                      var W = V[H],
                        P = new t.FieldRef(W, m),
                        U = B[W],
                        G
                      ;(G = n[P]) === void 0
                        ? (n[P] = new t.MatchData(w, m, U))
                        : G.add(w, m, U)
                    }
                    s[q] = !0
                  }
                }
            }
            if (l.presence === t.Query.presence.REQUIRED)
              for (var f = 0; f < l.fields.length; f++) {
                var m = l.fields[f]
                o[m] = o[m].intersect(p)
              }
          }
          for (
            var z = t.Set.complete, D = t.Set.empty, u = 0;
            u < this.fields.length;
            u++
          ) {
            var m = this.fields[u]
            o[m] && (z = z.intersect(o[m])), a[m] && (D = D.union(a[m]))
          }
          var c = Object.keys(n),
            g = [],
            O = Object.create(null)
          if (r.isNegated()) {
            c = Object.keys(this.fieldVectors)
            for (var u = 0; u < c.length; u++) {
              var P = c[u],
                S = t.FieldRef.fromString(P)
              n[P] = new t.MatchData()
            }
          }
          for (var u = 0; u < c.length; u++) {
            var S = t.FieldRef.fromString(c[u]),
              d = S.docRef
            if (!!z.contains(d) && !D.contains(d)) {
              var x = this.fieldVectors[S],
                R = i[S.fieldName].similarity(x),
                F
              if ((F = O[d]) !== void 0)
                (F.score += R), F.matchData.combine(n[S])
              else {
                var L = { ref: d, score: R, matchData: n[S] }
                ;(O[d] = L), g.push(L)
              }
            }
          }
          return g.sort(function (Se, ke) {
            return ke.score - Se.score
          })
        }),
        (t.Index.prototype.toJSON = function () {
          var e = Object.keys(this.invertedIndex)
              .sort()
              .map(function (n) {
                return [n, this.invertedIndex[n]]
              }, this),
            r = Object.keys(this.fieldVectors).map(function (n) {
              return [n, this.fieldVectors[n].toJSON()]
            }, this)
          return {
            version: t.version,
            fields: this.fields,
            fieldVectors: r,
            invertedIndex: e,
            pipeline: this.pipeline.toJSON(),
          }
        }),
        (t.Index.load = function (e) {
          var r = {},
            n = {},
            i = e.fieldVectors,
            s = Object.create(null),
            o = e.invertedIndex,
            a = new t.TokenSet.Builder(),
            u = t.Pipeline.load(e.pipeline)
          e.version != t.version &&
            t.utils.warn(
              "Version mismatch when loading serialised index. Current version of lunr '" +
                t.version +
                "' does not match serialized index '" +
                e.version +
                "'"
            )
          for (var l = 0; l < i.length; l++) {
            var h = i[l],
              p = h[0],
              v = h[1]
            n[p] = new t.Vector(v)
          }
          for (var l = 0; l < o.length; l++) {
            var h = o[l],
              b = h[0],
              y = h[1]
            a.insert(b), (s[b] = y)
          }
          return (
            a.finish(),
            (r.fields = e.fields),
            (r.fieldVectors = n),
            (r.invertedIndex = s),
            (r.tokenSet = a.root),
            (r.pipeline = u),
            new t.Index(r)
          )
        })
      ;(t.Builder = function () {
        ;(this._ref = 'id'),
          (this._fields = Object.create(null)),
          (this._documents = Object.create(null)),
          (this.invertedIndex = Object.create(null)),
          (this.fieldTermFrequencies = {}),
          (this.fieldLengths = {}),
          (this.tokenizer = t.tokenizer),
          (this.pipeline = new t.Pipeline()),
          (this.searchPipeline = new t.Pipeline()),
          (this.documentCount = 0),
          (this._b = 0.75),
          (this._k1 = 1.2),
          (this.termIndex = 0),
          (this.metadataWhitelist = [])
      }),
        (t.Builder.prototype.ref = function (e) {
          this._ref = e
        }),
        (t.Builder.prototype.field = function (e, r) {
          if (/\//.test(e))
            throw new RangeError(
              "Field '" + e + "' contains illegal character '/'"
            )
          this._fields[e] = r || {}
        }),
        (t.Builder.prototype.b = function (e) {
          e < 0 ? (this._b = 0) : e > 1 ? (this._b = 1) : (this._b = e)
        }),
        (t.Builder.prototype.k1 = function (e) {
          this._k1 = e
        }),
        (t.Builder.prototype.add = function (e, r) {
          var n = e[this._ref],
            i = Object.keys(this._fields)
          ;(this._documents[n] = r || {}), (this.documentCount += 1)
          for (var s = 0; s < i.length; s++) {
            var o = i[s],
              a = this._fields[o].extractor,
              u = a ? a(e) : e[o],
              l = this.tokenizer(u, { fields: [o] }),
              h = this.pipeline.run(l),
              p = new t.FieldRef(n, o),
              v = Object.create(null)
            ;(this.fieldTermFrequencies[p] = v),
              (this.fieldLengths[p] = 0),
              (this.fieldLengths[p] += h.length)
            for (var b = 0; b < h.length; b++) {
              var y = h[b]
              if (
                (v[y] == null && (v[y] = 0),
                (v[y] += 1),
                this.invertedIndex[y] == null)
              ) {
                var E = Object.create(null)
                ;(E._index = this.termIndex), (this.termIndex += 1)
                for (var f = 0; f < i.length; f++) E[i[f]] = Object.create(null)
                this.invertedIndex[y] = E
              }
              this.invertedIndex[y][o][n] == null &&
                (this.invertedIndex[y][o][n] = Object.create(null))
              for (var m = 0; m < this.metadataWhitelist.length; m++) {
                var T = this.metadataWhitelist[m],
                  w = y.metadata[T]
                this.invertedIndex[y][o][n][T] == null &&
                  (this.invertedIndex[y][o][n][T] = []),
                  this.invertedIndex[y][o][n][T].push(w)
              }
            }
          }
        }),
        (t.Builder.prototype.calculateAverageFieldLengths = function () {
          for (
            var e = Object.keys(this.fieldLengths),
              r = e.length,
              n = {},
              i = {},
              s = 0;
            s < r;
            s++
          ) {
            var o = t.FieldRef.fromString(e[s]),
              a = o.fieldName
            i[a] || (i[a] = 0),
              (i[a] += 1),
              n[a] || (n[a] = 0),
              (n[a] += this.fieldLengths[o])
          }
          for (var u = Object.keys(this._fields), s = 0; s < u.length; s++) {
            var l = u[s]
            n[l] = n[l] / i[l]
          }
          this.averageFieldLength = n
        }),
        (t.Builder.prototype.createFieldVectors = function () {
          for (
            var e = {},
              r = Object.keys(this.fieldTermFrequencies),
              n = r.length,
              i = Object.create(null),
              s = 0;
            s < n;
            s++
          ) {
            for (
              var o = t.FieldRef.fromString(r[s]),
                a = o.fieldName,
                u = this.fieldLengths[o],
                l = new t.Vector(),
                h = this.fieldTermFrequencies[o],
                p = Object.keys(h),
                v = p.length,
                b = this._fields[a].boost || 1,
                y = this._documents[o.docRef].boost || 1,
                E = 0;
              E < v;
              E++
            ) {
              var f = p[E],
                m = h[f],
                T = this.invertedIndex[f]._index,
                w,
                I,
                M
              i[f] === void 0
                ? ((w = t.idf(this.invertedIndex[f], this.documentCount)),
                  (i[f] = w))
                : (w = i[f]),
                (I =
                  (w * ((this._k1 + 1) * m)) /
                  (this._k1 *
                    (1 - this._b + this._b * (u / this.averageFieldLength[a])) +
                    m)),
                (I *= b),
                (I *= y),
                (M = Math.round(I * 1e3) / 1e3),
                l.insert(T, M)
            }
            e[o] = l
          }
          this.fieldVectors = e
        }),
        (t.Builder.prototype.createTokenSet = function () {
          this.tokenSet = t.TokenSet.fromArray(
            Object.keys(this.invertedIndex).sort()
          )
        }),
        (t.Builder.prototype.build = function () {
          return (
            this.calculateAverageFieldLengths(),
            this.createFieldVectors(),
            this.createTokenSet(),
            new t.Index({
              invertedIndex: this.invertedIndex,
              fieldVectors: this.fieldVectors,
              tokenSet: this.tokenSet,
              fields: Object.keys(this._fields),
              pipeline: this.searchPipeline,
            })
          )
        }),
        (t.Builder.prototype.use = function (e) {
          var r = Array.prototype.slice.call(arguments, 1)
          r.unshift(this), e.apply(this, r)
        }),
        (t.MatchData = function (e, r, n) {
          for (
            var i = Object.create(null), s = Object.keys(n || {}), o = 0;
            o < s.length;
            o++
          ) {
            var a = s[o]
            i[a] = n[a].slice()
          }
          ;(this.metadata = Object.create(null)),
            e !== void 0 &&
              ((this.metadata[e] = Object.create(null)),
              (this.metadata[e][r] = i))
        }),
        (t.MatchData.prototype.combine = function (e) {
          for (var r = Object.keys(e.metadata), n = 0; n < r.length; n++) {
            var i = r[n],
              s = Object.keys(e.metadata[i])
            this.metadata[i] == null && (this.metadata[i] = Object.create(null))
            for (var o = 0; o < s.length; o++) {
              var a = s[o],
                u = Object.keys(e.metadata[i][a])
              this.metadata[i][a] == null &&
                (this.metadata[i][a] = Object.create(null))
              for (var l = 0; l < u.length; l++) {
                var h = u[l]
                this.metadata[i][a][h] == null
                  ? (this.metadata[i][a][h] = e.metadata[i][a][h])
                  : (this.metadata[i][a][h] = this.metadata[i][a][h].concat(
                      e.metadata[i][a][h]
                    ))
              }
            }
          }
        }),
        (t.MatchData.prototype.add = function (e, r, n) {
          if (!(e in this.metadata)) {
            ;(this.metadata[e] = Object.create(null)), (this.metadata[e][r] = n)
            return
          }
          if (!(r in this.metadata[e])) {
            this.metadata[e][r] = n
            return
          }
          for (var i = Object.keys(n), s = 0; s < i.length; s++) {
            var o = i[s]
            o in this.metadata[e][r]
              ? (this.metadata[e][r][o] = this.metadata[e][r][o].concat(n[o]))
              : (this.metadata[e][r][o] = n[o])
          }
        }),
        (t.Query = function (e) {
          ;(this.clauses = []), (this.allFields = e)
        }),
        (t.Query.wildcard = new String('*')),
        (t.Query.wildcard.NONE = 0),
        (t.Query.wildcard.LEADING = 1),
        (t.Query.wildcard.TRAILING = 2),
        (t.Query.presence = { OPTIONAL: 1, REQUIRED: 2, PROHIBITED: 3 }),
        (t.Query.prototype.clause = function (e) {
          return (
            'fields' in e || (e.fields = this.allFields),
            'boost' in e || (e.boost = 1),
            'usePipeline' in e || (e.usePipeline = !0),
            'wildcard' in e || (e.wildcard = t.Query.wildcard.NONE),
            e.wildcard & t.Query.wildcard.LEADING &&
              e.term.charAt(0) != t.Query.wildcard &&
              (e.term = '*' + e.term),
            e.wildcard & t.Query.wildcard.TRAILING &&
              e.term.slice(-1) != t.Query.wildcard &&
              (e.term = '' + e.term + '*'),
            'presence' in e || (e.presence = t.Query.presence.OPTIONAL),
            this.clauses.push(e),
            this
          )
        }),
        (t.Query.prototype.isNegated = function () {
          for (var e = 0; e < this.clauses.length; e++)
            if (this.clauses[e].presence != t.Query.presence.PROHIBITED)
              return !1
          return !0
        }),
        (t.Query.prototype.term = function (e, r) {
          if (Array.isArray(e))
            return (
              e.forEach(function (i) {
                this.term(i, t.utils.clone(r))
              }, this),
              this
            )
          var n = r || {}
          return (n.term = e.toString()), this.clause(n), this
        }),
        (t.QueryParseError = function (e, r, n) {
          ;(this.name = 'QueryParseError'),
            (this.message = e),
            (this.start = r),
            (this.end = n)
        }),
        (t.QueryParseError.prototype = new Error()),
        (t.QueryLexer = function (e) {
          ;(this.lexemes = []),
            (this.str = e),
            (this.length = e.length),
            (this.pos = 0),
            (this.start = 0),
            (this.escapeCharPositions = [])
        }),
        (t.QueryLexer.prototype.run = function () {
          for (var e = t.QueryLexer.lexText; e; ) e = e(this)
        }),
        (t.QueryLexer.prototype.sliceString = function () {
          for (
            var e = [], r = this.start, n = this.pos, i = 0;
            i < this.escapeCharPositions.length;
            i++
          )
            (n = this.escapeCharPositions[i]),
              e.push(this.str.slice(r, n)),
              (r = n + 1)
          return (
            e.push(this.str.slice(r, this.pos)),
            (this.escapeCharPositions.length = 0),
            e.join('')
          )
        }),
        (t.QueryLexer.prototype.emit = function (e) {
          this.lexemes.push({
            type: e,
            str: this.sliceString(),
            start: this.start,
            end: this.pos,
          }),
            (this.start = this.pos)
        }),
        (t.QueryLexer.prototype.escapeCharacter = function () {
          this.escapeCharPositions.push(this.pos - 1), (this.pos += 1)
        }),
        (t.QueryLexer.prototype.next = function () {
          if (this.pos >= this.length) return t.QueryLexer.EOS
          var e = this.str.charAt(this.pos)
          return (this.pos += 1), e
        }),
        (t.QueryLexer.prototype.width = function () {
          return this.pos - this.start
        }),
        (t.QueryLexer.prototype.ignore = function () {
          this.start == this.pos && (this.pos += 1), (this.start = this.pos)
        }),
        (t.QueryLexer.prototype.backup = function () {
          this.pos -= 1
        }),
        (t.QueryLexer.prototype.acceptDigitRun = function () {
          var e, r
          do (e = this.next()), (r = e.charCodeAt(0))
          while (r > 47 && r < 58)
          e != t.QueryLexer.EOS && this.backup()
        }),
        (t.QueryLexer.prototype.more = function () {
          return this.pos < this.length
        }),
        (t.QueryLexer.EOS = 'EOS'),
        (t.QueryLexer.FIELD = 'FIELD'),
        (t.QueryLexer.TERM = 'TERM'),
        (t.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'),
        (t.QueryLexer.BOOST = 'BOOST'),
        (t.QueryLexer.PRESENCE = 'PRESENCE'),
        (t.QueryLexer.lexField = function (e) {
          return (
            e.backup(),
            e.emit(t.QueryLexer.FIELD),
            e.ignore(),
            t.QueryLexer.lexText
          )
        }),
        (t.QueryLexer.lexTerm = function (e) {
          if (
            (e.width() > 1 && (e.backup(), e.emit(t.QueryLexer.TERM)),
            e.ignore(),
            e.more())
          )
            return t.QueryLexer.lexText
        }),
        (t.QueryLexer.lexEditDistance = function (e) {
          return (
            e.ignore(),
            e.acceptDigitRun(),
            e.emit(t.QueryLexer.EDIT_DISTANCE),
            t.QueryLexer.lexText
          )
        }),
        (t.QueryLexer.lexBoost = function (e) {
          return (
            e.ignore(),
            e.acceptDigitRun(),
            e.emit(t.QueryLexer.BOOST),
            t.QueryLexer.lexText
          )
        }),
        (t.QueryLexer.lexEOS = function (e) {
          e.width() > 0 && e.emit(t.QueryLexer.TERM)
        }),
        (t.QueryLexer.termSeparator = t.tokenizer.separator),
        (t.QueryLexer.lexText = function (e) {
          for (;;) {
            var r = e.next()
            if (r == t.QueryLexer.EOS) return t.QueryLexer.lexEOS
            if (r.charCodeAt(0) == 92) {
              e.escapeCharacter()
              continue
            }
            if (r == ':') return t.QueryLexer.lexField
            if (r == '~')
              return (
                e.backup(),
                e.width() > 0 && e.emit(t.QueryLexer.TERM),
                t.QueryLexer.lexEditDistance
              )
            if (r == '^')
              return (
                e.backup(),
                e.width() > 0 && e.emit(t.QueryLexer.TERM),
                t.QueryLexer.lexBoost
              )
            if ((r == '+' && e.width() === 1) || (r == '-' && e.width() === 1))
              return e.emit(t.QueryLexer.PRESENCE), t.QueryLexer.lexText
            if (r.match(t.QueryLexer.termSeparator)) return t.QueryLexer.lexTerm
          }
        }),
        (t.QueryParser = function (e, r) {
          ;(this.lexer = new t.QueryLexer(e)),
            (this.query = r),
            (this.currentClause = {}),
            (this.lexemeIdx = 0)
        }),
        (t.QueryParser.prototype.parse = function () {
          this.lexer.run(), (this.lexemes = this.lexer.lexemes)
          for (var e = t.QueryParser.parseClause; e; ) e = e(this)
          return this.query
        }),
        (t.QueryParser.prototype.peekLexeme = function () {
          return this.lexemes[this.lexemeIdx]
        }),
        (t.QueryParser.prototype.consumeLexeme = function () {
          var e = this.peekLexeme()
          return (this.lexemeIdx += 1), e
        }),
        (t.QueryParser.prototype.nextClause = function () {
          var e = this.currentClause
          this.query.clause(e), (this.currentClause = {})
        }),
        (t.QueryParser.parseClause = function (e) {
          var r = e.peekLexeme()
          if (r != null)
            switch (r.type) {
              case t.QueryLexer.PRESENCE:
                return t.QueryParser.parsePresence
              case t.QueryLexer.FIELD:
                return t.QueryParser.parseField
              case t.QueryLexer.TERM:
                return t.QueryParser.parseTerm
              default:
                var n = 'expected either a field or a term, found ' + r.type
                throw (
                  (r.str.length >= 1 && (n += " with value '" + r.str + "'"),
                  new t.QueryParseError(n, r.start, r.end))
                )
            }
        }),
        (t.QueryParser.parsePresence = function (e) {
          var r = e.consumeLexeme()
          if (r != null) {
            switch (r.str) {
              case '-':
                e.currentClause.presence = t.Query.presence.PROHIBITED
                break
              case '+':
                e.currentClause.presence = t.Query.presence.REQUIRED
                break
              default:
                var n = "unrecognised presence operator'" + r.str + "'"
                throw new t.QueryParseError(n, r.start, r.end)
            }
            var i = e.peekLexeme()
            if (i == null) {
              var n = 'expecting term or field, found nothing'
              throw new t.QueryParseError(n, r.start, r.end)
            }
            switch (i.type) {
              case t.QueryLexer.FIELD:
                return t.QueryParser.parseField
              case t.QueryLexer.TERM:
                return t.QueryParser.parseTerm
              default:
                var n = "expecting term or field, found '" + i.type + "'"
                throw new t.QueryParseError(n, i.start, i.end)
            }
          }
        }),
        (t.QueryParser.parseField = function (e) {
          var r = e.consumeLexeme()
          if (r != null) {
            if (e.query.allFields.indexOf(r.str) == -1) {
              var n = e.query.allFields
                  .map(function (o) {
                    return "'" + o + "'"
                  })
                  .join(', '),
                i = "unrecognised field '" + r.str + "', possible fields: " + n
              throw new t.QueryParseError(i, r.start, r.end)
            }
            e.currentClause.fields = [r.str]
            var s = e.peekLexeme()
            if (s == null) {
              var i = 'expecting term, found nothing'
              throw new t.QueryParseError(i, r.start, r.end)
            }
            switch (s.type) {
              case t.QueryLexer.TERM:
                return t.QueryParser.parseTerm
              default:
                var i = "expecting term, found '" + s.type + "'"
                throw new t.QueryParseError(i, s.start, s.end)
            }
          }
        }),
        (t.QueryParser.parseTerm = function (e) {
          var r = e.consumeLexeme()
          if (r != null) {
            ;(e.currentClause.term = r.str.toLowerCase()),
              r.str.indexOf('*') != -1 && (e.currentClause.usePipeline = !1)
            var n = e.peekLexeme()
            if (n == null) {
              e.nextClause()
              return
            }
            switch (n.type) {
              case t.QueryLexer.TERM:
                return e.nextClause(), t.QueryParser.parseTerm
              case t.QueryLexer.FIELD:
                return e.nextClause(), t.QueryParser.parseField
              case t.QueryLexer.EDIT_DISTANCE:
                return t.QueryParser.parseEditDistance
              case t.QueryLexer.BOOST:
                return t.QueryParser.parseBoost
              case t.QueryLexer.PRESENCE:
                return e.nextClause(), t.QueryParser.parsePresence
              default:
                var i = "Unexpected lexeme type '" + n.type + "'"
                throw new t.QueryParseError(i, n.start, n.end)
            }
          }
        }),
        (t.QueryParser.parseEditDistance = function (e) {
          var r = e.consumeLexeme()
          if (r != null) {
            var n = parseInt(r.str, 10)
            if (isNaN(n)) {
              var i = 'edit distance must be numeric'
              throw new t.QueryParseError(i, r.start, r.end)
            }
            e.currentClause.editDistance = n
            var s = e.peekLexeme()
            if (s == null) {
              e.nextClause()
              return
            }
            switch (s.type) {
              case t.QueryLexer.TERM:
                return e.nextClause(), t.QueryParser.parseTerm
              case t.QueryLexer.FIELD:
                return e.nextClause(), t.QueryParser.parseField
              case t.QueryLexer.EDIT_DISTANCE:
                return t.QueryParser.parseEditDistance
              case t.QueryLexer.BOOST:
                return t.QueryParser.parseBoost
              case t.QueryLexer.PRESENCE:
                return e.nextClause(), t.QueryParser.parsePresence
              default:
                var i = "Unexpected lexeme type '" + s.type + "'"
                throw new t.QueryParseError(i, s.start, s.end)
            }
          }
        }),
        (t.QueryParser.parseBoost = function (e) {
          var r = e.consumeLexeme()
          if (r != null) {
            var n = parseInt(r.str, 10)
            if (isNaN(n)) {
              var i = 'boost must be numeric'
              throw new t.QueryParseError(i, r.start, r.end)
            }
            e.currentClause.boost = n
            var s = e.peekLexeme()
            if (s == null) {
              e.nextClause()
              return
            }
            switch (s.type) {
              case t.QueryLexer.TERM:
                return e.nextClause(), t.QueryParser.parseTerm
              case t.QueryLexer.FIELD:
                return e.nextClause(), t.QueryParser.parseField
              case t.QueryLexer.EDIT_DISTANCE:
                return t.QueryParser.parseEditDistance
              case t.QueryLexer.BOOST:
                return t.QueryParser.parseBoost
              case t.QueryLexer.PRESENCE:
                return e.nextClause(), t.QueryParser.parsePresence
              default:
                var i = "Unexpected lexeme type '" + s.type + "'"
                throw new t.QueryParseError(i, s.start, s.end)
            }
          }
        }),
        (function (e, r) {
          typeof define == 'function' && define.amd
            ? define(r)
            : typeof de == 'object'
            ? (fe.exports = r())
            : (e.lunr = r())
        })(this, function () {
          return t
        })
    })()
  })
  var ce = []
  function N(t, e) {
    ce.push({ selector: e, constructor: t })
  }
  var Y = class {
    constructor() {
      this.createComponents(document.body)
    }
    createComponents(e) {
      ce.forEach((r) => {
        e.querySelectorAll(r.selector).forEach((n) => {
          n.dataset.hasInstance ||
            (new r.constructor({ el: n }), (n.dataset.hasInstance = String(!0)))
        })
      })
    }
  }
  var k = class {
    constructor(e) {
      this.el = e.el
    }
  }
  var J = class {
    constructor() {
      this.listeners = {}
    }
    addEventListener(e, r) {
      e in this.listeners || (this.listeners[e] = []), this.listeners[e].push(r)
    }
    removeEventListener(e, r) {
      if (!(e in this.listeners)) return
      let n = this.listeners[e]
      for (let i = 0, s = n.length; i < s; i++)
        if (n[i] === r) {
          n.splice(i, 1)
          return
        }
    }
    dispatchEvent(e) {
      if (!(e.type in this.listeners)) return !0
      let r = this.listeners[e.type].slice()
      for (let n = 0, i = r.length; n < i; n++) r[n].call(this, e)
      return !e.defaultPrevented
    }
  }
  var ne = (t, e = 100) => {
    let r = Date.now()
    return (...n) => {
      r + e - Date.now() < 0 && (t(...n), (r = Date.now()))
    }
  }
  var ie = class extends J {
      constructor() {
        super()
        this.scrollTop = 0
        this.lastY = 0
        this.width = 0
        this.height = 0
        this.showToolbar = !0
        ;(this.toolbar = document.querySelector('.tsd-page-toolbar')),
          (this.secondaryNav = document.querySelector(
            '.tsd-navigation.secondary'
          )),
          window.addEventListener(
            'scroll',
            ne(() => this.onScroll(), 10)
          ),
          window.addEventListener(
            'resize',
            ne(() => this.onResize(), 10)
          ),
          this.onResize(),
          this.onScroll()
      }
      triggerResize() {
        let r = new CustomEvent('resize', {
          detail: { width: this.width, height: this.height },
        })
        this.dispatchEvent(r)
      }
      onResize() {
        ;(this.width = window.innerWidth || 0),
          (this.height = window.innerHeight || 0)
        let r = new CustomEvent('resize', {
          detail: { width: this.width, height: this.height },
        })
        this.dispatchEvent(r)
      }
      onScroll() {
        this.scrollTop = window.scrollY || 0
        let r = new CustomEvent('scroll', {
          detail: { scrollTop: this.scrollTop },
        })
        this.dispatchEvent(r), this.hideShowToolbar()
      }
      hideShowToolbar() {
        var n
        let r = this.showToolbar
        ;(this.showToolbar =
          this.lastY >= this.scrollTop || this.scrollTop <= 0),
          r !== this.showToolbar &&
            (this.toolbar.classList.toggle('tsd-page-toolbar--hide'),
            (n = this.secondaryNav) == null ||
              n.classList.toggle('tsd-navigation--toolbar-hide')),
          (this.lastY = this.scrollTop)
      }
    },
    Q = ie
  Q.instance = new ie()
  var X = class extends k {
    constructor(r) {
      super(r)
      this.anchors = []
      this.index = -1
      Q.instance.addEventListener('resize', () => this.onResize()),
        Q.instance.addEventListener('scroll', (n) => this.onScroll(n)),
        this.createAnchors()
    }
    createAnchors() {
      let r = window.location.href
      r.indexOf('#') != -1 && (r = r.substr(0, r.indexOf('#'))),
        this.el.querySelectorAll('a').forEach((n) => {
          let i = n.href
          if (i.indexOf('#') == -1 || i.substr(0, r.length) != r) return
          let s = i.substr(i.indexOf('#') + 1),
            o = document.querySelector('a.tsd-anchor[name=' + s + ']'),
            a = n.parentNode
          !o || !a || this.anchors.push({ link: a, anchor: o, position: 0 })
        }),
        this.onResize()
    }
    onResize() {
      let r
      for (let i = 0, s = this.anchors.length; i < s; i++) {
        r = this.anchors[i]
        let o = r.anchor.getBoundingClientRect()
        r.position = o.top + document.body.scrollTop
      }
      this.anchors.sort((i, s) => i.position - s.position)
      let n = new CustomEvent('scroll', {
        detail: { scrollTop: Q.instance.scrollTop },
      })
      this.onScroll(n)
    }
    onScroll(r) {
      let n = r.detail.scrollTop + 5,
        i = this.anchors,
        s = i.length - 1,
        o = this.index
      for (; o > -1 && i[o].position > n; ) o -= 1
      for (; o < s && i[o + 1].position < n; ) o += 1
      this.index != o &&
        (this.index > -1 &&
          this.anchors[this.index].link.classList.remove('focus'),
        (this.index = o),
        this.index > -1 && this.anchors[this.index].link.classList.add('focus'))
    }
  }
  var he = (t, e = 100) => {
    let r
    return (...n) => {
      clearTimeout(r), (r = setTimeout(() => t(n), e))
    }
  }
  var ge = Fe(pe())
  function ye() {
    let t = document.getElementById('tsd-search')
    if (!t) return
    let e = document.getElementById('search-script')
    t.classList.add('loading'),
      e &&
        (e.addEventListener('error', () => {
          t.classList.remove('loading'), t.classList.add('failure')
        }),
        e.addEventListener('load', () => {
          t.classList.remove('loading'), t.classList.add('ready')
        }),
        window.searchData && t.classList.remove('loading'))
    let r = document.querySelector('#tsd-search input'),
      n = document.querySelector('#tsd-search .results')
    if (!r || !n)
      throw new Error(
        'The input field or the result list wrapper was not found'
      )
    let i = !1
    n.addEventListener('mousedown', () => (i = !0)),
      n.addEventListener('mouseup', () => {
        ;(i = !1), t.classList.remove('has-focus')
      }),
      r.addEventListener('focus', () => t.classList.add('has-focus')),
      r.addEventListener('blur', () => {
        i || ((i = !1), t.classList.remove('has-focus'))
      })
    let s = { base: t.dataset.base + '/' }
    Ae(t, n, r, s)
  }
  function Ae(t, e, r, n) {
    r.addEventListener(
      'input',
      he(() => {
        He(t, e, r, n)
      }, 200)
    )
    let i = !1
    r.addEventListener('keydown', (s) => {
      ;(i = !0),
        s.key == 'Enter'
          ? ze(e, r)
          : s.key == 'Escape'
          ? r.blur()
          : s.key == 'ArrowUp'
          ? me(e, -1)
          : s.key === 'ArrowDown'
          ? me(e, 1)
          : (i = !1)
    }),
      r.addEventListener('keypress', (s) => {
        i && s.preventDefault()
      }),
      document.body.addEventListener('keydown', (s) => {
        s.altKey ||
          s.ctrlKey ||
          s.metaKey ||
          (!r.matches(':focus') &&
            s.key === '/' &&
            (r.focus(), s.preventDefault()))
      })
  }
  function Ve(t, e) {
    t.index ||
      (window.searchData &&
        (e.classList.remove('loading'),
        e.classList.add('ready'),
        (t.data = window.searchData),
        (t.index = ge.Index.load(window.searchData.index))))
  }
  function He(t, e, r, n) {
    if ((Ve(n, t), !n.index || !n.data)) return
    e.textContent = ''
    let i = r.value.trim(),
      s = i ? n.index.search(`*${i}*`) : []
    for (let o = 0, a = Math.min(10, s.length); o < a; o++) {
      let u = n.data.rows[Number(s[o].ref)],
        l = ve(u.name, i)
      u.parent && (l = `<span class="parent">${ve(u.parent, i)}.</span>${l}`)
      let h = document.createElement('li')
      h.classList.value = u.classes
      let p = document.createElement('a')
      ;(p.href = n.base + u.url),
        p.classList.add('tsd-kind-icon'),
        (p.innerHTML = l),
        h.append(p),
        e.appendChild(h)
    }
  }
  function me(t, e) {
    let r = t.querySelector('.current')
    if (!r)
      (r = t.querySelector(e == 1 ? 'li:first-child' : 'li:last-child')),
        r && r.classList.add('current')
    else {
      let n = r
      if (e === 1)
        do n = n.nextElementSibling
        while (n instanceof HTMLElement && n.offsetParent == null)
      else
        do n = n.previousElementSibling
        while (n instanceof HTMLElement && n.offsetParent == null)
      n && (r.classList.remove('current'), n.classList.add('current'))
    }
  }
  function ze(t, e) {
    let r = t.querySelector('.current')
    if ((r || (r = t.querySelector('li:first-child')), r)) {
      let n = r.querySelector('a')
      n && (window.location.href = n.href), e.blur()
    }
  }
  function ve(t, e) {
    if (e === '') return t
    let r = t.toLocaleLowerCase(),
      n = e.toLocaleLowerCase(),
      i = [],
      s = 0,
      o = r.indexOf(n)
    for (; o != -1; )
      i.push(
        se(t.substring(s, o)),
        `<b>${se(t.substring(o, o + n.length))}</b>`
      ),
        (s = o + n.length),
        (o = r.indexOf(n, s))
    return i.push(se(t.substring(s))), i.join('')
  }
  var Ne = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#039;',
    '"': '&quot;',
  }
  function se(t) {
    return t.replace(/[&<>"'"]/g, (e) => Ne[e])
  }
  var oe = class {
      constructor(e, r) {
        ;(this.signature = e), (this.description = r)
      }
      addClass(e) {
        return (
          this.signature.classList.add(e),
          this.description.classList.add(e),
          this
        )
      }
      removeClass(e) {
        return (
          this.signature.classList.remove(e),
          this.description.classList.remove(e),
          this
        )
      }
    },
    Z = class extends k {
      constructor(r) {
        super(r)
        this.groups = []
        this.index = -1
        this.createGroups(),
          this.container &&
            (this.el.classList.add('active'),
            Array.from(this.el.children).forEach((n) => {
              n.addEventListener('touchstart', (i) => this.onClick(i)),
                n.addEventListener('click', (i) => this.onClick(i))
            }),
            this.container.classList.add('active'),
            this.setIndex(0))
      }
      setIndex(r) {
        if (
          (r < 0 && (r = 0),
          r > this.groups.length - 1 && (r = this.groups.length - 1),
          this.index == r)
        )
          return
        let n = this.groups[r]
        if (this.index > -1) {
          let i = this.groups[this.index]
          i.removeClass('current').addClass('fade-out'),
            n.addClass('current'),
            n.addClass('fade-in'),
            Q.instance.triggerResize(),
            setTimeout(() => {
              i.removeClass('fade-out'), n.removeClass('fade-in')
            }, 300)
        } else n.addClass('current'), Q.instance.triggerResize()
        this.index = r
      }
      createGroups() {
        let r = this.el.children
        if (r.length < 2) return
        this.container = this.el.nextElementSibling
        let n = this.container.children
        this.groups = []
        for (let i = 0; i < r.length; i++) this.groups.push(new oe(r[i], n[i]))
      }
      onClick(r) {
        this.groups.forEach((n, i) => {
          n.signature === r.currentTarget && this.setIndex(i)
        })
      }
    }
  var C = 'mousedown',
    Le = 'mousemove',
    _ = 'mouseup',
    K = { x: 0, y: 0 },
    xe = !1,
    ae = !1,
    je = !1,
    A = !1,
    Ee = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  document.documentElement.classList.add(Ee ? 'is-mobile' : 'not-mobile')
  Ee &&
    'ontouchstart' in document.documentElement &&
    ((je = !0), (C = 'touchstart'), (Le = 'touchmove'), (_ = 'touchend'))
  document.addEventListener(C, (t) => {
    ;(ae = !0), (A = !1)
    let e = C == 'touchstart' ? t.targetTouches[0] : t
    ;(K.y = e.pageY || 0), (K.x = e.pageX || 0)
  })
  document.addEventListener(Le, (t) => {
    if (!!ae && !A) {
      let e = C == 'touchstart' ? t.targetTouches[0] : t,
        r = K.x - (e.pageX || 0),
        n = K.y - (e.pageY || 0)
      A = Math.sqrt(r * r + n * n) > 10
    }
  })
  document.addEventListener(_, () => {
    ae = !1
  })
  document.addEventListener('click', (t) => {
    xe && (t.preventDefault(), t.stopImmediatePropagation(), (xe = !1))
  })
  var ee = class extends k {
    constructor(r) {
      super(r)
      ;(this.className = this.el.dataset.toggle || ''),
        this.el.addEventListener(_, (n) => this.onPointerUp(n)),
        this.el.addEventListener('click', (n) => n.preventDefault()),
        document.addEventListener(C, (n) => this.onDocumentPointerDown(n)),
        document.addEventListener(_, (n) => this.onDocumentPointerUp(n))
    }
    setActive(r) {
      if (this.active == r) return
      ;(this.active = r),
        document.documentElement.classList.toggle('has-' + this.className, r),
        this.el.classList.toggle('active', r)
      let n = (this.active ? 'to-has-' : 'from-has-') + this.className
      document.documentElement.classList.add(n),
        setTimeout(() => document.documentElement.classList.remove(n), 500)
    }
    onPointerUp(r) {
      A || (this.setActive(!0), r.preventDefault())
    }
    onDocumentPointerDown(r) {
      if (this.active) {
        if (r.target.closest('.col-menu, .tsd-filter-group')) return
        this.setActive(!1)
      }
    }
    onDocumentPointerUp(r) {
      if (!A && this.active && r.target.closest('.col-menu')) {
        let n = r.target.closest('a')
        if (n) {
          let i = window.location.href
          i.indexOf('#') != -1 && (i = i.substr(0, i.indexOf('#'))),
            n.href.substr(0, i.length) == i &&
              setTimeout(() => this.setActive(!1), 250)
        }
      }
    }
  }
  var te = class {
      constructor(e, r) {
        ;(this.key = e),
          (this.value = r),
          (this.defaultValue = r),
          this.initialize(),
          window.localStorage[this.key] &&
            this.setValue(this.fromLocalStorage(window.localStorage[this.key]))
      }
      initialize() {}
      setValue(e) {
        if (this.value == e) return
        let r = this.value
        ;(this.value = e),
          (window.localStorage[this.key] = this.toLocalStorage(e)),
          this.handleValueChange(r, e)
      }
    },
    re = class extends te {
      initialize() {
        let r = document.querySelector('#tsd-filter-' + this.key)
        !r ||
          ((this.checkbox = r),
          this.checkbox.addEventListener('change', () => {
            this.setValue(this.checkbox.checked)
          }))
      }
      handleValueChange(r, n) {
        !this.checkbox ||
          ((this.checkbox.checked = this.value),
          document.documentElement.classList.toggle(
            'toggle-' + this.key,
            this.value != this.defaultValue
          ))
      }
      fromLocalStorage(r) {
        return r == 'true'
      }
      toLocalStorage(r) {
        return r ? 'true' : 'false'
      }
    },
    le = class extends te {
      initialize() {
        document.documentElement.classList.add(
          'toggle-' + this.key + this.value
        )
        let r = document.querySelector('#tsd-filter-' + this.key)
        if (!r) return
        this.select = r
        let n = () => {
            this.select.classList.add('active')
          },
          i = () => {
            this.select.classList.remove('active')
          }
        this.select.addEventListener(C, n),
          this.select.addEventListener('mouseover', n),
          this.select.addEventListener('mouseleave', i),
          this.select.querySelectorAll('li').forEach((s) => {
            s.addEventListener(_, (o) => {
              r.classList.remove('active'),
                this.setValue(o.target.dataset.value || '')
            })
          }),
          document.addEventListener(C, (s) => {
            this.select.contains(s.target) ||
              this.select.classList.remove('active')
          })
      }
      handleValueChange(r, n) {
        this.select.querySelectorAll('li.selected').forEach((o) => {
          o.classList.remove('selected')
        })
        let i = this.select.querySelector('li[data-value="' + n + '"]'),
          s = this.select.querySelector('.tsd-select-label')
        i &&
          s &&
          (i.classList.add('selected'), (s.textContent = i.textContent)),
          document.documentElement.classList.remove('toggle-' + r),
          document.documentElement.classList.add('toggle-' + n)
      }
      fromLocalStorage(r) {
        return r
      }
      toLocalStorage(r) {
        return r
      }
    },
    j = class extends k {
      constructor(r) {
        super(r)
        ;(this.optionVisibility = new le('visibility', 'private')),
          (this.optionInherited = new re('inherited', !0)),
          (this.optionExternals = new re('externals', !0))
      }
      static isSupported() {
        try {
          return typeof window.localStorage != 'undefined'
        } catch {
          return !1
        }
      }
    }
  function we(t) {
    let e = localStorage.getItem('tsd-theme') || 'os'
    ;(t.value = e),
      be(e),
      t.addEventListener('change', () => {
        localStorage.setItem('tsd-theme', t.value), be(t.value)
      })
  }
  function be(t) {
    switch (t) {
      case 'os':
        document.body.classList.remove('light', 'dark')
        break
      case 'light':
        document.body.classList.remove('dark'),
          document.body.classList.add('light')
        break
      case 'dark':
        document.body.classList.remove('light'),
          document.body.classList.add('dark')
        break
    }
  }
  ye()
  N(X, '.menu-highlight')
  N(Z, '.tsd-signatures')
  N(ee, 'a[data-toggle]')
  j.isSupported()
    ? N(j, '#tsd-filter')
    : document.documentElement.classList.add('no-filter')
  var Te = document.getElementById('theme')
  Te && we(Te)
  var Be = new Y()
  Object.defineProperty(window, 'app', { value: Be })
})()
/*!
 * lunr.Builder
 * Copyright (C) 2020 Oliver Nightingale
 */
/*!
 * lunr.Index
 * Copyright (C) 2020 Oliver Nightingale
 */
/*!
 * lunr.Pipeline
 * Copyright (C) 2020 Oliver Nightingale
 */
/*!
 * lunr.Set
 * Copyright (C) 2020 Oliver Nightingale
 */
/*!
 * lunr.TokenSet
 * Copyright (C) 2020 Oliver Nightingale
 */
/*!
 * lunr.Vector
 * Copyright (C) 2020 Oliver Nightingale
 */
/*!
 * lunr.stemmer
 * Copyright (C) 2020 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2020 Oliver Nightingale
 */
/*!
 * lunr.tokenizer
 * Copyright (C) 2020 Oliver Nightingale
 */
/*!
 * lunr.trimmer
 * Copyright (C) 2020 Oliver Nightingale
 */
/*!
 * lunr.utils
 * Copyright (C) 2020 Oliver Nightingale
 */
/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.9
 * Copyright (C) 2020 Oliver Nightingale
 * @license MIT
 */
