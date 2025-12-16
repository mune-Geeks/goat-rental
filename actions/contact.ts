'use server';

// フォームから受け取ったデータを処理する関数
// ▼ 引数に phone を追加しました
export async function submitContactData(name: string, email: string, phone: string, message: string) {

    console.log('--------------------------------');
    console.log('🚀 サーバーでデータを受け取りました！');
    console.log(`名前: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`電話番号: ${phone}`); // 👈 追加
    console.log(`内容: ${message}`);
    console.log('--------------------------------');

    // 擬似的に待つ
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: '送信が完了しました' };
}