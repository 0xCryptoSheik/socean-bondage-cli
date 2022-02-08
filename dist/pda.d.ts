import { PublicKey } from "@solana/web3.js";
export declare function findBondMintAuthorityPDA(bondProgramId: PublicKey, bondPool: PublicKey): Promise<[PublicKey, number]>;
export declare function createBondMintAuthorityPDA(bondProgramId: PublicKey, bondPool: PublicKey, bump: number): Promise<PublicKey>;
export declare function findVaultPDA(bondProgramId: PublicKey, bondPool: PublicKey): Promise<[PublicKey, number]>;
export declare function createVaultPda(bondProgramId: PublicKey, bondPool: PublicKey, bump: number): Promise<PublicKey>;
export declare function findVestingPDA(bondProgramId: PublicKey, bondPool: PublicKey, owner: PublicKey, index: number): Promise<[PublicKey, number]>;
export declare function createVestingPDA(bondProgramId: PublicKey, bondPool: PublicKey, owner: PublicKey, index: number, bump: number): Promise<PublicKey>;
export declare function findHoldingPDA(bondProgramId: PublicKey, vesting: PublicKey): Promise<[PublicKey, number]>;
export declare function createHoldingPDA(bondProgramId: PublicKey, vesting: PublicKey, bump: number): Promise<PublicKey>;
