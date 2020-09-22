import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'
import buildMatchFn from '../../../_lib/buildMatchFn/index'

var matchOrdinalNumberPattern = /\d+/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(нтө|нт)/i,
  abbreviated: /^(нтө|нт)/i,
  wide: /^(нийтийн тооллын өмнө|нийтийн тооллын)/i
}
var parseEraPatterns = {
  any: [/^(нтө|нийтийн тооллын өмнө)/i, /^(нт|нийтийн тооллын)/i]
}

var matchQuarterPatterns = {
  narrow: /^(iv|iii|ii|i)/i,
  abbreviated: /^(iv|iii|ii|i) улирал/i,
  wide: /^[1-4]-р улирал/i
}
var parseQuarterPatterns = {
  any: [
    /(i|((1-р|i) улирал))/i,
    /(ii|((2-р|ii) улирал))/i,
    /(iii|((3-р|iii) улирал))/i,
    /(iv|((4-р|iv) улирал))/i
  ]
}

var matchMonthPatterns = {
  narrow: /^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i,
  abbreviated: /^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i,
  wide: /^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i
}
var parseMonthPatterns = {
  narrow: [
    /^i/i,
    /^ii/i,
    /^iii/i,
    /^iv/i,
    /^v/i,
    /^vi/i,
    /^vii/i,
    /^viii/i,
    /^ix/i,
    /^x/i,
    /^xi/i,
    /^xii/i
  ],
  any: [
    /^(i|1 сар|1-р сар|нэгдүгээр)/i,
    /^(ii|2 сар|2-р сар|хоёрдугаар)/i,
    /^(iii|3 сар|3-р сар|гуравдугаар)/i,
    /^(iv|4 сар|4-р сар|дөрөвдүгээр)/i,
    /^(v|5 сар|5-р сар|тавдугаар)/i,
    /^(vi|6 сар|6-р сар|зургаадугаар)/i,
    /^(vii|7 сар|7-р сар|долоодугаар)/i,
    /^(viii|8 сар|8-р сар|наймдугаар)/i,
    /^(ix|9 сар|9-р сар|есдүгээр)/i,
    /^(x|10 сар|10-р сар|аравдугаар)/i,
    /^(xi|11 сар|11-р сар|арван нэгдүгээр)/i,
    /^(xii|12 сар|12-р сар|арван хоёрдугаар)/i
  ]
}

var matchDayPatterns = {
  narrow: /^[ндмлпбб]/i,
  short: /^(ня|да|мя|лх|пү|ба|бя)/i,
  abbreviated: /^(ням|дав|мяг|лха|пүр|баа|бям)/i,
  wide: /^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i
}
var parseDayPatterns = {
  narrow: [/^н/i, /^д/i, /^м/i, /^л/i, /^п/i, /^б/i, /^б/i],
  any: [/^ня/i, /^да/i, /^мя/i, /^лх/i, /^пү/i, /^ба/i, /^бя/i]
}

var matchDayPeriodPatterns = {
  narrow: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i,
  any: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i
}
var parseDayPeriodPatterns = {
  any: {
    am: /^ү\.ө\./i,
    pm: /^ү\.х\./i,
    midnight: /^шөнө дунд/i,
    noon: /^үд дунд/i,
    morning: /өглөө/i,
    afternoon: /өдөр/i,
    evening: /орой/i,
    night: /шөнө/i
  }
}

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10)
    }
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function(index) {
      return index + 1
    }
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
}

export default match
