import { BigInt, Bytes, log } from "@graphprotocol/graph-ts"
import { getTokenBalance } from "../entity/token-balance"
import { Transfer } from "../../generated/templates/TokenBalance/IERC20"
import { ADDRESS_ZERO } from "../utils/address"
import { SHARE_TOKEN_MINT_ADDRESS } from "../config"

export function handleTokenBalanceTransfer(event: Transfer): void {
  const token = event.address
  const from = event.params.from
  const to = event.params.to
  const value = event.params.value

  if (from.equals(to)) {
    log.debug("handleTokenBalanceTransfer: from and to are the same address, ignoring", [])
    return
  }
  if (value.isZero()) {
    log.debug("handleTokenBalanceTransfer: value is zero, ignoring", [])
    return
  }

  if (!from.equals(ADDRESS_ZERO) && !from.equals(SHARE_TOKEN_MINT_ADDRESS)) {
    updateTokenBalance(token, from, value.neg())
  }
  if (!to.equals(ADDRESS_ZERO) && !to.equals(SHARE_TOKEN_MINT_ADDRESS)) {
    updateTokenBalance(token, to, value)
  }
}

function updateTokenBalance(token: Bytes, investor: Bytes, diff: BigInt): void {
  const tokenBalance = getTokenBalance(investor, token)
  tokenBalance.rawBalance = tokenBalance.rawBalance.plus(diff)
  tokenBalance.save()
}
