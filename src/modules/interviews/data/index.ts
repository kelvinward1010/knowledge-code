import { IDataStatic } from "@/types/data";

export const dataReact: IDataStatic[] = [
    {
        key: "heading1",
        data: [
            "React là một thư viện JavaScript để xây dựng giao diện người dùng. Nó được sử dụng để xây dựng các ứng dụng web vì nó cho phép các nhà phát triển tạo các thành phần UI có thể tái sử dụng và quản lý trạng thái của ứng dụng theo cách hiệu quả và có tổ chức.",
        ],
    },
    {
        key: "heading2",
        data: [
            "Sử dụng DOM ảo (VirtualDOM) để quản lý sự thay đổi và cập nhật trạng thái của các đối tượng trên DOM thật. VirtualDOM sẽ xác nhận những thành phần cần phải cập nhật và thực hiện việc render lại thành phần đó trên DOM thật thay vì cập nhật lại tất cả cùng một lúc, từ đó giúp hiệu năng của các ứng dụng React trở nên tốt hơn.",
            "Component-Based: với React thì tất cả đều được tạo nên từ components (thành phần). Một trang web phức tạp như Facebook cũng được tạo nên từ hàng nghìn components độc lập, dễ dàng tái sử dụng hay chỉnh sửa mà không ảnh hưởng đến các thành phần khác.",
            "Liên kết dữ liệu một chiều: khi thiết kế ứng dụng React, các component con sẽ được lồng trong component cha, dữ liệu sẽ được truyền từ cha xuống con theo một chiều nhanh chóng và thống nhất",
        ],
    },
    {
        key: "heading3",
        data: [
            "Virtual DOM (Document Object Model) là một biểu diễn của DOM thực tế trong trình duyệt. Nó cho phép React chỉ cập nhật các phần cụ thể của trang web cần thay đổi, thay vì viết lại toàn bộ trang, dẫn đến tăng hiệu suất.",
            "Khi state hoặc props của một Component thay đổi, React sẽ tạo phiên bản mới của Virtual DOM phản ánh state hoặc props đã cập nhật. Sau đó, nó so sánh phiên bản mới này với phiên bản trước (DOM thật) để xác định những gì đã thay đổi.",
            'Sau khi các thay đổi đã được xác định, React sẽ cập nhật DOM thực tế với số lượng thao tác tối thiểu cần thiết để đưa nó phù hợp với phiên bản mới của Virtual DOM. Quá trình này được gọi là "đối chiếu"',
            "Việc sử dụng Virtual DOM cho phép cập nhật hiệu quả hơn vì nó làm giảm lượng thao tác trực tiếp trên DOM thực tế, vốn có thể là một quá trình chậm và tốn nhiều tài nguyên. Bằng cách chỉ cập nhật các phần thực sự đã thay đổi, React có thể cải thiện hiệu suất của ứng dụng, đặc biệt là trên các thiết bị chậm hoặc khi xử lý lượng dữ liệu lớn.",
        ],
    },
];
