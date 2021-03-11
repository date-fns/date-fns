const glob = require('fast-glob')

const countFiles = (pattern: string): number => {
    const entries = glob.sync(pattern);
    return entries.length
}

for (const filename of ["index", "test", "benchmark"]) {
    const js = countFiles(`src/**/${filename}.js`)
    const ts = countFiles(`src/**/${filename}.ts`)
    const count = js + ts

    console.log(`${filename} files:
\tJavascript ${js} / ${count} (${Math.floor(js / count * 100)}%)
\tTypescript ${ts} / ${count} (${Math.floor(ts / count * 100)}%)`)

}
