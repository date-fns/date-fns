/**
 * Davant de les xifres que es diuen amb vocal inicial, 1 i 11, s'apostrofen els articles el i la i la preposició de igual que si estiguessin escrits amb lletres.
 *    l'1 de juliol ('l'u')
 *    l'11 de novembre ('l'onze')
 *    l'11a clàusula del contracte ('l'onzena')
 *    la contractació d'11 jugadors ('d'onze')
 *    l'aval d'11.000 socis ('d'onze mil')
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=apostrofaci%25F3+davant+xifres&action=Principal&method=detall_completa&numPagina=1&idHit=11236&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=11236&titol=apostrofaci%F3%20davant%20de%20xifres%20%2F%20apostrofaci%F3%20davant%20de%201%20i%2011&numeroResultat=1&clickLink=detall&tipusCerca=cerca.normes
 */
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "menys d'un segon",
    eleven: "menys d'onze segons",
    other: 'menys de {{count}} segons'
  },

  xSeconds: {
    one: '1 segon',
    other: '{{count}} segons'
  },

  halfAMinute: 'mig minut',

  lessThanXMinutes: {
    one: "menys d'un minut",
    eleven: "menys d'onze minuts",
    other: 'menys de {{count}} minuts'
  },

  xMinutes: {
    one: '1 minut',
    other: '{{count}} minuts'
  },

  aboutXHours: {
    one: 'aproximadament una hora',
    other: 'aproximadament {{count}} hores'
  },

  xHours: {
    one: '1 hora',
    other: '{{count}} hores'
  },

  xDays: {
    one: '1 dia',
    other: '{{count}} dies'
  },

  aboutXMonths: {
    one: 'aproximadament un mes',
    other: 'aproximadament {{count}} mesos'
  },

  xMonths: {
    one: '1 mes',
    other: '{{count}} mesos'
  },

  aboutXYears: {
    one: 'aproximadament un any',
    other: 'aproximadament {{count}} anys'
  },

  xYears: {
    one: '1 any',
    other: '{{count}} anys'
  },

  overXYears: {
    one: "més d'un any",
    eleven: "més d'onze anys",
    other: 'més de {{count}} anys'
  },

  almostXYears: {
    one: 'gairebé un any',
    other: 'gairebé {{count}} anys'
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else if (count === 11 && formatDistanceLocale[token].eleven) {
    result = formatDistanceLocale[token].eleven
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'en ' + result
    } else {
      return 'fa ' + result
    }
  }

  return result
}
