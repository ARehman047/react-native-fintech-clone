const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const ids = url.searchParams.get("ids") || "";

//   const response = await fetch(
//     `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`,
//     {
//       headers: {
//         "X-CMC_PRO_API_KEY": API_KEY!,
//       },
//     }
//   );

//   const res = await response.json();
//   return Response.json(res.data);
    return Response.json(data);
}


const data = {
    "1": {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "category": "coin",
        "description": "Bitcoin (BTC) is a cryptocurrency launched in 2010. Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 19,827,978. The last known price of Bitcoin is 96,407.00712634 USD and is up 0.08 over the last 24 hours. It is currently trading on 11958 active market(s) with $16,086,880,719.01 traded over the last 24 hours. More information can be found at https://bitcoin.org/.",
        "slug": "bitcoin",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        "subreddit": "bitcoin",
        "notice": "",
        "tags": [
            "mineable",
            "pow",
            "sha-256",
            "store-of-value",
            "state-channel",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "galaxy-digital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
            "bitcoin-ecosystem",
            "ftx-bankruptcy-estate",
            "2017-2018-alt-season"
        ],
        "tag-names": [
            "Mineable",
            "PoW",
            "SHA-256",
            "Store Of Value",
            "State Channel",
            "Coinbase Ventures Portfolio",
            "Three Arrows Capital Portfolio",
            "Polychain Capital Portfolio",
            "Binance Labs Portfolio",
            "Blockchain Capital Portfolio",
            "BoostVC Portfolio",
            "CMS Holdings Portfolio",
            "DCG Portfolio",
            "DragonFly Capital Portfolio",
            "Electric Capital Portfolio",
            "Fabric Ventures Portfolio",
            "Framework Ventures Portfolio",
            "Galaxy Digital Portfolio",
            "Huobi Capital Portfolio",
            "Alameda Research Portfolio",
            "a16z Portfolio",
            "1Confirmation Portfolio",
            "Winklevoss Capital Portfolio",
            "USV Portfolio",
            "Placeholder Ventures Portfolio",
            "Pantera Capital Portfolio",
            "Multicoin Capital Portfolio",
            "Paradigm Portfolio",
            "Bitcoin Ecosystem",
            "FTX Bankruptcy Estate ",
            "2017/18 Alt season"
        ],
        "tag-groups": [
            "OTHERS",
            "ALGORITHM",
            "ALGORITHM",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "PLATFORM",
            "CATEGORY",
            "CATEGORY"
        ],
        "urls": {
            "website": [
                "https://bitcoin.org/"
            ],
            "twitter": [],
            "message_board": [
                "https://bitcointalk.org"
            ],
            "chat": [],
            "facebook": [],
            "explorer": [
                "https://blockchain.info/",
                "https://live.blockcypher.com/btc/",
                "https://blockchair.com/bitcoin",
                "https://explorer.viabtc.com/btc",
                "https://www.okx.com/web3/explorer/btc"
            ],
            "reddit": [
                "https://reddit.com/r/bitcoin"
            ],
            "technical_doc": [
                "https://bitcoin.org/bitcoin.pdf"
            ],
            "source_code": [
                "https://github.com/bitcoin/bitcoin"
            ],
            "announcement": []
        },
        "platform": null,
        "date_added": "2010-07-13T00:00:00.000Z",
        "twitter_username": "",
        "is_hidden": 0,
        "date_launched": "2010-07-13T00:00:00.000Z",
        "contract_address": [],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    },
    "52": {
        "id": 52,
        "name": "XRP",
        "symbol": "XRP",
        "category": "coin",
        "description": "XRP (XRP) is a cryptocurrency . XRP has a current supply of 99,986,418,374 with 57,887,806,032 in circulation. The last known price of XRP is 2.58558328 USD and is up 0.11 over the last 24 hours. It is currently trading on 1541 active market(s) with $2,319,721,578.03 traded over the last 24 hours. More information can be found at https://xrpl.org/.",
        "slug": "xrp",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
        "subreddit": "ripple",
        "notice": "",
        "tags": [
            "medium-of-exchange",
            "enterprise-solutions",
            "xrp-ecosystem",
            "arrington-xrp-capital-portfolio",
            "galaxy-digital-portfolio",
            "a16z-portfolio",
            "pantera-capital-portfolio",
            "ftx-bankruptcy-estate",
            "2017-2018-alt-season",
            "klaytn-ecosystem",
            "made-in-america"
        ],
        "tag-names": [
            "Medium of Exchange",
            "Enterprise Solutions",
            "XRP Ecosystem",
            "Arrington XRP Capital Portfolio",
            "Galaxy Digital Portfolio",
            "a16z Portfolio",
            "Pantera Capital Portfolio",
            "FTX Bankruptcy Estate ",
            "2017/18 Alt season",
            "Klaytn Ecosystem",
            "Made in America"
        ],
        "tag-groups": [
            "INDUSTRY",
            "INDUSTRY",
            "PLATFORM",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "PLATFORM",
            "CATEGORY"
        ],
        "urls": {
            "website": [
                "https://xrpl.org/"
            ],
            "twitter": [
                "https://twitter.com/Ripple"
            ],
            "message_board": [
                "http://www.xrpchat.com/"
            ],
            "chat": [],
            "facebook": [],
            "explorer": [
                "https://livenet.xrpl.org/",
                "https://bithomp.com/explorer/",
                "https://xrpscan.com/",
                "https://blockchair.com/ripple",
                "https://bscscan.com/token/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe"
            ],
            "reddit": [
                "https://reddit.com/r/ripple"
            ],
            "technical_doc": [
                "https://ripple.com/files/ripple_consensus_whitepaper.pdf"
            ],
            "source_code": [
                "https://github.com/ripple/rippled"
            ],
            "announcement": []
        },
        "platform": {
            "id": "1839",
            "name": "BNB",
            "slug": "bnb",
            "symbol": "BNB",
            "token_address": "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe"
        },
        "date_added": "2013-08-04T00:00:00.000Z",
        "twitter_username": "Ripple",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [
            {
                "contract_address": "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
                "platform": {
                    "name": "BNB Smart Chain (BEP20)",
                    "coin": {
                        "id": "1839",
                        "name": "BNB",
                        "symbol": "BNB",
                        "slug": "bnb"
                    }
                }
            },
            {
                "contract_address": "0x9eaefb09fe4aabfbe6b1ca316a3c36afc83a393f",
                "platform": {
                    "name": "KAIA",
                    "coin": {
                        "id": "32880",
                        "name": "Kaia",
                        "symbol": "KAIA",
                        "slug": "kaia"
                    }
                }
            },
            {
                "contract_address": "xrp",
                "platform": {
                    "name": "XRP Ledger",
                    "coin": {
                        "id": "52",
                        "name": "XRP",
                        "symbol": "XRP",
                        "slug": "xrp"
                    }
                }
            }
        ],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    },
    "825": {
        "id": 825,
        "name": "Tether USDt",
        "symbol": "USDT",
        "category": "token",
        "description": "Tether USDt (USDT) is a cryptocurrency and operates on the Ethereum platform. Tether USDt has a current supply of 144,566,824,336.93909424 with 142,489,546,118.15090089 in circulation. The last known price of Tether USDt is 1.00019535 USD and is up 0.05 over the last 24 hours. It is currently trading on 117672 active market(s) with $55,858,521,201.10 traded over the last 24 hours. More information can be found at https://tether.to.",
        "slug": "tether",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        "subreddit": "",
        "notice": "",
        "tags": [
            "stablecoin",
            "asset-backed-stablecoin",
            "ethereum-ecosystem",
            "waves-ecosystem",
            "bitcoin-cash-ecosystem",
            "heco-ecosystem",
            "algorand-ecosystem",
            "avalanche-ecosystem",
            "solana-ecosystem",
            "polygon-ecosystem",
            "fantom-ecosystem",
            "terra-ecosystem",
            "tezos-ecosystem",
            "near-protocol-ecosystem",
            "arbitrum-ecosystem",
            "celo-ecosystem",
            "iotex-ecosystem",
            "zilliqa-ecosystem",
            "harmony-ecosystem",
            "moonriver-ecosystem",
            "cronos-ecosystem",
            "injective-ecosystem",
            "oasis-ecosystem",
            "moonbeam-ecosystem",
            "usd-stablecoin",
            "xdc-ecosystem",
            "everscale-ecosystem",
            "velas-ecosystem",
            "doge-chain-ecosystem",
            "ethereum-pow-ecosystem",
            "aptos-ecosystem",
            "sui-ecosystem",
            "optimism-ecosystem",
            "canto-ecosystem",
            "osmosis-ecosystem",
            "zksync-era-ecosystem",
            "pulsechain-ecosystem",
            "sei-ecosystem",
            "toncoin-ecosystem",
            "fiat-stablecoin",
            "viction-ecosystem",
            "gnosis-chain-ecosystem",
            "klaytn-ecosystem",
            "okexchain-ecosystem",
            "conflux-ecosystem",
            "kcc-ecosystem",
            "tron20-ecosystem",
            "kardiachain-ecosystem",
            "rsk-rbtc-ecosystem",
            "telos-ecosystem",
            "boba-network-ecosystem",
            "fusion-network-ecosystem",
            "hoo-smart-chain-ecosystem",
            "secret-ecosystem",
            "aurora-ecosystem",
            "metis-andromeda-ecosystem",
            "meter-ecosystem",
            "fuse-ecosystem",
            "syscoin-ecosystem",
            "milkomeda-ecosystem",
            "bitgert-ecosystem",
            "astar-ecosystem",
            "cube-network-ecosystem",
            "thundercore-ecosystem",
            "redlight-chain-ecosystem",
            "core-ecosystem",
            "polygon-zkevm-ecosystem",
            "eos-evm-ecosystem",
            "starknet-ecosystem",
            "mantle-ecosystem",
            "neon-evm-ecosystem",
            "manta-pacific-ecosystem",
            "scroll-ecosystem",
            "x-layer-ecosystem",
            "world-liberty-financial-portfolio"
        ],
        "tag-names": [
            "Stablecoin",
            "Asset-Backed Stablecoin",
            "Ethereum Ecosystem",
            "Waves Ecosystem",
            "Bitcoin Cash Ecosystem",
            "HECO Ecosystem",
            "Algorand Ecosystem",
            "Avalanche Ecosystem",
            "Solana Ecosystem",
            "Polygon Ecosystem",
            "Fantom Ecosystem",
            "Terra Ecosystem",
            "Tezos Ecosystem",
            "Near Protocol Ecosystem",
            "Arbitrum Ecosystem",
            "Celo Ecosystem",
            "IoTeX Ecosystem",
            "Zilliqa Ecosystem",
            "Harmony Ecosystem",
            "Moonriver Ecosystem",
            "Cronos Ecosystem",
            "Injective Ecosystem",
            "Oasis Ecosystem",
            "Moonbeam Ecosystem",
            "USD Stablecoin",
            "XDC Ecosystem",
            "Everscale Ecosystem",
            "Velas Ecosystem",
            "Doge Chain Ecosystem",
            "Ethereum PoW Ecosystem",
            "Aptos Ecosystem",
            "Sui Ecosystem",
            "Optimism Ecosystem",
            "Canto Ecosystem",
            "Osmosis Ecosystem",
            "zkSync Era Ecosystem",
            "Pulsechain Ecosystem",
            "Sei Ecosystem",
            "Toncoin Ecosystem",
            "Fiat Stablecoin",
            "Viction Ecosystem",
            "Gnosis Chain Ecosystem",
            "Klaytn Ecosystem",
            "OKExChain Ecosystem",
            "Conflux Ecosystem",
            "KCC Ecosystem",
            "Tron20 Ecosystem",
            "KardiaChain Ecosystem",
            "RSK RBTC Ecosystem",
            "Telos Ecosystem",
            "Boba Network Ecosystem",
            "Fusion Network Ecosystem",
            "Hoo Smart Chain Ecosystem",
            "Secret Ecosystem",
            "Aurora Ecosystem",
            "Metis Andromeda Ecosystem",
            "Meter Ecosystem",
            "Fuse Ecosystem",
            "Syscoin Ecosystem",
            "Milkomeda Ecosystem",
            "Bitgert Ecosystem",
            "Astar Ecosystem",
            "Cube network Ecosystem",
            "ThunderCore Ecosystem",
            "Redlight Chain Ecosystem",
            "Core Ecosystem",
            "Polygon zkEVM Ecosystem",
            "EOS EVM Ecosystem",
            "Starknet Ecosystem",
            "Mantle Ecosystem",
            "Neon EVM Ecosystem",
            "Manta Pacific Ecosystem",
            "Scroll Ecosystem",
            "X Layer Ecosystem",
            "World Liberty Financial Portfolio"
        ],
        "tag-groups": [
            "CATEGORY",
            "CATEGORY",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "CATEGORY",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "CATEGORY",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "CATEGORY"
        ],
        "urls": {
            "website": [
                "https://tether.to"
            ],
            "twitter": [
                "https://twitter.com/tether_to"
            ],
            "message_board": [],
            "chat": [
                "https://t.me/OfficialTether"
            ],
            "facebook": [],
            "explorer": [
                "https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                "https://www.omniexplorer.info/asset/31",
                "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7",
                "https://algoexplorer.io/asset/312769",
                "https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
            ],
            "reddit": [],
            "technical_doc": [
                "https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf"
            ],
            "source_code": [],
            "announcement": [
                "https://tether.to/en/news"
            ]
        },
        "platform": {
            "id": "1027",
            "name": "Ethereum",
            "slug": "ethereum",
            "symbol": "ETH",
            "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
        },
        "date_added": "2015-02-25T00:00:00.000Z",
        "twitter_username": "tether_to",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [
            {
                "contract_address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "platform": {
                    "name": "Ethereum",
                    "coin": {
                        "id": "1027",
                        "name": "Ethereum",
                        "symbol": "ETH",
                        "slug": "ethereum"
                    }
                }
            },
            {
                "contract_address": "0x69B946132B4a6C74cd29Ba3ff614cEEA1eF9fF2B",
                "platform": {
                    "name": "Viction",
                    "coin": {
                        "id": "2570",
                        "name": "Viction",
                        "symbol": "VIC",
                        "slug": "viction"
                    }
                }
            },
            {
                "contract_address": "0x55d398326f99059ff775485246999027b3197955",
                "platform": {
                    "name": "BNB Smart Chain (BEP20)",
                    "coin": {
                        "id": "1839",
                        "name": "BNB",
                        "symbol": "BNB",
                        "slug": "bnb"
                    }
                }
            },
            {
                "contract_address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                "platform": {
                    "name": "Solana",
                    "coin": {
                        "id": "5426",
                        "name": "Solana",
                        "symbol": "SOL",
                        "slug": "solana"
                    }
                }
            },
            {
                "contract_address": "312769",
                "platform": {
                    "name": "Algorand",
                    "coin": {
                        "id": "4030",
                        "name": "Algorand",
                        "symbol": "ALGO",
                        "slug": "algorand"
                    }
                }
            },
            {
                "contract_address": "0xa71edc38d189767582c38a3145b5873052c3e47a",
                "platform": {
                    "name": "HECO",
                    "coin": {
                        "id": "2502",
                        "name": "Huobi Token",
                        "symbol": "HT",
                        "slug": "htx-token"
                    }
                }
            },
            {
                "contract_address": "0x4ECaBa5870353805a9F068101A40E0f32ed605C6",
                "platform": {
                    "name": "Gnosis Chain",
                    "coin": {
                        "id": "1659",
                        "name": "Gnosis",
                        "symbol": "GNO",
                        "slug": "gnosis-gno"
                    }
                }
            },
            {
                "contract_address": "terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva",
                "platform": {
                    "name": "Terra Classic",
                    "coin": {
                        "id": "4172",
                        "name": "Terra Classic",
                        "symbol": "LUNC",
                        "slug": "terra-luna"
                    }
                }
            },
            {
                "contract_address": "G5WWWzzVsWRyzGf32xojbnfp7gXbWrgqJT8RcVWEfLmC",
                "platform": {
                    "name": "Waves",
                    "coin": {
                        "id": "1274",
                        "name": "Waves",
                        "symbol": "WAVES",
                        "slug": "waves"
                    }
                }
            },
            {
                "contract_address": "0x049d68029688eabf473097a2fc38ef61633a3c7a",
                "platform": {
                    "name": "Fantom",
                    "coin": {
                        "id": "3513",
                        "name": "Fantom (Migrated to Sonic)",
                        "symbol": "FTM",
                        "slug": "fantom"
                    }
                }
            },
            {
                "contract_address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
                "platform": {
                    "name": "Polygon",
                    "coin": {
                        "id": "28321",
                        "name": "POL (prev. MATIC)",
                        "symbol": "POL",
                        "slug": "polygon-ecosystem-token"
                    }
                }
            },
            {
                "contract_address": "0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167",
                "platform": {
                    "name": "KAIA",
                    "coin": {
                        "id": "32880",
                        "name": "Kaia",
                        "symbol": "KAIA",
                        "slug": "kaia"
                    }
                }
            },
            {
                "contract_address": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
                "platform": {
                    "name": "Avalanche C-Chain",
                    "coin": {
                        "id": "5805",
                        "name": "Avalanche",
                        "symbol": "AVAX",
                        "slug": "avalanche"
                    }
                }
            },
            {
                "contract_address": "0x382bb369d343125bfb2117af9c149795c6c65c50",
                "platform": {
                    "name": "OKExChain",
                    "coin": {
                        "id": "8267",
                        "name": "OKT Chain",
                        "symbol": "OKT",
                        "slug": "okt"
                    }
                }
            },
            {
                "contract_address": "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
                "platform": {
                    "name": "Celo",
                    "coin": {
                        "id": "5567",
                        "name": "Celo",
                        "symbol": "CELO",
                        "slug": "celo"
                    }
                }
            },
            {
                "contract_address": "0xBc2F884680c95A02cea099dA2F524b366d9028Ba",
                "platform": {
                    "name": "Bitcoin Cash",
                    "coin": {
                        "id": "1831",
                        "name": "Bitcoin Cash",
                        "symbol": "BCH",
                        "slug": "bitcoin-cash"
                    }
                }
            },
            {
                "contract_address": "0xfe97e85d13abd9c1c33384e796f10b73905637ce",
                "platform": {
                    "name": "Conflux",
                    "coin": {
                        "id": "7334",
                        "name": "Conflux",
                        "symbol": "CFX",
                        "slug": "conflux-network"
                    }
                }
            },
            {
                "contract_address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                "platform": {
                    "name": "Optimism",
                    "coin": {
                        "id": "11840",
                        "name": "Optimism",
                        "symbol": "OP",
                        "slug": "optimism-ethereum"
                    }
                }
            },
            {
                "contract_address": "0x0039f574ee5cc39bdd162e9a88e3eb1f111baf48",
                "platform": {
                    "name": "KCC",
                    "coin": {
                        "id": "2087",
                        "name": "KuCoin Token",
                        "symbol": "KCS",
                        "slug": "kucoin-token"
                    }
                }
            },
            {
                "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
                "platform": {
                    "name": "Tron20",
                    "coin": {
                        "id": "1958",
                        "name": "TRON",
                        "symbol": "TRX",
                        "slug": "tron"
                    }
                }
            },
            {
                "contract_address": "0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f",
                "platform": {
                    "name": "Harmony",
                    "coin": {
                        "id": "3945",
                        "name": "Harmony",
                        "symbol": "ONE",
                        "slug": "harmony"
                    }
                }
            },
            {
                "contract_address": "zil1sxx29cshups269ahh5qjffyr58mxjv9ft78jqy",
                "platform": {
                    "name": "Zilliqa",
                    "coin": {
                        "id": "2469",
                        "name": "Zilliqa",
                        "symbol": "ZIL",
                        "slug": "zilliqa"
                    }
                }
            },
            {
                "contract_address": "0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73",
                "platform": {
                    "name": "Moonbeam",
                    "coin": {
                        "id": "6836",
                        "name": "Moonbeam",
                        "symbol": "GLMR",
                        "slug": "moonbeam"
                    }
                }
            },
            {
                "contract_address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
                "platform": {
                    "name": "Arbitrum",
                    "coin": {
                        "id": "11841",
                        "name": "Arbitrum",
                        "symbol": "ARB",
                        "slug": "arbitrum"
                    }
                }
            },
            {
                "contract_address": "0x551a5dcac57c66aa010940c2dcff5da9c53aa53b",
                "platform": {
                    "name": "KardiaChain",
                    "coin": {
                        "id": "5453",
                        "name": "KardiaChain",
                        "symbol": "KAI",
                        "slug": "kardiachain"
                    }
                }
            },
            {
                "contract_address": "0xe936caa7f6d9f5c9e907111fcaf7c351c184cda7",
                "platform": {
                    "name": "Moonriver",
                    "coin": {
                        "id": "9285",
                        "name": "Moonriver",
                        "symbol": "MOVR",
                        "slug": "moonriver"
                    }
                }
            },
            {
                "contract_address": "KT1XnTn74bUtxHfDtBmm2bGZAQfhPbvKWR8o",
                "platform": {
                    "name": "Tezos",
                    "coin": {
                        "id": "2011",
                        "name": "Tezos",
                        "symbol": "XTZ",
                        "slug": "tezos"
                    }
                }
            },
            {
                "contract_address": "0x6fbcdc1169b5130c59e72e51ed68a84841c98cd1",
                "platform": {
                    "name": "IoTex",
                    "coin": {
                        "id": "2777",
                        "name": "IoTeX",
                        "symbol": "IOTX",
                        "slug": "iotex"
                    }
                }
            },
            {
                "contract_address": "dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near",
                "platform": {
                    "name": "Near",
                    "coin": {
                        "id": "6535",
                        "name": "NEAR Protocol",
                        "symbol": "NEAR",
                        "slug": "near-protocol"
                    }
                }
            },
            {
                "contract_address": "0xEf213441a85DF4d7acBdAe0Cf78004E1e486BB96",
                "platform": {
                    "name": "RSK RBTC",
                    "coin": {
                        "id": "3626",
                        "name": "Rootstock Smart Bitcoin",
                        "symbol": "RBTC",
                        "slug": "rsk-smart-bitcoin"
                    }
                }
            },
            {
                "contract_address": "0x975Ed13fa16857E83e7C493C7741D556eaaD4A3f",
                "platform": {
                    "name": "Telos",
                    "coin": {
                        "id": "4660",
                        "name": "Telos",
                        "symbol": "TLOS",
                        "slug": "telos"
                    }
                }
            },
            {
                "contract_address": "0x01445c31581c354b7338ac35693ab2001b50b9ae",
                "platform": {
                    "name": "Velas",
                    "coin": {
                        "id": "4747",
                        "name": "Velas",
                        "symbol": "VLX",
                        "slug": "velas"
                    }
                }
            },
            {
                "contract_address": "0x66e428c3f67a68878562e79A0234c1F83c208770",
                "platform": {
                    "name": "Cronos",
                    "coin": {
                        "id": "3635",
                        "name": "Cronos",
                        "symbol": "CRO",
                        "slug": "cronos"
                    }
                }
            },
            {
                "contract_address": "0x5DE1677344D3Cb0D7D465c10b72A8f60699C062d",
                "platform": {
                    "name": "Boba Network",
                    "coin": {
                        "id": "14556",
                        "name": "Boba Network",
                        "symbol": "BOBA",
                        "slug": "boba-network"
                    }
                }
            },
            {
                "contract_address": "0x9636d3294e45823ec924c8d89dd1f1dffcf044e6",
                "platform": {
                    "name": "Fusion Network",
                    "coin": {
                        "id": "2530",
                        "name": "Fusion",
                        "symbol": "FSN",
                        "slug": "fusion"
                    }
                }
            },
            {
                "contract_address": "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
                "platform": {
                    "name": "Osmosis",
                    "coin": {
                        "id": "12220",
                        "name": "Osmosis",
                        "symbol": "OSMO",
                        "slug": "osmosis"
                    }
                }
            },
            {
                "contract_address": "0xD16bAbe52980554520F6Da505dF4d1b124c815a7",
                "platform": {
                    "name": "Hoo Smart Chain",
                    "coin": {
                        "id": "15165",
                        "name": "Hoo Smart Chain",
                        "symbol": "HSC",
                        "slug": "hoo-smart-chain"
                    }
                }
            },
            {
                "contract_address": "0xdc19a122e268128b5ee20366299fc7b5b199c8e3",
                "platform": {
                    "name": "Oasis Network",
                    "coin": {
                        "id": "7653",
                        "name": "Oasis",
                        "symbol": "ROSE",
                        "slug": "oasis-network"
                    }
                }
            },
            {
                "contract_address": "secret18wpjn83dayu4meu6wnn29khfkwdxs7kyrz9c8f",
                "platform": {
                    "name": "Secret",
                    "coin": {
                        "id": "5604",
                        "name": "Secret",
                        "symbol": "SCRT",
                        "slug": "secret"
                    }
                }
            },
            {
                "contract_address": "0x4988a896b1227218e4a686fde5eabdcabd91571f",
                "platform": {
                    "name": "Aurora",
                    "coin": {
                        "id": "14803",
                        "name": "Aurora",
                        "symbol": "AURORA",
                        "slug": "aurora-near"
                    }
                }
            },
            {
                "contract_address": "0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc",
                "platform": {
                    "name": "Metis Andromeda",
                    "coin": {
                        "id": "9640",
                        "name": "Metis",
                        "symbol": "METIS",
                        "slug": "metisdao"
                    }
                }
            },
            {
                "contract_address": "0x5fa41671c48e3c951afc30816947126ccc8c162e",
                "platform": {
                    "name": "Meter",
                    "coin": {
                        "id": "5919",
                        "name": "Meter Governance",
                        "symbol": "MTRG",
                        "slug": "meter-governance"
                    }
                }
            },
            {
                "contract_address": "0xfadbbf8ce7d5b7041be672561bba99f79c532e10",
                "platform": {
                    "name": "Fuse",
                    "coin": {
                        "id": "5634",
                        "name": "Fuse",
                        "symbol": "FUSE",
                        "slug": "fuse-network"
                    }
                }
            },
            {
                "contract_address": "0x922D641a426DcFFaeF11680e5358F34d97d112E1",
                "platform": {
                    "name": "Syscoin",
                    "coin": {
                        "id": "541",
                        "name": "Syscoin",
                        "symbol": "SYS",
                        "slug": "syscoin"
                    }
                }
            },
            {
                "contract_address": "0x3795c36e7d12a8c252a20c5a7b455f7c57b60283",
                "platform": {
                    "name": "Milkomeda",
                    "coin": {
                        "id": "2010",
                        "name": "Cardano",
                        "symbol": "ADA",
                        "slug": "cardano"
                    }
                }
            },
            {
                "contract_address": "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D",
                "platform": {
                    "name": "Bitgert",
                    "coin": {
                        "id": "11079",
                        "name": "Bitgert",
                        "symbol": "BRISE",
                        "slug": "bitrise-token"
                    }
                }
            },
            {
                "contract_address": "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
                "platform": {
                    "name": "Astar",
                    "coin": {
                        "id": "12885",
                        "name": "Astar",
                        "symbol": "ASTR",
                        "slug": "astar"
                    }
                }
            },
            {
                "contract_address": "0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2",
                "platform": {
                    "name": "Everscale",
                    "coin": {
                        "id": "7505",
                        "name": "Everscale",
                        "symbol": "EVER",
                        "slug": "everscale"
                    }
                }
            },
            {
                "contract_address": "0x79F1520268A20c879EF44d169A4E3812D223C6de",
                "platform": {
                    "name": "Cube network",
                    "coin": {
                        "id": "20519",
                        "name": "Cube Network",
                        "symbol": "CUBE",
                        "slug": "cube-network"
                    }
                }
            },
            {
                "contract_address": "0x4f3C8E20942461e2c3Bdd8311AC57B0c222f2b82",
                "platform": {
                    "name": "ThunderCore",
                    "coin": {
                        "id": "3930",
                        "name": "ThunderCore",
                        "symbol": "TT",
                        "slug": "thundercore"
                    }
                }
            },
            {
                "contract_address": "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
                "platform": {
                    "name": "Dogechain(EVM)",
                    "coin": {
                        "id": "74",
                        "name": "Dogecoin",
                        "symbol": "DOGE",
                        "slug": "dogecoin"
                    }
                }
            },
            {
                "contract_address": "0xd567b3d7b8fe3c79a1ad8da978812cfc4fa05e75",
                "platform": {
                    "name": "Canto",
                    "coin": {
                        "id": "21516",
                        "name": "CANTO",
                        "symbol": "CANTO",
                        "slug": "canto"
                    }
                }
            },
            {
                "contract_address": "0x2ad7868ca212135c6119fd7ad1ce51cfc5702892",
                "platform": {
                    "name": "EthereumPoW",
                    "coin": {
                        "id": "21296",
                        "name": "EthereumPoW",
                        "symbol": "ETHW",
                        "slug": "ethereum-pow"
                    }
                }
            },
            {
                "contract_address": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT",
                "platform": {
                    "name": "Aptos",
                    "coin": {
                        "id": "21794",
                        "name": "Aptos",
                        "symbol": "APT",
                        "slug": "aptos"
                    }
                }
            },
            {
                "contract_address": "0xd4b5f10d61916bd6e0860144a91ac658de8a1437",
                "platform": {
                    "name": "XDC Network",
                    "coin": {
                        "id": "2634",
                        "name": "XDC Network",
                        "symbol": "XDC",
                        "slug": "xdc-network"
                    }
                }
            },
            {
                "contract_address": "0x73e84bfd35c3f1537a72180d1481e1eabf64b70b",
                "platform": {
                    "name": "Redlight Chain",
                    "coin": {
                        "id": "21505",
                        "name": "Redlight Chain",
                        "symbol": "REDLC",
                        "slug": "redlight-chain"
                    }
                }
            },
            {
                "contract_address": "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
                "platform": {
                    "name": "TON",
                    "coin": {
                        "id": "11419",
                        "name": "Toncoin",
                        "symbol": "TON",
                        "slug": "toncoin"
                    }
                }
            },
            {
                "contract_address": "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN",
                "platform": {
                    "name": "Sui Network",
                    "coin": {
                        "id": "20947",
                        "name": "Sui",
                        "symbol": "SUI",
                        "slug": "sui"
                    }
                }
            },
            {
                "contract_address": "peggy0xdac17f958d2ee523a2206206994597c13d831ec7",
                "platform": {
                    "name": "Injective",
                    "coin": {
                        "id": "7226",
                        "name": "Injective",
                        "symbol": "INJ",
                        "slug": "injective"
                    }
                }
            },
            {
                "contract_address": "0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1",
                "platform": {
                    "name": "Core",
                    "coin": {
                        "id": "23254",
                        "name": "Core",
                        "symbol": "CORE",
                        "slug": "core-dao"
                    }
                }
            },
            {
                "contract_address": "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C",
                "platform": {
                    "name": "zkSync Era",
                    "coin": {
                        "id": "24091",
                        "name": "ZKsync",
                        "symbol": "ZK",
                        "slug": "zksync"
                    }
                }
            },
            {
                "contract_address": "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
                "platform": {
                    "name": "Polygon zkEVM",
                    "coin": {
                        "id": "3890",
                        "name": "Polygon",
                        "symbol": "MATIC",
                        "slug": "polygon"
                    }
                }
            },
            {
                "contract_address": "0xfa9343c3897324496a05fc75abed6bac29f8a40f",
                "platform": {
                    "name": "EOS EVM",
                    "coin": {
                        "id": "1765",
                        "name": "EOS",
                        "symbol": "EOS",
                        "slug": "eos"
                    }
                }
            },
            {
                "contract_address": "0x0cb6f5a34ad42ec934882a05265a7d5f59b51a2f",
                "platform": {
                    "name": "PulseChain",
                    "coin": {
                        "id": "11145",
                        "name": "Pulsechain",
                        "symbol": "PLS",
                        "slug": "pulsechain"
                    }
                }
            },
            {
                "contract_address": "0x68f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8",
                "platform": {
                    "name": "Starknet",
                    "coin": {
                        "id": "22691",
                        "name": "Starknet",
                        "symbol": "STRK",
                        "slug": "starknet-token"
                    }
                }
            },
            {
                "contract_address": "0x201eba5cc46d216ce6dc03f6a759e8e766e956ae",
                "platform": {
                    "name": "Mantle",
                    "coin": {
                        "id": "27075",
                        "name": "Mantle",
                        "symbol": "MNT",
                        "slug": "mantle"
                    }
                }
            },
            {
                "contract_address": "0x5f0155d08ef4aae2b500aefb64a3419da8bb611a",
                "platform": {
                    "name": "Neon EVM",
                    "coin": {
                        "id": "23015",
                        "name": "Neon EVM",
                        "symbol": "NEON",
                        "slug": "neon"
                    }
                }
            },
            {
                "contract_address": "0xf417f5a458ec102b90352f697d6e2ac3a3d2851f",
                "platform": {
                    "name": "Manta Pacific",
                    "coin": {
                        "id": "13631",
                        "name": "Manta Network",
                        "symbol": "MANTA",
                        "slug": "manta-network"
                    }
                }
            },
            {
                "contract_address": "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
                "platform": {
                    "name": "Scroll",
                    "coin": {
                        "id": "26998",
                        "name": "Scroll",
                        "symbol": "SCR",
                        "slug": "scroll"
                    }
                }
            },
            {
                "contract_address": "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
                "platform": {
                    "name": "X Layer",
                    "coin": {
                        "id": "3897",
                        "name": "OKB",
                        "symbol": "OKB",
                        "slug": "okb"
                    }
                }
            },
            {
                "contract_address": "0xb75d0b03c06a926e488e2659df1a861f860bd3d1",
                "platform": {
                    "name": "Sei v2",
                    "coin": {
                        "id": "23149",
                        "name": "Sei",
                        "symbol": "SEI",
                        "slug": "sei"
                    }
                }
            },
            {
                "contract_address": "0xff276c6bca1F66Fd54a8915e830735D6ab0C7B09",
                "platform": {
                    "name": "ONUS",
                    "coin": {
                        "id": "15261",
                        "name": "ONUS",
                        "symbol": "ONUS",
                        "slug": "onus"
                    }
                }
            },
            {
                "contract_address": "0xbe138ad5d41fdc392ae0b61b09421987c1966cc3",
                "platform": {
                    "name": "DuckChain",
                    "coin": {
                        "id": "35298",
                        "name": "DuckChain",
                        "symbol": "DUCK",
                        "slug": "duckchain"
                    }
                }
            }
        ],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": true
    },
    "1027": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "category": "coin",
        "description": "Ethereum (ETH) is a cryptocurrency . Ethereum has a current supply of 120,568,910.11267466. The last known price of Ethereum is 2,808.90043263 USD and is up 3.79 over the last 24 hours. It is currently trading on 9948 active market(s) with $18,111,911,318.14 traded over the last 24 hours. More information can be found at https://www.ethereum.org/.",
        "slug": "ethereum",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
        "subreddit": "ethereum",
        "notice": "",
        "tags": [
            "pos",
            "smart-contracts",
            "ethereum-ecosystem",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "heco-ecosystem",
            "binance-labs-portfolio",
            "avalanche-ecosystem",
            "solana-ecosystem",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "hashkey-capital-portfolio",
            "kenetic-capital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
            "tezos-ecosystem",
            "near-protocol-ecosystem",
            "velas-ecosystem",
            "ethereum-pow-ecosystem",
            "osmosis-ecosystem",
            "layer-1",
            "ftx-bankruptcy-estate",
            "zksync-era-ecosystem",
            "viction-ecosystem",
            "klaytn-ecosystem",
            "sora-ecosystem",
            "rsk-rbtc-ecosystem",
            "starknet-ecosystem",
            "world-liberty-financial-portfolio"
        ],
        "tag-names": [
            "PoS",
            "Smart Contracts",
            "Ethereum Ecosystem",
            "Coinbase Ventures Portfolio",
            "Three Arrows Capital Portfolio",
            "Polychain Capital Portfolio",
            "HECO Ecosystem",
            "Binance Labs Portfolio",
            "Avalanche Ecosystem",
            "Solana Ecosystem",
            "Blockchain Capital Portfolio",
            "BoostVC Portfolio",
            "CMS Holdings Portfolio",
            "DCG Portfolio",
            "DragonFly Capital Portfolio",
            "Electric Capital Portfolio",
            "Fabric Ventures Portfolio",
            "Framework Ventures Portfolio",
            "Hashkey Capital Portfolio",
            "Kenetic Capital Portfolio",
            "Huobi Capital Portfolio",
            "Alameda Research Portfolio",
            "a16z Portfolio",
            "1Confirmation Portfolio",
            "Winklevoss Capital Portfolio",
            "USV Portfolio",
            "Placeholder Ventures Portfolio",
            "Pantera Capital Portfolio",
            "Multicoin Capital Portfolio",
            "Paradigm Portfolio",
            "Tezos Ecosystem",
            "Near Protocol Ecosystem",
            "Velas Ecosystem",
            "Ethereum PoW Ecosystem",
            "Osmosis Ecosystem",
            "Layer 1",
            "FTX Bankruptcy Estate ",
            "zkSync Era Ecosystem",
            "Viction Ecosystem",
            "Klaytn Ecosystem",
            "Sora Ecosystem",
            "RSK RBTC Ecosystem",
            "Starknet Ecosystem",
            "World Liberty Financial Portfolio"
        ],
        "tag-groups": [
            "ALGORITHM",
            "CATEGORY",
            "PLATFORM",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "PLATFORM",
            "CATEGORY",
            "PLATFORM",
            "PLATFORM",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "CATEGORY",
            "CATEGORY",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "CATEGORY"
        ],
        "urls": {
            "website": [
                "https://www.ethereum.org/",
                "https://en.wikipedia.org/wiki/Ethereum"
            ],
            "twitter": [
                "https://twitter.com/ethereum"
            ],
            "message_board": [
                "https://forum.ethereum.org/",
                "https://ethresear.ch/"
            ],
            "chat": [
                "https://gitter.im/orgs/ethereum/rooms"
            ],
            "facebook": [],
            "explorer": [
                "https://etherscan.io/",
                "https://solscan.io/token/2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
                "https://bscscan.com/token/0x2170ed0880ac9a755fd29b2688956bd959f933f8",
                "https://www.okx.com/web3/explorer/eth",
                "https://blockchair.com/ethereum"
            ],
            "reddit": [
                "https://reddit.com/r/ethereum"
            ],
            "technical_doc": [
                "https://github.com/ethereum/wiki/wiki/White-Paper"
            ],
            "source_code": [
                "https://github.com/ethereum/go-ethereum"
            ],
            "announcement": [
                "https://bitcointalk.org/index.php?topic=428589.0"
            ]
        },
        "platform": null,
        "date_added": "2015-08-07T00:00:00.000Z",
        "twitter_username": "ethereum",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [
            {
                "contract_address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                "platform": {
                    "name": "Ethereum",
                    "coin": {
                        "id": "1027",
                        "name": "Ethereum",
                        "symbol": "ETH",
                        "slug": "ethereum"
                    }
                }
            },
            {
                "contract_address": "0x2eaa73bd0db20c64f53febea7b5f5e5bccc7fb8b",
                "platform": {
                    "name": "Viction",
                    "coin": {
                        "id": "2570",
                        "name": "Viction",
                        "symbol": "VIC",
                        "slug": "viction"
                    }
                }
            },
            {
                "contract_address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
                "platform": {
                    "name": "BNB Smart Chain (BEP20)",
                    "coin": {
                        "id": "1839",
                        "name": "BNB",
                        "symbol": "BNB",
                        "slug": "bnb"
                    }
                }
            },
            {
                "contract_address": "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
                "platform": {
                    "name": "Solana",
                    "coin": {
                        "id": "5426",
                        "name": "Solana",
                        "symbol": "SOL",
                        "slug": "solana"
                    }
                }
            },
            {
                "contract_address": "0x64ff637fb478863b7468bc97d30a5bf3a428a1fd",
                "platform": {
                    "name": "HECO",
                    "coin": {
                        "id": "2502",
                        "name": "Huobi Token",
                        "symbol": "HT",
                        "slug": "htx-token"
                    }
                }
            },
            {
                "contract_address": "0x34d21b1e550d73cee41151c77f3c73359527a396",
                "platform": {
                    "name": "KAIA",
                    "coin": {
                        "id": "32880",
                        "name": "Kaia",
                        "symbol": "KAIA",
                        "slug": "kaia"
                    }
                }
            },
            {
                "contract_address": "0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15",
                "platform": {
                    "name": "Avalanche C-Chain",
                    "coin": {
                        "id": "5805",
                        "name": "Avalanche",
                        "symbol": "AVAX",
                        "slug": "avalanche"
                    }
                }
            },
            {
                "contract_address": "KT19at7rQUvyjxnZ2fBv7D9zc8rkyG7gAoU8",
                "platform": {
                    "name": "Tezos",
                    "coin": {
                        "id": "2011",
                        "name": "Tezos",
                        "symbol": "XTZ",
                        "slug": "tezos"
                    }
                }
            },
            {
                "contract_address": "0x0200070000000000000000000000000000000000000000000000000000000000",
                "platform": {
                    "name": "Sora",
                    "coin": {
                        "id": "5802",
                        "name": "SORA",
                        "symbol": "XOR",
                        "slug": "sora"
                    }
                }
            },
            {
                "contract_address": "aurora",
                "platform": {
                    "name": "Near",
                    "coin": {
                        "id": "6535",
                        "name": "NEAR Protocol",
                        "symbol": "NEAR",
                        "slug": "near-protocol"
                    }
                }
            },
            {
                "contract_address": "0x1D931Bf8656d795E50eF6D639562C5bD8Ac2B78f",
                "platform": {
                    "name": "RSK RBTC",
                    "coin": {
                        "id": "3626",
                        "name": "Rootstock Smart Bitcoin",
                        "symbol": "RBTC",
                        "slug": "rsk-smart-bitcoin"
                    }
                }
            },
            {
                "contract_address": "0x85219708c49aa701871ad330a94ea0f41dff24ca",
                "platform": {
                    "name": "Velas",
                    "coin": {
                        "id": "4747",
                        "name": "Velas",
                        "symbol": "VLX",
                        "slug": "velas"
                    }
                }
            },
            {
                "contract_address": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
                "platform": {
                    "name": "Osmosis",
                    "coin": {
                        "id": "12220",
                        "name": "Osmosis",
                        "symbol": "OSMO",
                        "slug": "osmosis"
                    }
                }
            },
            {
                "contract_address": "0x34a9c05b638020a07bb153bf624c8763bf8b4a86",
                "platform": {
                    "name": "EthereumPoW",
                    "coin": {
                        "id": "21296",
                        "name": "EthereumPoW",
                        "symbol": "ETHW",
                        "slug": "ethereum-pow"
                    }
                }
            },
            {
                "contract_address": "0x000000000000000000000000000000000000800A",
                "platform": {
                    "name": "zkSync Era",
                    "coin": {
                        "id": "24091",
                        "name": "ZKsync",
                        "symbol": "ZK",
                        "slug": "zksync"
                    }
                }
            },
            {
                "contract_address": "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
                "platform": {
                    "name": "Starknet",
                    "coin": {
                        "id": "22691",
                        "name": "Starknet",
                        "symbol": "STRK",
                        "slug": "starknet-token"
                    }
                }
            }
        ],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": true
    },
    "1839": {
        "id": 1839,
        "name": "BNB",
        "symbol": "BNB",
        "category": "coin",
        "description": "BNB (BNB) is a cryptocurrency . BNB has a current supply of 142,476,611. The last known price of BNB is 663.26203074 USD and is up 0.74 over the last 24 hours. It is currently trading on 2372 active market(s) with $1,854,181,587.68 traded over the last 24 hours. More information can be found at https://bnbchain.org/en.",
        "slug": "bnb",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        "subreddit": "bnbchainofficial",
        "notice": "",
        "tags": [
            "marketplace",
            "centralized-exchange",
            "payments",
            "smart-contracts",
            "ethereum-ecosystem",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio",
            "bnb-chain-ecosystem",
            "layer-1",
            "alleged-sec-securities",
            "celsius-bankruptcy-estate"
        ],
        "tag-names": [
            "Marketplace",
            "Centralized Exchange (CEX) Token",
            "Payments",
            "Smart Contracts",
            "Ethereum Ecosystem",
            "Alameda Research Portfolio",
            "Multicoin Capital Portfolio",
            "BNB Chain Ecosystem",
            "Layer 1",
            "Alleged SEC Securities",
            "Celsius Bankruptcy Estate"
        ],
        "tag-groups": [
            "INDUSTRY",
            "CATEGORY",
            "INDUSTRY",
            "CATEGORY",
            "PLATFORM",
            "CATEGORY",
            "CATEGORY",
            "PLATFORM",
            "CATEGORY",
            "CATEGORY",
            "CATEGORY"
        ],
        "urls": {
            "website": [
                "https://bnbchain.org/en"
            ],
            "twitter": [
                "https://twitter.com/bnbchain"
            ],
            "message_board": [],
            "chat": [
                "https://t.me/BNBchaincommunity",
                "https://t.me/bnbchain"
            ],
            "facebook": [],
            "explorer": [
                "https://explorer.bnbchain.org/",
                "https://bsctrace.com/",
                "https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                "https://www.okx.com/web3/explorer/bsc",
                "https://binplorer.com/"
            ],
            "reddit": [
                "https://reddit.com/r/bnbchainofficial"
            ],
            "technical_doc": [],
            "source_code": [
                "https://github.com/bnb-chain"
            ],
            "announcement": []
        },
        "platform": null,
        "date_added": "2017-07-25T00:00:00.000Z",
        "twitter_username": "bnbchain",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [
            {
                "contract_address": "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
                "platform": {
                    "name": "Ethereum",
                    "coin": {
                        "id": "1027",
                        "name": "Ethereum",
                        "symbol": "ETH",
                        "slug": "ethereum"
                    }
                }
            }
        ],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }
}