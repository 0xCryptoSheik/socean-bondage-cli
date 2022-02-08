"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHoldingPDA = exports.findHoldingPDA = exports.createVestingPDA = exports.findVestingPDA = exports.createVaultPda = exports.findVaultPDA = exports.createBondMintAuthorityPDA = exports.findBondMintAuthorityPDA = void 0;
const web3_js_1 = require("@solana/web3.js");
function bufferArrayFromSeeds(seeds) {
  return seeds.map((s) => {
    switch (typeof s) {
      case "string":
        return Buffer.from(s);
      case "number":
        return Buffer.from([s]);
      default:
        // PublicKey
        return s.toBuffer();
    }
  });
}
function createBondingPDA(bondProgramId, seeds, bump) {
  return web3_js_1.PublicKey.createProgramAddress(
    bufferArrayFromSeeds(seeds.concat([bump])),
    bondProgramId
  );
}
function findBondingPDA(bondProgramId, seeds) {
  return web3_js_1.PublicKey.findProgramAddress(
    bufferArrayFromSeeds(seeds),
    bondProgramId
  );
}
function bondMintAuthoritySeeds(bondPool) {
  return ["bonding", "mint", bondPool];
}
function findBondMintAuthorityPDA(bondProgramId, bondPool) {
  return findBondingPDA(bondProgramId, bondMintAuthoritySeeds(bondPool));
}
exports.findBondMintAuthorityPDA = findBondMintAuthorityPDA;
function createBondMintAuthorityPDA(bondProgramId, bondPool, bump) {
  return createBondingPDA(
    bondProgramId,
    bondMintAuthoritySeeds(bondPool),
    bump
  );
}
exports.createBondMintAuthorityPDA = createBondMintAuthorityPDA;
function vaultSeeds(bondPool) {
  return ["bonding", "vault", bondPool];
}
function findVaultPDA(bondProgramId, bondPool) {
  return findBondingPDA(bondProgramId, vaultSeeds(bondPool));
}
exports.findVaultPDA = findVaultPDA;
function createVaultPda(bondProgramId, bondPool, bump) {
  return createBondingPDA(bondProgramId, vaultSeeds(bondPool), bump);
}
exports.createVaultPda = createVaultPda;
function vestingSeeds(bondPool, owner, index) {
  if (index < 0 || index > 255) {
    throw new Error(`Invalid index: ${index}, must be 0 <= index <= 255`);
  }
  return ["bonding", "vesting", bondPool, owner, index];
}
function findVestingPDA(bondProgramId, bondPool, owner, index) {
  return findBondingPDA(bondProgramId, vestingSeeds(bondPool, owner, index));
}
exports.findVestingPDA = findVestingPDA;
function createVestingPDA(bondProgramId, bondPool, owner, index, bump) {
  return createBondingPDA(
    bondProgramId,
    vestingSeeds(bondPool, owner, index),
    bump
  );
}
exports.createVestingPDA = createVestingPDA;
function holdingSeeds(vesting) {
  return ["bonding", "holding", vesting];
}
function findHoldingPDA(bondProgramId, vesting) {
  return findBondingPDA(bondProgramId, holdingSeeds(vesting));
}
exports.findHoldingPDA = findHoldingPDA;
function createHoldingPDA(bondProgramId, vesting, bump) {
  return createBondingPDA(bondProgramId, holdingSeeds(vesting), bump);
}
exports.createHoldingPDA = createHoldingPDA;
