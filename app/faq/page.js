import Filter from "@/components/Filter";
import Link from "next/link";

export default function Home() {

    const questions = [
        {
            question: 'Tra cứu phạt nguội tại đây có chính xác không?',
            answer: '<p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Như bạn đã biết, cục CSGT Việt Nam đã phát hành ra trang tra cứu phạt nguội tại đây để thống nhất việc xử lý phạt nguội bằng lỗi hình ảnh, video do camera giám sát ghi lại tại website: https://csgt.vn. Phần mềm <b>Tra Cứu Phạt Nguội</b> ra giúp cho việc tra cứu dễ dàng hơn.<br>Sau khi xác minh được lỗi phạt nguội là chính xác, CSGT sẽ đăng tải thông tin phạt nguội lên website, để tài xế có thể tra cứu và đóng phạt trước khi đăng kiểm. Ngoài ra, CSGT cũng sẽ gửi giấy thông báo về địa chỉ đăng ký xe để nhắc tài xế xử lý lỗi vi phạm.<br>Khi tài xế tới cục CSGT tại địa phương sẽ được cung cấp đầy đủ hình ảnh, video và chi tiết lỗi vi phạm và mức phạt.<br>Lưu ý: mọi hành vi gọi điện thông báo phạt nguội đều là <b>lừa đảo</b>, cần xác minh kỹ trước khi chuyển tiền hay đóng phạt cho bất cứ cá nhân nào khác.</p>'
        },
        {
            question: 'Tôi nhận được thông báo phạt nguội về nhà, nhưng tra cứu không có lỗi vi phạm?',
            answer: '<p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Hiện nay, việc cập nhật dữ liệu là do CSGT tại địa phương sau khi xác minh vi phạm sẽ tải dữ liệu lên hệ thống, đôi lúc sẽ có trục trặc trong 1 vài trường hợp nên hệ thống đôi lúc chưa đồng bộ. Nếu gặp các trường hợp tương tự, hãy xác minh kỹ vi phạm có chính xác không trước khi xử lý, tránh bị lừa từ các cá nhân tội phạm.</p>'
        },
        {
            question: 'Tôi có thể xử lý vi phạm tại địa phương không?',
            answer: '<p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Cho tới thời điểm hiện tại, việc xử lý vi phạm sẽ thông qua 2 hình thức: trực tiếp và online. Đối với xử lý trực tiếp, bạn cần tới địa phương nơi phát hiện vi phạm để xử lý, hiện tại cục CSGT cũng đang đề xuất chỉnh sửa Nghị định 100/2019 để tài xế có thể nhận bằng chứng vi phạm và xử lý ngay tại địa phương, dự kiến trong năm 2022 sẽ ra mắt. Ngoài ra, hình thức nộp phạt online hiện tại chỉ hỗ trợ 1 vài địa phương (Hà Nội, Hải Phòng, Đà Nẵng, Tp Hồ Chí Minh và Bình Thuận, ...), bạn có tham khảo cách xử lý <a class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-ftuvwr" href="http://bocongan.gov.vn/TTHC/Pages/huong-dan.aspx?itemID=299">tại đây</a></p>'
        },
        {
            question: 'Nộp phạt trực tuyến trên cổng dịch vụ công đôi với vi phạm giao thông đường bộ như thế nào?',
            answer: '<p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Bạn có thể tham khảo <a class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-ftuvwr" href="https://www.csgt.vn/tintuc/13001/Trinh-tu-nop-phat-vi-pham-TTATGT-qua-Cong-dich-vu-cong-Quoc-gia.html">tại đây</a></p>'
        },
        {
            question: 'Tôi nhận được cuộc gọi thông báo lỗi vi phạm',
            answer: '<p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Mọi hành vi gọi điện thông báo phạt nguội qua số điện thoại đều là <b>lừa đảo</b>, tài xế cần tuyệt đối cẩn thận.</p>'
        },
        {
            question: 'Bị dính phạt nguội, có thể đăng kiểm xe không?',
            answer: '<p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Nếu xe bạn tới ngày đăng kiểm xe, nhưng bạn quên không kiểm tra và nộp phạt trước khi đăng kiểm, thì bạn hoàn toàn có thể đi đăng kiểm tạm. Đăng kiểm tạm nghĩa cục đăng kiểm sẽ cho bạn đăng kiểm xe và đóng phạt nguội sau. Tuy nhiên, bạn cần nộp phạt và trở lại đăng kiểm lại trong vòng 15 ngày kể từ ngày đăng kiểm tạm. Bạn có thể xem thêm thông tin <a class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-ftuvwr" href="https://vnexpress.net/oto-chua-dong-phat-nguoi-duoc-phep-dang-kiem-tam-4360662.html">tại đây</a></p>'
        },
        {
            question: 'Tôi cho thuê xe, nhưng sau đó xe bị dính lỗi phạt nguội thì giải quyết như thế nào?',
            answer: '<p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Có thể thấy rằng, phần lớn những lỗi giao thông thì đối tượng hướng tới để xử phạt là người điều khiển phương tiện. Trong trường hợp cho thuê, chủ xe cho thuê nếu bị phạt nguội sẽ là người được liên hệ xử lý vì đó là thông tin duy nhất mà cơ quan chức năng có để ra quyết định xử phạt.<br>Như vậy đây là mối quan hệ giữa 3 bên gồm cơ quan Nhà nước, chủ xe và người thuê. Giữa chủ xe và người thuê tài sản với giá trị lớn như ô tô chắc chắn sẽ có hợp đồng và trong đó sẽ có các điều khoản về trách nhiệm khi xảy ra va chạm, hỏng hóc, thậm chí là xử phạt vi phạm hành chính...", ông luật sư Thái phân tích.<br>Theo luật sư Thái, sẽ có 2 phương án để xử lý trong trường hợp cho thuê xe tự lái dính phạt nguội. 1 là liên hệ người thuê yêu cầu hoàn trả tiền nộp phạt, nếu bên thuê không trả thì khởi kiện dân sự. 2 là người cho thuê phòng trước đó bằng hợp đồng và cọc tiền, sau khi nhận bàn giao xe thì quy định từ sau 10 - 20 ngày để nhận lại cọc. Trong thời gian đó chủ xe kiểm tra phạt nguội đồng thời chủ động khấu trừ tiền cọc nếu phát sinh nghĩa vụ hành chính trong khoảng thời gian thuê này.<br>Như vậy, việc cho thuê xe là việc dân sự giữa chủ xe và người điều khiển xe, nên bạn là chủ xe cần tìm phương án phù hợp. Bạn có thể tham khảo thêm bài viết <a class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-ftuvwr" href="https://giaothonghanoi.kinhtedothi.vn/phap-luat-giao-thong/cho-thue-xe-tu-lai-neu-bi-phat-nguoi-ai-phai-chiu-trach-nhiem-61512.html">tại đây</a></p>'
        },
        {
            question: 'Tôi chưa từng đi qua đoạn đường đó, nhưng tra lại có kết quả phạt nguội',
            answer: '<p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Hiện nay tình trạng biển số giả xảy ra thường xuyên, vì vậy đây có thể là nguyên nhân chính. Ngoài ra, cũng có thể sai sót từ CSGT, nếu rơi vào T/H này bạn có thể liên hệ với CSGT nhờ kiểm tra hình ảnh và video để xác minh đối chiếu.</p>'
        }
    ]

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-6 py-24 md:p-24 bg-white">
            <div className="flex flex-col max-w-screen-sm w-full space-y-3">
                <div className={'text-xl md:text-2xl font-semibold mb-4'}>Danh sách câu hỏi thường gặp liên quan tới tra cứu phạt nguội</div>
                {questions.map((e, idx) => (
                    <div tabIndex={idx} key={idx} className="collapse collapse-arrow border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            {e.question}
                        </div>
                        <div className="collapse-content">
                            <div dangerouslySetInnerHTML={{__html: e.answer}}/>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
