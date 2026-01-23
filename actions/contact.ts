// actions/contact.ts
'use server'; // これが必須です

// フォームの入力内容の型定義（必要に応じて）
// フォームの入力内容の型定義（戻り値用）
interface ContactState {
    message: string | null;
    success: boolean;
}

export async function sendContact(name: string, email: string, phone: string, message: string): Promise<ContactState> {
    // フォームから値を取得する処理は不要になります


    // LINEに送るメッセージ
    const lineMessage = {
        to: process.env.LINE_USER_ID,
        messages: [
            {
                type: 'text',
                text: `【お問い合わせ】\nお名前: ${name}\n電話番号: ${phone}\nメール: ${email}\n内容:\n${message}`,
            },
        ],
    };

    try {
        const response = await fetch('https://api.line.me/v2/bot/message/push', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify(lineMessage),
        });

        if (!response.ok) {
            throw new Error('LINE API Error');
        }

        return { success: true, message: '送信が完了しました！' };
    } catch (error) {
        console.error(error);
        return { success: false, message: '送信に失敗しました。時間をおいて再度お試しください。' };
    }
}