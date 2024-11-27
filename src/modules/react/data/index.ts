import { IDataStatic } from "@/types/data";

export const dataReactIntroduce: IDataStatic[] = [
    {
        key: "heading1",
        data: [
            "React được phát hành lần đầu vào năm 2013 và đã trở thành một trong những công cụ phổ biến nhất để phát triển front-end. Mục tiêu chính của React là giúp dễ dàng quản lý và cập nhật giao diện người dùng dựa trên trạng thái của ứng dụng.",
        ],
    },
    {
        key: "heading2",
        data: [
            "Component: Thành phần là khối xây dựng cơ bản của React. Mỗi component đại diện cho một phần của giao diện người dùng và có thể được tái sử dụng.",
            "JSX: JSX là một cú pháp mở rộng của JavaScript, cho phép bạn viết mã giống như HTML trong JavaScript. JSX giúp dễ dàng tạo ra các component và quản lý giao diện.",
            "State: State là một đối tượng lưu trữ dữ liệu động của component. Khi state thay đổi, React sẽ tự động cập nhật giao diện để phản ánh sự thay đổi đó.",
            "Props: Props (viết tắt của properties) là các tham số được truyền vào component từ component cha. Props giúp truyền dữ liệu và sự kiện giữa các component.",
        ],
    },
    {
        key: "heading3",
        data: [
            "Hiệu suất cao: React sử dụng Virtual DOM để tối ưu hóa việc cập nhật giao diện, giúp ứng dụng chạy mượt mà hơn.",
            "Tái sử dụng component: Các component có thể được tái sử dụng trong nhiều phần của ứng dụng, giúp giảm thiểu mã lặp lại và dễ dàng bảo trì.",
            "Cộng đồng lớn: React có một cộng đồng phát triển mạnh mẽ và nhiều tài liệu, thư viện hỗ trợ.",
        ],
    },
    {
        key: "heading4",
        data: [
            "Hooks: Hooks là một tính năng mới trong React cho phép bạn sử dụng state và các tính năng khác của React mà không cần viết class components.",
            "Context API: Context API cho phép bạn truyền dữ liệu qua nhiều component mà không cần phải truyền props qua từng cấp.",
            "React Router: Thư viện này giúp quản lý điều hướng trong ứng dụng React, cho phép bạn tạo các tuyến đường và điều hướng giữa các trang.",
        ],
    },
];

export const dataReactRemix: IDataStatic[] = [
    {
        key: "heading1",
        data: [
            "React Remix (thường gọi là Remix) là một framework dựa trên React nhằm mục đích xây dựng các ứng dụng web hiện đại với hiệu suất cao và trải nghiệm người dùng tốt. Remix được thiết kế để giúp các nhà phát triển tận dụng tối đa khả năng của React, đồng thời cung cấp các công cụ và chức năng tiên tiến để quản lý routing, dữ liệu, và hiệu năng.",
            "Các tính năng chính của Remix",
            "1. Routing:",
            "- Remix sử dụng một hệ thống routing mạnh mẽ và linh hoạt, cho phép bạn định nghĩa các route một cách dễ dàng.",
            "- Các route có thể được chia nhỏ thành các file riêng biệt, giúp dễ quản lý và bảo trì.",
            "2. Data Loading:",
            "- Remix cung cấp các công cụ để tải dữ liệu một cách hiệu quả từ phía server.",
            "- Các loader được sử dụng để lấy dữ liệu trước khi render, đảm bảo trang web luôn hiển thị dữ liệu mới nhất.",
            "3. Actions:",
            "- Remix hỗ trợ việc xử lý các hành động như form submission thông qua các action.",
            "- Các action cho phép xử lý dữ liệu từ phía server và thực hiện các thao tác CRUD một cách hiệu quả.",
            "4. Rendering:",
            "- Remix hỗ trợ cả Server-Side Rendering (SSR) và Static-Site Generation (SSG), cho phép bạn tối ưu hóa hiệu suất và SEO.",
            "- Bạn có thể lựa chọn phương thức render phù hợp với nhu cầu của dự án.",
            "5. Error Handling:",
            "- Remix cung cấp cơ chế xử lý lỗi mạnh mẽ, giúp bạn quản lý và hiển thị các thông báo lỗi một cách dễ dàng.",
            "6. Nested Routes:",
            "- Remix hỗ trợ các route lồng nhau, cho phép bạn tạo các cấu trúc route phức tạp và tái sử dụng các thành phần một cách linh hoạt.",
            "Lợi ích của việc sử dụng Remix",
            "- Hiệu năng cao: Remix tối ưu hóa quá trình tải dữ liệu và render, giúp ứng dụng của bạn nhanh hơn và phản hồi tốt hơn.",
            "- Trải nghiệm người dùng tốt: Bằng cách tải dữ liệu trước khi render, Remix giúp giảm thời gian chờ đợi và mang lại trải nghiệm người dùng mượt mà hơn.",
            "- SEO Tốt hơn: Với SSR và SSG, Remix giúp cải thiện khả năng SEO của trang web, đảm bảo rằng các công cụ tìm kiếm có thể lập chỉ mục nội dung của bạn một cách hiệu quả.",
            "- Phát triển nhanh chóng: Remix cung cấp nhiều công cụ và thư viện hỗ trợ, giúp các nhà phát triển xây dựng và triển khai ứng dụng nhanh chóng và dễ dàng.",
        ],
    },
];
