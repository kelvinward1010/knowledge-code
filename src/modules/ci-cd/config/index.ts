import { IDataStatic } from "@/types/data";

export const dataintroduceCICD: IDataStatic[] = [
    {
        key: "heading1",
        data: [
            "CI/CD tượng trưng cho sự tích hợp liên tục và phân phối / triển khai liên tục, nhằm mục đích hợp lý hóa và tăng tốc quá trình phát triển phần mềm của nhà phát triển. ",
            "Trong đó, tích hợp liên tục (CI - Continuous Integration) đề cập đến việc tích hợp các thay đổi chương trình một cách tự động và thường xuyên vào kho lưu trữ mã nguồn được chia sẻ.",
            "Phân phối /triển khai liên tục (CD - Continuous Delivery and/or Deployment) là một quy trình gồm 2 phần, liên quan đến việc tích hợp, thử nghiệm và phân phối các thay đổi chương trình ứng dụng. Nhiệm vụ phân phối liên tục sẽ dừng việc triển khai sản xuất tự động, trong khi việc triển khai liên tục sẽ tự động phát hành các bản cập nhật vào môi trường phát triển.",
            'Khi cả 2 giải pháp trên kết hợp lại với nhau sẽ tạo thành "đường dẫn CI/CD" (CI/CD pipeline). Chúng được hỗ trợ bởi các nhóm phát triển và vận hành, họ làm việc cùng nhau một cách linh hoạt thông qua phương pháp DevOps hoặc kỹ thuật độ tin cậy của trang web (SRE - Site Reliability Engineering).',
        ],
    },
    {
        key: "heading2",
        data: [
            "Quá trình hoạt động của CI/CD có sự phối hợp của Git repository và công cụ CI/CD.",
            "Cụ thể, khi nhà phát triển thay đổi điều gì trên Git repository, chẳng hạn như tạp pool request, thì Git repository sẽ gửi thông báo đến công cụ CI/CD là cần thay đổi. Bên phía CI/CD sẽ tự động thực thi các thao tác như đã cấu hình trước đó theo pull request.",
            "Sau khi cập nhật tất cả các lệnh trên, CI/CD sẽ cập nhật kết quả đã thực thi ngược về lại cho Git repository. Khi đó, Git repository sẽ biết pull request vừa tạo có vượt qua được hết các quy trình testing phía bên CI/CD hay không.",
            "Khi đó, khi review lại code, người review chỉ cần nhìn vào trạng thái cuối cùng của pull request (là passed - vượt qua hay failed - thất bại) để biết yêu cầu có được đáp ứng chưa, có thực thi chưa và đã tối ưu hay chưa.",
            "Tuy nhiên, quy trình CI/CD chỉ bao gồm một phần logic rất nhỏ. Các nhà phát triển vẫn phải review lại code một cách thủ công, nhằm đảm bảo chúng phù hợp với nhu cầu của có team. Vì trên thực tế, có nhiều lỗi mà quá trình tự động của CI/CD không thể phát hiện hết được.",
        ],
    },
    {
        key: "heading3",
        data: [
            "CI/CD mang lại nhiều lợi ích cho các nhà phát triển, bao gồm:",
            "- Giảm thiểu các lỗi không đáng có: Các lỗi liên quan đến môi trường phát triển sản phẩm hoặc là lỗi compile khi nạp code lên sẽ được CI/CD tự động phát hiện và thông báo cho Developers.",
            "- Đảm bảo tính logic, thông qua phần Automatic test của quy trình CI/CD. Ngoài ra, khi nhà phát triển xây dựng các tính năng mới trên sản phẩm, sẽ không ảnh hưởng đến các tính năng cũ đã tạo.",
            "- Giúp Developers tập trung vào công việc của mình, bởi CI/CD có khả năng tự động cao. Lúc đó, Developers không cần phải tự build và deploy phần mềm, ứng dụng đang phát triển trên máy tính cá nhân nữa.",
            "- Giúp nâng cao chất lượng chương trình, từ việc nhà phát triển có thể cấu hình các ràng buộc ngay từ đầu. Ví dụ: Không được tạo ra quá nhiều pull request, không được tạo qua các thay đổi vượt qua X lần,... điều này giúp nâng cao chất lượng pull request trong ứng dụng.",
            "- Phát triển kỹ năng kiểm tra từng phần (unit test) cho nhà phát triển, dựa trên các chỉ số ràng buộc về % code đã được cover (còn gọi là code coverage) đã được cấu hình sẵn trong quy trình CI/CD. Cụ thể, khi phát triển các tính năng mới, để không làm giảm chỉ số ràng buộc về % code đã cover, các nhà phát triển cần phải chú ý đến tầm quan trọng của unit test và tự động học hỏi, nâng cao các kỹ năng cần thiết trong phần này.",
            "- Đẩy nhanh tốc độ phát triển sản phẩm, thông qua việc theo dõi thời gian xây dựng pipeline.",
            "Tuy nhiên, CI/CD cũng có một số hạn chế mà doanh nghiệp cần lưu ý. Khi trong dự án có quá nhiều nhân viên phát triển cùng làm sản phẩm, sẽ tạo ra nhiều pull request cần được merge cùng lúc. Khi đó, các nhân viên phải chờ nhau, làm gián đoạn thời gian hoàn thành sản phẩm.",
            "Ngoài ra, do CI/CD là dịch vụ của bên thứ ba, nên nếu dịch vụ này bị vấn đề và crash, hoặc nghiêm trọng hơn là khai tử thì các sản phẩm đang tích hợp CI/CD sẽ gặp ảnh hưởng khá lớn.",
        ],
    },
    {
        key: "heading4",
        data: [
            "Các doanh nghiệp, tổ chức hiện nay nên áp dụng quy trình CI/CD càng sớm càng tốt. Nhờ có CI/CD, quy trình làm việc sẽ hiệu quả hơn, từ đó giúp công việc của các nhà phát triển được năng suất hơn. Cho dù là làm việc theo dự án cá nhân thì việc tích hợp CI/CD cũng mang lại nhiều lợi ích cho Developers.",
            "Tuy nhiên, có một số trường hợp bạn không nên áp dụng CI/CD vào hoạt động của mình, chẳng hạn như khi tổ chức chưa có nhân sự đủ kỹ năng để vận hành CI/CD, các nhà phát triển chưa hiểu rõ về công cụ này hoặc không biết cách làm sao để tận dụng tốt nhất các tính năng của CI/CD,... Vì trong các trường hợp này, nếu có sự cố xảy ra và người sử dụng chưa đủ kiến thức chuyên môn để giải quyết thì sẽ gây ra nhiều sự gián đoạn, và có thể ảnh hưởng kết quả của doanh nghiệp.",
            "Qua bài viết trên, chúng tôi đã giải đáp chi tiết về CI/CD là gì, cách thức hoạt động và các trường hợp nên dùng hoặc không nên dùng quy trình CI/CD. Chúc doanh nghiệp có được những kiến thức hữu ích để đưa ra lựa chọn phù hợp nhất cho doanh nghiệp.",
        ],
    },
];
