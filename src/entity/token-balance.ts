import { Bytes } from "@graphprotocol/graph-ts"
import { TokenBalance } from "../../generated/schema"
import { ZERO_BI } from "../utils/decimal"

export function getTokenBalance(investorAddress: Bytes, tokenAddress: Bytes): TokenBalance {
  const id = investorAddress.concat(tokenAddress)
  let tokenBalance = TokenBalance.load(id)
  if (!tokenBalance) {
    tokenBalance = new TokenBalance(id)

    tokenBalance.investor = investorAddress
    tokenBalance.token = tokenAddress
    tokenBalance.rawBalance = ZERO_BI
  }

  return tokenBalance
}
