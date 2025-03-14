export const PLATFORM_AAVE = "AAVE"
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
    vaults.push(
      new VaultConfig("aura-arb-ezeth-wsteth", PLATFORM_BALANCER_AURA, "0xEFAd727469e7e4e410376986AB0af8B6F9559fDc", [
        "0xfcF293AFa58fa277935eddAa44E0f782EC41B09B",
        "0x8d4faAa513943Cee209f819779075e5cD80FbF8D",
      ]),
    )
    vaults.push(new VaultConfig("aura-arb-rseth-weth", PLATFORM_BALANCER_AURA, "0x764e4e75e3738615CDBFAeaE0C8527b1616e1123"))
    vaults.push(new VaultConfig("camelot-ezeth-weth", PLATFORM_BEEFY_CLM, "0x663B0d9ddB6e86cB5E1F87ebCbDafb5A53a45798", ["0xf1ff0F8793DbA18dF40E8b8aff66CE6f7a9DF945"]))
    vaults.push(new VaultConfig("camelot-rseth-weth", PLATFORM_BEEFY_CLM, "0xac8246F01197fB783Bf1A80960821835045Ec680", ["0xD9001574E23fb909657A25494f540A9B3804b16e"]))
    vaults.push(new VaultConfig("curve-arb-dlcbtc", PLATFORM_CURVE, "0x7eD37e03D64e6d1c7e315F1faf295f1E3A4B29dF"))
    vaults.push(new VaultConfig("equilibria-arb-ezeth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0x218337d7DAe070e219c44783A64cA107dffc533e"))
    vaults.push(new VaultConfig("equilibria-arb-ezeth-27jun24", PLATFORM_PENDLE_EQUILIBRIA, "0xdccb85017a996faF5242648B46940E80DE0A36a5"))
    vaults.push(new VaultConfig("equilibria-arb-rseth-26dec24", PLATFORM_PENDLE_EQUILIBRIA, "0x0da91e452BdbE890B3eba9Eb5C0778DA9AB28E51"))
    vaults.push(new VaultConfig("equilibria-arb-rseth-26sep24-new", PLATFORM_PENDLE_EQUILIBRIA, "0x4897679a3E506F0bedC118250369D782F6CCA03e"))
    vaults.push(new VaultConfig("equilibria-arb-rseth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0x66d89d65046D8BC75E0fb14E704e50E8C7a07219"))
    vaults.push(new VaultConfig("equilibria-arb-rseth-27jun24", PLATFORM_PENDLE_EQUILIBRIA, "0x59D0C3f25cB3bD86E03D827C773892d247452227"))
    vaults.push(new VaultConfig("equilibria-arb-rseth", PLATFORM_PENDLE_EQUILIBRIA, "0x7975d9EcCe584aDcE00efd16520853Dad66a7775"))
    vaults.push(new VaultConfig("equilibria-arb-seth-ezeth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0x6523aFd4658238aa9C8ABA642565b84e2C9E9012"))
    vaults.push(new VaultConfig("equilibria-arb-seth-rseth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0x9487044D3208Ff03343429F10307f0a23A27dfeC"))
    vaults.push(new VaultConfig("equilibria-arb-unieth-26dec24", PLATFORM_PENDLE_EQUILIBRIA, "0x48a0693241A7556216F9106EB2AA78251388DE69"))
    vaults.push(new VaultConfig("pancake-cow-arb-rseth-weth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x70a9DC4c4c4ea1A621c174e3F438582fA7C99BFA"))
    vaults.push(new VaultConfig("pancake-cow-arb-rseth-weth", PLATFORM_BEEFY_CLM, "0x5c1f30297b7997601a2ae2957cdc95cd4783e544", ["0x3ec0e7Bf0DCDA562d67d8d7F27569AA0be080DAb"]))
    vaults.push(new VaultConfig("pendle-arb-dusdc-26jun25", PLATFORM_PENDLE_EQUILIBRIA, "0x4542588C4adfA20ff3F01180fcEde79fE306cB81"))
    vaults.push(new VaultConfig("pendle-arb-dusdc-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0xf8934BDFe5424D3e8101A73dBAb30f73335106Ea"))
    vaults.push(new VaultConfig("pendle-arb-dwbtc-26jun25", PLATFORM_PENDLE_EQUILIBRIA, "0x7cC384D2f228eB17f5D5ECD4C9DF5bC2c3A8Ed68"))
    vaults.push(new VaultConfig("pendle-arb-ezeth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0xeA4317300Cd4F856B63d8Fc964B3a3Aa64ce712F"))
    vaults.push(new VaultConfig("pendle-arb-rseth-26jun25", PLATFORM_PENDLE_EQUILIBRIA, "0xCF8239be4AB29217598047210ab2Dd2684DabE2A"))
    vaults.push(new VaultConfig("pendle-arb-rseth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0xcf4D88E8d3496aaEC03A53A05a5cf3da93c2394D"))
    vaults.push(new VaultConfig("pendle-arb-seth-ezeth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0xaD2cd300E6fFd20f620255C2C13251FB1D76F660"))
    vaults.push(new VaultConfig("pendle-arb-seth-rseth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0xa47D338061c499DBF8dd93a857828762b594d543"))
    vaults.push(new VaultConfig("pendle-arb-unieth-26dec24", PLATFORM_PENDLE_EQUILIBRIA, "0xabe6199ad847F05f1E93B005f3850793b8DF7c9c"))
    vaults.push(new VaultConfig("pendle-eqb-arb-dusdc-26jun25", PLATFORM_PENDLE_EQUILIBRIA, "0x727EE5b220f871114605cdFF805d559BAabBe7E2"))
    vaults.push(new VaultConfig("pendle-eqb-arb-dwbtc-26jun25", PLATFORM_PENDLE_EQUILIBRIA, "0xac155D963D6879d62ACbEc8DA412fCa8b46FB8C2"))
    vaults.push(new VaultConfig("pendle-eqb-arb-rseth-26jun25", PLATFORM_PENDLE_EQUILIBRIA, "0x792C24717700Eb3824CCb58FCB4E6Da4B17dd178"))
    vaults.push(new VaultConfig("ramses-cl-rseth-ethx-vault", PLATFORM_BEEFY_CLM_VAULT, "0x4fCf6A05a7F1A5BA2781d7De4DB78Bd16F84F540", ["0x1f84DaF589C0b9Dea8c9a1B7463099e2DB2F589a"]))
    vaults.push(new VaultConfig("ramses-cl-rseth-ethx", PLATFORM_BEEFY_CLM, "0xBB18cb9D1F3f20dd1c3Af946b46Dd19872206DDa", ["0xf2bf40360aa066353f3b42576799141fe80e0285"]))
    vaults.push(new VaultConfig("ramses-cl-rseth-weth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x45eAc6f86b974b0536Aa488eD8DDF3022F4C768E", ["0x338Fb7e54f4875c76cA77AA9653eB08e856e1FcD"]))
    vaults.push(new VaultConfig("ramses-cl-rseth-weth", PLATFORM_BEEFY_CLM, "0x9ebb94be20476db4a58e59c764e709b5fa35f8b0", ["0x81F15F4FA4848F7D87ceF27975AE2953bf333D7b"]))
    vaults.push(new VaultConfig("uniswap-cow-arb-ezeth-wsteth", PLATFORM_BEEFY_CLM, "0x83368b5e04d8a2c990ef9b5fe41509fafcfba499", ["0xe4c1fc47aDB25506E664Af9748a4c3ee98828318"]))
    vaults.push(new VaultConfig("uniswap-cow-arb-rseth-weth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x1Db8d743824bdaBA39b88D22b44bcEcf7179D413", ["0x7f3e9f5EFFE06169Db679658392e4Ca79fd5E594"]))
    vaults.push(new VaultConfig("uniswap-cow-arb-rseth-weth", PLATFORM_BEEFY_CLM, "0xf3d5c975de1c0fd358a593bcef7a41c61366127c", ["0x04D463bf08dF252Cb09a87D6d41a33c535942710"]))
    vaults.push(new VaultConfig("uniswap-cow-arb-rseth-wsteth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x86b81747ffd477907F8dF2DAF67A82314B94ae36", ["0x3Cfb81925e69650127b0cA3d9869027a94C01aC4"]))
    vaults.push(new VaultConfig("uniswap-cow-arb-rseth-wsteth", PLATFORM_BEEFY_CLM, "0x15cfBd3Db5D24360eeac802b3dde4423eb5C3C70", ["0x8B0345E218B84274154071614641a501821374A6"]))
    vaults.push(new VaultConfig("silo-arb-silo", PLATFORM_SILO, "0x92261402689559D3cF1435ecB28B8B87832c2468", ["0x39Cb8CF3Fd0e0Ed4468ba9F93493BB61189E7a0e"]))
  }

  if (network === "base") {
    vaults.push(new VaultConfig("aerodrome-cow-wsteth-wrseth-vault", PLATFORM_BEEFY_CLM_VAULT, "0xa3F936C5C59683b2998062DA793C0023184F5073"))
    vaults.push(new VaultConfig("aerodrome-cow-wsteth-wrseth", PLATFORM_BEEFY_CLM, "0xa6601388db296dDf20D9DF72211f26Ff78Ac79f9", ["0x84316c44274d3d416cD1F066a992f12d45933D68"]))
    vaults.push(new VaultConfig("aerodrome-ezeth-weth-s", PLATFORM_SOLIDLY, "0x90A7de0E16CA4521B1E4C3dBBA4edAA2354aB81B"))
    vaults.push(new VaultConfig("aerodrome-ezeth-weth", PLATFORM_SOLIDLY, "0xAB7EeE0a368079D2fBfc83599eD0148a16d0Ea09"))
    vaults.push(new VaultConfig("aerodrome-usdz-susdz", PLATFORM_SOLIDLY, "0xd4F3e6FaD95Af2512462FeCe507be3C29FE7960C", ["0x1442bCfa9aB4EB8dBfE1947d18Fbd59fbbC20306"]))
    vaults.push(new VaultConfig("aerodrome-usdz-usdc", PLATFORM_SOLIDLY, "0x3b5F990364fa9BF1Db34d9d24B0Bdca6eE4bD4B1"))
    vaults.push(new VaultConfig("aerodrome-usdz-weth", PLATFORM_SOLIDLY, "0x04B3E65D4f8f722d7B0D2BA76075B1eAC33CE2AF"))
    vaults.push(new VaultConfig("aerodrome-weth-wrseth", PLATFORM_SOLIDLY, "0xC5cD1A6d4918820201B8E4eeB6d2AdFD1CDF783d"))
  }

  if (network === "bsc") {
    //vaults.push(new VaultConfig("thena-gamma-weeth-eth-narrow", PLATFORM_GAMMA, "0xcCcDB0F6eCcd5f231d4737A00C554322167d814B"))
  }

  if (network === "mainnet") {
    // ethereum mainnet
    vaults.push(new VaultConfig("aura-ezeth-eth", PLATFORM_BALANCER_AURA, "0x3E1c2C604f60ef142AADAA51aa864f8438f2aaC1", ["0x8e938b678F6ab8D682988ea3cc9f76f5985E3235"]))
    vaults.push(new VaultConfig("aura-rseth-weth", PLATFORM_BALANCER_AURA, "0x967f88e651db83B1A74058D7499263eA7b3066E2"))
    vaults.push(new VaultConfig("aura-weeth-ezeth-rseth", PLATFORM_BALANCER_AURA, "0x5dA90BA82bED0AB701E6762D2bF44E08634d9776"))
    vaults.push(new VaultConfig("curve-veth", PLATFORM_CURVE, "0xAE0bFfc3110e69DA8993F11C1CBd9a6eA3d16daF", ["0x9Db900bFD1D13112dE2239418eb3D8673B6F1878"]))
    vaults.push(new VaultConfig("pendle-ageth-26dec24", PLATFORM_PENDLE_EQUILIBRIA, "0xc651F2e75101b247bdA18414Fcc23d00cd2c31e2"))
    // vaults.push(new VaultConfig("pendle-rseth-26dec24", PLATFORM_PENDLE_EQUILIBRIA, "0x178799CF80C4E16D195f75ff82a9C53b216b08D6"))
    // vaults.push(new VaultConfig("pendle-rsweth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0x22b5f6692bAdaB196b4eEBfc1f9DA72D5Cc2af15"))
    // vaults.push(new VaultConfig("pendle-unieth-26sep24", PLATFORM_PENDLE_EQUILIBRIA, "0x9A43381249a6417f8ce03CCF26139b5f05527e4F"))
  }

  if (network === "linea") {
    vaults.push(new VaultConfig("lynex-gamma-ezeth-weth", PLATFORM_GAMMA, "0x35884E8C569b9f7714A35EDf056A82535A43F5AD"))
    vaults.push(new VaultConfig("lynex-gamma-ineth-wsteth", PLATFORM_GAMMA, "0xAA3b8C08e7Fe86E1dda8FA9FE7423561Ad316e3F"))
    vaults.push(new VaultConfig("lynex-gamma-stone-weth", PLATFORM_GAMMA, "0x1C973f35325947f30F20fE1189605A332FD9F40F"))
    vaults.push(new VaultConfig("lynex-ichi-stone-lynx", PLATFORM_ICHI_LYNEX, "0x5AB215b3C42f97165Ab43e7FA7609cc8F8D68817"))
    vaults.push(new VaultConfig("lynex-stone-weth", PLATFORM_LYNEX, "0x1C8cfC0cFf01D59f2e4d6F547EE227Af869EfA07"))
    vaults.push(new VaultConfig("mendi-linea-ezeth", PLATFORM_AAVE, "0xf711cdcDDa1C5F919c94573cC4E38b4cE2207750"))
    vaults.push(new VaultConfig("mendi-linea-wrseth", PLATFORM_AAVE, "0xb4B9D861bf734b2c695acd0117a41a6c10F51305"))
    vaults.push(new VaultConfig("mendi-linea-lev-usdc", PLATFORM_MENDI_LEVERAGE, "0x9ab545Ab024a8Da2302f5b0D016F4f5501e330d1"))
    vaults.push(new VaultConfig("mendi-linea-lev-usdt", PLATFORM_MENDI_LEVERAGE, "0xC3C757EA1429231C437736746Eb77A2344EAcb81"))
    vaults.push(new VaultConfig("mendi-linea-lev-wbtc", PLATFORM_MENDI_LEVERAGE, "0x639041dD8cD48B52C12414235d97E1313cbbceff"))
    vaults.push(new VaultConfig("mendi-linea-lev-weth", PLATFORM_MENDI_LEVERAGE, "0x23EC7f31a5c74D5Fe21aa386A7519028DBD6bA40"))
    vaults.push(new VaultConfig("mendi-linea-lev-wsteth", PLATFORM_MENDI_LEVERAGE, "0xBF71FbCe0d4Fc460D36fa1d13B397a3cd5c45220"))
    vaults.push(new VaultConfig("nile-cl-ezeth-weth-vault", PLATFORM_BEEFY_CLM_VAULT, "0xA0a2734F3947C8131603aAfE246A332be7A4AEc1"))
    vaults.push(new VaultConfig("nile-cl-ezeth-weth", PLATFORM_BEEFY_CLM, "0xD4CC44a7fBc0323d3d74565B558228feCc88A329", ["0xf98793D144392d3fd9c1c52660fB8DA97b46C1ae"]))
    vaults.push(new VaultConfig("nile-cl-rseth-weth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x1Ea0a1a0D35f4A72156Aa19AC6322cfAA1f7DFd8"))
    vaults.push(new VaultConfig("nile-cl-rseth-weth", PLATFORM_BEEFY_CLM, "0x7c82356b425DaF36D447D24BAa6906eE15EBcf9A", ["0xEF0f0D10A93f5BDeF4aCEFaC02770eeC26302147"]))
    vaults.push(new VaultConfig("nile-ezeth-weth", PLATFORM_SOLIDLY, "0x063091e4532eD93CE93347C6c8338dcA0832ddb0"))
  }

  if (network === "kava") {
    vaults.push(new VaultConfig("kinetix-klp", TRACK_ONLY_SHARE_AND_UNDERLYING_TOKEN_BALANCE, "0x9a207D4D2ee8175995C69c0Fb1F117Bf7CcC93cd", ["0x7E4bEdE523726283BdF309d49087C3305e681cE0"]))
  }

  if (network === "lisk") {
    vaults.push(new VaultConfig("uniswap-cow-lisk-usdt-weth", PLATFORM_BEEFY_CLM, "0xdC76e4fcE40C8224D6Bbc7Dd733165A8A07DCe0D", ["0x7BF7E5105b7AC0C8AAa37bCC632F5B9720A71F2a"]))
    vaults.push(new VaultConfig("uniswap-cow-lisk-weth-lsk", PLATFORM_BEEFY_CLM, "0x52115E698dC76Fc0ac75145c4f3F5d986E4CE162", ["0xb321E8698E6587275Ca11AD63c40e912C8659cf6"]))
    vaults.push(new VaultConfig("velodrome-cow-lisk-usdt-usdc.e-vault", PLATFORM_BEEFY_CLM_VAULT, "0x19D1F0A1a2FE5807958b34ADBc0d0569A93727C7", ["0x69e8612c2364e0e743731c4BE16813BfD18e2E32"]))
    vaults.push(new VaultConfig("velodrome-cow-lisk-usdt-usdc.e", PLATFORM_BEEFY_CLM, "0xB3AAc1293632706E134E4cC41976B49EC89fAb1b", ["0x6b18251437f88b8f169ecC5d950Cc7c4b885614E"]))
    vaults.push(new VaultConfig("velodrome-cow-lisk-usdt-weth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x54d91365cB1eA8F454DaA43af91f9198d32b62FD", ["0x57bC7064B165fBCB1B0df55aF76e3b2aAEB0aA95"]))
    vaults.push(new VaultConfig("velodrome-cow-lisk-usdt-weth", PLATFORM_BEEFY_CLM, "0x270c72285aa76233AdAd07b6C20ac81d4fE68F8e", ["0x7C491106dc9583f4cAC26e226E0f44E8884F0C93"]))
    vaults.push(new VaultConfig("velodrome-cow-lisk-wbtc-weth-vault", PLATFORM_BEEFY_CLM_VAULT, "0xAc0E6ba47A20EE95E3149910dA3844b851537f25"))
    vaults.push(new VaultConfig("velodrome-cow-lisk-wbtc-weth", PLATFORM_BEEFY_CLM, "0x129E66F12e46D0B529786BA517dd00CECA343a73", ["0xb1A1A9486d6FC5146525C010Df70e1E095ADD9a3"]))
    vaults.push(new VaultConfig("velodrome-cow-lisk-weth-lsk-vault", PLATFORM_BEEFY_CLM_VAULT, "0xA2A2Eff23093461098F51f58d9Bb0A1A4d46B304"))
    vaults.push(new VaultConfig("velodrome-cow-lisk-weth-lsk", PLATFORM_BEEFY_CLM, "0xac763E75B02164b39A240DA60b060281BAd66a55", ["0x74BE1F8930e7547dA19eE9D9035F7A185FC4C251"]))
    vaults.push(new VaultConfig("velodrome-cow-lisk-weth-xvelo-vault", PLATFORM_BEEFY_CLM_VAULT, "0x8F4488c0423d418c4e4796A912Dd3E8c23624969"))
    vaults.push(new VaultConfig("velodrome-cow-lisk-weth-xvelo", PLATFORM_BEEFY_CLM, "0x38Dfe64d47E54feD51eAc11813a2a648e0024BFe", ["0x23C9159A4429c90dD250a900ea9F11222e6E88bd"]))
    vaults.push(new VaultConfig("velodrome-lisk-lsk-weth", PLATFORM_SOLIDLY, "0x573F85C231a382Fa749E5Dae729dC09C36f71bA4"))
    vaults.push(new VaultConfig("velodrome-lisk-weth-usdc.e", PLATFORM_SOLIDLY, "0xFF37EBCA7B998fd39b2C7867e06e1D283bAB69b8"))
  }

  if (network === "manta-pacific-mainnet") {
    vaults.push(new VaultConfig("uniswap-cow-manta-weth-stone", PLATFORM_BEEFY_CLM, "0x906e60166a4b185016e53597fa12fbb1424e47d7", ["0x1386A611e2B692E79Bcfa7dC84AAbB5728f08E44"]))
  }

  if (network === "mode-mainnet") {
    vaults.push(new VaultConfig("velodrome-mode-ezeth-eth", PLATFORM_SOLIDLY, "0x94A3725124d2E71028Ee488b88566f1fb11A90C3"))
  }

  if (network === "optimism") {
    vaults.push(new VaultConfig("aura-op-weth-wrseth", PLATFORM_BALANCER_AURA, "0x2160BEDE9d5559bA559Eaf88052b46b8364eE245", ["0x154A3e33014224EC72a2F241eb8c328Bc69D3db7"]))
    vaults.push(new VaultConfig("uniswap-cow-op-rseth-wsteth", PLATFORM_BEEFY_CLM, "0x0f46a74b01708e78c27def7160a5c5222f9dd157", ["0xF1748128a1b5c0c45728D09F6f1f60748bC03FE1"]))
    vaults.push(new VaultConfig("uniswap-cow-op-wsteth-ezeth-vault", PLATFORM_BEEFY_CLM_VAULT, "0xfCb36EC9cA09522d584263A5Bee4e793146ee74f"))
    vaults.push(new VaultConfig("uniswap-cow-op-wsteth-ezeth", PLATFORM_BEEFY_CLM, "0x87F91963005c57596dA3576B469617FDC6DEC5a8", ["0x1DD7A8C8eE981970CF4e91800c83087F69d6DdeC"]))
    vaults.push(new VaultConfig("velo-cow-op-wsteth-ezeth-vault", PLATFORM_BEEFY_CLM_VAULT, "0x5578B44A1A8572b48160B67213A690FC2e75F298", ["0xB94b0ca6C316f65F0A5E46667CDA50B5EF1eA5F1"]))
    vaults.push(new VaultConfig("velo-cow-op-wsteth-ezeth", PLATFORM_BEEFY_CLM, "0x823f2B0aa1D54c38fe149ee119c6d7845e93593d", ["0x64831F82e3543006413897C03f59518CEcae02b4"]))
    vaults.push(new VaultConfig("velodrome-v2-weth-wrseth", PLATFORM_SOLIDLY, "0xDbE946E16c4e0De9a44065B868265Ac05c437fB6"))
  }

  if (network === "sei") {
    vaults.push(new VaultConfig("yei-isei", PLATFORM_AAVE, "0x65862C640CE6FbC3fb289cd93ee8F0dFFEBC2FFe"))
    vaults.push(new VaultConfig("yei-usdt", PLATFORM_AAVE, "0xcb25214EC41Ea480068638897FcBd6F1206F5521"))
    vaults.push(new VaultConfig("yei-usdc", PLATFORM_AAVE, "0x906e60166A4B185016e53597fA12FBB1424e47d7"))
    vaults.push(new VaultConfig("yei-wsei", PLATFORM_AAVE, "0x9E6B9518978bb7caf2ad70778E9AEED9eDb3DB78"))
  }

  if (network === "sonic") {
    vaults.push(new VaultConfig("silov2-sonic-usdce-ws", PLATFORM_SILO, "0xdb6E5dC4C6748EcECb97b565F6C074f24384fD07"))
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
