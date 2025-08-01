export const PLATFORM_AAVE = "AAVE"
export const PLATFORM_BALANCER = "BALANCER"
export const PLATFORM_BALANCER_AURA = "BALANCER_AURA"
export const PLATFORM_CURVE = "CURVE"
export const PLATFORM_GAMMA = "GAMMA"
export const PLATFORM_ICHI_LYNEX = "ICHI_LYNEX"
export const PLATFORM_LYNEX = "LYNEX"
export const PLATFORM_MENDI_LENDING = "MENDI_LENDING"
export const PLATFORM_MENDI_LEVERAGE = "MENDI_LEVERAGE"
export const PLATFORM_NILE = "NILE"
export const PLATFORM_PENDLE_EQUILIBRIA = "PENDLE_EQUILIBRIA"
export const PLATFORM_SOLIDLY = "SOLIDLY"
export const PLATFORM_BEEFY_CLM = "BEEFY_CLM"
export const PLATFORM_BEEFY_CLM_VAULT = "BEEFY_CLM_VAULT"
export const TRACK_ONLY_SHARE_TOKEN_BALANCE = "TRACK_ONLY_SHARE_TOKEN_BALANCE"
export const TRACK_ONLY_SHARE_AND_UNDERLYING_TOKEN_BALANCE = "TRACK_ONLY_SHARE_AND_UNDERLYING_TOKEN_BALANCE"
export const PLATFORM_SILO = "SILO"

