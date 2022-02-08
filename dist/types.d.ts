import { IdlAccounts } from "@project-serum/anchor";
import { Bonding } from "./idl/idl";
export declare type Vesting = IdlAccounts<Bonding>["vesting"];
export declare type BondPool = IdlAccounts<Bonding>["bondPool"];
export declare type ClaimOutcome = "Partial" | "Complete";
