export type Lang = 'en' | 'vi'

/** Thay các giá trị này trước khi đưa web lên production. */
export const CONFIG = {
  appName: 'GPS Camera',
  contactEmail: 'cindypittman597304@gmail.com',
  contactPhone: '+84385514788',
  lastUpdated: '2026-11-25',
}

export interface Section {
  id: string
  title: string
  /** Đoạn văn. */
  paragraphs?: string[]
  /** Danh sách gạch đầu dòng: [in đậm, mô tả]. */
  items?: [string, string][]
}

export interface Content {
  tagline: string
  title: string
  updatedLabel: string
  summaryTitle: string
  summary: string[]
  tocTitle: string
  sections: Section[]
  contactLabel: string
  langLabel: string
  topLabel: string
  navPrivacy: string
  navTerms: string
  skip: string
  footer: string
}

const en: Content = {
  tagline: 'Photos and videos stamped with where and when you took them',
  title: 'Privacy Policy',
  updatedLabel: 'Last updated',
  summaryTitle: 'In short',
  summary: [
    'No account or sign-in. We do not collect your name, email or phone number.',
    'Your photos and videos stay on your device, in your Photos library.',
    'Your location is used only to print the address, coordinates, map and weather on your pictures.',
    'We do not sell your personal data, and the app has no ads and no in-app purchases.',
  ],
  tocTitle: 'Contents',
  contactLabel: 'Contact',
  langLabel: 'Language',
  topLabel: 'Back to top',
  navPrivacy: 'Privacy',
  navTerms: 'Terms',
  skip: 'Skip to content',
  footer: 'All rights reserved.',
  sections: [
    {
      id: 'intro',
      title: 'Introduction',
      paragraphs: [
        'GPS Camera ("the app", "we") is an iPhone app that adds a stamp to your photos and videos: address, coordinates, date and time, a map and weather. This policy explains what information the app handles, why, and the choices you have.',
        'By using the app you agree to this policy. If you do not agree, please do not use the app.',
      ],
    },
    {
      id: 'data',
      title: 'Information the app handles',
      items: [
        [
          'Location',
          'With your permission, the app reads your precise location while it is open to build the stamp (address, coordinates, altitude, compass heading, map). You can also pick a place on the map instead; that place is saved on your device only.',
        ],
        [
          'Camera and microphone',
          'The camera takes your photos and videos. The microphone records sound only when you record a video. Nothing is streamed or uploaded.',
        ],
        [
          'Photos',
          'The app saves your stamped photos and videos to Photos, in a "GPS Camera" album. If you choose to add a stamp to an existing picture, the app reads only the pictures you select.',
        ],
        [
          'Settings and preferences',
          'Your choices (such as the selected template, units and manual location) are kept on your device.',
        ],
      ],
    },
    {
      id: 'not-collected',
      title: 'What we do not collect',
      paragraphs: [
        'We do not run servers that receive your photos, videos or location history. We do not ask for your name, email or phone number. The app has no advertising and no third-party analytics or tracking tools, and it does not track you across other apps or websites.',
      ],
    },
    {
      id: 'use',
      title: 'How we use information',
      items: [
        ['Create the stamp', 'Location, time and weather are drawn onto your photo or video.'],
        ['Provide features', 'Saving to Photos, templates, manual location and your preferences.'],
      ],
    },
    {
      id: 'third-parties',
      title: 'Third-party services',
      paragraphs: [
        'To work, the app contacts the services below. Each handles data under its own policy.',
      ],
      items: [
        [
          'Apple (Maps, location and geocoding)',
          'To turn coordinates into an address and show a map, the app uses Apple frameworks. Apple may process the coordinates for this purpose.',
        ],
        [
          'Open-Meteo (weather)',
          'To show the weather on your stamp, the app sends your approximate coordinates (rounded to about 11 meters) to Open-Meteo.com and receives the current temperature, conditions, humidity and wind. No other identifier is sent. Weather data by Open-Meteo.com.',
        ],
        [
          'Network check',
          'The app may make a simple request to apple.com to check that your device clock is correct. No personal data is included.',
        ],
      ],
    },
    {
      id: 'sharing',
      title: 'Sharing your pictures',
      paragraphs: [
        'A stamp can show where you were and when. When you share a stamped picture through the share sheet, Messages, social networks or any other app, anyone who receives it can see that information. Please think before you share, and use the manual location or a template without an address if you want more privacy. Photo files may also carry standard location metadata (EXIF) added by the system.',
      ],
    },
    {
      id: 'storage',
      title: 'Storage and retention',
      paragraphs: [
        'Your pictures and settings are stored on your device. We keep no copy. They stay until you delete them or delete the app. Photos you saved to your Photos library are managed by iOS and, if you use iCloud Photos, by Apple under your iCloud settings.',
      ],
    },
    {
      id: 'choices',
      title: 'Your choices and rights',
      items: [
        [
          'Permissions',
          'You can allow or withdraw access to Location, Camera, Microphone and Photos at any time in iOS Settings > GPS Camera. Some features will not work without them.',
        ],
        [
          'Manual location',
          'In the Menu you can use a place you choose on the map, or return to your current location.',
        ],
        [
          'Delete data',
          'Delete pictures from Photos, or delete the app to remove all data it stores on your device.',
        ],
        [
          'Your rights',
          'Because we do not hold personal data about you, there is usually nothing for us to access, correct or erase. If your local law (such as GDPR or CCPA) gives you rights, contact us and we will help.',
        ],
      ],
    },
    {
      id: 'children',
      title: 'Children',
      paragraphs: [
        'The app is not directed to children under 13 (or the age required in your country), and we do not knowingly collect personal information from them.',
      ],
    },
    {
      id: 'security',
      title: 'Security',
      paragraphs: [
        'Data stays on your device and is protected by iOS security features. Network requests use encrypted connections (HTTPS). No method is perfectly secure, but we limit what the app handles to what is needed.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      paragraphs: [
        'We may update this policy, for example when we add a feature. The date at the top shows the latest version. Significant changes will be noted in the app or on this page.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact us',
      paragraphs: ['If you have questions about this policy or your data, email or call us:'],
    },
  ],
}

const vi: Content = {
  tagline: 'Ảnh và video có đóng dấu nơi chốn và thời gian bạn chụp',
  title: 'Chính sách quyền riêng tư',
  updatedLabel: 'Cập nhật lần cuối',
  summaryTitle: 'Tóm tắt',
  summary: [
    'Không cần tài khoản hay đăng nhập. Chúng tôi không thu thập tên, email hay số điện thoại.',
    'Ảnh và video của bạn nằm trên máy, trong thư viện Ảnh.',
    'Vị trí chỉ dùng để in địa chỉ, tọa độ, bản đồ và thời tiết lên ảnh.',
    'Chúng tôi không bán dữ liệu cá nhân của bạn. Ứng dụng không có quảng cáo và không có giao dịch mua trong ứng dụng.',
  ],
  tocTitle: 'Mục lục',
  contactLabel: 'Liên hệ',
  langLabel: 'Ngôn ngữ',
  topLabel: 'Lên đầu trang',
  navPrivacy: 'Quyền riêng tư',
  navTerms: 'Điều khoản',
  skip: 'Chuyển đến nội dung',
  footer: 'Bảo lưu mọi quyền.',
  sections: [
    {
      id: 'intro',
      title: 'Giới thiệu',
      paragraphs: [
        'GPS Camera ("ứng dụng", "chúng tôi") là ứng dụng iPhone thêm tem lên ảnh và video của bạn: địa chỉ, tọa độ, ngày giờ, bản đồ và thời tiết. Chính sách này giải thích ứng dụng xử lý thông tin nào, vì sao, và bạn có những lựa chọn gì.',
        'Khi dùng ứng dụng, bạn đồng ý với chính sách này. Nếu không đồng ý, vui lòng không dùng ứng dụng.',
      ],
    },
    {
      id: 'data',
      title: 'Thông tin ứng dụng xử lý',
      items: [
        [
          'Vị trí',
          'Khi bạn cho phép, ứng dụng đọc vị trí chính xác trong lúc đang mở để tạo tem (địa chỉ, tọa độ, độ cao, hướng la bàn, bản đồ). Bạn cũng có thể chọn một địa điểm trên bản đồ thay cho vị trí hiện tại; địa điểm này chỉ lưu trên máy của bạn.',
        ],
        [
          'Camera và micro',
          'Camera dùng để chụp ảnh và quay video. Micro chỉ ghi âm khi bạn quay video. Không có gì được truyền hay tải lên máy chủ.',
        ],
        [
          'Ảnh',
          'Ứng dụng lưu ảnh và video đã đóng tem vào thư viện Ảnh, trong album "GPS Camera". Nếu bạn chọn thêm tem vào ảnh có sẵn, ứng dụng chỉ đọc những ảnh bạn chọn.',
        ],
        [
          'Cài đặt và tùy chọn',
          'Lựa chọn của bạn (như mẫu tem, đơn vị và vị trí thủ công) được lưu trên máy.',
        ],
      ],
    },
    {
      id: 'not-collected',
      title: 'Những gì chúng tôi không thu thập',
      paragraphs: [
        'Chúng tôi không vận hành máy chủ nhận ảnh, video hay lịch sử vị trí của bạn. Chúng tôi không hỏi tên, email hay số điện thoại. Ứng dụng không có quảng cáo, không dùng công cụ phân tích hay theo dõi của bên thứ ba, và không theo dõi bạn qua ứng dụng hay trang web khác.',
      ],
    },
    {
      id: 'use',
      title: 'Cách chúng tôi dùng thông tin',
      items: [
        ['Tạo tem', 'Vị trí, thời gian và thời tiết được vẽ lên ảnh hoặc video của bạn.'],
        ['Cung cấp tính năng', 'Lưu vào Ảnh, mẫu tem, vị trí thủ công và tùy chọn của bạn.'],
      ],
    },
    {
      id: 'third-parties',
      title: 'Dịch vụ của bên thứ ba',
      paragraphs: [
        'Để hoạt động, ứng dụng kết nối tới các dịch vụ dưới đây. Mỗi bên xử lý dữ liệu theo chính sách riêng của họ.',
      ],
      items: [
        [
          'Apple (Bản đồ, vị trí và chuyển tọa độ thành địa chỉ)',
          'Để đổi tọa độ thành địa chỉ và hiển thị bản đồ, ứng dụng dùng các framework của Apple. Apple có thể xử lý tọa độ cho mục đích này.',
        ],
        [
          'Open-Meteo (thời tiết)',
          'Để hiện thời tiết trên tem, ứng dụng gửi tọa độ gần đúng của bạn (làm tròn khoảng 11 mét) tới Open-Meteo.com và nhận về nhiệt độ, tình trạng, độ ẩm và gió hiện tại. Không gửi mã định danh nào khác. Weather data by Open-Meteo.com.',
        ],
        [
          'Kiểm tra mạng',
          'Ứng dụng có thể gửi một yêu cầu đơn giản tới apple.com để kiểm tra đồng hồ máy có đúng không. Yêu cầu này không chứa dữ liệu cá nhân.',
        ],
      ],
    },
    {
      id: 'sharing',
      title: 'Chia sẻ ảnh của bạn',
      paragraphs: [
        'Tem có thể cho biết bạn đã ở đâu và khi nào. Khi chia sẻ ảnh có tem qua bảng chia sẻ, Tin nhắn, mạng xã hội hay ứng dụng khác, ai nhận được ảnh đều xem được thông tin đó. Hãy cân nhắc trước khi chia sẻ, và dùng vị trí thủ công hoặc mẫu tem không có địa chỉ nếu muốn riêng tư hơn. File ảnh cũng có thể mang siêu dữ liệu vị trí chuẩn (EXIF) do hệ thống thêm vào.',
      ],
    },
    {
      id: 'storage',
      title: 'Lưu trữ và thời gian giữ',
      paragraphs: [
        'Ảnh và cài đặt được lưu trên máy của bạn. Chúng tôi không giữ bản sao nào. Dữ liệu tồn tại cho đến khi bạn xóa chúng hoặc xóa ứng dụng. Ảnh đã lưu vào thư viện Ảnh do iOS quản lý và, nếu bạn dùng Ảnh iCloud, do Apple quản lý theo cài đặt iCloud của bạn.',
      ],
    },
    {
      id: 'choices',
      title: 'Lựa chọn và quyền của bạn',
      items: [
        [
          'Quyền truy cập',
          'Bạn có thể cho phép hoặc thu hồi quyền Vị trí, Camera, Micro và Ảnh bất cứ lúc nào tại Cài đặt iOS > GPS Camera. Một số tính năng sẽ không hoạt động nếu thiếu quyền.',
        ],
        [
          'Vị trí thủ công',
          'Trong Menu, bạn có thể dùng địa điểm chọn trên bản đồ, hoặc quay lại vị trí hiện tại.',
        ],
        [
          'Xóa dữ liệu',
          'Xóa ảnh khỏi thư viện Ảnh, hoặc xóa ứng dụng để loại bỏ mọi dữ liệu ứng dụng lưu trên máy.',
        ],
        [
          'Quyền của bạn',
          'Vì chúng tôi không giữ dữ liệu cá nhân của bạn nên thường không có gì để truy cập, sửa hay xóa. Nếu luật nơi bạn ở (như GDPR hoặc CCPA) cho bạn quyền, hãy liên hệ và chúng tôi sẽ hỗ trợ.',
        ],
      ],
    },
    {
      id: 'children',
      title: 'Trẻ em',
      paragraphs: [
        'Ứng dụng không dành cho trẻ dưới 13 tuổi (hoặc độ tuổi theo quy định tại nước bạn), và chúng tôi không cố ý thu thập thông tin cá nhân của các em.',
      ],
    },
    {
      id: 'security',
      title: 'Bảo mật',
      paragraphs: [
        'Dữ liệu nằm trên máy và được bảo vệ bởi các tính năng bảo mật của iOS. Các yêu cầu mạng dùng kết nối mã hóa (HTTPS). Không phương pháp nào an toàn tuyệt đối, nhưng chúng tôi giới hạn dữ liệu ứng dụng xử lý ở mức cần thiết.',
      ],
    },
    {
      id: 'changes',
      title: 'Thay đổi chính sách',
      paragraphs: [
        'Chúng tôi có thể cập nhật chính sách này, ví dụ khi thêm tính năng. Ngày ở đầu trang cho biết phiên bản mới nhất. Thay đổi quan trọng sẽ được thông báo trong ứng dụng hoặc trên trang này.',
      ],
    },
    {
      id: 'contact',
      title: 'Liên hệ',
      paragraphs: ['Nếu có câu hỏi về chính sách này hoặc dữ liệu của bạn, hãy gửi email hoặc gọi:'],
    },
  ],
}

export const CONTENT: Record<Lang, Content> = { en, vi }