export function _getChainVaults(network: string): Array<VaultConfig> {
  const vaults = new Array<VaultConfig>()
  if (network === "arbitrum-one") {
    vaults.push(new VaultConfig("aura-arb-rseth-weth", PLATFORM_BALANCER_AURA, "0x764e4e75e3738615CDBFAeaE0C8527b1616e1123"))
    vaults.push(new VaultConfig("camelot-rseth-weth", PLATFORM_BEEFY_CLM, "0xac8246F01197fB783Bf1A80960821835045Ec680", ["0xD9001574E23fb909657A25494f540A9B3804b16e"]))
    vaults.push(new VaultConfig("curve-arb-dlcbtc", PLATFORM_CURVE, "0x7eD37e03D64e6d1c7e315F1faf295f1E3A4B29dF"))
    vaults.push(new VaultConfig("equilibria-arb-rseth-26sep24-new", PLATFORM_PENDLE_EQUILIBRIA, "0x4897679a3E506F0bedC118250369D782F6CCA03e"))
    vaults.push(new VaultConfig("equilibria-arb-rseth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0x66d89d65046D8BC75E0fb14E704e50E8C7a07219"))
    vaults.push(new VaultConfig("equilibria-arb-rseth-27jun24", PLATFORM_PENDLE_EQUILIBRIA, "0x59D0C3f25cB3bD86E03D827C773892d247452227"))
    vaults.push(new VaultConfig("equilibria-arb-rseth", PLATFORM_PENDLE_EQUILIBRIA, "0x7975d9EcCe584aDcE00efd16520853Dad66a7775"))
    vaults.push(new VaultConfig("equilibria-arb-seth-rseth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0x9487044D3208Ff03343429F10307f0a23A27dfeC"))
    vaults.push(new VaultConfig("pancake-cow-arb-rseth-weth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x70a9DC4c4c4ea1A621c174e3F438582fA7C99BFA"))
    vaults.push(new VaultConfig("pancake-cow-arb-rseth-weth", PLATFORM_BEEFY_CLM, "0x5c1f30297b7997601a2ae2957cdc95cd4783e544", ["0x3ec0e7Bf0DCDA562d67d8d7F27569AA0be080DAb"]))
    vaults.push(new VaultConfig("pendle-arb-dusdc-26jun25", PLATFORM_PENDLE_EQUILIBRIA, "0x4542588C4adfA20ff3F01180fcEde79fE306cB81"))
    vaults.push(new VaultConfig("pendle-arb-dusdc-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0xf8934BDFe5424D3e8101A73dBAb30f73335106Ea"))
    vaults.push(new VaultConfig("pendle-arb-rseth-26jun25", PLATFORM_PENDLE_EQUILIBRIA, "0xCF8239be4AB29217598047210ab2Dd2684DabE2A"))
    vaults.push(new VaultConfig("pendle-arb-rseth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0xcf4D88E8d3496aaEC03A53A05a5cf3da93c2394D"))
    vaults.push(new VaultConfig("pendle-arb-unieth-26dec24", PLATFORM_PENDLE_EQUILIBRIA, "0xabe6199ad847F05f1E93B005f3850793b8DF7c9c"))
    vaults.push(new VaultConfig("pendle-eqb-arb-dusdc-26jun25", PLATFORM_PENDLE_EQUILIBRIA, "0x727EE5b220f871114605cdFF805d559BAabBe7E2"))
    vaults.push(new VaultConfig("pendle-eqb-arb-dwbtc-26jun25", PLATFORM_PENDLE_EQUILIBRIA, "0xac155D963D6879d62ACbEc8DA412fCa8b46FB8C2"))
    vaults.push(new VaultConfig("pendle-eqb-arb-rseth-26jun25", PLATFORM_PENDLE_EQUILIBRIA, "0x792C24717700Eb3824CCb58FCB4E6Da4B17dd178"))
    vaults.push(new VaultConfig("ramses-cl-rseth-ethx-vault", PLATFORM_BEEFY_CLM_VAULT, "0x4fCf6A05a7F1A5BA2781d7De4DB78Bd16F84F540", ["0x1f84DaF589C0b9Dea8c9a1B7463099e2DB2F589a"]))
    vaults.push(new VaultConfig("ramses-cl-rseth-ethx", PLATFORM_BEEFY_CLM, "0xBB18cb9D1F3f20dd1c3Af946b46Dd19872206DDa", ["0xf2bf40360aa066353f3b42576799141fe80e0285"]))
    vaults.push(new VaultConfig("ramses-cl-rseth-weth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x45eAc6f86b974b0536Aa488eD8DDF3022F4C768E", ["0x338Fb7e54f4875c76cA77AA9653eB08e856e1FcD"]))
    vaults.push(new VaultConfig("ramses-cl-rseth-weth", PLATFORM_BEEFY_CLM, "0x9ebb94be20476db4a58e59c764e709b5fa35f8b0", ["0x81F15F4FA4848F7D87ceF27975AE2953bf333D7b"]))
    vaults.push(new VaultConfig("uniswap-cow-arb-rseth-weth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x1Db8d743824bdaBA39b88D22b44bcEcf7179D413", ["0x7f3e9f5EFFE06169Db679658392e4Ca79fd5E594"]))
    vaults.push(new VaultConfig("uniswap-cow-arb-rseth-weth", PLATFORM_BEEFY_CLM, "0xf3d5c975de1c0fd358a593bcef7a41c61366127c", ["0x04D463bf08dF252Cb09a87D6d41a33c535942710"]))
    vaults.push(new VaultConfig("uniswap-cow-arb-rseth-wsteth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x86b81747ffd477907F8dF2DAF67A82314B94ae36", ["0x3Cfb81925e69650127b0cA3d9869027a94C01aC4"]))
    vaults.push(new VaultConfig("uniswap-cow-arb-rseth-wsteth", PLATFORM_BEEFY_CLM, "0x15cfBd3Db5D24360eeac802b3dde4423eb5C3C70", ["0x8B0345E218B84274154071614641a501821374A6"]))
    vaults.push(new VaultConfig("silo-arb-silo", PLATFORM_SILO, "0x92261402689559D3cF1435ecB28B8B87832c2468", ["0x39Cb8CF3Fd0e0Ed4468ba9F93493BB61189E7a0e"]))
  }

  if (network === "base") {
    vaults.push(new VaultConfig("aerodrome-cow-wsteth-wrseth-vault", PLATFORM_BEEFY_CLM_VAULT, "0xa3F936C5C59683b2998062DA793C0023184F5073"))
    vaults.push(new VaultConfig("aerodrome-cow-wsteth-wrseth", PLATFORM_BEEFY_CLM, "0xa6601388db296dDf20D9DF72211f26Ff78Ac79f9", ["0x84316c44274d3d416cD1F066a992f12d45933D68"]))
    vaults.push(new VaultConfig("aerodrome-usdz-susdz", PLATFORM_SOLIDLY, "0xd4F3e6FaD95Af2512462FeCe507be3C29FE7960C", ["0x1442bCfa9aB4EB8dBfE1947d18Fbd59fbbC20306"]))
    vaults.push(new VaultConfig("aerodrome-usdz-usdc", PLATFORM_SOLIDLY, "0x3b5F990364fa9BF1Db34d9d24B0Bdca6eE4bD4B1"))
    vaults.push(new VaultConfig("aerodrome-usdz-weth", PLATFORM_SOLIDLY, "0x04B3E65D4f8f722d7B0D2BA76075B1eAC33CE2AF"))
    vaults.push(new VaultConfig("aerodrome-weth-wrseth", PLATFORM_SOLIDLY, "0xC5cD1A6d4918820201B8E4eeB6d2AdFD1CDF783d"))
  }

  if (network === "mainnet") {
    // ethereum mainnet
    vaults.push(new VaultConfig("aura-rseth-weth", PLATFORM_BALANCER_AURA, "0x967f88e651db83B1A74058D7499263eA7b3066E2"))
    vaults.push(new VaultConfig("aura-weeth-ezeth-rseth", PLATFORM_BALANCER_AURA, "0x5dA90BA82bED0AB701E6762D2bF44E08634d9776"))
    vaults.push(new VaultConfig("curve-veth", PLATFORM_CURVE, "0xAE0bFfc3110e69DA8993F11C1CBd9a6eA3d16daF", ["0x9Db900bFD1D13112dE2239418eb3D8673B6F1878"]))
    vaults.push(new VaultConfig("pendle-ageth-26dec24", PLATFORM_PENDLE_EQUILIBRIA, "0xc651F2e75101b247bdA18414Fcc23d00cd2c31e2"))
  }

  if (network === "hyperevm") {
    vaults.push(new VaultConfig("hybra-cow-hyperevm-feusd-usdt0", PLATFORM_BEEFY_CLM, "0x98312D3c6D900678Bf0667A45b2aADaD92045D78", ["0x325461FFC41246817cdB0e930B405C299Fc5Fd42"]))
    vaults.push(new VaultConfig("hybra-cow-hyperevm-feusd-whype", PLATFORM_BEEFY_CLM, "0x76C8DaE55CD103B9865c6f056C8da915C8a98c4C", ["0xDd676F923F8a928d97F58F5ADE22c3512d2cFddb"]))
    vaults.push(new VaultConfig("hybra-cow-hyperevm-whlp-whype", PLATFORM_BEEFY_CLM, "0xfe4e34F6EdBA9B2Fba06014046690Cd558aca0fE", ["0x5D9724177b596CBbABaFc6dB5CF09650d18c9cF1"]))
    vaults.push(new VaultConfig("hybra-cow-hyperevm-whype-lhype", PLATFORM_BEEFY_CLM, "0x2084839396c56BEf5A25360B0000aB40103C9Db9", ["0x9C0187d188C412266130D0Ba1D17d4977aCc7179"]))
    vaults.push(new VaultConfig("hybra-cow-hyperevm-whype-usde", PLATFORM_BEEFY_CLM, "0xCbdBa88e24e2455b562683f8170387b264fc08Fa", ["0xb4E9Aea85A2e6037E2C3c133493290915977eaE8"]))
    vaults.push(new VaultConfig("hybra-cow-hyperevm-whype-usdt0", PLATFORM_BEEFY_CLM, "0xdC9d2c590145f3a006FE899D175F93E97dC3a516", ["0x03c27F725DCfdD00E040Ecb7Fb89c24239Ad06b0"]))
  }

  if (network === "linea") {
    vaults.push(new VaultConfig("lynex-gamma-ineth-wsteth", PLATFORM_GAMMA, "0xAA3b8C08e7Fe86E1dda8FA9FE7423561Ad316e3F"))
    vaults.push(new VaultConfig("lynex-gamma-stone-weth", PLATFORM_GAMMA, "0x1C973f35325947f30F20fE1189605A332FD9F40F"))
    vaults.push(new VaultConfig("lynex-ichi-stone-lynx", PLATFORM_ICHI_LYNEX, "0x5AB215b3C42f97165Ab43e7FA7609cc8F8D68817"))
    vaults.push(new VaultConfig("lynex-stone-weth", PLATFORM_LYNEX, "0x1C8cfC0cFf01D59f2e4d6F547EE227Af869EfA07"))
    vaults.push(new VaultConfig("mendi-linea-wrseth", PLATFORM_AAVE, "0xb4B9D861bf734b2c695acd0117a41a6c10F51305"))
    vaults.push(new VaultConfig("mendi-linea-lev-usdc", PLATFORM_MENDI_LEVERAGE, "0x9ab545Ab024a8Da2302f5b0D016F4f5501e330d1"))
    vaults.push(new VaultConfig("mendi-linea-lev-usdt", PLATFORM_MENDI_LEVERAGE, "0xC3C757EA1429231C437736746Eb77A2344EAcb81"))
    vaults.push(new VaultConfig("mendi-linea-lev-wbtc", PLATFORM_MENDI_LEVERAGE, "0x639041dD8cD48B52C12414235d97E1313cbbceff"))
    vaults.push(new VaultConfig("mendi-linea-lev-weth", PLATFORM_MENDI_LEVERAGE, "0x23EC7f31a5c74D5Fe21aa386A7519028DBD6bA40"))
    vaults.push(new VaultConfig("mendi-linea-lev-wsteth", PLATFORM_MENDI_LEVERAGE, "0xBF71FbCe0d4Fc460D36fa1d13B397a3cd5c45220"))
    vaults.push(new VaultConfig("nile-cl-rseth-weth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x1Ea0a1a0D35f4A72156Aa19AC6322cfAA1f7DFd8"))
    vaults.push(new VaultConfig("nile-cl-rseth-weth", PLATFORM_BEEFY_CLM, "0x7c82356b425DaF36D447D24BAa6906eE15EBcf9A", ["0xEF0f0D10A93f5BDeF4aCEFaC02770eeC26302147"]))
  }

  if (network === "kava") {
    vaults.push(new VaultConfig("kinetix-klp", TRACK_ONLY_SHARE_AND_UNDERLYING_TOKEN_BALANCE, "0x9a207D4D2ee8175995C69c0Fb1F117Bf7CcC93cd", ["0x7E4bEdE523726283BdF309d49087C3305e681cE0"]))
  }

  if (network === "manta-pacific-mainnet") {
    vaults.push(new VaultConfig("uniswap-cow-manta-weth-stone", PLATFORM_BEEFY_CLM, "0x906e60166a4b185016e53597fa12fbb1424e47d7", ["0x1386A611e2B692E79Bcfa7dC84AAbB5728f08E44"]))
  }

  if (network === "optimism") {
    vaults.push(new VaultConfig("aura-op-weth-wrseth", PLATFORM_BALANCER_AURA, "0x2160BEDE9d5559bA559Eaf88052b46b8364eE245", ["0x154A3e33014224EC72a2F241eb8c328Bc69D3db7"]))
    vaults.push(new VaultConfig("balancerv3-optimism-wrseth-waoptweth", PLATFORM_BALANCER, "0xdbBc3cFf7AC0051f251FD965FCF0AAD9DC73737f"))
    vaults.push(new VaultConfig("uniswap-cow-op-rseth-wsteth", PLATFORM_BEEFY_CLM, "0x0f46a74b01708e78c27def7160a5c5222f9dd157", ["0xF1748128a1b5c0c45728D09F6f1f60748bC03FE1"]))
    vaults.push(new VaultConfig("velodrome-v2-weth-wrseth", PLATFORM_SOLIDLY, "0xDbE946E16c4e0De9a44065B868265Ac05c437fB6"))
  }

  if (network === "sei") {
    vaults.push(new VaultConfig("yei-isei", PLATFORM_AAVE, "0x65862C640CE6FbC3fb289cd93ee8F0dFFEBC2FFe"))
    vaults.push(new VaultConfig("yei-usdt", PLATFORM_AAVE, "0xcb25214EC41Ea480068638897FcBd6F1206F5521"))
    vaults.push(new VaultConfig("yei-wsei", PLATFORM_AAVE, "0x9E6B9518978bb7caf2ad70778E9AEED9eDb3DB78"))
  }

  if (network === "sonic") {
    vaults.push(new VaultConfig("silov2-sonic-usdc-valamore", PLATFORM_SILO, "0x24c8D7Dc7D1d2dc0e6f6AE97345c04450a174782", ["0x65E44AD1291757C79E4760596F65002a4C42B7b1"]))
    vaults.push(new VaultConfig("silov2-sonic-usdc-apostro", PLATFORM_SILO, "0x392Ea759ad696004e5A8f1Ece45CAc99FAc45F4F"))
    vaults.push(new VaultConfig("silov2-sonic-ws-valamore", PLATFORM_SILO, "0xfDd63AD264A06c3C5b515348BcF692837e841091"))

    vaults.push(new VaultConfig("silov2-sonic-usdce-ws", PLATFORM_SILO, "0xdb6E5dC4C6748EcECb97b565F6C074f24384fD07"))
    vaults.push(new VaultConfig("silov2-sonic-ws-bes", PLATFORM_SILO, "0xB5c0570F781BDfde5ADff69866fDa932df855a14"))

    // this is a special case where we need to breakdown "silov2-sonic-usdce-ws" holding down to the balancer pool list
    vaults.push(
      new VaultConfig("beetsv3-sonic-beefyusdce-scusd", PLATFORM_BALANCER, "0x0aD8162B686af063073EABbEA9bC6FdA2D8184A4", [
        "0x1eB18145248EDF9b077e19584c7a93D61490422E",
        "0x8b8F62E4239eb61d53afb07eA7789Cd6b1b7b6a1",
      ]),
    )
    vaults.push(new VaultConfig("bpt-scusd-beefyusdc", TRACK_ONLY_SHARE_TOKEN_BALANCE, "0x43026d483f42fB35efe03c20B251142D022783f2", []))
    vaults.push(new VaultConfig("bpt-scusd-beefyusdc-gauge", TRACK_ONLY_SHARE_TOKEN_BALANCE, "0x5D9e8B588F1D9e28ea1963681180d8b5938D26BA", []))
  }

  return vaults
}

export class VaultConfig {
  public vaultKey: string
  public underlyingPlatform: string
  public address: string
  public boostAddresses: Array<string>
  public rewardPoolsAddresses: Array<string>

  constructor(vaultKey: string, underlyingPlatform: string, vault: string, boostsOrRewardPools: Array<string> = []) {
    this.vaultKey = vaultKey
    this.underlyingPlatform = underlyingPlatform
    this.address = vault
    this.boostAddresses = new Array<string>()
    this.rewardPoolsAddresses = new Array<string>()

    if (underlyingPlatform === PLATFORM_BEEFY_CLM || underlyingPlatform === PLATFORM_BEEFY_CLM_VAULT) {
      for (let i = 0; i < boostsOrRewardPools.length; i++) {
        this.rewardPoolsAddresses.push(boostsOrRewardPools[i])
      }
    } else {
      for (let i = 0; i < boostsOrRewardPools.length; i++) {
        this.boostAddresses.push(boostsOrRewardPools[i])
      }
    }
  }
}
