export default async function handler(req, res) {
    const BOT_TOKEN = "8729524580:AAF-t1WjXqcO_riklxCLc3VEB8GAE1Y5AEQ";
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/createInvoiceLink`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: "CryptoTap X Booster",
                description: "এক্সক্লুসিভ গেম বুস্টার প্যাক (১০০ কয়েন বোনাস)",
                payload: "boost_pack_1",
                currency: "XTR", // টেলিগ্রাম স্টার কারেন্সি
                prices: [{ label: "Booster", amount: 50 }] // ৫০ স্টার দাম
            })
        });

        const data = await response.json();
        if (data.ok) {
            return res.status(200).json({ invoiceLink: data.result });
        } else {
            return res.status(400).json({ error: data.description });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
