<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CryptoTap X - Pro</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            background: linear-gradient(135deg, #0f172a, #1e1b4b);
            color: #ffffff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        .header {
            width: 100%;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 15px;
        }
        .user-name { font-size: 16px; font-weight: bold; color: #f39c12; }
        .score-container { margin: 10px 0; }
        #score { font-size: 52px; font-weight: bold; color: #f39c12; text-shadow: 0 0 20px rgba(243, 156, 18, 0.5); }
        .coin-box {
            width: 180px;
            height: 180px;
            background: radial-gradient(circle, #f39c12, #d35400);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px auto;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(243, 156, 18, 0.4);
            transition: transform 0.1s ease;
            font-size: 80px;
            user-select: none;
        }
        .coin-box:active { transform: scale(0.92); }
        .btn-boost {
            background: linear-gradient(135deg, #f39c12, #e67e22);
            border: none;
            padding: 14px 30px;
            color: #000;
            font-weight: bold;
            font-size: 16px;
            border-radius: 12px;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(243, 156, 18, 0.3);
            width: 100%;
            max-width: 300px;
            transition: 0.2s;
        }
        .btn-boost:active { transform: scale(0.98); }
    </style>
</head>
<body>

    <div class="header">
        <div class="user-name" id="username">স্বাগতম, গেমার! 🚀</div>
        <div style="font-size: 12px; color: #aaa; margin-top: 3px;">CryptoTap X - Official Mini App</div>
    </div>

    <div>
        <p style="font-size: 14px; color: #ccc; margin-bottom: 5px;">ট্যাপ করে কয়েন জমান!</p>
        <div class="score-container">
            <h2 id="score">0</h2>
        </div>

        <div class="coin-box" onclick="tapCoin()">
            🪙
        </div>
    </div>

    <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
        <button class="btn-boost" onclick="buyBoost()">বুস্টার কিনুন (Telegram Stars)</button>
    </div>

    <script>
        let tg = window.Telegram.WebApp;
        try {
            tg.expand();
            if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.first_name) {
                document.getElementById('username').innerText = `স্বাগতম, ${tg.initDataUnsafe.user.first_name}! 🚀`;
            }
        } catch(e) {}

        let score = parseInt(localStorage.getItem('taps')) || 0;
        document.getElementById('score').innerText = score;

        function tapCoin() {
            score++;
            document.getElementById('score').innerText = score;
            localStorage.setItem('taps', score);
            try {
                if (tg && tg.HapticFeedback) {
                    tg.HapticFeedback.impactOccurred('light');
                }
            } catch(e) {}
        }

        // টেলিগ্রাম স্টার পেমেন্ট রিকোয়েস্ট ফাংশন
        async function buyBoost() {
            try {
                let res = await fetch('/api/buy');
                let data = await res.json();

                if (data.invoiceLink) {
                    tg.openInvoice(data.invoiceLink, (status) => {
                        if (status === 'paid') {
                            alert("অভিনন্দন! পেমেন্ট সফল হয়েছে!");
                        } else {
                            alert("পেমেন্ট সম্পন্ন হয়নি।");
                        }
                    });
                } else {
                    alert("এরর: " + (data.error || "পেমেন্ট লিংক তৈরি করা যায়নি"));
                }
            } catch (e) {
                alert("সার্ভার কানেকশন ফেইলড!");
            }
        }
    </script>
</body>
</html>
