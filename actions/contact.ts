'use server'; // 👈 【最重要】「これはサーバーで動く関数です」という宣言

// フォームから受け取ったデータを処理する関数
export async function submitContactData(name: string, email: string, message: string) {

    // ここに書いた処理は、ブラウザからは見えません（秘密の処理ができる）
    console.log('--------------------------------');
    console.log('🚀 サーバーでデータを受け取りました！');
    console.log(`名前: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`内容: ${message}`);
    console.log('--------------------------------');

    // サーバーでの処理が終わったことを返す（擬似的に1秒待つ）
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: '送信が完了しました' };
}