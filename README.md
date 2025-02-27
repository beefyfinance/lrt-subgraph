# Beefy LRT Subgraph

This Subgraph sources events from the Beefy LRT contracts in different networks.

# Deployments

## Goldsky.com

### Latest endpoints

- [Arbitrum](https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefy-lrt-arbitrum/latest/gn)
- [Base](https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefy-lrt-base/latest/gn)
- [BSC](https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefy-lrt-bsc/latest/gn)
- [Ethereum](https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefy-lrt-ethereum/latest/gn)
- [Kava](https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefy-lrt-kava/latest/gn)
- [Linea](https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefy-lrt-linea/latest/gn)
- [Lisk](https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefy-lrt-lisk/latest/gn)
- [Manta](https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefy-lrt-manta/latest/gn)
- [Mode](https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefy-lrt-mode/latest/gn)
- [Optimism](https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefy-lrt-optimism/latest/gn)
- [Sei](https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefy-lrt-sei/latest/gn)

# Contributing

## Prerequisites

- Git: [git-scm.com](https://git-scm.com)
- Node.js: [nodejs.org](https://nodejs.org), see version in [.nvmrc](.nvmrc)
- Yarn: [yarnpkg.com](https://yarnpkg.com)
- Docker: [docker.com](https://www.docker.com)
- Docker Compose: [docker.com](https://docs.docker.com/compose/install/)

## Setup the project

```bash
yarn install
```

## Running a local instance of graph-node locally

```bash
yarn infra:strat
```

## Deploying the subgraph locally

```bash
yarn remove-local # if you have already deployed the subgraph
yarn create-local # create the subgraph locally
yarn prepare:<network> # apply configuration for the network
yarn codegen # generate the typescript types
yarn build # build the subgraph code
yarn deploy-local # deploy the subgraph locally
```

## Run tests

```bash
yarn test # run all tests
yarn test:graph # run only matchstick-as graph tests
yarn test:lint # run prettier linter
```

## HOWTOs

### How to add a new network

1. Add the network configuration [config/<network>.json](config/).
   - `indexerHintPrune` is the number of blocks to keep for the indexer hint, aim for 2 months. Can be set to `"auto"` to prune as much as possible. Recommended for performance and cost. Or set to `"never"` to keep all updates history. ([Thegraph docs](https://thegraph.com/docs/en/cookbook/pruning/#how-to-prune-a-subgraph-with-indexerhints))
   - `clockTickBlocks` is the number of blocks between each clock tick, aim for a clock tick every ~5 minutes.
2. Add dev RPCs in graph-node config [docker/graph-node/config.toml](docker/graph-node/config.toml).
3. Add a new `prepare:<network>` script in [package.json](package.json).
4. Add the chain in `.github/workflows/Release.yml` to configure deployments.
5. Test the build
   - Apply the configuration: `npm run prepare:<chain>`
   - Build the application: `npm run build`
   - Run Tests: `npm run test`
   - The PROD env is the uncommented url in the [lrt-api .graphqlclient file](https://github.com/beefyfinance/beefy-lrt-api/blob/main/.graphclientrc.yml#L9)
   - Deploy the new chain in DEV: `./bin/deploy.sh <chain> <dev provider>`
   - Test the data in the dev provider subgraph explorer
   - Manually deploy the new chain in PROD for the first version: `./bin/deploy.sh <chain> <dev provider>`
6. Update the `Deployments` section subgraph URLs in this README
7. Update the [LRT API](https://github.com/beefyfinance/beefy-lrt-api)
8. Standard formatting with `npm run format`

### How to update the schema

1. Create or update the [schema.graphql](schema.graphql) file.

- See TheGraph docs for [defining entities](https://thegraph.com/docs/en/developing/creating-a-subgraph/#defining-entities)

2. Run `yarn codegen` to generate the typescript types.

- See TheGraph docs for [TypeScript code generation](https://thegraph.com/docs/en/developing/creating-a-subgraph/#code-generation)

3. Update [subgraph.template.yaml](subgraph.template.yaml) with the new entity bindings and/or data sources if needed.

- TheGraph docs for [defining a call handler](https://thegraph.com/docs/en/developing/creating-a-subgraph/#defining-a-call-handler)
- TheGraph docs for [defining a block handler](https://thegraph.com/docs/en/developing/creating-a-subgraph/#block-handlers)
- TheGraph docs for [defining a data source template](https://thegraph.com/docs/en/developing/creating-a-subgraph/#data-source-templates)

4. Update or create the mappings in the [mappings](src/mappings) folder to handle the new entity.

- TheGraph docs for [defining mappings](https://thegraph.com/docs/en/developing/creating-a-subgraph/#mapping-function)
- TheGraph [AssemblyScript API](https://thegraph.com/docs/en/developing/graph-ts/api/)

5. Write tests for the new mappings in the [tests](tests/) folder.

- TheGraph docs for [testing mappings](https://thegraph.com/docs/en/developing/unit-testing-framework/)

### Deploy the subgraph

#### Manually

```bash
./bin/deploy.sh <network> goldsky
./bin/deploy.sh <network> 0xgraph

# or both
./bin/deploy.sh <network> goldsky 0xgraph
```

#### Release a new version

- Go to https://github.com/beefyfinance/lrt-subgraph/releases
- Add a new realease with a tag matching [semver](https://semver.org/) (tag matching X.X.X)
- Github actions will update all subgraph
- Monitor the indexing progress in the subgraph explorer
