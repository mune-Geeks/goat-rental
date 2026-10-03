// actions/contact.ts
'use server'; // これが必須です

// フォームの入力内容の型定義（必要に応じて）
// フォームの入力内容の型定義（戻り値用）
interface ContactState {
    message: string | null;
    success: boolean;
}

export interface ContactPayload {
    name: string;
    phone: string;
    heardFrom: string;
    serviceType: string;
    rentalPeriod?: string;
    ownerPlan?: string;
    message: string;
}

export async function sendContact(
    payloadOrName: ContactPayload | string,
    phone?: string,
    heardFrom?: string,
    rentalPeriod?: string,
    message?: string
): Promise<ContactState> {
    let nameVal = '';
    let phoneVal = '';
    let heardFromVal = '';
    let serviceTypeVal = 'ヤギレンタル';
    let rentalPeriodVal = '';
    let ownerPlanVal = '';
    let messageVal = '';

    if (typeof payloadOrName === 'object') {
        nameVal = payloadOrName.name;
        phoneVal = payloadOrName.phone;
        heardFromVal = payloadOrName.heardFrom;
        serviceTypeVal = payloadOrName.serviceType;
        rentalPeriodVal = payloadOrName.rentalPeriod || '';
        ownerPlanVal = payloadOrName.ownerPlan || '';
        messageVal = payloadOrName.message;
    } else {
        nameVal = payloadOrName;
        phoneVal = phone || '';
        heardFromVal = heardFrom || '';
        rentalPeriodVal = rentalPeriod || '';
        messageVal = message || '';
    }

    let detailLine = '';
    if (serviceTypeVal === 'ヤギレンタル' && rentalPeriodVal) {
        detailLine = `希望レンタル期間: ${rentalPeriodVal}\n`;
    } else if (serviceTypeVal === 'マイヤギプロジェクト' && ownerPlanVal) {
        detailLine = `希望オーナープラン: ${ownerPlanVal}\n`;
    }

    // LINEに送るメッセージ
    const lineMessage = {
        to: process.env.LINE_USER_ID,
        messages: [
            {
                type: 'text',
                text: `【お問い合わせ】\nお問い合わせ種別: ${serviceTypeVal}\nお名前: ${nameVal}\n電話番号: ${phoneVal}\n${detailLine}知った経緯: ${heardFromVal}\n内容:\n${messageVal}`,
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