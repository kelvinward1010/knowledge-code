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
    {
        key: "heading9",
        data: [
            "Hooks là những function cho phép bạn sử dụng các biến state và các hàm liên quan đến lifecycle ở trong các functional Components. Hooks giúp giảm lượng code thừa khi phải triển khai lại các logic có thể dùng chung ở nhiều components khác nhau mà cần liên quan đến local state. React cung cấp sẵn cho chúng ta một số các hook hữu ích: useState, useEffect, useContext, useMemo...",
            "Chúng giúp dễ dàng tái sử dụng trạng thái và logic trên nhiều thành phần, giúp mã ngắn gọn hơn và dễ đọc hơn. Chúng giúp dễ dàng viết mã có thể tái sử dụng và bảo trì.",
        ],
    },
    {
        key: "heading10",
        data: [
            "Inline Styling: Khai báo trực tiếp CSS vào thuộc tính style tại các Element",
            "CSS module: tạo file .css riêng và import vào component",
            "Sử dụng thư viện styled-components tạo ra một component mới kèm css",
        ],
    },
    {
        key: "heading11",
        data: [
            "Hook useEffect trong React cho phép các nhà phát triển thực hiện các hiệu ứng phụ như lấy dữ liệu, đăng ký và thiết lập/dọn dẹp bộ đếm thời gian trong các thành phần chức năng. Nó chạy sau mỗi lần kết xuất, bao gồm lần kết xuất đầu tiên và sau khi kết xuất được cam kết với màn hình. Hook useEffect lấy hai đối số - một hàm để chạy sau mỗi lần kết xuất và một mảng các phụ thuộc xác định thời điểm hiệu ứng nên được chạy. Nếu mảng phụ thuộc trống hoặc không có, hiệu ứng sẽ chạy sau mỗi lần kết xuất.",
        ],
    },
    {
        key: "heading12",
        data: [
            "React xử lý định tuyến bằng cách sử dụng thư viện React Router, cung cấp khả năng định tuyến cho các ứng dụng React. Một số thư viện định tuyến phổ biến cho React bao gồm React Router, Reach Router và Next.js.",
        ],
    },
    {
        key: "heading13",
        data: [
            "Tránh race condition: Khi bạn gọi nhiều hàm bất đồng bộ cùng một lúc (ví dụ: khi props thay đổi), hãy đảm bảo rằng bạn xử lý chúng một cách đồng bộ. Sử dụng async/await để đảm bảo rằng hàm tiếp theo chỉ được gọi sau khi hàm trước đã hoàn thành.",
            "Xử lý unmounting: Khi component bị unmount (ví dụ: khi người dùng chuyển qua trang khác), hãy hủy bỏ các tác vụ bất đồng bộ đang chạy (ví dụ: hủy bỏ request API). Bạn có thể sử dụng biến flag để kiểm tra xem component có còn tồn tại hay không, trước khi cập nhật state hoặc thực hiện các tác vụ khác.",
            "Custom hooks: Một cách tiếp cận khác là tạo custom hooks để xử lý các tác vụ bất đồng bộ phức tạp. Custom hooks giúp bạn tái sử dụng logic xử lý bất đồng bộ một cách hiệu quả.",
        ],
    },
    {
        key: "heading14",
        data: [
            "React xử lý việc thử nghiệm bằng các framework thử nghiệm như Jest, Mocha và Enzyme. Jest là một framework thử nghiệm phổ biến cho các ứng dụng React, trong khi Mocha và Enzyme cũng được sử dụng rộng rãi.",
        ],
    },
    {
        key: "heading15",
        data: [
            "Lifecycle (vòng đời) của một component trong React có 3 giai đoạn:",
            "- Mounting: giai đoạn khởi tạo – khi component đã sẵn sàng để gắn kết trong DOM của trình duyệt để hiển thị lên cho người dùng.",
            "- Updating: giai đoạn component được cập nhật – để cập nhật component thì chúng ta có thể truyền props mới đến component hoặc set lại local state bên trong component đó. Sau khi component render lại thì cây DOM vị trí chứa component cũng sẽ được hiển thị với các giá trị mới để người dùng nhìn thấy.",
            "- Unmounting: giai đoạn component bị ngắt kết nối, bỏ ra khỏi cây DOM của trình duyệt. Đây cũng là giai đoạn cuối trong vòng đời của component. Từ lúc này component sẽ không thể được truy cập hay tác động nữa trừ khi nó được mouting và bắt đầu mộ lifecycle mới.",
        ],
    },
    {
        key: "heading16",
        data: [
            "Kết xuất phía máy chủ (SSR) và kết xuất phía máy khách (CSR) là hai cách khác nhau để kết xuất ứng dụng React.",
            "Trong SSR, HTML ban đầu được tạo trên máy chủ, sau đó được gửi đến máy khách, nơi nó được hydrat hóa thành một ứng dụng React đầy đủ. Điều này dẫn đến thời gian tải ban đầu nhanh hơn, vì HTML đã có trên trang và có thể được lập chỉ mục bởi các công cụ tìm kiếm.",
            "Trong CSR, HTML ban đầu là một tài liệu tối thiểu, trống rỗng và ứng dụng React được xây dựng và hiển thị hoàn toàn trên máy khách. Máy khách thực hiện các lệnh gọi API để lấy dữ liệu cần thiết để hiển thị UI. Điều này dẫn đến thời gian tải ban đầu chậm hơn, nhưng trải nghiệm phản hồi và năng động hơn, vì tất cả quá trình hiển thị đều được thực hiện trên máy khách.",
        ],
    },
    {
        key: "heading17",
        data: [
            "Sử dụng SSR khi bạn cần:",
            "- Tối ưu hóa SEO cho ứng dụng web.",
            "- Hiển thị nội dung nhanh cho người dùng.",
            "- Cung cấp trải nghiệm tương tác tốt cho người dùng.",
            "Sử dụng CSR khi bạn muốn:",
            "- Xây dựng ứng dụng web tương tác và động.",
            "- Tải nội dung ban đầu và tải dữ liệu sau khi tải trang.",
            "Sử dụng SSG khi bạn cần:",
            "- Hiển thị nội dung tĩnh (không thay đổi) cho người dùng.",
            "- Hiệu suất và bảo mật tối ưu.",
        ],
    },
    {
        key: "heading18",
        data: [
            "Refs(References trong React) là thuộc tính giúp lưu trữ tham chiếu đến một phần tử hay thành phần React cụ thể. Chúng được trả về bởi hàm cấu hình thành phần.",
            "Đây cũng là lúc được sử dụng để trả về các tham chiếu đến từ một phần tử, thành phần cụ thể được trả bởi render. Chúng hữu ích khi cần các phép đo DOM hay thêm phương thức các thành phần.",
        ],
    },
    {
        key: "heading19",
        data: [
            "React.memo là một HOC (Higher Order Component) giúp bạn tối ưu hóa việc re-render của component.",
            "Khi bạn bao bọc một component bằng React.memo, nó sẽ ngăn chặn việc re-render cho đến khi props của component thay đổi",
        ],
    },
    {
        key: "heading20",
        data: [
            "Trợ giúp chính React xác định những mục nào đã thay đổi, được thêm vào hoặc bị xóa. Key nên được cung cấp cho các phần tử bên trong mảng để cung cấp cho các phần tử một định nghĩa ổn định.",
            "Cách tốt nhất để chọn một khóa là sử dụng một chuỗi duy nhất để xác định một mục giữa các mục trong danh sách.",
        ],
    },
];

