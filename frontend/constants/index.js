export const ABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "vrfCoordinatorV2",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "subscriptionId",
                type: "uint64",
            },
            {
                internalType: "bytes32",
                name: "gasLane",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "interval",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "entranceFee",
                type: "uint256",
            },
            {
                internalType: "uint32",
                name: "callbackGasLimit",
                type: "uint32",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "have",
                type: "address",
            },
            {
                internalType: "address",
                name: "want",
                type: "address",
            },
        ],
        name: "OnlyCoordinatorCanFulfill",
        type: "error",
    },
    {
        inputs: [],
        name: "Raffle__RaffleNotOpen",
        type: "error",
    },
    {
        inputs: [],
        name: "Raffle__SendMoreToEnterRaffle",
        type: "error",
    },
    {
        inputs: [],
        name: "Raffle__TransferFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "Raffle__TransferFailed_toOwner",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "currentBalance",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "numPlayers",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "raffleState",
                type: "uint256",
            },
        ],
        name: "Raffle__UpkeepNotNeeded",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "player",
                type: "address",
            },
        ],
        name: "RaffleEnter",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "requestId",
                type: "uint256",
            },
        ],
        name: "RequestedRaffleWinner",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "player",
                type: "address",
            },
        ],
        name: "WinnerPicked",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "checkUpkeep",
        outputs: [
            {
                internalType: "bool",
                name: "upkeepNeeded",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "enterRaffle",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "getEntranceFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getInterval",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getLastTimeStamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getNumWords",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "getNumberOfPlayers",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "getPlayer",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRaffleState",
        outputs: [
            {
                internalType: "enum Raffle.RaffleState",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRecentWinner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRequestConfirmations",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "performUpkeep",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256",
            },
            {
                internalType: "uint256[]",
                name: "randomWords",
                type: "uint256[]",
            },
        ],
        name: "rawFulfillRandomWords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
export const RAFFLE_CONTRACT = "0xeD2637CfE647BA2a64D7f17440bD0aE97cF819E3";
