import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "ヤギ販売（里親募集） | 山門牧場",
    description: "山門牧場で生まれた元気な子ヤギ・成ヤギの販売（里親募集）について",
};

export default function SalesPage() {
    return (
        <main className="py-20 px-6 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800">
                    ヤギ販売
                </h1>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                        <span>🎁</span>
                        <span>素敵なパートナーを</span>
                    </h2>

                    <div className="bg-orange-50 p-8 rounded-3xl shadow-md border-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="bg-orange-100 text-orange-800 font-bold inline-block px-4 py-1 rounded-full mb-4">
                                    ペット・除草パートナーに
                                </div>
                                <h3 className="text-2xl font-bold mb-2">子ヤギ・成ヤギの販売</h3>
                                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                                    <p className="mb-4">
                                        山門牧場で生まれた元気なヤギたちをお譲りしています。<br />
                                        除草用としてはもちろん、人懐っこいのでペットとしても人気です。
                                    </p>
                                    <p className="text-sm">
                                        ※飼育環境の確認などをさせていただいた上での販売となります。<br />
                                        ※時期によって販売可能な頭数が異なります。
                                    </p>
                                </div>

                            </div>
                            <div className="w-full md:w-1/2 bg-white p-6 rounded-xl border border-orange-100">
                                <h4 className="font-bold mb-3 text-orange-800">📋 お譲りまでの流れ</h4>
                                <ul className="space-y-3 text-gray-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 font-bold">1.</span>
                                        <span>お問い合わせフォームより「販売希望」とご連絡ください。</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 font-bold">2.</span>
                                        <span>現地（牧場）にて実物確認・相性確認を行います。</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 font-bold">3.</span>
                                        <span>飼育環境の確認・アドバイスを実施します。</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 font-bold">4.</span>
                                        <span>お引き渡し（お迎え、または配送も相談可）。</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <Link
                                href="/contact"
                                className="inline-block bg-orange-500 text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl transition transform hover:-translate-y-1"
                            >
                                お問い合わせはこちら
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