export const dataInterviewNodejs: IDataStatic[] = [
    {
        key: "heading1",
        data: [
            "NodeJS là một mã nguồn được xây dựng trên Javascript Engine (V8 Engine). NodeJS cũng được biết đến như một nền tảng (Platform) được phát triển năm 2009 bởi Ryan Dahl. NodeJS dựa trên Chrome Javascript runtime phát triển các ứng dụng web, tận dụng kiến trúc hướng sự kiện (event-driven), mô hình non-blocking I/O để tạo ra các ứng dụng nhẹ và hiệu quả. Những ứng dụng Node.js được viết bằng Javascript, chúng có thể chạy trong môi trường NodeJS trên hệ điều hành Window, Linux,...",
            "I/O bất đồng bộ: Node.js sử dụng một single-threaded event loop để quản lý các yêu cầu I/O. Điều này giúp tránh việc blocking và cho phép xử lý nhiều yêu cầu đồng thời.",
            "Event-driven: Node.js sử dụng các events và callbacks để xử lý các tác vụ bất đồng bộ. Khi một sự kiện xảy ra, một callback function sẽ được gọi để xử lý sự kiện đó.",
        ],
    },
    {
        key: "heading2",
        data: [
            "Blocking là khái niệm đề cập đến hành động chặn thực thi các hoạt động tiếp theo để chờ một hoạt động kết thúc; ngược lại thì non-blocking chỉ việc sẽ không chặn. Trong Node, Non-blocking chủ yếu đề cập đến các hoạt động nhập xuất dữ liệu (I/O - input/output); tất cả các function xử lý I/O trong thư viện chuẩn của NodeJS đều cung cấp phiên bản đồng bộ, bất đồng bộ và chấp nhận các hàm callback.",
            "Thay vì việc cần chờ các hoạt động nhập xuất dữ liệu thực hiện xong thì các hoạt động tiếp theo vẫn có thể được thực thi ngay lập tức; riêng luồng I/O ở trên sẽ được ủy quyền cho hệ thống để thực hiện riêng song song, khi hoàn tất sẽ thực hiện việc gọi lại function callback để xử lý hành động tiếp theo.",
        ],
    },
    {
        key: "heading3",
        data: [
            "RESTful API (Representational State Transfer) là một kiểu kiến trúc dùng để thiết kế các API cho các ứng dụng web. Nó cho phép các hệ thống khác nhau giao tiếp với nhau thông qua các yêu cầu HTTP như GET, POST, PUT, DELETE...",
            "Các thành phần chính của RESTful API:",
            "1. Resource: Tài nguyên là các đối tượng mà API quản lý, ví dụ như người dùng, bài viết, sản phẩm.",
            "2. HTTP Methods: Các phương thức HTTP được sử dụng để thao tác với tài nguyên:",
            "- GET: Lấy thông tin tài nguyên.",
            "- POST: Tạo mới tài nguyên.",
            "- PUT: Cập nhật tài nguyên.",
            "- DELETE: Xóa tài nguyên.",
            "3. URL: Địa chỉ URL đại diện cho tài nguyên.",
            "4. Status Codes: Mã trạng thái HTTP để thông báo kết quả của yêu cầu (ví dụ: 200 OK, 404 Not Found).",
            "RESTful API thường trả về dữ liệu dưới dạng JSON hoặc XML, giúp dễ dàng tích hợp và sử dụng trong các ứng dụng web và di động.",
        ],
    },
    {
        key: "heading4",
        data: [
            "Express.js là một web application framework cho Node.js, giúp xây dựng các ứng dụng web và API một cách nhanh chóng và dễ dàng.",
            "Routing: Express cung cấp một hệ thống routing mạnh mẽ để xác định các endpoint cho ứng dụng của bạn.",
            "Middleware: Middleware là các hàm được thực hiện trong quá trình xử lý request và response. Express hỗ trợ nhiều loại middleware để xử lý các tác vụ như xác thực, parsing dữ liệu, logging, v.v.",
        ],
    },
    {
        key: "heading5",
        data: [
            "Quản lý database trong Node.js có thể thực hiện với nhiều loại database khác nhau như MongoDB, MySQL, PostgreSQL, v.v.",
            "MongoDB: Là một NoSQL database, lưu trữ dữ liệu dưới dạng JSON-like documents.",
            "MySQL/PostgreSQL: Là các relational database, lưu trữ dữ liệu dưới dạng tables.",
        ],
    },
    {
        key: "heading6",
        data: [
            "CORS là viết tắt của Cross-Origin Resource Sharing. Theo tiếng Việt, CORS có nghĩa là chia sẻ tài nguyên giữa các nguồn khác nhau. Đây là một cơ chế bảo mật được trình duyệt áp dụng để ngăn chặn các trang web truy cập vào tài nguyên của các trang web khác một cách tùy tiện.",
            "CORS là một cơ chế bảo mật quan trọng trong các ứng dụng web hiện đại. Hiểu rõ về CORS và cách cấu hình nó trong Node.js giúp bạn xây dựng các API an toàn và tương thích với các ứng dụng frontend.",
            "Tại sao cần CORS?",
            "- Bảo mật: Ngăn chặn các cuộc tấn công cross-site scripting (XSS) và các loại tấn công khác.",
            "- Bảo vệ dữ liệu: Ngăn chặn việc truy cập trái phép vào dữ liệu nhạy cảm.",
            "CORS hoạt động như thế nào?",
            "- Khi một trình duyệt thực hiện một yêu cầu HTTP đến một nguồn khác (ví dụ: một API), nó sẽ kiểm tra các tiêu đề HTTP để xác định xem yêu cầu đó có được phép hay không. Nếu nguồn đích đã cấu hình để cho phép truy cập từ nguồn gốc của yêu cầu, thì yêu cầu sẽ được thực hiện. Ngược lại, yêu cầu sẽ bị chặn và trình duyệt sẽ báo lỗi.",
            "CORS trong Node.js",
            "Trong Node.js, chúng ta thường sử dụng các framework như Express để xây dựng các API. Để cho phép các ứng dụng frontend (ví dụ: React, Angular) truy cập vào API của chúng ta, chúng ta cần cấu hình CORS.",
        ],
    },
    {
        key: "heading7",
        data: [
            "Xác thực (Authentication) và ủy quyền (Authorization) là hai khái niệm cơ bản và quan trọng trong bảo mật ứng dụng web. Chúng đảm bảo rằng chỉ những người dùng được phép mới có thể truy cập và tương tác với dữ liệu của ứng dụng.",
            "Xác thực: Ai là bạn?",
            "Xác thực là quá trình xác minh danh tính của người dùng. Điều này thường được thực hiện bằng cách so sánh thông tin mà người dùng cung cấp (ví dụ: tên đăng nhập, mật khẩu) với thông tin đã được lưu trữ trong cơ sở dữ liệu.",
            "Các phương thức xác thực phổ biến:",
            "- Xác thực dựa trên mật khẩu: Người dùng nhập tên đăng nhập và mật khẩu để đăng nhập. Mật khẩu thường được mã hóa bằng các thuật toán một chiều để đảm bảo an toàn.",
            "- Xác thực dựa trên token: Sau khi xác thực thành công, hệ thống sẽ cấp cho người dùng một token (một chuỗi ký tự đặc biệt). Token này sẽ được gửi kèm trong các yêu cầu tiếp theo để xác minh danh tính.",
            "- OAuth 2.0: Một giao thức cho phép các ứng dụng bên thứ ba truy cập vào thông tin của người dùng trên các dịch vụ khác (ví dụ: Google, Facebook).",
            "Ủy quyền: Bạn được phép làm gì?",
            "Ủy quyền là quá trình xác định xem một người dùng đã được cấp phép để thực hiện một hành động cụ thể hay chưa.",
            "Các phương pháp ủy quyền phổ biến:",
            "- Kiểm soát truy cập dựa trên vai trò (RBAC): Người dùng được gán vào các vai trò khác nhau (ví dụ: admin, user, guest). Mỗi vai trò sẽ được cấp phép thực hiện một số hành động nhất định.",
            "- Kiểm soát truy cập dựa trên quyền hạn (PBAC): Mỗi người dùng hoặc nhóm người dùng sẽ được cấp phép trực tiếp cho các hành động cụ thể.",
            "- Kiểm soát truy cập dựa trên thuộc tính (ABAC): Quyền hạn được xác định dựa trên các thuộc tính của người dùng, tài nguyên và môi trường.",
        ],
    },
];

