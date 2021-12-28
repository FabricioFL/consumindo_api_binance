import re
from flask import Flask
from flask.templating import render_template
from services import cripto as cpt

class app:

    def __init__(self):
        
        self.app = Flask(__name__)


        @self.app.route('/')
        def index():
            return render_template('index.html')


        @self.app.route('/sobre')
        def sobre():
            return render_template('pages/sobre.html')


        @self.app.route('/dashboard')
        def dashboard():
            return render_template('pages/dashboard.html')


        @self.app.route('/downloads')
        def downloads():
            return render_template('pages/downloads.html')


        @self.app.route('/api.value/bitcoin')
        def bitcoin():
            return cpt.cripto.gcr(self, 'BTC', 'USDT')


        @self.app.route('/api.value/ethereum')
        def ethereum():
            return cpt.cripto.gcr(self, 'ETH', 'USDT')

        @self.app.route('/api.value/binance_coin')
        def binance_coin():
            return cpt.cripto.gcr(self, 'BNB', 'USDT')


        @self.app.route('/api.value/tether')
        def tether():
            return {'symbol' : 'USDTUSDT', 'price' : '1.00000000'}


        @self.app.route('/api.value/solana')
        def solana():
            return cpt.cripto.gcr(self, 'SOL', 'USDT')


        @self.app.route('/api.value/cardano')
        def cardano():
            return cpt.cripto.gcr(self, 'ADA', 'USDT')


        @self.app.route('/api.value/usd_coin')
        def usd_coin():
            return cpt.cripto.gcr(self, 'USDC', 'USDT')


        @self.app.route('/api.value/xrp')
        def xrp():
            return cpt.cripto.gcr(self, 'XRP', 'USDT')


        @self.app.route('/api.value/terra')
        def terra():
            return cpt.cripto.gcr(self, 'LUNA', 'USDT')


        @self.app.route('/api.value/polkadot')
        def polkadot():
            return cpt.cripto.gcr(self, 'DOT', 'USDT')

        @self.app.route('/api.value/dogecoin')
        def dogecoin():
            return cpt.cripto.gcr(self, 'DOGE', 'USDT')


        @self.app.route('/api.value/avalanche')
        def avalanche():
            return cpt.cripto.gcr(self, 'AVAX', 'USDT')


        @self.app.route('/api.value/shiba_inu')
        def shiba_inu():
            return cpt.cripto.gcr(self, 'SHIB', 'USDT')


        @self.app.route('/api.value/polygon')
        def polygon():
            return cpt.cripto.gcr(self, 'MATIC', 'USDT')


        @self.app.route('/api.value/binance_usd')
        def binance_usd():
            return cpt.cripto.gcr(self, 'BUSD', 'USDT')


        @self.app.route('/api.value/litecoin')
        def litecoin():
            return cpt.cripto.gcr(self, 'LTC', 'USDT')


        @self.app.route('/api.value/algorand')
        def algorand():
            return cpt.cripto.gcr(self, 'ALGO', 'USDT')


        @self.app.route('/api.value/uniswasp')
        def uniswasp():
            return cpt.cripto.gcr(self, 'UNI', 'USDT')


        @self.app.route('/api.value/chainlink')
        def chainlink():
            return cpt.cripto.gcr(self, 'LINK', 'USDT')


        @self.app.route('/api.value/tron')
        def tron():
            return cpt.cripto.gcr(self, 'TRX', 'USDT')


        @self.app.route('/api.value/bitcoin_cash')
        def bitcoin_cash():
            return cpt.cripto.gcr(self, 'BCH', 'USDT')


        @self.app.route('/api.value/axie_infinity')
        def axie_infinity():
            return cpt.cripto.gcr(self, 'AXS', 'USDT')


        @self.app.route('/api.value/decentraland')
        def decentraland():
            return cpt.cripto.gcr(self, 'MANA', 'USDT')


        @self.app.route('/api.value/stellar')
        def stellar():
            return cpt.cripto.gcr(self, 'XLM', 'USDT')


        @self.app.route('/api.value/dai')
        def dai():
            return cpt.cripto.gcr(self, 'DAI', 'USDT')


        @self.app.route('/api.value/elrond')
        def elrond():
            return cpt.cripto.gcr(self, 'EGLD', 'USDT')


        @self.app.route('/api.value/ftx_tolken')
        def ftx_tolken():
            return cpt.cripto.gcr(self, 'FTT', 'USDT')


        @self.app.route('/api.value/cosmos')
        def cosmos():
            return cpt.cripto.gcr(self, 'ATOM', 'USDT')


        @self.app.route('/api.value/vechain')
        def vechain():
            return cpt.cripto.gcr(self, 'VET', 'USDT')


        @self.app.route('/api.value/internet_computer')
        def internet_computer():
            return cpt.cripto.gcr(self, 'ICP', 'USDT')


        @self.app.route('/api.value/filecoin')
        def filecoin():
            return cpt.cripto.gcr(self, 'FIL', 'USDT')


        @self.app.route('/api.value/ethereum_classic')
        def ethereum_classic():
            return cpt.cripto.gcr(self, 'ETC', 'USDT')


        @self.app.route('/api.value/the_sandbox')
        def the_sandbox():
            return cpt.cripto.gcr(self, 'SAND', 'USDT')


        @self.app.route('/api.value/hedera')
        def hedera():
            return cpt.cripto.gcr(self, 'HBAR', 'USDT')


        @self.app.route('/api.value/theta')
        def theta():
            return cpt.cripto.gcr(self, 'THETA', 'USDT')


        @self.app.route('/api.value/near_protocol')
        def near_protocol():
            return cpt.cripto.gcr(self, 'NEAR', 'USDT')


        @self.app.route('/api.value/fantom')
        def fantom():
            return cpt.cripto.gcr(self, 'FTM', 'USDT')


        @self.app.route('/api.value/gala')
        def gala():
            return cpt.cripto.gcr(self, 'GALA', 'USDT')


        @self.app.route('/api.value/monero')
        def monero():
            return cpt.cripto.gcr(self, 'XMR', 'USDT')


        @self.app.route('/api.value/tezos')
        def tezos():
            return cpt.cripto.gcr(self, 'XTZ', 'USDT')


        @self.app.route('/api.value/helim')
        def helim():
            return cpt.cripto.gcr(self, 'HNT', 'USDT')


        @self.app.route('/api.value/klatyn')
        def klatyn():
            return cpt.cripto.gcr(self, 'KLAY', 'USDT')


        @self.app.route('/api.value/the_graph')
        def the_graph():
            return cpt.cripto.gcr(self, 'GRT', 'USDT')


        @self.app.route('/api.value/flow')
        def flow():
            return cpt.cripto.gcr(self, 'FLOW', 'USDT')


        @self.app.route('/api.value/eos')
        def eos():
            return cpt.cripto.gcr(self, 'EOS', 'USDT')


        @self.app.route('/api.value/loopring')
        def loopring():
            return cpt.cripto.gcr(self, 'LRC', 'USDT')


        @self.app.route('/api.value/pancake_swap')
        def pancake_swap():
            return cpt.cripto.gcr(self, 'CAKE', 'USDT')


        @self.app.route('/api.value/stacks')
        def stacks():
            return cpt.cripto.gcr(self, 'STX', 'USDT')


        @self.app.route('/api.value/aave')
        def aave():
            return cpt.cripto.gcr(self, 'AAVE', 'USDT')


        @self.app.route('/api.value/marker')
        def marker():
            return cpt.cripto.gcr(self, 'MKR', 'USDT')


        @self.app.route('/api.value/bittorrent')
        def bittorrent():
            return cpt.cripto.gcr(self, 'BTT', 'USDT')


        @self.app.route('/api.value/kusama')
        def kusama():
            return cpt.cripto.gcr(self, 'KSM', 'USDT')


        @self.app.route('/api.value/enjin_coin')
        def enjin_coin():
            return cpt.cripto.gcr(self, 'ENJ', 'USDT')


        @self.app.route('/api.value/zcash')
        def zcash():
            return cpt.cripto.gcr(self, 'ZEC', 'USDT')


        @self.app.route('/api.value/ecash')
        def ecash():
            return cpt.cripto.gcr(self, 'XEC', 'USDT')


        @self.app.route('/api.value/quant')
        def quant():
            return cpt.cripto.gcr(self, 'QNT', 'USDT')


        @self.app.route('/api.value/amp')
        def amp():
            return cpt.cripto.gcr(self, 'AMP', 'USDT')


        @self.app.route('/api.value/harmony')
        def harmony():
            return cpt.cripto.gcr(self, 'ONE', 'USDT')


        @self.app.route('/api.value/thorchain')
        def thorchain():
            return cpt.cripto.gcr(self, 'RUNE', 'USDT')


        @self.app.route('/api.value/waves')
        def waves():
            return cpt.cripto.gcr(self, 'WAVES', 'USDT')


        @self.app.route('/api.value/neo')
        def neo():
            return cpt.cripto.gcr(self, 'NEO', 'USDT')


        @self.app.route('/api.value')
        def api_value():
            return cpt.cripto.todas(self)


        if __name__ == "__main__":
            self.app.run(debug = True)

start = app()