import { BeefyVault } from "../../generated/schema"
import { TokenBalance } from "./common"
import { BeefyVaultV7 as BeefyVaultV7Contract } from "../../generated/templates/BeefyVaultV7/BeefyVaultV7"
import { BalancerPool as BalancerPoolContract } from "../../generated/templates/BeefyVaultV7/BalancerPool"
import { IERC20 as ERC20Contract } from "../../generated/templates/BeefyVaultV7/IERC20"
import { BalancerVault as BalancerVaultContract } from "../../generated/templates/BeefyVaultV7/BalancerVault"
import { Address } from "@graphprotocol/graph-ts"
import { BeefyIStrategyV7 as IStrategyV7Contract } from "../../generated/templates/BeefyVaultV7/BeefyIStrategyV7"

export function getVaultTokenBreakdownBalancerAura(vault: BeefyVault): Array<TokenBalance> {
  let balances = new Array<TokenBalance>()

  const vaultContract = BeefyVaultV7Contract.bind(Address.fromBytes(vault.sharesToken))
  const wantTotalBalance = vaultContract.balance()

  // fetch on chain data
  const balancerPoolContract = BalancerPoolContract.bind(Address.fromBytes(vault.underlyingToken))
  const balancerVaultAddress = balancerPoolContract.getVault()
  const balancerPoolId = balancerPoolContract.getPoolId()
  const balancerTotalSupply = balancerPoolContract.getActualSupply()
  const balancerVaultContract = BalancerVaultContract.bind(balancerVaultAddress)
  const poolTokensRes = balancerVaultContract.getPoolTokens(balancerPoolId)
  const poolTokens = poolTokensRes.getTokens()
  const poolBalances = poolTokensRes.getBalances()

  // compute breakdown
  for (let i = 0; i < poolTokens.length; i++) {
    const poolToken = poolTokens[i]
    const poolBalance = poolBalances[i]
    balances.push(new TokenBalance(poolToken, poolBalance.times(wantTotalBalance).div(balancerTotalSupply)))
  }

  return balances
}

export function getVaultTokenBreakdownBalancer(vault: BeefyVault): Array<TokenBalance> {
  let balances = new Array<TokenBalance>()

  const vaultContract = BeefyVaultV7Contract.bind(Address.fromBytes(vault.sharesToken))
  const wantPoolBalance = vaultContract.balance()

  const poolAddress = Address.fromBytes(vault.underlyingToken)
  const poolTotalSupply = ERC20Contract.bind(poolAddress).totalSupply()

  const balancerVaultAddress = IStrategyV7Contract.bind(Address.fromBytes(vault.strategy)).balancerVault()
  const balancerVaultContract = BalancerVaultContract.bind(balancerVaultAddress)
  const poolInfos = balancerVaultContract.getPoolTokenInfo(poolAddress)
  const poolTokens = poolInfos.getTokens()
  const poolBalances = poolInfos.getBalancesRaw()

  // compute breakdown
  for (let i = 0; i < poolTokens.length; i++) {
    const poolToken = poolTokens[i]
    const poolBalance = poolBalances[i]
    balances.push(new TokenBalance(poolToken, poolBalance.times(wantPoolBalance).div(poolTotalSupply)))
  }

  return balances
}