export const dataInterviewOther: IDataStatic[] = [
    {
        key: "heading1",
        data: [
            "Cookie:",
            "- Dung lượng lưu trữ: Giới hạn khoảng 4KB.",
            "- Thời gian tồn tại: Có thể được thiết lập để hết hạn sau một khoảng thời gian nhất định hoặc khi trình duyệt đóng.",
            "- Phạm vi truy cập: Có thể truy cập từ cả phía client và server.",
            "- Bảo mật: Có thể bị đánh cắp nếu không được bảo vệ đúng cách (ví dụ: sử dụng HTTPS).",
            "LocalStorage:",
            "- Dung lượng lưu trữ: Lớn hơn nhiều so với cookie, thường khoảng 5-10MB.",
            "- Thời gian tồn tại: Dữ liệu không bị xóa khi trình duyệt đóng, tồn tại cho đến khi bị xóa thủ công.",
            "- Phạm vi truy cập: Chỉ có thể truy cập từ phía client.",
            "- Bảo mật: An toàn hơn cookie vì không được gửi cùng với các yêu cầu HTTP.",
            "SessionStorage:",
            "- Dung lượng lưu trữ: Tương tự như localStorage, nhưng thường nhỏ hơn.",
            "- Thời gian tồn tại: Dữ liệu bị xóa khi phiên trình duyệt kết thúc (khi tab hoặc cửa sổ trình duyệt đóng).",
            "- Phạm vi truy cập: Chỉ có thể truy cập từ phía client.",
            "- Bảo mật: An toàn hơn cookie vì không được gửi cùng với các yêu cầu HTTP.",
        ],
    },
    {
        key: "heading2",
        data: [
            "SQL và NoSQL là hai loại cơ sở dữ liệu phổ biến, mỗi loại có những đặc điểm và ứng dụng riêng. Dưới đây là một số điểm khác biệt chính giữa chúng:",
            "SQL (Structured Query Language)",
            "1. Cấu trúc: SQL là cơ sở dữ liệu quan hệ, dữ liệu được tổ chức trong các bảng với hàng và cột. Mỗi bảng có một cấu trúc cố định (schema) xác định trước.",
            "2. Ngôn ngữ truy vấn: Sử dụng ngôn ngữ truy vấn có cấu trúc (SQL) để thao tác và truy vấn dữ liệu.",
            "3. Tính nhất quán: SQL tuân thủ các thuộc tính ACID (Atomicity, Consistency, Isolation, Durability) để đảm bảo tính nhất quán và độ tin cậy của dữ liệu.",
            "4. Khả năng mở rộng: Thường mở rộng theo chiều dọc (vertical scaling), tức là tăng cường tài nguyên của một máy chủ duy nhất (CPU, RAM).",
            "5. Ứng dụng: Thích hợp cho các ứng dụng yêu cầu tính nhất quán cao và dữ liệu có cấu trúc rõ ràng, như hệ thống quản lý doanh nghiệp, ngân hàng, và thương mại điện tử.",
            "NoSQL (Not Only SQL)",
            "1. Cấu trúc: NoSQL là cơ sở dữ liệu phi quan hệ, dữ liệu có thể được lưu trữ dưới nhiều dạng khác nhau như tài liệu (document), cặp khóa-giá trị (key-value), đồ thị (graph), hoặc cột (column-family). Không yêu cầu schema cố định.",
            "2. Ngôn ngữ truy vấn: Không có ngôn ngữ truy vấn chuẩn, mỗi loại NoSQL có cách truy vấn riêng.",
            "3. Tính nhất quán: Thường tuân thủ các thuộc tính BASE (Basically Available, Soft state, Eventually consistent), cho phép tính nhất quán cuối cùng (eventual consistency).",
            "4. Khả năng mở rộng: Thường mở rộng theo chiều ngang (horizontal scaling), tức là thêm nhiều máy chủ để chia sẻ tải.",
            "5. Ứng dụng: Thích hợp cho các ứng dụng yêu cầu khả năng mở rộng cao và dữ liệu không có cấu trúc rõ ràng, như mạng xã hội, hệ thống quản lý nội dung, và phân tích dữ liệu lớn2.",
            "Tóm tắt:",
            "SQL: Cấu trúc cố định, nhất quán cao, mở rộng theo chiều dọc, phù hợp với dữ liệu có cấu trúc.",
            "NoSQL: Cấu trúc linh hoạt, nhất quán cuối cùng, mở rộng theo chiều ngang, phù hợp với dữ liệu không có cấu trúc.",
        ],
    },
];

