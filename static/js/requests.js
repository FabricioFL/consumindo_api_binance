setInterval(retornar, 500)
function retornar()
{
    var btc = new XMLHttpRequest();
    btc.responseType = 'json';
    btc.onreadystatechange = () =>
    {
        if(btc.readyState == 4)
        {
    
            document.getElementById('nome_bitcoin').innerText = 'Bitcoin'
            document.getElementById('preco_bitcoin').innerText = parseFloat(btc.response["price"]).toFixed(5)
    
        }
    };
    btc.open('GET', '/api.value/bitcoin');
    btc.send();


    var eth = new XMLHttpRequest();
    eth.responseType = 'json';
    eth.onreadystatechange = () =>
    {
        if(eth.readyState == 4)
        {

            document.getElementById('nome_ethereum').innerText = 'Etereum'
            document.getElementById('preco_ethereum').innerText = parseFloat(eth.response['price']).toFixed(5)

        }
    };
    eth.open('GET', '/api.value/ethereum');
    eth.send();


    var bnb = new XMLHttpRequest();
    bnb.responseType = 'json';
    bnb.onreadystatechange = () =>
    {
        if(bnb.readyState == 4)
        {

            document.getElementById('nome_binance_coin').innerText = 'Binance Coin'
            document.getElementById('preco_binance_coin').innerText = parseFloat(bnb.response['price']).toFixed(5)

        }
    };
    bnb.open('GET', '/api.value/binance_coin');
    bnb.send();


    var usdt = new XMLHttpRequest();
    usdt.responseType = 'json';
    usdt.onreadystatechange = () =>
    {
        if(usdt.readyState == 4)
        {

            document.getElementById('nome_tether').innerText = 'Tether'
            document.getElementById('preco_tether').innerText = parseFloat(usdt.response['price']).toFixed(5)

        }
    };
    usdt.open('GET', '/api.value/tether');
    usdt.send();


    var sol = new XMLHttpRequest();
    sol.responseType = 'json';
    sol.onreadystatechange = () =>
    {
        if(sol.readyState == 4)
        {

            document.getElementById('nome_solana').innerText = 'Solana'
            document.getElementById('preco_solana').innerText = parseFloat(sol.response['price']).toFixed(5)

        }
    };
    sol.open('GET', '/api.value/solana');
    sol.send();


    var ada = new XMLHttpRequest();
    ada.responseType = 'json';
    ada.onreadystatechange = () =>
    {
        if(ada.readyState == 4)
        {

            document.getElementById('nome_cardano').innerText = 'Cardano'
            document.getElementById('preco_cardano').innerText = parseFloat(ada.response['price']).toFixed(5)

        }
    };
    ada.open('GET', '/api.value/cardano');
    ada.send();


    var usdc = new XMLHttpRequest();
    usdc.responseType = 'json';
    usdc.onreadystatechange = () =>
    {
        if(usdc.readyState == 4)
        {

            document.getElementById('nome_usd_coin').innerText = 'USD Coin'
            document.getElementById('preco_usd_coin').innerText = parseFloat(usdc.response['price']).toFixed(5)

        }
    };
    usdc.open('GET', '/api.value/usd_coin');
    usdc.send();

    var xrp = new XMLHttpRequest();
    xrp.responseType = 'json';
    xrp.onreadystatechange = () =>
    {
        if(xrp.readyState == 4)
        {

            document.getElementById('nome_xrp').innerText = 'XRP'
            document.getElementById('preco_xrp').innerText = parseFloat(xrp.response['price']).toFixed(5)

        }
    };
    xrp.open('GET', '/api.value/xrp');
    xrp.send();


    var luna = new XMLHttpRequest();
    luna.responseType = 'json';
    luna.onreadystatechange = () =>
    {
        if(luna.readyState == 4)
        {

            document.getElementById('nome_terra').innerText = 'Terra'
            document.getElementById('preco_terra').innerText = parseFloat(luna.response['price']).toFixed(5)

        }
    };
    luna.open('GET', '/api.value/terra');
    luna.send();


    var dot = new XMLHttpRequest();
    dot.responseType = 'json';
    dot.onreadystatechange = () =>
    {
        if(dot.readyState == 4)
        {

            document.getElementById('nome_polkadot').innerText = 'Polkadot'
            document.getElementById('preco_polkadot').innerText = parseFloat(dot.response['price']).toFixed(5)

        }
    };
    dot.open('GET', '/api.value/polkadot');
    dot.send();


    var doge = new XMLHttpRequest();
    doge.responseType = 'json';
    doge.onreadystatechange = () =>
    {
        if(doge.readyState == 4)
        {

            document.getElementById('nome_dogecoin').innerText = 'Dogecoin'
            document.getElementById('preco_dogecoin').innerText = parseFloat(doge.response['price']).toFixed(5)

        }
    };
    doge.open('GET', '/api.value/dogecoin');
    doge.send();


    var avax = new XMLHttpRequest();
    avax.responseType = 'json';
    avax.onreadystatechange = () =>
    {
        if(avax.readyState == 4)
        {

            document.getElementById('nome_avalanche').innerText = 'Avalanche'
            document.getElementById('preco_avalanche').innerText = parseFloat(avax.response['price']).toFixed(5)

        }
    };
    avax.open('GET', '/api.value/avalanche');
    avax.send();


    var shib = new XMLHttpRequest();
    shib.responseType = 'json';
    shib.onreadystatechange = () =>
    {
        if(shib.readyState == 4)
        {

            document.getElementById('nome_shiba_inu').innerText = 'Shiba Inu'
            document.getElementById('preco_shiba_inu').innerText = parseFloat(shib.response['price']).toFixed(5)

        }
    };
    shib.open('GET', '/api.value/shiba_inu');
    shib.send();

    var matic = new XMLHttpRequest();
    matic.responseType = 'json';
    matic.onreadystatechange = () =>
    {
        if(matic.readyState == 4)
        {

            document.getElementById('nome_polygon').innerText = 'Polygon'
            document.getElementById('preco_polygon').innerText = parseFloat(matic.response['price']).toFixed(5)

        }
    };
    matic.open('GET', '/api.value/polygon');
    matic.send();


    var busd = new XMLHttpRequest();
    busd.responseType = 'json';
    busd.onreadystatechange = () =>
    {
        if(busd.readyState == 4)
        {

            document.getElementById('nome_binance_usd').innerText = 'Binance USD'
            document.getElementById('preco_binance_usd').innerText = parseFloat(busd.response['price']).toFixed(5)

        }
    };
    busd.open('GET', '/api.value/binance_usd');
    busd.send();


    var ltc = new XMLHttpRequest();
    ltc.responseType = 'json';
    ltc.onreadystatechange = () =>
    {
        if(ltc.readyState == 4)
        {

            document.getElementById('nome_litecoin').innerText = 'Litecoin'
            document.getElementById('preco_litecoin').innerText = parseFloat(ltc.response['price']).toFixed(5)

        }
    };
    ltc.open('GET', '/api.value/litecoin');
    ltc.send();


    var algo = new XMLHttpRequest();
    algo.responseType = 'json';
    algo.onreadystatechange = () =>
    {
        if(algo.readyState == 4)
        {

            document.getElementById('nome_algorand').innerText = 'algorand'
            document.getElementById('preco_algorand').innerText = parseFloat(algo.response['price']).toFixed(5)

        }
    };
    algo.open('GET', '/api.value/algorand');
    algo.send();


    var uni = new XMLHttpRequest();
    uni.responseType = 'json';
    uni.onreadystatechange = () =>
    {
        if(uni.readyState == 4)
        {

            document.getElementById('nome_uniswasp').innerText = 'Uniswasp'
            document.getElementById('preco_uniswasp').innerText = parseFloat(uni.response['price']).toFixed(5)

        }
    };
    uni.open('GET', '/api.value/uniswasp');
    uni.send();


    var link = new XMLHttpRequest();
    link.responseType = 'json';
    link.onreadystatechange = () =>
    {
        if(link.readyState == 4)
        {

            document.getElementById('nome_chainlink').innerText = 'Chainlink'
            document.getElementById('preco_chainlink').innerText = parseFloat(link.response['price']).toFixed(5)

        }
    };
    link.open('GET', '/api.value/chainlink');
    link.send();


    var trx = new XMLHttpRequest();
    trx.responseType = 'json';
    trx.onreadystatechange = () =>
    {
        if(trx.readyState == 4)
        {

            document.getElementById('nome_tron').innerText = 'Tron'
            document.getElementById('preco_tron').innerText = parseFloat(trx.response['price']).toFixed(5)

        }
    };
    trx.open('GET', '/api.value/tron');
    trx.send();


    var bch = new XMLHttpRequest();
    bch.responseType = 'json';
    bch.onreadystatechange = () =>
    {
        if(bch.readyState == 4)
        {

            document.getElementById('nome_bitcoin_cash').innerText = 'Bitcoin Cash'
            document.getElementById('preco_bitcoin_cash').innerText = parseFloat(bch.response['price']).toFixed(5)

        }
    };
    bch.open('GET', '/api.value/bitcoin_cash');
    bch.send();


    var axs = new XMLHttpRequest();
    axs.responseType = 'json';
    axs.onreadystatechange = () =>
    {
        if(axs.readyState == 4)
        {

            document.getElementById('nome_axie_infinity').innerText = 'Axie Infinity'
            document.getElementById('preco_axie_infinity').innerText = parseFloat(axs.response['price']).toFixed(5)

        }
    };
    axs.open('GET', '/api.value/axie_infinity');
    axs.send();
    
    
    var mana = new XMLHttpRequest();
    mana.responseType = 'json';
    mana.onreadystatechange = () =>
    {
        if(mana.readyState == 4)
        {

            document.getElementById('nome_decentraland').innerText = 'Decentraland'
            document.getElementById('preco_decentraland').innerText = parseFloat(mana.response['price']).toFixed(5)

        }
    };
    mana.open('GET', '/api.value/decentraland');
    mana.send();


    var xlm = new XMLHttpRequest();
    xlm.responseType = 'json';
    xlm.onreadystatechange = () =>
    {
        if(xlm.readyState == 4)
        {

            document.getElementById('nome_stellar').innerText = 'Stellar'
            document.getElementById('preco_stellar').innerText = parseFloat(xlm.response['price']).toFixed(5)

        }
    };
    xlm.open('GET', '/api.value/stellar');
    xlm.send();


    var dai = new XMLHttpRequest();
    dai.responseType = 'json';
    dai.onreadystatechange = () =>
    {
        if(dai.readyState == 4)
        {

            document.getElementById('nome_dai').innerText = 'Dai'
            document.getElementById('preco_dai').innerText = parseFloat(dai.response['price']).toFixed(5)

        }
    };
    dai.open('GET', '/api.value/dai');
    dai.send();


    var egld = new XMLHttpRequest();
    egld.responseType = 'json';
    egld.onreadystatechange = () =>
    {
        if(egld.readyState == 4)
        {

            document.getElementById('nome_elrond').innerText = 'Elrond'
            document.getElementById('preco_elrond').innerText = parseFloat(egld.response['price']).toFixed(5)

        }
    };
    egld.open('GET', '/api.value/elrond');
    egld.send();


    var ftt = new XMLHttpRequest();
    ftt.responseType = 'json';
    ftt.onreadystatechange = () =>
    {
        if(ftt.readyState == 4)
        {

            document.getElementById('nome_ftx_tolken').innerText = 'Ftx Tolken'
            document.getElementById('preco_ftx_tolken').innerText = parseFloat(ftt.response['price']).toFixed(5)

        }
    };
    ftt.open('GET', '/api.value/ftx_tolken');
    ftt.send();


    var atom = new XMLHttpRequest();
    atom.responseType = 'json';
    atom.onreadystatechange = () =>
    {
        if(atom.readyState == 4)
        {

            document.getElementById('nome_cosmos').innerText = 'Cosmos'
            document.getElementById('preco_cosmos').innerText = parseFloat(atom.response['price']).toFixed(5)

        }
    };
    atom.open('GET', '/api.value/cosmos');
    atom.send();


    var vet = new XMLHttpRequest();
    vet.responseType = 'json';
    vet.onreadystatechange = () =>
    {
        if(vet.readyState == 4)
        {

            document.getElementById('nome_vechain').innerText = 'vechain'
            document.getElementById('preco_vechain').innerText = parseFloat(vet.response['price']).toFixed(5)

        }
    };
    vet.open('GET', '/api.value/vechain');
    vet.send();


    var icp = new XMLHttpRequest();
    icp.responseType = 'json';
    icp.onreadystatechange = () =>
    {
        if(icp.readyState == 4)
        {

            document.getElementById('nome_internet_computer').innerText = 'Internet Computer'
            document.getElementById('preco_decentraland').innerText = parseFloat(icp.response['price']).toFixed(5)

        }
    };
    icp.open('GET', '/api.value/internet_computer');
    icp.send();


    var fil = new XMLHttpRequest();
    fil.responseType = 'json';
    fil.onreadystatechange = () =>
    {
        if(fil.readyState == 4)
        {

            document.getElementById('nome_filecoin').innerText = 'Filecoin'
            document.getElementById('preco_filecoin').innerText = parseFloat(fil.response['price']).toFixed(5)

        }
    };
    fil.open('GET', '/api.value/filecoin');
    fil.send();


    var etc = new XMLHttpRequest();
    etc.responseType = 'json';
    etc.onreadystatechange = () =>
    {
        if(etc.readyState == 4)
        {

            document.getElementById('nome_ethereum_classic').innerText = 'Ethereum Classic'
            document.getElementById('preco_ethereum_classic').innerText = parseFloat(etc.response['price']).toFixed(5)

        }
    };
    etc.open('GET', '/api.value/ethereum_classic');
    etc.send();


    var sand = new XMLHttpRequest();
    sand.responseType = 'json';
    sand.onreadystatechange = () =>
    {
        if(sand.readyState == 4)
        {

            document.getElementById('nome_the_sandbox').innerText = 'The Sandbox'
            document.getElementById('preco_the_sandbox').innerText = parseFloat(sand.response['price']).toFixed(5)

        }
    };
    sand.open('GET', '/api.value/the_sandbox');
    sand.send();


    var hbar = new XMLHttpRequest();
    hbar.responseType = 'json';
    hbar.onreadystatechange = () =>
    {
        if(hbar.readyState == 4)
        {

            document.getElementById('nome_hedera').innerText = 'Hedera'
            document.getElementById('preco_hedera').innerText = parseFloat(hbar.response['price']).toFixed(5)

        }
    };
    hbar.open('GET', '/api.value/hedera');
    hbar.send();


    var theta = new XMLHttpRequest();
    theta.responseType = 'json';
    theta.onreadystatechange = () =>
    {
        if(theta.readyState == 4)
        {

            document.getElementById('nome_theta').innerText = 'Theta'
            document.getElementById('preco_theta').innerText = parseFloat(theta.response['price']).toFixed(5)

        }
    };
    theta.open('GET', '/api.value/theta');
    theta.send();


    var near = new XMLHttpRequest();
    near.responseType = 'json';
    near.onreadystatechange = () =>
    {
        if(near.readyState == 4)
        {

            document.getElementById('nome_near_protocol').innerText = 'Near Protocol'
            document.getElementById('preco_near_protocol').innerText = parseFloat(near.response['price']).toFixed(5)

        }
    };
    near.open('GET', '/api.value/near_protocol');
    near.send();


    var ftm = new XMLHttpRequest();
    ftm.responseType = 'json';
    ftm.onreadystatechange = () =>
    {
        if(ftm.readyState == 4)
        {

            document.getElementById('nome_fantom').innerText = 'Fantom'
            document.getElementById('preco_fantom').innerText = parseFloat(ftm.response['price']).toFixed(5)

        }
    };
    ftm.open('GET', '/api.value/fantom');
    ftm.send();


    var gala = new XMLHttpRequest();
    gala.responseType = 'json';
    gala.onreadystatechange = () =>
    {
        if(gala.readyState == 4)
        {

            document.getElementById('nome_gala').innerText = 'Gala'
            document.getElementById('preco_gala').innerText = parseFloat(gala.response['price']).toFixed(5)

        }
    };
    gala.open('GET', '/api.value/gala');
    gala.send();


    var xmr = new XMLHttpRequest();
    xmr.responseType = 'json';
    xmr.onreadystatechange = () =>
    {
        if(xmr.readyState == 4)
        {

            document.getElementById('nome_monero').innerText = 'Monero'
            document.getElementById('preco_monero').innerText = parseFloat(xmr.response['price']).toFixed(5)

        }
    };
    xmr.open('GET', '/api.value/monero');
    xmr.send();


    var xtz = new XMLHttpRequest();
    xtz.responseType = 'json';
    xtz.onreadystatechange = () =>
    {
        if(xtz.readyState == 4)
        {

            document.getElementById('nome_tezos').innerText = 'Tezos'
            document.getElementById('preco_tezos').innerText = parseFloat(xtz.response['price']).toFixed(5)

        }
    };
    xtz.open('GET', '/api.value/tezos');
    xtz.send();


    var hnt = new XMLHttpRequest();
    hnt.responseType = 'json';
    hnt.onreadystatechange = () =>
    {
        if(hnt.readyState == 4)
        {

            document.getElementById('nome_helim').innerText = 'Helim'
            document.getElementById('preco_helim').innerText = parseFloat(hnt.response['price']).toFixed(5)

        }
    };
    hnt.open('GET', '/api.value/helim');
    hnt.send();


    var klay = new XMLHttpRequest();
    klay.responseType = 'json';
    klay.onreadystatechange = () =>
    {
        if(klay.readyState == 4)
        {

            document.getElementById('nome_klatyn').innerText = 'Klatyn'
            document.getElementById('preco_klatyn').innerText = parseFloat(klay.response['price']).toFixed(5)

        }
    };
    klay.open('GET', '/api.value/klatyn');
    klay.send();


    var grt = new XMLHttpRequest();
    grt.responseType = 'json';
    grt.onreadystatechange = () =>
    {
        if(grt.readyState == 4)
        {

            document.getElementById('nome_the_graph').innerText = 'The Graph'
            document.getElementById('preco_the_graph').innerText = parseFloat(grt.response['price']).toFixed(5)

        }
    };
    grt.open('GET', '/api.value/the_graph');
    grt.send();


    var flow = new XMLHttpRequest();
    flow.responseType = 'json';
    flow.onreadystatechange = () =>
    {
        if(flow.readyState == 4)
        {

            document.getElementById('nome_flow').innerText = 'Flow'
            document.getElementById('preco_flow').innerText = parseFloat(flow.response['price']).toFixed(5)

        }
    };
    flow.open('GET', '/api.value/flow');
    flow.send();


    var eos = new XMLHttpRequest();
    eos.responseType = 'json';
    eos.onreadystatechange = () =>
    {
        if(eos.readyState == 4)
        {

            document.getElementById('nome_eos').innerText = 'Eos'
            document.getElementById('preco_eos').innerText = parseFloat(eos.response['price']).toFixed(5)

        }
    };
    eos.open('GET', '/api.value/eos');
    eos.send();


    var lrc = new XMLHttpRequest();
    lrc.responseType = 'json';
    lrc.onreadystatechange = () =>
    {
        if(lrc.readyState == 4)
        {

            document.getElementById('nome_loopring').innerText = 'Loopring'
            document.getElementById('preco_loopring').innerText = parseFloat(lrc.response['price']).toFixed(5)

        }
    };
    lrc.open('GET', '/api.value/loopring');
    lrc.send();


    var cake = new XMLHttpRequest();
    cake.responseType = 'json';
    cake.onreadystatechange = () =>
    {
        if(cake.readyState == 4)
        {

            document.getElementById('nome_pancake_swap').innerText = 'Pancake Swap'
            document.getElementById('preco_pancake_swap').innerText = parseFloat(cake.response['price']).toFixed(5)

        }
    };
    cake.open('GET', '/api.value/pancake_swap');
    cake.send();


    var stx = new XMLHttpRequest();
    stx.responseType = 'json';
    stx.onreadystatechange = () =>
    {
        if(stx.readyState == 4)
        {

            document.getElementById('nome_stacks').innerText = 'Stacks'
            document.getElementById('preco_stacks').innerText = parseFloat(stx.response['price']).toFixed(5)

        }
    };
    stx.open('GET', '/api.value/stacks');
    stx.send();


    var aave = new XMLHttpRequest();
    aave.responseType = 'json';
    aave.onreadystatechange = () =>
    {
        if(aave.readyState == 4)
        {

            document.getElementById('nome_aave').innerText = 'Aave'
            document.getElementById('preco_aave').innerText = parseFloat(aave.response['price']).toFixed(5)

        }
    };
    aave.open('GET', '/api.value/aave');
    aave.send();


    var mkr = new XMLHttpRequest();
    mkr.responseType = 'json';
    mkr.onreadystatechange = () =>
    {
        if(mkr.readyState == 4)
        {

            document.getElementById('nome_marker').innerText = 'Marker'
            document.getElementById('preco_marker').innerText = parseFloat(mkr.response['price']).toFixed(5)

        }
    };
    mkr.open('GET', '/api.value/marker');
    mkr.send();


    var btt = new XMLHttpRequest();
    btt.responseType = 'json';
    btt.onreadystatechange = () =>
    {
        if(btt.readyState == 4)
        {

            document.getElementById('nome_bittorrent').innerText = 'Bittorrent'
            document.getElementById('preco_bittorrent').innerText = parseFloat(btt.response['price']).toFixed(5)

        }
    };
    btt.open('GET', '/api.value/bittorrent');
    btt.send();


    var ksm = new XMLHttpRequest();
    ksm.responseType = 'json';
    ksm.onreadystatechange = () =>
    {
        if(ksm.readyState == 4)
        {

            document.getElementById('nome_kusama').innerText = 'Kusama'
            document.getElementById('preco_kusama').innerText = parseFloat(ksm.response['price']).toFixed(5)

        }
    };
    ksm.open('GET', '/api.value/kusama');
    ksm.send();


    var enj = new XMLHttpRequest();
    enj.responseType = 'json';
    enj.onreadystatechange = () =>
    {
        if(enj.readyState == 4)
        {

            document.getElementById('nome_enjin_coin').innerText = 'Enjin Coin'
            document.getElementById('preco_enjin_coin').innerText = parseFloat(enj.response['price']).toFixed(5)

        }
    };
    enj.open('GET', '/api.value/enjin_coin');
    enj.send();


    var zec = new XMLHttpRequest();
    zec.responseType = 'json';
    zec.onreadystatechange = () =>
    {
        if(zec.readyState == 4)
        {

            document.getElementById('nome_zcash').innerText = 'Zcash'
            document.getElementById('preco_zcash').innerText = parseFloat(zec.response['price']).toFixed(5)

        }
    };
    zec.open('GET', '/api.value/zcash');
    zec.send();


    var xec = new XMLHttpRequest();
    xec.responseType = 'json';
    xec.onreadystatechange = () =>
    {
        if(xec.readyState == 4)
        {

            document.getElementById('nome_ecash').innerText = 'Ecash'
            document.getElementById('preco_ecash').innerText = parseFloat(xec.response['price']).toFixed(5)

        }
    };
    xec.open('GET', '/api.value/ecash');
    xec.send();


    var qnt = new XMLHttpRequest();
    qnt.responseType = 'json';
    qnt.onreadystatechange = () =>
    {
        if(qnt.readyState == 4)
        {

            document.getElementById('nome_quant').innerText = 'Quant'
            document.getElementById('preco_quant').innerText = parseFloat(qnt.response['price']).toFixed(5)

        }
    };
    qnt.open('GET', '/api.value/quant');
    qnt.send();


    var amp = new XMLHttpRequest();
    amp.responseType = 'json';
    amp.onreadystatechange = () =>
    {
        if(amp.readyState == 4)
        {

            document.getElementById('nome_amp').innerText = 'Amp'
            document.getElementById('preco_amp').innerText = parseFloat(amp.response['price']).toFixed(5)

        }
    };
    amp.open('GET', '/api.value/amp');
    amp.send();


    var one = new XMLHttpRequest();
    one.responseType = 'json';
    one.onreadystatechange = () =>
    {
        if(one.readyState == 4)
        {

            document.getElementById('nome_harmony').innerText = 'Harmony'
            document.getElementById('preco_harmony').innerText = parseFloat(one.response['price']).toFixed(5)

        }
    };
    one.open('GET', '/api.value/harmony');
    one.send();


    var rune = new XMLHttpRequest();
    rune.responseType = 'json';
    rune.onreadystatechange = () =>
    {
        if(rune.readyState == 4)
        {

            document.getElementById('nome_thorchain').innerText = 'Thorchain'
            document.getElementById('preco_thorchain').innerText = parseFloat(rune.response['price']).toFixed(5)

        }
    };
    rune.open('GET', '/api.value/thorchain');
    rune.send();


    var waves = new XMLHttpRequest();
    waves.responseType = 'json';
    waves.onreadystatechange = () =>
    {
        if(waves.readyState == 4)
        {

            document.getElementById('nome_waves').innerText = 'Waves'
            document.getElementById('preco_waves').innerText = parseFloat(waves.response['price']).toFixed(5)

        }
    };
    waves.open('GET', '/api.value/waves');
    waves.send();


    var neo = new XMLHttpRequest();
    neo.responseType = 'json';
    neo.onreadystatechange = () =>
    {
        if(neo.readyState == 4)
        {

            document.getElementById('nome_neo').innerText = 'Neo'
            document.getElementById('preco_neo').innerText = parseFloat(neo.response['price']).toFixed(5)

        }
    };
    neo.open('GET', '/api.value/neo');
    neo.send();

}
