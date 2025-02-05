import ApiResponse from "./components/api-response";
import ThirdPartyResponse from "./components/third-party-response";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ApiResponse />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <ThirdPartyResponse />
      </footer>
    </div>
  );
}