export const dataInterviewJSTS: IDataStatic[] = [
    {
        key: "heading1",
        data: [
            "1. Var:",
            "- Scope: var có phạm vi toàn cục (global scope) hoặc phạm vi hàm (function scope). Điều này có nghĩa là biến được khai báo bằng var có thể được truy cập từ bất kỳ đâu trong hàm hoặc toàn bộ chương trình nếu khai báo ngoài hàm.",
            "- Hoisting: Biến var được hoisting, nghĩa là chúng được đưa lên đầu phạm vi trước khi thực thi mã. Tuy nhiên, giá trị của chúng sẽ là undefined cho đến khi dòng mã gán giá trị được thực thi.",
            "- Redeclaration: Có thể khai báo lại biến var trong cùng một phạm vi mà không gây lỗi.",
            "2. Let:",
            "- Scope: let có phạm vi khối (block scope), nghĩa là biến chỉ tồn tại trong khối mã (block) mà nó được khai báo, ví dụ như trong một cặp dấu ngoặc nhọn {}.",
            "- Hoisting: Biến let cũng được hoisting nhưng không được khởi tạo. Điều này có nghĩa là bạn không thể sử dụng biến let trước khi nó được khai báo.",
            "- Redeclaration: Không thể khai báo lại biến let trong cùng một phạm vi. Tuy nhiên, bạn có thể gán lại giá trị cho biến let.",
            "3. Const:",
            "- Scope: Giống như let, const cũng có phạm vi khối (block scope).",
            "- Hoisting: Biến const cũng được hoisting nhưng không được khởi tạo, tương tự như let.",
            "- Redeclaration: Không thể khai báo lại hoặc gán lại giá trị cho biến const sau khi nó đã được khai báo. Biến const phải được khởi tạo ngay khi khai báo.",
        ],
    },
    {
        key: "heading2",
        data: [
            "Bất đồng bộ (asynchronous) trong JavaScript là một khái niệm quan trọng giúp xử lý các tác vụ mà không làm gián đoạn luồng chính của chương trình. Điều này đặc biệt hữu ích khi bạn cần thực hiện các tác vụ tốn thời gian như gọi API, đọc/ghi file, hoặc truy vấn cơ sở dữ liệu.",
            "Trong JavaScript, có ba cách phổ biến để xử lý bất đồng bộ: Callback, Promise, và Async/Await. Dưới đây là một cái nhìn tổng quan về từng phương pháp:",
            "1. Callback",
            "Callback là một hàm được truyền vào như một tham số của một hàm khác và sẽ được gọi khi hàm đó hoàn thành",
            "Ưu điểm: Đơn giản và dễ hiểu. Nhược điểm: Dễ dẫn đến “callback hell” khi có nhiều callback lồng nhau.",
            "2. Promise",
            "Promise là một đối tượng đại diện cho một giá trị có thể có ngay bây giờ, hoặc trong tương lai, hoặc không bao giờ có",
            "Ưu điểm: Giúp tránh “callback hell” và dễ đọc hơn. Nhược điểm: Cần hiểu rõ về cách hoạt động của Promise.",
            "3. Async/Await",
            "Async/Await là cú pháp mới hơn, giúp viết mã bất đồng bộ trông giống như mã đồng bộ",
            "Ưu điểm: Dễ đọc và viết hơn, xử lý lỗi dễ dàng hơn. Nhược điểm: Cần hiểu rõ về Promise vì Async/Await dựa trên Promise.",
        ],
    },
    {
        key: "heading3",
        data: [
            "ES5 (ECMAScript 5) và ES6 (ECMAScript 6) - còn được gọi là ES2015 - có nhiều điểm khác biệt quan trọng mà đã cải thiện rất nhiều khả năng và cú pháp của JavaScript. Dưới đây là một số điểm khác biệt chính:",
            "1. Arrow Functions: Trong ES6, bạn có thể sử dụng arrow functions để viết các hàm gọn gàng hơn.",
            "2. let và const: ES6 giới thiệu let và const để khai báo biến với phạm vi khối.",
            "3. Template Literals: ES6 cho phép sử dụng template literals để dễ dàng chèn biến và biểu thức vào chuỗi.",
            "4. Classes: ES6 giới thiệu cú pháp class giúp việc tạo và kế thừa các class dễ dàng hơn.",
            "5. Modules: ES6 hỗ trợ import và export modules.",
            "6. Destructuring Assignment: ES6 giới thiệu cú pháp destructuring để trích xuất các giá trị từ mảng và đối tượng.",
            "7. Promises: ES6 giới thiệu Promises để xử lý các tác vụ bất đồng bộ một cách hiệu quả hơn.",
        ],
    },
    {
        key: "heading4",
        data: [
            "Event loop là một cơ chế cốt lõi trong JavaScript, cho phép ngôn ngữ này xử lý các tác vụ không đồng bộ (asynchronous) một cách hiệu quả. Nhờ event loop, JavaScript có thể thực hiện nhiều tác vụ cùng một lúc mà không bị chặn, giúp ứng dụng web trở nên mượt mà và đáp ứng nhanh hơn.",
            "Cách thức hoạt động:",
            "1. Call Stack:",
            "- Khi bạn chạy một đoạn code JavaScript, các hàm sẽ được đẩy vào Call Stack theo thứ tự gọi.",
            "- Call Stack hoạt động theo nguyên tắc LIFO (Last In, First Out): hàm nào được gọi sau sẽ được thực hiện trước.",
            "2. Web APIs:",
            "- Các tác vụ không đồng bộ như setTimeout, fetch API, DOM events sẽ được gửi đến Web APIs để xử lý.",
            "- Trong khi Web APIs đang xử lý, Call Stack sẽ tiếp tục thực hiện các tác vụ khác nếu có.",
            "3. Callback Queue:",
            "- Khi Web APIs hoàn thành công việc, callback function của chúng sẽ được đưa vào Callback Queue.",
            "4. Event Loop:",
            "- Event Loop sẽ liên tục kiểm tra xem Call Stack có rỗng hay không.",
            "- Nếu Call Stack rỗng, Event Loop sẽ lấy một callback từ Callback Queue và đẩy vào Call Stack để thực hiện.",
        ],
    },
    {
        key: "heading5",
        data: [
            "Trong JavaScript, this là một từ khóa đặc biệt dùng để tham chiếu đến đối tượng hiện tại đang thực thi hàm. Nói cách khác, this sẽ luôn trỏ đến đối tượng mà hàm đó được gọi trên đó.",
            "Giá trị của this thay đổi tùy thuộc vào ngữ cảnh mà hàm được gọi. Đây là một trong những khái niệm quan trọng nhất và cũng là một trong những khái niệm dễ gây nhầm lẫn nhất trong JavaScript.",
            "Các trường hợp thường gặp của this:",
            "Trong hàm: Khi một hàm được gọi như một phương thức của một đối tượng, this sẽ trỏ đến đối tượng đó.",
            "Trong hàm constructor: Bên trong một hàm constructor, this trỏ đến đối tượng đang được tạo.",
            "Trong hàm thông thường: Khi một hàm được gọi đơn giản, không liên kết với bất kỳ đối tượng nào, this sẽ trỏ đến đối tượng toàn cục (window trong trình duyệt).",
            "Trong các hàm callback: Giá trị của this trong các hàm callback phụ thuộc vào cách hàm đó được gọi.",
        ],
    },
    {
        key: "heading6",
        data: [
            "Ngữ cảnh (context): Trong JavaScript, this luôn ám chỉ đến đối tượng đang sở hữu hàm hiện tại. Ngữ cảnh có thể thay đổi tùy thuộc vào cách gọi hàm.",
            "Bind, call, apply: Đây là 3 phương thức được kế thừa từ đối tượng Function.prototype, cho phép chúng ta điều khiển ngữ cảnh this của một hàm và cách truyền đối số vào hàm đó.",
        ],
    },
    {
        key: "heading7",
        data: [
            "Prototype là một khái niệm cốt lõi trong JavaScript, nó đóng vai trò quan trọng trong việc tạo ra các đối tượng và thực hiện cơ chế kế thừa trong ngôn ngữ này. Nói một cách đơn giản, prototype là một đối tượng mà các đối tượng khác có thể kế thừa các thuộc tính và phương thức từ nó.",
            "Tại sao Prototype lại quan trọng?",
            "Kế thừa: Prototype cho phép JavaScript thực hiện cơ chế kế thừa mà không cần sử dụng từ khóa class như trong các ngôn ngữ lập trình hướng đối tượng khác.",
            "Tái sử dụng mã: Bằng cách tạo ra các prototype chung, chúng ta có thể tái sử dụng các thuộc tính và phương thức cho nhiều đối tượng khác nhau.",
            "Định hình cấu trúc của đối tượng: Prototype giúp định nghĩa cấu trúc và hành vi của các đối tượng trong ứng dụng.",
            "Cơ chế hoạt động của Prototype",
            "Mỗi đối tượng đều có một liên kết đến prototype của nó: Khi bạn tạo một đối tượng, nó sẽ có một thuộc tính nội bộ ([[Prototype]]) trỏ đến một đối tượng khác, đó chính là prototype của nó.",
            "Khi truy cập một thuộc tính hoặc phương thức: Khi bạn truy cập một thuộc tính hoặc gọi một phương thức của một đối tượng, JavaScript sẽ tìm kiếm thuộc tính đó trong chính đối tượng đó trước. Nếu không tìm thấy, nó sẽ tiếp tục tìm kiếm trong prototype của đối tượng đó, rồi đến prototype của prototype, và cứ thế cho đến khi tìm thấy hoặc đến đối tượng null.",
        ],
    },
    {
        key: "heading8",
        data: [
            "Closure là một khái niệm quan trọng trong JavaScript, nó cho phép một hàm truy cập và sử dụng các biến bên ngoài phạm vi của nó, ngay cả khi hàm đó đã được trả về. Nói cách khác, closure là một hàm cùng với các biến mà nó 'nhớ' lại, ngay cả khi hàm tạo ra nó đã kết thúc việc thực thi.",
        ],
    },
    {
        key: "heading9",
        data: [
            "null: Một giá trị được gán cho một biến để biểu thị rằng biến đó không có giá trị nào.",
            "undefined: Một biến chưa được gán giá trị.",
        ],
    },
    {
        key: "heading10",
        data: [
            "Hàm callback (callback function) trong JavaScript là một hàm được truyền vào một hàm khác như một đối số, và sẽ được gọi lại sau khi hàm bên ngoài hoàn thành một tác vụ nào đó hoặc xảy ra một sự kiện nào đó.",
            "Tại sao chúng ta cần hàm callback?",
            "- Tính bất đồng bộ (Asynchronous): JavaScript là ngôn ngữ đơn luồng, nhưng nhiều tác vụ như đọc file, gửi yêu cầu đến server, xử lý sự kiện... lại mất thời gian. Hàm callback giúp đảm bảo rằng mã của chúng ta sẽ được thực thi sau khi các tác vụ này hoàn thành, mà không bị chặn.",
            "- Điều khiển luồng thực thi: Hàm callback cho phép chúng ta xác định thứ tự thực hiện các đoạn mã, đặc biệt hữu ích khi làm việc với các sự kiện.",
        ],
    },
];

