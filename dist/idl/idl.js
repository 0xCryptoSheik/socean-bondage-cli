"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDL = void 0;
exports.IDL = {
    "version": "0.1.0",
    "name": "bonding",
    "instructions": [
        {
            "name": "initializeBondPool",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "bondPool",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "bondMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "bondMintAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "targetMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "vault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "mintBump",
                    "type": "u8"
                },
                {
                    "name": "vaultAuthorityBump",
                    "type": "u8"
                },
                {
                    "name": "vestingSeconds",
                    "type": "u32"
                }
            ]
        },
        {
            "name": "setOwner",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "newOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "bondPool",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "setVestingSeconds",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "bondedMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "bondPool",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "vestingSeconds",
                    "type": "u32"
                }
            ]
        },
        {
            "name": "deposit",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "depositFrom",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mintTo",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bondedMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bondMintAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "bondPool",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "vest",
            "accounts": [
                {
                    "name": "user",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userBondedAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vesting",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "holding",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bondedMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "bondPool",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clock",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "seed",
                    "type": "u8"
                },
                {
                    "name": "vestingBump",
                    "type": "u8"
                },
                {
                    "name": "holdingBump",
                    "type": "u8"
                },
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "claim",
            "accounts": [
                {
                    "name": "user",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userTargetAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vestingAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bondPool",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "bondedMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bondHolding",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clock",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "cancelVest",
            "accounts": [
                {
                    "name": "user",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userBondedAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userTargetAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vestingAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bondPool",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "bondedMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bondHolding",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clock",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "bondPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "owner",
                        "type": "publicKey"
                    },
                    {
                        "name": "bondedMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "bondMintBump",
                        "type": "u8"
                    },
                    {
                        "name": "targetMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "vault",
                        "type": "publicKey"
                    },
                    {
                        "name": "vaultAuthorityBump",
                        "type": "u8"
                    },
                    {
                        "name": "vestingSeconds",
                        "type": "u32"
                    }
                ]
            }
        },
        {
            "name": "vesting",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "user",
                        "type": "publicKey"
                    },
                    {
                        "name": "bondPool",
                        "type": "publicKey"
                    },
                    {
                        "name": "start",
                        "type": "i64"
                    },
                    {
                        "name": "claimed",
                        "type": "u64"
                    },
                    {
                        "name": "seed",
                        "type": "u8"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    },
                    {
                        "name": "holdingBump",
                        "type": "u8"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "ClaimOutcome",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "Partial"
                    },
                    {
                        "name": "Complete"
                    }
                ]
            }
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "OwnerNotSigner",
            "msg": "Owner did not sign the transaction"
        },
        {
            "code": 6001,
            "name": "PayerNotMutable",
            "msg": "The payer for new accounts is not mutable"
        },
        {
            "code": 6002,
            "name": "IncorrectBondMintAuthority",
            "msg": "The bonded token mint has the incorrect authority"
        },
        {
            "code": 6003,
            "name": "BondMintAlreadyInUse",
            "msg": "The bonded token mint has a supply greater than 0"
        },
        {
            "code": 6004,
            "name": "IncorrectVaultOwner",
            "msg": "The owner of the vault token account is not the correct PDA"
        },
        {
            "code": 6005,
            "name": "BondPoolNotMutable",
            "msg": "The bond pool is not mutable"
        },
        {
            "code": 6006,
            "name": "VestingOngoing",
            "msg": "Bonded tokens still in circulation, vesting has not completed for everyone"
        },
        {
            "code": 6007,
            "name": "NotBondPoolOwner",
            "msg": "Pubkey is not the owner of this bond pool"
        },
        {
            "code": 6008,
            "name": "IncorrectBondMint",
            "msg": "Provided bonded token mint is not correct for this bond pool"
        },
        {
            "code": 6009,
            "name": "IncorrectVault",
            "msg": "Provided vault is not correct for this bond pool"
        },
        {
            "code": 6010,
            "name": "VestingAccountNotOwned",
            "msg": "The provided Vesting Account does not belong to the user"
        },
        {
            "code": 6011,
            "name": "VestingAccountNotMutable",
            "msg": "The provided Vesting Account is not mutable"
        },
        {
            "code": 6012,
            "name": "IncorrectBondHolding",
            "msg": "Provided TokenAccount does not belong to the vesting account"
        },
        {
            "code": 6013,
            "name": "IncorrectMintForTargetAccount",
            "msg": "The provided token account is not for the target mint"
        },
        {
            "code": 6014,
            "name": "TargetAccountNotOwned",
            "msg": "The provided token account does not belong to the user"
        },
        {
            "code": 6015,
            "name": "MintsDecimalsDifferent",
            "msg": "Bonded token mint's decimals do not match target token mint's"
        },
        {
            "code": 6016,
            "name": "SameMints",
            "msg": "Bonded token mint is the same as target token mint"
        },
        {
            "code": 6017,
            "name": "ZeroVestingSeconds",
            "msg": "Vesting period must be at least 1 second"
        },
        {
            "code": 6018,
            "name": "ZeroVestingAmount",
            "msg": "Vesting amount is 0"
        },
        {
            "code": 6019,
            "name": "ZeroDepositAmount",
            "msg": "Deposit amount is 0"
        },
        {
            "code": 6020,
            "name": "InternalError",
            "msg": "Internal Error"
        }
    ]
};
