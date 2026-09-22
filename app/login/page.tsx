"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Globe, Trophy } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState("/");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!account.trim() || !password.trim()) {
      setError("Vui lòng nhập đầy đủ tài khoản và mật khẩu.");
      setSuccess(false);
      return;
    }

    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: account.trim(), password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Đăng nhập thất bại.");
        setSuccess(false);
        return;
      }
      setDestination(data.role === "admin" ? "/admin" : "/");
      setSuccess(true);
    } catch {
      setError("Không thể kết nối tới server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f3f2f0] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(0,0,0,0.03) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.03) 0%, transparent 45%)",
        }}
      />

      <header className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-4 bg-white border-b border-black/5">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red/10 border border-red flex items-center justify-center">
            <Trophy size={16} className="text-red" />
          </div>
          <span className="font-display font-black text-lg text-[#222]">
            SUMMER<span className="text-red">CUP</span>
          </span>
        </Link>
        <div className="flex items-center gap-1.5 text-sm text-[#555]">
          <span>Việt Nam · Tiếng Việt</span>
          <Globe size={16} />
        </div>
      </header>

      <main className="relative z-10 flex justify-center pt-16 sm:pt-24 px-4">
        <div className="w-full max-w-[420px] bg-white rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8">
          <h1 className="text-center font-display font-black text-lg text-[#222] mb-6">
            Đăng nhập
          </h1>

          {success ? (
            <div className="text-center py-4">
              <p className="text-sm text-[#2f7ef0] font-bold mb-1">Đăng nhập thành công!</p>
              <p className="text-xs text-[#777]">Chào mừng bạn quay lại Summer Cup.</p>
              <Link
                href={destination}
                onClick={() => router.refresh()}
                className="inline-block mt-4 text-sm font-bold text-white bg-red rounded px-6 py-2"
              >
                {destination === "/admin" ? "Vào trang quản trị" : "Về trang chủ"}
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
              <div className="relative">
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 text-red text-xs">*</span>
                <input
                  type="text"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  placeholder="Tài khoản, Email hoặc số điện thoại"
                  className="w-full border border-[#ddd] rounded px-3 py-2.5 text-sm text-[#222] placeholder:text-[#999] focus:outline-none focus:border-red"
                />
              </div>

              <div className="relative">
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 text-red text-xs">*</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mật khẩu"
                  className="w-full border border-[#ddd] rounded px-3 py-2.5 text-sm text-[#222] placeholder:text-[#999] focus:outline-none focus:border-red"
                />
              </div>

              <div className="text-right -mt-1">
                <button type="button" className="text-xs text-[#2f7ef0] hover:underline">
                  Quên mật khẩu?
                </button>
              </div>

              {error && <span className="text-xs text-red text-center">{error}</span>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded bg-red text-white font-bold text-sm uppercase mt-2 hover:brightness-95 transition-[filter] disabled:opacity-60"
              >
                {loading ? "Đang đăng nhập..." : "Đăng Nhập Ngay"}
              </button>

              <Link
                href="/#dang-ky"
                className="w-full text-center py-2.5 rounded border border-[#ddd] text-[#555] font-bold text-sm hover:bg-[#f7f7f7] transition-colors"
              >
                Tạo tài khoản mới
              </Link>
            </form>
          )}

          <p className="text-center text-xs text-[#999] mt-6">
            <Link href="#" className="text-[#2f7ef0] hover:underline">
              Điều khoản dịch vụ
            </Link>{" "}
            và{" "}
            <Link href="#" className="text-[#2f7ef0] hover:underline">
              Chính sách bảo mật
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
