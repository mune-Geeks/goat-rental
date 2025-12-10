// app/page.tsx

// これは、サイトのルート / にアクセスしたときに表示されるコンポーネントです。
export default function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' as 'center' }}>
      <h1>Hello Next.js!</h1>
      <p style={{ color: '#666', marginTop: '10px' }}>
        これがあなたのNext.jsアプリケーションの最初のページです。
      </p>
    </div>
  );
}