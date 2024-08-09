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
    {
        key: "heading4",
        data: [
            'React xử lý các bản cập nhật (update) và kết xuất (rendering) thông qua DOM ảo và kiến trúc dựa trên thành phần. Khi state hoặc props của Component thay đổi, React tạo phiên bản mới của DOM ảo phản ánh state hoặc props đã cập nhật, sau đó so sánh với phiên bản trước đó để xác định những gì đã thay đổi. React cập nhật DOM thực tế với số lượng thao tác tối thiểu cần thiết để đưa nó phù hợp với phiên bản mới của DOM ảo, một quy trình được gọi là "điều hòa" (reconciliation). React cũng sử dụng kiến trúc dựa trên Component, trong đó mỗi Component có trạng thái và phương thức kết xuất riêng. Nó chỉ kết xuất lại các thành phần thực sự đã thay đổi. Nó thực hiện việc này một cách hiệu quả và nhanh chóng, đó là lý do tại sao React được biết đến với hiệu suất của nó.',
        ],
    },
    {
        key: "heading5",
        data: [
            'Thành phần (Component) React là một hàm (function) hoặc lớp (class) JavaScript trả về một phần tử React, mô tả giao diện người dùng cho một phần của ứng dụng. Các thành phần có thể chấp nhận các đầu vào được gọi là "props" và quản lý trạng thái (state) của riêng chúng.',
        ],
    },
    {
        key: "heading6",
        data: [
            "State và props đều được dùng để lưu trữ dữ liệu trong thành phần (Component) React, nhưng chúng phục vụ các mục đích khác nhau và có các đặc điểm khác nhau.",
            'Props (viết tắt của "properties") là một cách để truyền dữ liệu từ thành phần cha sang thành phần con. Chúng chỉ đọc và không thể được thành phần con sửa đổi.',
            "Ngược lại, trạng thái (state) là một đối tượng lưu trữ dữ liệu của một thành phần có thể thay đổi theo thời gian. Nó có thể được cập nhật bằng phương thức setState() và được sử dụng để kiểm soát hành vi và kết xuất của một thành phần.",
        ],
    },
    {
        key: "heading7",
        data: [
            "Redux là 1 công cụ giúp quản lý các biến global state trong ứng dụng React hay các thư viện JavaScript nào khác. Khi ứng dụng của chúng ta trở nên lớn hơn với hàng trăm hay hàng nghìn components thì việc chia sẻ dữ liệu giữa các Components với nhau cũng trở nên phức tạp hơn. Redux tạo ra 1 store lưu trữ dữ liệu của ứng dụng vào một nơi duy nhất, sau đó bằng cách connect đến store thì Component của chúng ta có thể lấy ra để sử dụng hoặc cập nhật để thay đổi giá trị biến.",
            "3 thành phần cơ bản trong Redux gồm:",
            "Store: Nơi giữ các biến trạng thái của ứng dụng, với mô hình Redux thì sẽ chỉ tồn tại một store duy nhất",
            "Actions: các sự kiện được gửi đến để cập nhật dữ liệu các biến trong store của Redux",
            "Reducers: là các function để lấy ra giá trị (trạng thái) của các biến trong store.",
        ],
    },
    {
        key: "heading8",
        data: [
            "Higher Order Component (HOC) trong React là một hàm lấy một component và trả về một component mới với các props bổ sung. HOC được sử dụng để tái sử dụng logic trên nhiều component, chẳng hạn như thêm một hành vi (behavior) hoặc kiểu dáng (style) chung.",
            "HOC được sử dụng bằng cách bao bọc một thành phần trong HOC, thành phần này trả về một thành phần mới với các props được thêm vào. Thành phần gốc được truyền như một đối số cho HOC và nhận các props bổ sung thông qua việc giải cấu trúc. HOC là các hàm thuần túy, nghĩa là chúng không sửa đổi thành phần gốc mà trả về một thành phần mới, được cải tiến.",
            "HOC là một mô hình mạnh mẽ trong React, cho phép tái sử dụng và trừu tượng hóa mã, đồng thời giữ cho các thành phần có tính mô-đun và dễ bảo trì.",
        ],
    },
];

export const dataInterviewNodejs: IDataStatic[] = [
    {
        key: "heading1",
        data: [
            "NodeJS là một mã nguồn được xây dựng trên Javascript Engine (V8 Engine). NodeJS cũng được biết đến như một nền tảng (Platform) được phát triển năm 2009 bởi Ryan Dahl. NodeJS dựa trên Chrome Javascript runtime phát triển các ứng dụng web, tận dụng kiến trúc hướng sự kiện (event-driven), mô hình non-blocking I/O để tạo ra các ứng dụng nhẹ và hiệu quả. Những ứng dụng Node.js được viết bằng Javascript, chúng có thể chạy trong môi trường NodeJS trên hệ điều hành Window, Linux,...",
        ],
    },
];
