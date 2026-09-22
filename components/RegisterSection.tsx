"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import Modal from "./Modal";

type FormState = {
  name: string;
  phone: string;
  coach: string;
  dob: string;
};

const EMPTY_FORM: FormState = { name: "", phone: "", coach: "", dob: "" };
const DEMO_OTP = "123456";

export default function RegisterSection() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [otpOpen, setOtpOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [failedOpen, setFailedOpen] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !/^0\d{9}$/.test(form.phone) || !form.dob) return;
    setInfoOpen(false);
    setOtp("");
    setOtpOpen(true);
  }

  function handleOtpSubmit(e: FormEvent) {
    e.preventDefault();
    setOtpOpen(false);
    if (otp === DEMO_OTP) {
      setSuccessOpen(true);
      setForm(EMPTY_FORM);
    } else {
      setFailedOpen(true);
    }
  }

  return (
    <section id="dang-ky" className="py-20 px-4 bg-bg-deep/40">
      <div className="max-w-md mx-auto text-center">
        <h2 className="title-page text-3xl sm:text-4xl mb-2">
          <span className="tag text-6xl sm:text-7xl">Join</span>
          Báo danh thi đấu
        </h2>
        <p className="text-white/60 text-sm mt-4 mb-8">
          Điền thông tin để nhận mã OTP xác nhận tham gia Summer Cup.
        </p>
        <button onClick={() => setInfoOpen(true)} className="btn-cyber px-10 py-3 text-sm">
          Báo Danh Ngay
        </button>
      </div>

      <Modal open={infoOpen} onClose={() => setInfoOpen(false)} labelledBy="info-title">
        <h2 id="info-title" className="text-white uppercase text-xl font-black text-center mb-5">
          Báo Danh Thi Đấu
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="Họ và tên"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Nhập họ và tên"
            />
            <Field
              label="Số điện thoại"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              placeholder="0xxx"
              inputMode="numeric"
            />
            <Field
              label="Tên HLV"
              value={form.coach}
              onChange={(v) => setForm({ ...form, coach: v })}
              placeholder="Nhập tên HLV"
            />
            <Field
              label="Ngày sinh"
              type="date"
              value={form.dob}
              onChange={(v) => setForm({ ...form, dob: v })}
            />
          </div>

          <div className="flex justify-center gap-3 mt-2">
            <button type="submit" className="btn-cyber px-8 py-2.5 text-sm">
              Xác Nhận
            </button>
            <button
              type="button"
              onClick={() => setForm(EMPTY_FORM)}
              className="btn-cyber-blue px-8 py-2.5 text-sm"
            >
              Làm lại
            </button>
          </div>
        </form>
      </Modal>

      <Modal open={otpOpen} onClose={() => setOtpOpen(false)} labelledBy="otp-title">
        <h2 id="otp-title" className="text-white uppercase text-xl font-black text-center mb-5">
          Xác nhận tham gia thi đấu
        </h2>
        <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4 items-center">
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
            inputMode="numeric"
            maxLength={6}
            placeholder="Nhập OTP"
            className="w-full max-w-xs text-center tracking-[0.4em] bg-ink border border-blue rounded px-4 py-3 text-white focus:outline-none"
          />
          <button type="submit" className="btn-cyber px-8 py-2.5 text-sm">
            Xác nhận &amp; Hoàn Tất
          </button>
        </form>
        <p className="text-center text-sm mt-5">
          <span className="text-blue-bright font-bold">* Lưu ý:</span>{" "}
          <span className="text-white/70">
            OTP báo danh được gửi về số điện thoại của bạn để xác minh chính chủ tham gia
            thi đấu. Dùng mã demo <span className="text-champagne font-bold">{DEMO_OTP}</span>.
          </span>
        </p>
      </Modal>

      <Modal open={successOpen} onClose={() => setSuccessOpen(false)} labelledBy="success-title">
        <div className="flex flex-col items-center text-center gap-3 py-2">
          <CheckCircle2 size={44} className="text-success" />
          <h2 id="success-title" className="text-white uppercase text-lg font-black">
            Báo danh thành công!
          </h2>
          <p className="text-sm text-white/60">
            Cảm ơn bạn đã đăng ký tham gia Summer Cup. Ban tổ chức sẽ liên hệ xác nhận sớm nhất.
          </p>
        </div>
      </Modal>

      <Modal open={failedOpen} onClose={() => setFailedOpen(false)} labelledBy="failed-title">
        <div className="flex flex-col items-center text-center gap-3 py-2">
          <XCircle size={44} className="text-danger" />
          <h2 id="failed-title" className="text-white uppercase text-lg font-black">
            Đăng Ký Không Thành Công
          </h2>
          <p className="text-sm text-danger">Mã OTP không chính xác. Vui lòng thử lại.</p>
          <button
            onClick={() => {
              setFailedOpen(false);
              setOtpOpen(true);
            }}
            className="btn-cyber-blue px-8 py-2.5 text-sm mt-2"
          >
            Thoát &amp; Báo Danh Lại
          </button>
        </div>
      </Modal>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  inputMode?: "numeric" | "text";
}) {
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="text-xs uppercase text-white/70 font-bold">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        className="bg-ink border border-blue rounded px-3 py-2.5 text-sm text-white focus:outline-none"
      />
    </label>
  );
}
