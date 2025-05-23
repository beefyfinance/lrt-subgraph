import { BeefyVault } from "../../generated/schema"
import { TokenBalance } from "./common"
import { Multicall3Params, multicall } from "../utils/multicall"

export function getVaultTokenBreakdownSilo(vault: BeefyVault): Array<TokenBalance> {
  let balances = new Array<TokenBalance>()

  const signatures = [new Multicall3Params(vault.strategy, "balanceOf()", "uint256")]

  const results = multicall(signatures)

  const wantTotalBalance = results[0].value.toBigInt()
  balances.push(new TokenBalance(vault.underlyingToken, wantTotalBalance))

  return balances
}
