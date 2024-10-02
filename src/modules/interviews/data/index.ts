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
];
