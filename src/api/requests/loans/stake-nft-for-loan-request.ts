import { BaseLoanInstructionRequest } from "./base-loan-instruction-request";

/**
 * The request to stake an NFT for a loan.
 */
export interface StakeNftForLoanRequest extends BaseLoanInstructionRequest {
  loanAmountInSOL: number;
  loanInterestInSOL: number;
  loanDurationInSeconds: number;
}
