export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 py-10 px-4 bg-bg-header/60">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-black text-lg text-white">
          SUMMER<span className="text-blue-bright">CUP</span>
        </span>
        <div className="flex gap-6 text-xs text-white/50">
          <a href="#danh-sach-doi" className="hover:text-red-bright">Danh sách đội</a>
          <a href="#bang-xep-hang" className="hover:text-red-bright">Bảng xếp hạng</a>
          <a href="#giai-thuong" className="hover:text-red-bright">Giải thưởng</a>
          <a href="#dang-ky" className="hover:text-red-bright">Báo danh</a>
        </div>
        <span className="text-xs text-white/30">
          © {new Date().getFullYear()} Summer Cup — trang demo, số liệu chỉ mang tính minh họa.
        </span>
      </div>
    </footer>
  );
}
