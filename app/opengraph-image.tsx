import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ヤギレンタル - 自然に優しい除草パートナー';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 64,
                    background: 'linear-gradient(to bottom right, #f0fdf4, #bbf7d0)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px',
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        fontSize: 120,
                        marginBottom: 20
                    }}
                >
                    🐐
                </div>
                <div
                    style={{
                        fontSize: 60,
                        fontWeight: 900,
                        color: '#166534',
                        marginBottom: 20,
                        display: 'flex',
                    }}
                >
                    ヤギレンタル
                </div>
                <div
                    style={{
                        fontSize: 32,
                        color: '#15803d',
                        display: 'flex',
                    }}
                >
                    自然に優しい除草パートナー
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
