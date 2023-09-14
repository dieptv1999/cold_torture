import Filter from "@/components/Filter";
import Link from "next/link";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-6 py-24 md:p-24 bg-white">
            <div className="flex flex-col max-w-screen-sm w-full space-y-3">
                <div className={'text-xl md:text-2xl font-bold mb-4'}>Hướng dẫn tra cứu phạt nguội</div>
                <span>
                    <b className={'mr-1'}>Bước 01:</b>
                    <span>Truy cập vào địa chỉ website</span>
                    <a className={'ml-1 underline text-blue-500'} href={'https://viphamgiaothong.raovat24h.net/'}>tại đây</a>
                </span>
                <span>
                    <b className={'mr-1'}>Bước 02:</b>
                    <span>Nhập vào biển số xe và chọn loại xe</span>
                </span>
                <span>Ví dụ: Biển số 30F-969.23, bạn có thể nhập 30F-969.23 hoặc 30F96923</span>
                <img alt={'preview-1'} src={'/preview-1.png'}/>
                <span>
                    <b className={'mr-1'}>Bước 03:</b>
                    <span>Nhấn vào nút "Kiểm tra phạt nguội"</span>
                </span>

                <img alt={'preview-1'} src={'/preview-1.png'}/>

                <span>Chú thích:</span>
                <ul>
                    <li>Loại phương tiện: là đặc điểm nhận dạng xe của bạn, chú ý điểm này để tránh T/H giả biển số,
                        nhưng bạn lại bị ghi nhận lỗi phạt
                    </li>
                    <li>Ngày vi phạm: là ngày phát hiện vi phạm GT của bạn</li>
                    <li>Địa điểm: là nơi xảy ra vi phạm giao thông</li>
                    <li>Hành vi vi phạm: là lỗi vi phạm giao thông. Ví dụ: vượt đèn đỏ, lấn làn hay chạy quá tốc độ</li>
                    <li>Trạng thái: Chưa Xử Phạt | Đã Xử Phạt - là trạng thái xử phạt của hành vi vi phạm</li>
                    <li>Đơn vị phụ trách: Là nơi phụ trách giải quyết lỗi của bạn, bạn có thể liên hệ với đơn vị này
                    </li>
                    <li>ĐT Liên hệ: là SĐT nơi phụ trách</li>
                </ul>
            </div>
        </main>
    )
}
