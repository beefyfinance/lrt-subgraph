// This is a mustache template file - do not edit directly
// The actual vault-config.ts will be generated from this template

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
  
{{#vaults}}
  vaults.push(new VaultConfig("{{vaultKey}}", {{underlyingPlatform}}, "{{address}}"{{#boostsOrRewardPools.length}}, [{{#boostsOrRewardPools}}"{{.}}"{{^last}}, {{/last}}{{/boostsOrRewardPools}}]{{/boostsOrRewardPools.length}}))
{{/vaults}}

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