export const dataInterviewHTMLCSS: IDataStatic[] = [
    {
        key: "heading1",
        data: [
            "CSS Box Model là một mô hình cơ bản dùng để xác định kích thước và vị trí của các phần tử trên trang web. Mỗi phần tử HTML được coi như một hộp (box), và hộp này bao gồm các phần sau:",
            "- Content: Nội dung bên trong hộp (text, hình ảnh, ...)",
            "- Padding: Khoảng cách giữa nội dung và border",
            "- Border: Đường viền bao quanh hộp",
            "- Margin: Khoảng cách giữa hộp và các hộp khác",
        ],
    },
    {
        key: "heading2",
        data: [
            "Flexbox và Grid layout là hai công cụ mạnh mẽ để tạo ra các bố cục phức tạp và linh hoạt trên trang web. Chúng cho phép bạn sắp xếp các phần tử theo nhiều cách khác nhau, đáp ứng được các thiết bị có kích thước màn hình khác nhau.",
            "Flexbox",
            "- Dùng để: Sắp xếp các phần tử theo một chiều (dọc hoặc ngang).",
            "- Ưu điểm: Đơn giản, dễ học, phù hợp với các layout một chiều.",
            "- Các thuộc tính chính:",
            "+ display: flex;",
            "+ flex-direction: Xác định hướng của container",
            "+ justify-content: Căn chỉnh các phần tử theo trục chính",
            "+ align-items: Căn chỉnh các phần tử theo trục phụ",
            "Grid layout",
            "- Dùng để: Tạo các bố cục hai chiều phức tạp.",
            "- Ưu điểm: Linh hoạt, có thể tạo ra các lưới có nhiều cột và hàng.",
            "- Các thuộc tính chính:",
            "+ display: grid;",
            "+ grid-template-columns: Xác định kích thước cột của grid",
            "+ grid-template-rows: Xác định kích thước hàng của grid",
            "+ grid-gap: Tạo khoảng cách giữa các ô",
        ],
    },
    {
        key: "heading3",
        data: [
            "HTML Semantic Elements (các phần tử ngữ nghĩa HTML) là những phần tử HTML được thiết kế để mang ý nghĩa đặc biệt, mô tả rõ ràng về mục đích của chúng trong một trang web. Thay vì chỉ đơn thuần tạo ra các khối nội dung bằng các phần tử chung chung như <div> và <span>, các phần tử ngữ nghĩa giúp chúng ta xây dựng một cấu trúc HTML có ý nghĩa hơn, dễ hiểu hơn cho cả trình duyệt, công cụ tìm kiếm và các nhà phát triển khác.",
            "Ví dụ về các phần tử ngữ nghĩa:",
            "- <header>: Đánh dấu phần đầu trang.",
            "- <nav>: Đánh dấu phần menu trang.",
            "- <main>: Đánh dấu phần nội dung chính của trang.",
            "- <section>: Đánh dấu phần nhóm phần tử.",
            "- <article>: Đánh dấu một nội dung độc lập có thể đứng một mình",
            "- <aside>: Đánh dấu nội dung bên lề, thông tin bổ sung.",
            "- <footer>: Đánh dấu phần chân trang.",
            "Tại sao sử dụng HTML Semantic Elements?",
            "1. Cải thiện khả năng đọc hiểu code",
            "2. Tăng cường SEO",
            "3. Tạo ra các trang web tiếp cận được tốt hơn",
            "4. Dễ dàng bảo trì và mở rộng",
            "5. Tạo ra các ứng dụng web hiện đại",
        ],
    },
];
