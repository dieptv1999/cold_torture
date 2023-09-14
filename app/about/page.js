import Filter from "@/components/Filter";
import Link from "next/link";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-6 py-24 md:p-24 bg-white">
            <div className="flex flex-col max-w-screen-sm w-full space-y-3">
                <div className={'text-xl md:text-2xl font-bold'}>Giới thiệu chung</div>
                <div>
                    Để cho việc kiểm tra các lỗi vi phạm, phạt nguội được dễ dàng nhanh chóng, ứng dụng <b>Tra Cứu Phạt
                    Nguội toàn quốc</b> được phát hành nhằm hỗ trợ cho tài xế có thể dễ dàng kiểm tra, tìm kiếm các lỗi
                    vi phạm khi tham gia giao thông trên các tuyến đường Quốc Lộ, Cao Tốc, hoặc nội thành.
                </div>

                <div>
                    Xử phạt hành chính khi vi phạm giao thông hay còn gọi là <b>phạt nguội</b> đã được cục CSGT Việt Nam
                    áp dụng trên hầu hết các tuyến đường Bắc - Nam, các tuyến cao tốc hoặc thậm chí trên các tuyến đường
                    nội thành tại Việt Nam nhằm "giám sát" và xử phạt cho tất cả hành vi vi phạm giao thông đường bộ
                    như: chạy quá tốc độ quy định, lấn làn, vượt đèn đỏ, ...
                </div>

                <div>
                    Những điều cần biết về <b>Phạt nguội</b> vi phạm giao thông
                </div>

                <div>
                    <b>Phạt nguội</b> là hành vi vi phạm được phát hiện thông qua phương tiện, thiết bị kỹ thuật nghiệp
                    vụ của lực lượng chức năng hoặc được ghi thu bằng thiết bị kỹ thuật của tổ chức, cá nhân và thông
                    tin, hình ảnh đăng tải trên các phương tiện thông tin đại chúng, mạng xã hội mà lực lượng chức năng
                    không dừng xe xử lý được ngay.
                    Như vậy, có thể tạm hiểu “Phạt nguội” trong lĩnh vực giao thông đường bộ là việc xử phạt vi phạm
                    giao thông sau khi người vi phạm đã thực hiện hành vi vi phạm được một thời gian trước đó.
                </div>

                <div>
                    <img src={'/hethong-camera-phatnguoi.jpeg'} alt={'hethong-camera-phatnguoi'}/>
                </div>
                <div className={'text-xl font-bold'}>
                    Quy trình phạt nguội
                </div>

                <div>
                    <div>Về quy trình phạt nguội, có thể hình dung theo các bước dưới đây (thông tin tham khảo)</div>
                    <ul>
                        <li>Bước 1: Thu thập hình ảnh vi phạm (từ phương tiện, thiết bị kỹ thuật nghiệp vụ hoặc từ tổ
                            chức, cá nhân cung cấp...)
                        </li>
                        <li>Bước 2: Trích xuất hình ảnh.</li>
                        <li>Bước 3: Lập hồ sơ vi phạm, in thông báo.</li>
                        <li>Bước 4: Phát hành thông báo cho chủ phương tiện.</li>
                        <li>Bước 5: Phối hợp với chủ phương tiện giải quyết vụ việc vi phạm.</li>
                        <li>Bước 6: Cập nhật kết quả xử lý và kết thúc hồ sơ.</li>
                    </ul>
                    <div>Tại bước 5 người vi phạm/chủ phương tiện cầu lưu ý những điều sau khi đến trụ sở CSGT phối hợp
                        giải quyết vụ việc:
                    </div>
                    <ul>
                        <li>Một là, người vi phạm/chủ phương tiện cần mang theo các loại giấy tờ gồm: Thông báo vi
                            phạm; giấy tờ liên quan đến phương tiện và người điều khiển phương tiện vi phạm.
                        </li>
                        <li>Hai là, nộp các giấy tờ liên quan cho cán bộ tiếp dân và đợi gọi tên theo thứ tự.</li>
                        <li>Ba là, cán bộ tiếp dân cho người vi phạm xem lại hình ảnh phương tiện vi phạm, người vi
                            phạm xác nhận đúng lỗi. Cán bộ CSGT lập biên bản vi phạm và ra quyết định xử phạt.
                        </li>
                        <li>Bốn là, người vi phạm nhận quyết định xử phạt và đến địa điểm nộp phạt tại Kho bạc nhà
                            nước hoặc ngân hàng thương mại nơi Kho bạc nhà nước ủy nhiệm thu tiền phạt được ghi trong
                            quyết định xử phạt (hoặc nộp qua bưu điện thu hộ).
                        </li>
                        <li>Năm là, sau khi nộp phạt, người vi phạm nộp Biên lai cho cán bộ tiếp dân và nhận lại giấy
                            tờ bị tạm giữ.
                        </li>
                    </ul>
                </div>

                <div>
                    Xử lý như thế nào đối với trường hợp không chấp hành Thông báo của cơ quan chức năng về vụ việc vi phạm Luật Giao thông đường bộ?
                    Theo quy định tại Khoản 12 Điều 80 Nghị định 100/NĐ-CP ngày 29/12/2020 của Thủ tướng Chính phủ, nếu chủ phương tiện không đến phối hợp giải quyết vụ việc vi phạm theo thông báo của Phòng CSGT ĐB-ĐS, thì Phòng CSGT ĐB-ĐS sẽ gửi thông báo cho cơ quan đăng kiểm để đưa vào cảnh báo phương tiện liên quan đến vi phạm hành chính trên Chương trình Quản lý kiểm định.
                </div>

                <div>
                    Khi phương tiện đến kiểm định, cơ quan đăng kiểm thông báo cho người đưa phương tiện đến kiểm định biết về việc vi phạm, thực hiện kiểm định theo quy định đối với phương tiện, cấp Giấy chứng nhận kiểm định và tem kiểm định an toàn kỹ thuật và bảo vệ môi trường có thời hạn hiệu lực là 15 ngày.
                </div>

                <div>
                    Sau khi người vi phạm đã đến trụ sở của người có thẩm quyền xử phạt để giải quyết vụ việc vi phạm theo quy định, người có thẩm quyền xử phạt phải gửi thông báo ngay cho cơ quan đăng kiểm biết để xóa cảnh báo phương tiện liên quan đến vi phạm hành chính trên Chương trình Quản lý kiểm định, thực hiện kiểm định, cấp Giấy chứng nhận kiểm định và tem kiểm định an toàn kỹ thuật và bảo vệ môi trường theo quy định hiện hành đối với phương tiện.
                </div>

                <div className={'text-xl font-bold'}>
                    Một số khuyến cáo của lực lượng CSGT
                </div>
                <div className={'font-semibold'}>
                    Người dân cần chấp hành nghiêm Luật Giao thông đường bộ; chấp hành Thông báo của cơ quan chức năng khi có vi phạm.
                </div>
                <div>
                    Tất cả trường hợp bị xử lý “phạt nguội” liên quan đến giao thông đều có thông báo vi phạm của cơ quan chức năng đến chủ phương tiện hoặc người điều khiển.
                    Khi nhận được thông báo vi phạm của cơ quan chức năng, đến ngày hẹn, chủ phương tiện hoặc đại diện chủ phương tiện hoặc người có hành vi vi phạm và phương tiện vi phạm đến trụ sở cơ quan chức năng để giải quyết. Nếu sau 15 ngày mà người vi phạm vẫn chưa đến cơ quan chức năng để phối hợp giải quyết vụ việc vi phạm hành chính, thì Phòng CSGT sẽ phối hợp với Công an phường, xã, thị trấn để gửi lại Thông báo vi phạm tới chủ phương tiện.
                </div>
                <div className={'font-semibold'}>
                    Không để kẻ xấu lợi dụng “phạt nguội” để chiếm đoạt tài sản.
                </div>
                <div>
                    Thời gian gần đây, có một số đối tượng lừa đảo sử dụng điện thoại để thông báo vi phạm qua hình ảnh và yêu cầu nạn nhân làm theo hướng dẫn của chúng để chiếm đoạt tài sản.
                </div>
                <div>
                    Phương thức thủ đoạn của các đối tượng này là sử dụng phần mềm công nghệ cao (voice over IP – cách gọi sử dụng ứng dụng truyền tải giọng nói qua mạng máy tính, giả số điện thoại hiện trên màn hình), giả số điện thoại công khai của cơ quan Công an (Cảnh sát giao thông), cơ quan bưu điện… để gọi điện đến thuê bao di động, điện thoại bàn của người dân để thông báo về việc có liên quan đến một biên lai xử phạt nguội về giao thông nhằm làm cho người dân hoang mang, lo sợ để khai thác thông tin cá nhân.
                </div>
                <div>
                    Sau đó, các đối tượng yêu cầu nạn nhân kê khai tài sản, số tiền mặt hiện có và số tiền gửi trong các tài khoản ngân hàng để chuyển vào tài khoản định sẵn của đối tượng lừa đảo hoặc cung cấp mã OTP để chuyển tiền vào tài khoản của chúng với vỏ bọc xác minh, điều tra, xử lý phạt nguội; đồng thời, yêu cầu nạn nhân bí mật với gia đình, kể cả nhân viên ngân hàng về mục đích chuyển tiền để chiếm đoạt.
                </div>
                <div>
                    Phòng CSGT ĐB-ĐS khuyến cáo người dân khi nhận được các cuộc gọi này, cần nhanh chóng đến báo tin cho cơ quan Công an địa phương nơi gần nhất, để lực lượng chức năng làm cơ sở điều tra, xác minh, đấu tranh với các loại tội phạm này. Bên cạnh đó, người dân tuyệt đối không cung cấp, chia sẻ thông tin cá nhân, lai lịch, chứng minh nhân dân, số điện thoại, thông tin tài khoản ngân hàng, thẻ tín dụng (tên người dùng, mật khẩu đăng nhập, mã xác thực giao dịch OTP, địa chỉ email…) cho bất kỳ ai với bất kỳ hình thức nào.
                </div>
            </div>
        </main>
    )
}
