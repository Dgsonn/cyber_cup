import { Facebook, Youtube, MessageCircle, Trophy } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-mint/10 border border-mint flex items-center justify-center">
              <Trophy size={16} className="text-mint" />
            </div>
            <span className="font-display text-sm text-mint">SUMMER CUP</span>
          </div>
          <p className="text-sm text-white/50">
            Giải đấu esports Hạng Vàng dành cho cộng đồng game thủ toàn quốc.
          </p>
          <div className="flex gap-3 mt-4">
            {[Facebook, Youtube, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-mint hover:border-mint transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white/80 uppercase mb-3">Liên kết</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="#top" className="hover:text-mint">Trang chủ</a></li>
            <li><a href="#giai-dau" className="hover:text-mint">Giải đấu</a></li>
            <li><a href="#lich-thi-dau" className="hover:text-mint">Lịch thi đấu</a></li>
            <li><a href="#bxh" className="hover:text-mint">Bảng xếp hạng</a></li>
            <li><a href="#doi-thi-dau" className="hover:text-mint">Đội tuyển</a></li>
            <li><a href="#tin-tuc" className="hover:text-mint">Tin tức</a></li>
            <li><a href="#doi-qua" className="hover:text-mint">Đổi quà</a></li>
            <li><a href="#dang-ky" className="hover:text-mint">Đăng ký thi đấu</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white/80 uppercase mb-3">Liên hệ Ban Tổ Chức</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>Hotline: 1900 xxxx</li>
            <li>Email: bantochuc@summercup.vn</li>
            <li>Fanpage: fb.com/summercup.official</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
        <span>© {new Date().getFullYear()} Summer Cup. Mọi tên đội, số liệu chỉ mang tính minh họa.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-mint">Điều khoản sử dụng</a>
          <a href="#" className="hover:text-mint">Chính sách bảo mật</a>
          <a href="#footer" className="hover:text-mint">Liên hệ</a>
        </div>
      </div>
    </footer>
  );
}
