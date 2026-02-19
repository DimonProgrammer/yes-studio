/* eslint-disable @typescript-eslint/no-explicit-any */

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function handler(req: any, res: any) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, telegram, phone } = req.body ?? {};

  // Basic validation
  if (!name || !telegram) {
    return res.status(400).json({ error: 'name and telegram are required' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars');
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  const moscowTime = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const message = [
    '🌟 <b>Новая заявка YES Studio</b>',
    '',
    `👤 <b>Имя:</b> ${escapeHtml(name)}`,
    `📱 <b>Telegram:</b> ${escapeHtml(telegram)}`,
    `📞 <b>Телефон:</b> ${escapeHtml(phone || 'не указан')}`,
    '',
    `🕐 ${moscowTime} (МСК)`,
  ].join('\n');

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
      }
    );

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error('Telegram API error:', errText);
      return res.status(502).json({ error: 'Notification failed' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Fetch error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
