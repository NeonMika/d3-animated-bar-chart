# d3-animated-bar-chart
Configurable animated bar charts based on d3.js (current version 7.8.0).

## How to build
First install all dependencies

    npm install

Then run the typescript compiler (use `-w` for watch mode, i.e., to automatically recompile if changes are detected)

    npx tsc -w

## Testing

    npm test

## Dev Notes

### Dependencies:
- d3: Data-driven documents

### Dev Dependencies:
- Typescript: Uhm... Typescript, yeah
- mocha: Unit testing framework
- chai: A BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
- c8: Code Coverage
- ts-node: A TypeScript execution engine and REPL for Node.js. It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling. Is used by mocha.
- tsup: Bundle your TypeScript library with no config, powered by esbuild.
- @types

### Working with Mocha + Typescript + ESM imports
After a long time, I found a solution on how to use Mocha with Typescript and ESM [here](https://github.com/mochajs/mocha-examples/issues/47). Starting from there, I found a link to [a reference .mocharc.json](https://gist.github.com/jordansexton/2a0c3c360aa700cc9528e89620e82c3d) which is finally working.