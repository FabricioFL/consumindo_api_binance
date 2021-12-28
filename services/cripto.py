import requests as rq

class cripto:

    def cr(self):

        self.cript = "BTC"
        self.moeda = "USDT"

        self.simb = self.cript + self.moeda

        self.url = f"https://api.binance.com/api/v3/ticker/price?symbol={self.simb}"

        self.req = rq.get(self.url)

        self.res = self.req.json()
        return self.res

    def gcr(self, criptomoeda, moeda):
        self.cript = criptomoeda
        self.moeda = moeda

        self.simb = self.cript + self.moeda

        self.url = f"https://api.binance.com/api/v3/ticker/price?symbol={self.simb}"

        self.req = rq.get(self.url)

        self.res = self.req.json()
        return self.res


    def preco(self):

        self.cript = "BTC"
        self.moeda = "USDT"

        self.simb = self.cript + self.moeda

        self.url = f"https://api.binance.com/api/v3/ticker/price?symbol={self.simb}"

        self.req = rq.get(self.url)

        self.res = self.req.json()
        self.price = f"{self.res['price']}"
        return self.price

    def nome(self):

        self.cript = "BTC"
        self.moeda = "USDT"

        self.simb = self.cript + self.moeda

        self.url = f"https://api.binance.com/api/v3/ticker/price?symbol={self.simb}"

        self.req = rq.get(self.url)

        self.res = self.req.json()
        self.name = f"{self.res['symbol']}"
        return self.name

    def todas(self):

        allcoin = {
        #bitcoin
        'bitcoin' : cripto.gcr(self, 'BTC', 'USDT'),
        #ethereum
        'ethereum' : cripto.gcr(self, 'ETH', 'USDT'),
        #binance_coin
        'binance_coin' : cripto.gcr(self, 'BNB', 'USDT'),
        #tether
        'tether' : cripto.gcr(self, 'USDT', 'USDT'),
        #solana
        'solana' : cripto.gcr(self, 'SOL', 'USDT'),
        #cardano
        'cardano' : cripto.gcr(self, 'ADA', 'USDT'),
        #usd_coin
        'usd_coin' : cripto.gcr(self, 'USDC', 'USDT'),
        #xrp
        'xrp' : cripto.gcr(self, 'XRP', 'USDT'),
        #terra
        'terra' : cripto.gcr(self, 'LUNA', 'USDT'),
        #polkadot
        'polkadot' : cripto.gcr(self, 'DOT', 'USDT'),
        #dogecoin
        'dogecoin' : cripto.gcr(self, 'DOGE', 'USDT'),
        #avalanche
        'avalanche' : cripto.gcr(self, 'AVAX', 'USDT'),
        #shiba_inu
        'shiba_inu' : cripto.gcr(self, 'SHIB', 'USDT'),
        #polygon
        'polygon' : cripto.gcr(self, 'MATIC', 'USDT'),
        #binance_usd
        'binance_usd' : cripto.gcr(self, 'BUSD', 'USDT'),
        #litecoin
        'litecoin' : cripto.gcr(self, 'LTC', 'USDT'),
        #algorand
        'algorand' : cripto.gcr(self, 'ALGO', 'USDT'),
        #uniswasp
        'uniswasp' : cripto.gcr(self, 'UNI', 'USDT'),
        #chainlink
        'chainlink' : cripto.gcr(self, 'LINK', 'USDT'),
        #tron
        'tron' : cripto.gcr(self, 'TRX', 'USDT'),
        #bitcoin_cash
        'bitcoin_cash' : cripto.gcr(self, 'BCH', 'USDT'),
        #axie_infinity
        'axie_infinity' :  cripto.gcr(self, 'AXS', 'USDT'),
        #decentraland
        'decentraland' : cripto.gcr(self, 'MANA', 'USDT'),
        #stellar
        'stellar' : cripto.gcr(self, 'XLM', 'USDT'),
        #dai
        'dai' : cripto.gcr(self, 'DAI', 'USDT'),
        #elrond
        'elrond' : cripto.gcr(self, 'EGLD', 'USDT'),
        #ftx_tolken
        'ftx_tolken' : cripto.gcr(self, 'FTT', 'USDT'),
        #cosmos
        'cosmos' : cripto.gcr(self, 'ATOM', 'USDT'),
        #vechain
        'vechain' : cripto.gcr(self, 'VET', 'USDT'),
        #internet_computer
        'internet_computer' : cripto.gcr(self, 'ICP', 'USDT'),
        #filecoin
        'filecoin' : cripto.gcr(self, 'FIL', 'USDT'),
        #ethereum_classic
        'ethereum_classic' : cripto.gcr(self, 'ETC', 'USDT'),
        #the_sandbox
        'the_sandbox' : cripto.gcr(self, 'SAND', 'USDT'),
        #hedera
        'hedera' : cripto.gcr(self, 'HBAR', 'USDT'),
        #theta
        'theta' : cripto.gcr(self, 'THETA', 'USDT'),
        #near_protocol
        'near_protocol' : cripto.gcr(self, 'NEAR', 'USDT'),
        #fantom
        'fantom' : cripto.gcr(self, 'FTM', 'USDT'),
        #gala
        'gala' : cripto.gcr(self, 'GALA', 'USDT'),
        #monero
        'monero' : cripto.gcr(self, 'XMR', 'USDT'),
        #tezos
        'tezos' : cripto.gcr(self, 'XTZ', 'USDT'),
        #helium
        'helim' : cripto.gcr(self, 'HNT', 'USDT'),
        #klaytn
        'klatyn' : cripto.gcr(self, 'KLAY', 'USDT'),
        #the_graph
        'the_graph' : cripto.gcr(self, 'GRT', 'USDT'),
        #flow
        'flow' : cripto.gcr(self, 'FLOW', 'USDT'),
        #eos
        'eos' : cripto.gcr(self, 'EOS', 'USDT'),
        #loopring
        'loopring' : cripto.gcr(self, 'LRC', 'USDT'),
        #pancake_swap
        'pancake_swap' : cripto.gcr(self, 'CAKE', 'USDT'),
        #stacks
        'stacks' : cripto.gcr(self, 'STX', 'USDT'),
        #aave
        'aave' : cripto.gcr(self, 'AAVE', 'USDT'),
        #marker
        'marker' : cripto.gcr(self, 'MKR', 'USDT'),
        #bittorrent
        'bittorrent' : cripto.gcr(self, 'BTT', 'USDT'),
        #kusama
        'kusama' : cripto.gcr(self, 'KSM', 'USDT'),
        #enjin_coin
        'enjin_coin' : cripto.gcr(self, 'ENJ', 'USDT'),
        #zcash
        'zcash' : cripto.gcr(self, 'ZEC', 'USDT'),
        #ecash
        'ecash' : cripto.gcr(self, 'XEC', 'USDT'),
        #quant
        'quant' : cripto.gcr(self, 'QNT', 'USDT'),
        #amp
        'amp' : cripto.gcr(self, 'AMP', 'USDT'),
        #harmony
        'harmony' : cripto.gcr(self, 'ONE', 'USDT'),
        #thorchain
        'thorchain' : cripto.gcr(self, 'RUNE', 'USDT'),
        #waves
        'waves' : cripto.gcr(self, 'WAVES', 'USDT'),
        #neo
        'neo' : cripto.gcr(self, 'NEO', 'USDT'),
        #chiliz
        'chiliz' : cripto.gcr(self, 'CHZ', 'USDT'),
        #basic_attention_tolken
        'basic_attention_tolken' : cripto.gcr(self, 'BAT', 'USDT'),
        #holo
        'holo' : cripto.gcr(self, 'HOT', 'USDT'),
        #curve_dao_tolken
        'curve_dao_tolken' : cripto.gcr(self, 'CRV', 'USDT'),
        #arweave
        'arweave' : cripto.gcr(self, 'AR', 'USDT'),
        #dash
        'dash' : cripto.gcr(self, 'DASH', 'USDT'),
        #celo
        'celo' : cripto.gcr(self, 'CELO', 'USDT'),
        #theta_fuel
        'theta_fuel' : cripto.gcr(self, 'TFUEL', 'USDT'),
        #compound
        'compound' : cripto.gcr(self, 'COMP', 'USDT'),
        #trueusd
        'trueusd' : cripto.gcr(self, 'TUSD', 'USDT'),
        #nem
        'nem' : cripto.gcr(self, 'XEM', 'USDT'),
        #mina
        'mina' : cripto.gcr(self, 'MINA', 'USDT'),
        #iotex
        'iotex' : cripto.gcr(self, 'IOTX', 'USDT'),
        #voyager_tolken
        'voyager_tolken' : cripto.gcr(self, 'VGX', 'USDT'),
        #qtum
        'qtum' : cripto.gcr(self, 'QTUM', 'USDT'),
        #1inch
        '1inch' : cripto.gcr(self, '1INCH', 'USDT'),
        #audius
        'audius' : cripto.gcr(self, 'AUDIO', 'USDT'),
        #pax_dollar
        'pax_dollar' : cripto.gcr(self, 'USDP', 'USDT'),
        #oasis_network
        'oasis_network' : cripto.gcr(self, 'ROSE', 'USDT'),
        #livepeer
        'livepeer' : cripto.gcr(self, 'LPT', 'USDT'),
        #ankr
        'ankr' : cripto.gcr(self, 'ANKR', 'USDT'),
        #illuvium
        'illuvium' : cripto.gcr(self, 'ILV', 'USDT')
        }
        res = allcoin
        return res