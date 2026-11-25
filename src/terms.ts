import { CONTENT, type Content, type Lang } from './content'

const en: Partial<Content> = {
  tagline: 'The rules for using GPS Camera',
  title: 'Terms of Use',
  summaryTitle: 'In short',
  summary: [
    'GPS Camera is for personal use. You own the photos and videos you take.',
    'Stamps (location, time, weather) are informative and can be inaccurate. Do not rely on them as legal proof.',
    'The app is free: no ads and no in-app purchases.',
    'Use the app lawfully and respect other people\'s privacy.',
  ],
  sections: [
    {
      id: 'accept',
      title: 'Accepting these terms',
      paragraphs: [
        'These Terms of Use ("Terms") govern your use of the GPS Camera app ("the app", "we"). By downloading or using the app you agree to them and to our Privacy Policy. If you do not agree, do not use the app.',
        'You must be old enough to form a binding contract where you live (and at least 13 years old). If a parent or guardian helps you, they accept these Terms for you.',
      ],
    },
    {
      id: 'license',
      title: 'License to use the app',
      paragraphs: [
        'We give you a limited, personal, non-exclusive, non-transferable, revocable license to install and use the app on Apple devices that you own or control, under the Usage Rules of the Apple Media Services Terms. You may not copy, modify, reverse engineer, sell, rent or sublicense the app, except where the law allows it.',
      ],
    },
    {
      id: 'accuracy',
      title: 'Accuracy of stamps',
      paragraphs: [
        'The app prints information on your pictures, such as address, coordinates, altitude, compass heading, date and time, map and weather. This information comes from your device sensors, Apple services and Open-Meteo, so it can be wrong, delayed or unavailable. A stamp can also be changed by editing the picture afterwards.',
      ],
      items: [
        [
          'Not proof',
          'Stamped pictures are a convenience. Do not rely on them as legal, official, safety, navigation, attendance or evidence-grade records.',
        ],
        [
          'Your device clock',
          'Time comes from your device. If the clock is wrong, the stamp is wrong.',
        ],
      ],
    },
    {
      id: 'use',
      title: 'Acceptable use',
      paragraphs: ['You agree not to use the app to:'],
      items: [
        ['Break the law', 'Violate any law or the rights of others.'],
        [
          'Invade privacy',
          'Photograph or record people or places in a way that breaks their privacy, or without a consent the law requires. Remember that a stamp shows where you were.',
        ],
        [
          'Deceive',
          'Create misleading pictures to pass off a false location or time as real, for example to commit fraud or to deceive an employer, school, court or authority.',
        ],
        [
          'Harm the app',
          'Interfere with, attack or bypass the security of the app.',
        ],
      ],
    },
    {
      id: 'content',
      title: 'Your photos and videos',
      paragraphs: [
        'You own your pictures. They are created and stored on your device, and we do not receive them, so we do not claim any rights over them. You are responsible for what you capture and share and for any consent you need from people in them. When you share a stamped picture, others can see the information on it.',
      ],
    },
    {
      id: 'ads',
      title: 'Third-party services',
      paragraphs: [
        'The app is free and has no ads or in-app purchases. It relies on services from Apple and Open-Meteo. We do not control these services and are not responsible for their content, availability or practices. See our Privacy Policy for details.',
      ],
    },
    {
      id: 'ip',
      title: 'Intellectual property',
      paragraphs: [
        'The app, its design, templates, icons, code and text belong to us or our licensors and are protected by law. These Terms give you no ownership of them. Weather data by Open-Meteo.com.',
      ],
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      paragraphs: [
        'The app is provided "as is" and "as available", without promises that it will be error-free, uninterrupted or accurate. To the extent the law allows, we disclaim all warranties, express or implied, including fitness for a particular purpose.',
      ],
    },
    {
      id: 'liability',
      title: 'Limit of liability',
      paragraphs: [
        'To the extent the law allows, we are not liable for indirect, incidental or consequential loss, or for loss of data, profit or opportunity, arising from your use of the app or from reliance on a stamp. Because the app is free, our total liability for any claim is limited to the extent the law allows. Nothing in these Terms limits liability that cannot be limited by law, and your legal rights as a consumer remain.',
      ],
    },
    {
      id: 'termination',
      title: 'Ending use',
      paragraphs: [
        'You may stop using the app at any time by deleting it. We may suspend or end your access if you seriously break these Terms. Sections that by nature should continue (such as ownership, disclaimer and liability) continue after that.',
      ],
    },
    {
      id: 'apple',
      title: 'Apple',
      paragraphs: [
        'These Terms are between you and us, not Apple. Apple has no duty to provide support or maintenance for the app. If the app fails to meet a warranty, you may tell Apple to refund the purchase price, and Apple has no other warranty duty. We, not Apple, handle claims about the app, including product liability, legal compliance and intellectual property claims. Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you. You confirm that you are not in a country under a US embargo or on a US list of restricted parties.',
      ],
    },
    {
      id: 'law',
      title: 'Governing law',
      paragraphs: [
        'These Terms are governed by the laws of Vietnam, without regard to conflict-of-law rules. Courts in Vietnam have jurisdiction, but this does not remove mandatory consumer rights you have under the laws of the place where you live.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to these terms',
      paragraphs: [
        'We may update these Terms, for example when we add features. The date at the top shows the latest version. If you keep using the app after a change, you accept the new Terms. We will highlight significant changes in the app or on this page.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact us',
      paragraphs: ['If you have questions about these Terms, email or call us:'],
    },
  ],
}

const vi: Partial<Content> = {
  tagline: 'Quy tắc khi sử dụng GPS Camera',
  title: 'Điều khoản sử dụng',
  summaryTitle: 'Tóm tắt',
  summary: [
    'GPS Camera dùng cho mục đích cá nhân. Ảnh và video bạn chụp thuộc về bạn.',
    'Tem (vị trí, thời gian, thời tiết) chỉ mang tính tham khảo và có thể sai. Đừng dùng làm bằng chứng pháp lý.',
    'Ứng dụng miễn phí: không quảng cáo và không có giao dịch mua trong ứng dụng.',
    'Hãy dùng ứng dụng hợp pháp và tôn trọng quyền riêng tư của người khác.',
  ],
  sections: [
    {
      id: 'accept',
      title: 'Chấp nhận điều khoản',
      paragraphs: [
        'Điều khoản sử dụng này ("Điều khoản") điều chỉnh việc bạn dùng ứng dụng GPS Camera ("ứng dụng", "chúng tôi"). Khi tải hoặc dùng ứng dụng, bạn đồng ý với Điều khoản này và Chính sách quyền riêng tư. Nếu không đồng ý, vui lòng không dùng ứng dụng.',
        'Bạn phải đủ tuổi giao kết hợp đồng theo luật nơi bạn sống (và từ 13 tuổi trở lên). Nếu cha mẹ hoặc người giám hộ giúp bạn, họ chấp nhận Điều khoản này thay bạn.',
      ],
    },
    {
      id: 'license',
      title: 'Giấy phép sử dụng',
      paragraphs: [
        'Chúng tôi cấp cho bạn giấy phép có giới hạn, cá nhân, không độc quyền, không chuyển nhượng và có thể thu hồi để cài đặt và dùng ứng dụng trên thiết bị Apple do bạn sở hữu hoặc kiểm soát, theo Quy tắc sử dụng trong Điều khoản Dịch vụ Phương tiện của Apple. Bạn không được sao chép, sửa đổi, dịch ngược, bán, cho thuê hay cấp phép lại ứng dụng, trừ khi luật cho phép.',
      ],
    },
    {
      id: 'accuracy',
      title: 'Độ chính xác của tem',
      paragraphs: [
        'Ứng dụng in thông tin lên ảnh như địa chỉ, tọa độ, độ cao, hướng la bàn, ngày giờ, bản đồ và thời tiết. Thông tin này đến từ cảm biến trên máy, dịch vụ của Apple và Open-Meteo, nên có thể sai, chậm hoặc không có. Tem cũng có thể bị thay đổi nếu ảnh được chỉnh sửa sau đó.',
      ],
      items: [
        [
          'Không phải bằng chứng',
          'Ảnh có tem chỉ mang tính tiện ích. Không dựa vào chúng làm hồ sơ pháp lý, chính thức, an toàn, dẫn đường, chấm công hay bằng chứng.',
        ],
        [
          'Đồng hồ trên máy',
          'Thời gian lấy từ máy của bạn. Nếu đồng hồ sai thì tem sai.',
        ],
      ],
    },
    {
      id: 'use',
      title: 'Sử dụng hợp lệ',
      paragraphs: ['Bạn đồng ý không dùng ứng dụng để:'],
      items: [
        ['Vi phạm pháp luật', 'Vi phạm pháp luật hoặc quyền của người khác.'],
        [
          'Xâm phạm riêng tư',
          'Chụp hoặc quay người hay nơi chốn theo cách xâm phạm riêng tư, hoặc khi chưa có sự đồng ý mà luật yêu cầu. Hãy nhớ rằng tem cho biết bạn đã ở đâu.',
        ],
        [
          'Đánh lừa',
          'Tạo ảnh gây hiểu lầm để làm giả vị trí hoặc thời gian, ví dụ để lừa đảo hoặc đánh lừa người sử dụng lao động, nhà trường, tòa án hay cơ quan chức năng.',
        ],
        [
          'Gây hại cho ứng dụng',
          'Can thiệp, tấn công hoặc vượt qua cơ chế bảo mật của ứng dụng.',
        ],
      ],
    },
    {
      id: 'content',
      title: 'Ảnh và video của bạn',
      paragraphs: [
        'Ảnh thuộc về bạn. Chúng được tạo và lưu trên máy của bạn, chúng tôi không nhận được chúng nên không đòi quyền nào đối với chúng. Bạn chịu trách nhiệm về những gì mình chụp, chia sẻ và về sự đồng ý cần có từ người xuất hiện trong ảnh. Khi bạn chia sẻ ảnh có tem, người khác sẽ thấy thông tin trên đó.',
      ],
    },
    {
      id: 'ads',
      title: 'Dịch vụ của bên thứ ba',
      paragraphs: [
        'Ứng dụng miễn phí, không có quảng cáo và không có giao dịch mua trong ứng dụng. Ứng dụng dùng dịch vụ của Apple và Open-Meteo. Chúng tôi không kiểm soát các dịch vụ này và không chịu trách nhiệm về nội dung, tính sẵn sàng hay cách làm của họ. Xem Chính sách quyền riêng tư để biết chi tiết.',
      ],
    },
    {
      id: 'ip',
      title: 'Sở hữu trí tuệ',
      paragraphs: [
        'Ứng dụng, thiết kế, mẫu tem, biểu tượng, mã nguồn và văn bản thuộc về chúng tôi hoặc bên cấp phép và được pháp luật bảo vệ. Điều khoản này không trao cho bạn quyền sở hữu chúng. Weather data by Open-Meteo.com.',
      ],
    },
    {
      id: 'disclaimer',
      title: 'Miễn trừ',
      paragraphs: [
        'Ứng dụng được cung cấp "nguyên trạng" và "theo khả năng sẵn có", không cam kết không có lỗi, không gián đoạn hay chính xác. Trong phạm vi luật cho phép, chúng tôi từ chối mọi bảo đảm, rõ ràng hay ngầm định, kể cả sự phù hợp cho một mục đích cụ thể.',
      ],
    },
    {
      id: 'liability',
      title: 'Giới hạn trách nhiệm',
      paragraphs: [
        'Trong phạm vi luật cho phép, chúng tôi không chịu trách nhiệm về thiệt hại gián tiếp, ngẫu nhiên hay hệ quả, hoặc mất dữ liệu, lợi nhuận, cơ hội, phát sinh từ việc bạn dùng ứng dụng hoặc tin vào tem. Vì ứng dụng miễn phí, tổng trách nhiệm của chúng tôi cho mọi khiếu nại được giới hạn trong phạm vi luật cho phép. Không điều nào trong Điều khoản này giới hạn trách nhiệm mà luật không cho phép giới hạn, và quyền người tiêu dùng của bạn vẫn được giữ nguyên.',
      ],
    },
    {
      id: 'termination',
      title: 'Chấm dứt sử dụng',
      paragraphs: [
        'Bạn có thể ngừng dùng ứng dụng bất cứ lúc nào bằng cách xóa nó. Chúng tôi có thể tạm ngừng hoặc chấm dứt quyền truy cập của bạn nếu bạn vi phạm nghiêm trọng Điều khoản này. Các mục có bản chất cần tiếp tục (như sở hữu, miễn trừ và trách nhiệm) vẫn có hiệu lực sau đó.',
      ],
    },
    {
      id: 'apple',
      title: 'Apple',
      paragraphs: [
        'Điều khoản này là giữa bạn và chúng tôi, không phải Apple. Apple không có nghĩa vụ hỗ trợ hay bảo trì ứng dụng. Nếu ứng dụng không đáp ứng một bảo đảm, bạn có thể yêu cầu Apple hoàn lại giá mua, và Apple không có nghĩa vụ bảo hành nào khác. Chúng tôi, không phải Apple, xử lý các khiếu nại về ứng dụng, gồm trách nhiệm sản phẩm, tuân thủ pháp luật và sở hữu trí tuệ. Apple và các công ty con là bên thụ hưởng thứ ba của Điều khoản này và có thể thực thi chúng đối với bạn. Bạn xác nhận mình không ở quốc gia bị Hoa Kỳ cấm vận hay nằm trong danh sách bên bị hạn chế của Hoa Kỳ.',
      ],
    },
    {
      id: 'law',
      title: 'Luật áp dụng',
      paragraphs: [
        'Điều khoản này chịu sự điều chỉnh của pháp luật Việt Nam, không áp dụng quy tắc xung đột pháp luật. Tòa án tại Việt Nam có thẩm quyền, nhưng điều này không loại bỏ các quyền bắt buộc của người tiêu dùng theo luật nơi bạn sinh sống.',
      ],
    },
    {
      id: 'changes',
      title: 'Thay đổi điều khoản',
      paragraphs: [
        'Chúng tôi có thể cập nhật Điều khoản này, ví dụ khi thêm tính năng. Ngày ở đầu trang cho biết phiên bản mới nhất. Nếu bạn tiếp tục dùng ứng dụng sau thay đổi, bạn chấp nhận Điều khoản mới. Thay đổi quan trọng sẽ được nêu rõ trong ứng dụng hoặc trên trang này.',
      ],
    },
    {
      id: 'contact',
      title: 'Liên hệ',
      paragraphs: ['Nếu có câu hỏi về Điều khoản này, hãy gửi email hoặc gọi:'],
    },
  ],
}

export const TERMS: Record<Lang, Content> = {
  en: { ...CONTENT.en, ...en },
  vi: { ...CONTENT.vi, ...vi },
}
