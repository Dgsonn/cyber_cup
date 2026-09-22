"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
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
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [otpOpen, setOtpOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [failedOpen, setFailedOpen] = useState(false);

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Vui lòng nhập họ tên";
    if (!/^0\d{9}$/.test(form.phone)) next.phone = "Số điện thoại không hợp lệ";
    if (!form.coach.trim()) next.coach = "Vui lòng nhập tên huấn luyện viên";
    if (!form.dob) next.dob = "Vui lòng chọn ngày sinh";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setOtp("");
    setOtpError("");
    setOtpOpen(true);
  }

  function handleOtpSubmit(e: FormEvent) {
    e.preventDefault();
    if (otp.length !== 6) {
      setOtpError("Mã OTP gồm 6 chữ số");
      return;
    }
    setOtpOpen(false);
    if (otp === DEMO_OTP) {
      setSuccessOpen(true);
      setForm(EMPTY_FORM);
    } else {
      setFailedOpen(true);
    }
  }

  return (
    <section id="dang-ky" className="py-24 px-4 bg-bg-deep/40">
      <div className="max-w-lg mx-auto">
        <h2 className="section-heading">
          Báo danh <span className="text-mint">thi đấu</span>
        </h2>
        <p className="text-center text-white/60 mt-3 text-sm">
          Điền thông tin bên dưới, hệ thống sẽ gửi mã OTP xác nhận qua SMS.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl bg-bg-panel border border-white/10 p-6 sm:p-8 flex flex-col gap-4"
          noValidate
        >
          <Field
            label="Họ và tên"
            value={form.name}
            error={errors.name}
            onChange={(v) => setForm({ ...form, name: v })}
            placeholder="Nguyễn Văn A"
          />
          <Field
            label="Số điện thoại"
            value={form.phone}
            error={errors.phone}
            onChange={(v) => setForm({ ...form, phone: v })}
            placeholder="09xxxxxxxx"
            inputMode="numeric"
          />
          <Field
            label="Tên huấn luyện viên"
            value={form.coach}
            error={errors.coach}
            onChange={(v) => setForm({ ...form, coach: v })}
            placeholder="Tên hiển thị trên BXH"
          />
          <Field
            label="Ngày sinh"
            type="date"
            value={form.dob}
            error={errors.dob}
            onChange={(v) => setForm({ ...form, dob: v })}
          />

          <button
            type="submit"
            className="mt-4 py-3 rounded-full bg-mint text-bg-deep font-bold hover:shadow-neon transition-shadow"
          >
            Gửi mã OTP
          </button>
        </motion.form>
      </div>

      <Modal open={otpOpen} onClose={() => setOtpOpen(false)} labelledBy="otp-title">
        <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
          <h3 id="otp-title" className="font-display text-lg">
            Xác nhận tham gia thi đấu
          </h3>
          <p className="text-sm text-white/60">
            Mã OTP đã được gửi tới số điện thoại {form.phone || "của bạn"}. Dùng mã demo{" "}
            <span className="text-mint font-bold">{DEMO_OTP}</span> để xác nhận thành công.
          </p>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
            inputMode="numeric"
            maxLength={6}
            placeholder="000000"
            className="text-center tracking-[0.5em] text-2xl font-display bg-bg border border-mint/30 rounded-xl py-3 focus:outline-none focus:border-mint"
          />
          {otpError && <span className="text-xs text-danger">{otpError}</span>}
          <button
            type="submit"
            className="py-3 rounded-full bg-mint text-bg-deep font-bold hover:shadow-neon transition-shadow"
          >
            Xác nhận
          </button>
        </form>
      </Modal>

      <Modal open={successOpen} onClose={() => setSuccessOpen(false)} labelledBy="success-title">
        <div className="flex flex-col items-center text-center gap-3 py-4">
          <CheckCircle2 size={48} className="text-mint" />
          <h3 id="success-title" className="font-display text-lg">
            Đăng ký thành công!
          </h3>
          <p className="text-sm text-white/60">
            Cảm ơn bạn đã đăng ký tham gia Summer Cup. Ban tổ chức sẽ liên hệ xác nhận trong 48 giờ tới.
          </p>
        </div>
      </Modal>

      <Modal open={failedOpen} onClose={() => setFailedOpen(false)} labelledBy="failed-title">
        <div className="flex flex-col items-center text-center gap-3 py-4">
          <XCircle size={48} className="text-danger" />
          <h3 id="failed-title" className="font-display text-lg">
            Đăng Ký Không Thành Công
          </h3>
          <p className="text-sm text-white/60">Mã OTP không chính xác. Vui lòng thử lại.</p>
          <button
            onClick={() => {
              setFailedOpen(false);
              setOtpOpen(true);
            }}
            className="mt-2 px-6 py-2 rounded-full bg-mint text-bg-deep font-bold text-sm"
          >
            Thử lại
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
  error,
  placeholder,
  type = "text",
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  inputMode?: "numeric" | "text";
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs uppercase text-white/50 font-bold">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        className={`bg-bg border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
          error ? "border-danger" : "border-white/15 focus:border-mint"
        }`}
      />
      {error && <span className="text-xs text-danger">{error}</span>}
    </label>
  );
}
