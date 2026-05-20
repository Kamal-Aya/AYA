// ========================================
// ASSALAM GÖRLITZER INTERKULTURELLER VEREIN E.V.
// Main JavaScript - Universale per tutte le pagine
// Multilingual: DE / EN / AR / FA
// ========================================

// ========================================
// TRANSLATIONS
// ========================================
const translations = {
    de: {
        "nav.home": "Startseite",
        "nav.about": "Über uns",
        "nav.activities": "Aktivitäten",
        "nav.prayer": "Gebetszeiten",
        "nav.events": "Veranstaltungen",
        "nav.gallery": "Galerie",
        "nav.contact": "Kontakt",
        "hero.title": "Assalam Görlitzer interkultureller Verein e.V.",
        "hero.subtitle": "Gemeinschaft · Kultur · Glaube · Integration",
        "hero.description": "Ein Ort der Begegnung in Görlitz. Wir fördern den interkulturellen Dialog, bieten islamische Gebetsräume und unterstützen die Integration durch Bildung und Kultur.",
        "hero.btn1": "Unsere Aktivitäten",
        "hero.btn2": "Kontaktieren Sie uns",
        "about.tag": "Über uns",
        "about.title": "Willkommen bei Assalam",
        "about.desc": "Gemeinsam für eine offene und vielfältige Gesellschaft",
        "about.mission.title": "Unsere Mission",
        "about.mission.text": "Wir schaffen einen Raum für Begegnung, Dialog und gegenseitiges Verständnis zwischen verschiedenen Kulturen und Religionen in Görlitz.",
        "about.islam.title": "Islamische Gemeinschaft",
        "about.islam.text": "Tägliche Gebete, Jumu'a (Freitagsgebet) und islamische Unterweisung für alle Altersgruppen in unseren Räumlichkeiten.",
        "about.dialog.title": "Interkultureller Dialog",
        "about.dialog.text": "Wir öffnen uns für alle Menschen – unabhängig von Herkunft, Religion oder Kultur. Toleranz und Respekt stehen im Mittelpunkt.",
        "about.education.title": "Bildung & Integration",
        "about.education.text": "Sprachkurse, Nachhilfe und kulturelle Bildung fördern die Teilhabe und den erfolgreichen Alltag in Deutschland.",
        "donation.tag": "Spende",
"donation.title": "Unterstützen Sie uns",
"donation.desc": "Ihre Spende hilft uns, unsere Arbeit fortzusetzen",
"donation.iban_label": "IBAN",
"donation.bic_label": "BIC",
"donation.bank_label": "Bank", 
"donation.holder_label": "Kontoinhaber",
"donation.note": "Jede Spende ist steuerlich absetzbar. Wir stellen gerne eine Spendenbescheinigung aus.",
        "stats.members": "Mitglieder",
        "stats.years": "Jahre Erfahrung",
        "stats.activities": "Aktivitäten pro Woche",
        "stats.visitors": "Besucher pro Jahr",
        "activities.tag": "Aktivitäten",
        "activities.title": "Unser Angebot",
        "activities.desc": "Vielfältige Programme für alle Altersgruppen",
        "activities.deutsch.title": "Deutschkurse",
        "activities.deutsch.leader": "Leitung: Herr Andreas",
        "activities.deutsch.text": "Deutschlernen für Anfänger und Fortgeschrittene. Praktischer Alltagsdeutsch für Arbeit, Behörden und Integration.",
        "activities.deutsch.time": "Do, 19:00",
        "activities.deutsch.price": "Kostenlos für alle",
        "activities.arabic.title": "Arabisch für Kinder",
        "activities.arabic.leader": "Leitung: Arabisch-Lehrer",
        "activities.arabic.text": "Spielerisches Arabischlernen für Kinder. Lesen, Schreiben und Grundkenntnisse der arabischen Sprache.",
        "activities.arabic.time": "So, 9:30 - 11:00",
        "activities.arabic.age": "Für Kinder ab 6 Jahren",
        "activities.visits.title": "Besuche & Information",
        "activities.visits.leader": "Für Schulklassen, Vereine & Interessierte",
        "activities.visits.text": "Wir empfangen organisierte Besuche von Schulklassen, anderen Vereinen und allen, die Informationen über unsere Arbeit und den Islam suchen.",
        "activities.visits.time": "Nach Vereinbarung",
        "activities.visits.note": "Alle willkommen",
        "activities.trips.title": "Kulturelle Ausflüge",
        "activities.trips.leader": "Organisiert vom Verein",
        "activities.trips.text": "Besuche von Museen, historischen Stätten und kulturellen Veranstaltungen in der Region.",
        "activities.trips.time": "Monatlich",
        "activities.trips.location": "Sachsen & Umgebung",
        "activities.iftar.title": "Fotor Jama3i (Gemeinschafts-Iftar)",
        "activities.iftar.leader": "Ramadan-Aktivität",
        "activities.iftar.text": "Gemeinschaftliches Fastenbrechen während des Ramadan. Alle sind herzlich eingeladen, gemeinsam zu essen und zu beten.",
        "activities.iftar.time": "Während Ramadan, nach Maghrib",
        "activities.iftar.note": "Alle willkommen",
                "activities.ags.title": "Arbeitsgruppen (AGs)",
        "activities.ags.leader": "2 AGs im Verein geschaffen",
        "activities.ags.text": "Zwei neue Arbeitsgruppen wurden im Jahr 2025 im Verein gegründet, um verschiedene Projekte und Aktivitäten zu organisieren.",
        "activities.ags.detail1": "AG Sport & Freizeit",
        "activities.ags.detail2": "AG Kultur & Bildung",
        "activities.foerderung.title": "Förderverträge",
        "activities.foerderung.leader": "Geförderte Projekte",
        "activities.foerderung.text": "Im Jahr 2025 wurden mehrere Förderverträge abgeschlossen, die unsere kulturellen und bildungspolitischen Aktivitäten unterstützen.",
        "activities.foerderung.detail1": "2 Förderverträge für kulturelle Aktivitäten",
        "activities.foerderung.detail2": "1 Fördervertrag für Sprachkurse",
        "activities.dialog.title": "Interreligiöser Dialog",
        "activities.dialog.leader": "Gespräch Student: Kirche - Islam",
        "activities.dialog.text": "Gespräch mit Pfarrer Naumann, Vorbereitung Gottesdienst, Gottesdienst in der Frauenkirche zum Fest der Kulturen. Herbstputz an der Lutherkirche.",
        "activities.dialog.time": "Ganzjährig",
        "activities.dialog.note": "Frauenkirche & Lutherkirche",
        "activities.kochen.title": "Essen kochen",
        "activities.kochen.leader": "Gemeinschaftsküche",
        "activities.kochen.text": "Gemeinsames Kochen und Essen für Veranstaltungen, Iftar und Feste. Syrischer Stand beim Fest der Kulturen und Sommerfest.",
        "activities.kochen.time": "Bei Veranstaltungen",
        "activities.kochen.note": "Alle willkommen",
        "activities.sport.title": "Sport & Fußball",
        "activities.sport.leader": "Vereinssport",
        "activities.sport.text": "Teilnahme an Hallenfußballcups und Bolzplatzturnieren in Görlitz (Königshufen, Südstadt). Weihnachtsturnier am 20.12.2025.",
        "activities.sport.time": "Regelmäßige Turniere",
        "activities.sport.note": "1 Mannschaft",
        "prayer.tag": "Gebetszeiten",
        "prayer.title": "Gebetszeiten & Jumu'a",
        "prayer.desc": "Tägliche Gebete und Freitagsgebet in unserem Gebetsraum",
        "prayer.daily.title": "Tägliche Gebetszeiten",
        "prayer.note": "Zeiten ändern sich saisonal. Aktuelle Zeiten bitte vor Ort erfragen.",
        "prayer.jumuah.title": "Jumu'a - Freitagsgebet",
        "prayer.jumuah.time_label": "Gebet",
        "prayer.jumuah.location_label": "Ort",
        "prayer.jumuah.location": "Hauptgebetsraum",
        "prayer.jumuah.note": "Alle Brüder sind herzlich willkommen! Bitte pünktlich erscheinen.",
        "events.tag": "Veranstaltungen",
        "events.title": "Kommende Events",
        "events.desc": "Messen, Ausstellungen und kulturelle Highlights",
        "gallery.tag": "Galerie",
        "gallery.title": "Eindrücke aus unserem Verein",
        "gallery.desc": "Moments, Memories and Community",
        "gallery.img1": "Gebetsraum",
        "gallery.img2": "Deutschkurs",
        "gallery.img3": "Kinder Arabisch",
        "gallery.img4": "Jumu'a Gebet",
        "gallery.img5": "Ausflug",
        "gallery.img6": "Tag der offenen Tür",
        "contact.tag": "Kontakt",
        "contact.title": "Kontaktieren Sie uns",
        "contact.desc": "Wir freuen uns auf Ihre Nachricht",
        "contact.address.title": "Adresse",
        "contact.email.title": "E-Mail",
        "contact.phone.title": "Telefon",
        "contact.hours.title": "Öffnungszeiten",
        "contact.hours.text": "Täglich zwischen Maghrib- und Isha-Gebet.\nAndere Zeiten: nach Vereinbarung.",
        "contact.form.name": "Name *",
        "contact.form.email": "E-Mail *",
        "contact.form.subject": "Betreff",
        "contact.form.subjects.general": "Allgemeine Anfrage",
        "contact.form.subjects.membership": "Mitgliedschaft",
        "contact.form.subjects.german": "Deutschkurs",
        "contact.form.subjects.arabic": "Arabisch für Kinder",
        "contact.form.subjects.admin": "Verwaltungshilfe",
        "contact.form.subjects.visit": "Besuch anmelden",
        "contact.form.subjects.donation": "Spende",
        "contact.form.subjects.other": "Andere",
        "contact.form.message": "Nachricht *",
        "contact.form.submit": "Nachricht senden",
        "footer.about": "Assalam Görlitzer interkultureller Verein e.V. Görlitz. Gemeinschaft, Kultur, Glaube und Integration für eine offene Gesellschaft.",
        "footer.links.title": "Quick Links",
        "footer.links.about": "Über uns",
        "footer.links.activities": "Aktivitäten",
        "footer.links.prayer": "Gebetszeiten",
        "footer.links.events": "Veranstaltungen",
        "footer.legal.title": "Rechtliches",
        "footer.legal.imprint": "Impressum",
        "footer.legal.privacy": "Datenschutz",
        "footer.legal.statutes": "Satzung",
        "footer.legal.donate": "Spenden",
        "footer.newsletter.title": "Newsletter",
        "footer.newsletter.desc": "Bleiben Sie informiert über unsere Aktivitäten.",
        "footer.newsletter.placeholder": "Ihre E-Mail",
        "footer.rights": "Alle Rechte vorbehalten.",
        "footer.credit": "Mit",
        "footer.credit2": "für die Gemeinschaft"
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.activities": "Activities",
        "nav.prayer": "Prayer Times",
        "nav.events": "Events",
        "nav.gallery": "Gallery",
        "nav.contact": "Contact",
        "hero.title": "Assalam Görlitz Intercultural Association e.V.",
        "hero.subtitle": "Community · Culture · Faith · Integration",
        "hero.description": "A place of encounter in Görlitz. We promote intercultural dialogue, offer Islamic prayer rooms and support integration through education and culture.",
        "hero.btn1": "Our Activities",
        "hero.btn2": "Contact Us",
        "about.tag": "About Us",
        "about.title": "Welcome to Assalam",
        "about.desc": "Together for an open and diverse society",
        "about.mission.title": "Our Mission",
        "about.mission.text": "We create a space for encounter, dialogue and mutual understanding between different cultures and religions in Görlitz.",
        "about.islam.title": "Islamic Community",
        "about.islam.text": "Daily prayers, Jumu'a (Friday prayer) and Islamic instruction for all age groups in our premises.",
        "about.dialog.title": "Intercultural Dialogue",
        "about.dialog.text": "We are open to all people – regardless of origin, religion or culture. Tolerance and respect are at the center.",
        "about.education.title": "Education & Integration",
        "about.education.text": "Language courses, tutoring and cultural education promote participation and successful everyday life in Germany.",
        "stats.members": "Members",
        "stats.years": "Years of Experience",
        "stats.activities": "Activities per Week",
        "stats.visitors": "Visitors per Year",
        "activities.tag": "Activities",
        "activities.title": "Our Offer",
        "activities.desc": "Diverse programs for all age groups",
        "activities.deutsch.title": "German Courses",
        "activities.deutsch.leader": "Led by: Mr. Andreas",
        "activities.deutsch.text": "Learning German for beginners and advanced learners. Practical everyday German for work, authorities and integration.",
        "activities.deutsch.time": "Tue,19:00",
        "activities.deutsch.price": "Free for everyone",
        "activities.arabic.title": "Arabic for Children",
        "activities.arabic.leader": "Led by: Arabic Teacher",
        "activities.arabic.text": "Playful Arabic learning for children. Reading, writing and basic knowledge of the Arabic language.",
        "activities.arabic.time": "Sun, 9:30 - 11:00",
        "activities.arabic.age": "For ages 6+",
        "activities.visits.title": "Visits & Information",
        "activities.visits.leader": "For school classes, associations & interested parties",
        "activities.visits.text": "We welcome organized visits from school classes, other associations and anyone seeking information about our work and Islam.",
        "activities.visits.time": "By appointment",
        "activities.visits.note": "Everyone welcome",
        "activities.trips.title": "Cultural Excursions",
        "activities.trips.leader": "Organized by the Association",
        "activities.trips.text": "Visits to museums, historical sites and cultural events in the region.",
        "activities.trips.time": "Monthly",
        "activities.trips.location": "Saxony & Surroundings",
        "activities.iftar.title": "Fotor Jama3i (Community Iftar)",
        "activities.iftar.leader": "Ramadan Activity",
        "activities.iftar.text": "Community breaking of fast during Ramadan. Everyone is warmly invited to eat and pray together.",
        "activities.iftar.time": "During Ramadan, after Maghrib",
        "activities.iftar.note": "Everyone welcome",
               "activities.ags.title": "Working Groups (AGs)",
        "activities.ags.leader": "2 AGs created in the association",
        "activities.ags.text": "Two new working groups were founded in the association in 2025 to organize various projects and activities.",
        "activities.ags.detail1": "AG Sport & Leisure",
        "activities.ags.detail2": "AG Culture & Education",
        "activities.foerderung.title": "Funding Contracts",
        "activities.foerderung.leader": "Funded Projects",
        "activities.foerderung.text": "In 2025, several funding contracts were concluded to support our cultural and educational activities.",
        "activities.foerderung.detail1": "2 funding contracts for cultural activities",
        "activities.foerderung.detail2": "1 funding contract for language courses",
        "activities.dialog.title": "Interreligious Dialogue",
        "activities.dialog.leader": "Discussion Student: Church - Islam",
        "activities.dialog.text": "Discussion with Pastor Naumann, preparation of church service, church service in the Frauenkirche for the Festival of Cultures. Autumn cleanup at the Lutherkirche.",
        "activities.dialog.time": "Year-round",
        "activities.dialog.note": "Frauenkirche & Lutherkirche",
        "activities.kochen.title": "Cooking",
        "activities.kochen.leader": "Community Kitchen",
        "activities.kochen.text": "Cooking and eating together for events, Iftar and festivals. Syrian stand at the Festival of Cultures and summer festival.",
        "activities.kochen.time": "At events",
        "activities.kochen.note": "Everyone welcome",
        "activities.sport.title": "Sports & Football",
        "activities.sport.leader": "Club Sports",
        "activities.sport.text": "Participation in indoor football cups and pitch tournaments in Görlitz (Königshufen, Südstadt). Christmas tournament on 20.12.2025.",
        "activities.sport.time": "Regular tournaments",
        "activities.sport.note": "1 team",
        "prayer.tag": "Prayer Times",
        "prayer.title": "Prayer Times & Jumu'a",
        "prayer.desc": "Daily prayers and Friday prayer in our prayer room",
        "prayer.daily.title": "Daily Prayer Times",
        "prayer.note": "Times change seasonally. Please inquire on site for current times.",
        "prayer.jumuah.title": "Jumu'a - Friday Prayer",
        "prayer.jumuah.time_label": "Prayer",
        "prayer.jumuah.location_label": "Location",
        "prayer.jumuah.location": "Main Prayer Room",
        "prayer.jumuah.note": "All brothers are warmly welcome! Please arrive on time.",
        "events.tag": "Events",
        "events.title": "Upcoming Events",
        "events.desc": "Fairs, exhibitions and cultural highlights",
        "gallery.tag": "Gallery",
        "gallery.title": "Impressions from our Association",
        "gallery.desc": "Moments, Memories and Community",
        "gallery.img1": "Prayer Room",
        "gallery.img2": "German Course",
        "gallery.img3": "Children Arabic",
        "gallery.img4": "Jumu'a Prayer",
        "gallery.img5": "Excursion",
        "gallery.img6": "Open Day",
        "contact.tag": "Contact",
        "contact.title": "Contact Us",
        "contact.desc": "We look forward to your message",
        "contact.address.title": "Address",
        "contact.email.title": "Email",
        "contact.phone.title": "Phone",
        "contact.hours.title": "Opening Hours",
        "contact.hours.text": "Every day between Maghrib and Isha prayer.\nOther times: by appointment.",
        "contact.form.name": "Name *",
        "contact.form.email": "Email *",
        "contact.form.subject": "Subject",
        "contact.form.subjects.general": "General Inquiry",
        "contact.form.subjects.membership": "Membership",
        "contact.form.subjects.german": "German Course",
        "contact.form.subjects.arabic": "Arabic for Children",
        "contact.form.subjects.admin": "Administrative Help",
        "contact.form.subjects.visit": "Register a Visit",
        "contact.form.subjects.donation": "Donation",
        "contact.form.subjects.other": "Other",
        "contact.form.message": "Message *",
        "contact.form.submit": "Send Message",
        "footer.about": "Assalam Görlitz Intercultural Association e.V. Görlitz. Community, culture, faith and integration for an open society.",
        "footer.links.title": "Quick Links",
        "footer.links.about": "About Us",
        "footer.links.activities": "Activities",
        "footer.links.prayer": "Prayer Times",
        "footer.links.events": "Events",
        "footer.legal.title": "Legal",
        "footer.legal.imprint": "Imprint",
        "footer.legal.privacy": "Privacy Policy",
        "footer.legal.statutes": "Statutes",
        "footer.legal.donate": "Donations",
        "footer.newsletter.title": "Newsletter",
        "footer.newsletter.desc": "Stay informed about our activities.",
        "footer.newsletter.placeholder": "Your Email",
        "footer.rights": "All rights reserved.",
        "footer.credit": "With",
        "footer.credit2": "for the community",
        "donation.tag": "Donation",
        "donation.title": "Support Us",
        "donation.desc": "Your donation helps us continue our work",
        "donation.iban_label": "IBAN",
        "donation.bic_label": "BIC",
        "donation.bank_label": "Bank",
        "donation.holder_label": "Account Holder",
        "donation.note": "Every donation is tax-deductible. We are happy to issue a donation receipt."
    },
    ar: {
        "nav.home": "الرئيسية",
        "nav.about": "من نحن",
        "nav.activities": "الأنشطة",
        "nav.prayer": "أوقات الصلاة",
        "nav.events": "الفعاليات",
        "nav.gallery": "معرض الصور",
        "nav.contact": "اتصل بنا",
        "hero.title": "جمعية السلام للتعدد الثقافي في غورليتز",
        "hero.subtitle": "مجتمع · ثقافة · إيمان · اندماج",
        "hero.description": "مكان للقاء في غورليتز. نحن نعزز الحوار بين الثقافات، ونقدم أماكن للصلاة الإسلامية، وندعم الاندماج من خلال التعليم والثقافة.",
        "hero.btn1": "أنشطتنا",
        "hero.btn2": "تواصل معنا",
        "about.tag": "من نحن",
        "about.title": "مرحباً بكم في السلام",
        "about.desc": "معاً من أجل مجتمع مفتوح ومتنوع",
        "about.mission.title": "مهمتنا",
        "about.mission.text": "نخلق مساحة للقاء والحوار والتفاهم المتبادل بين الثقافات والأديان المختلفة في غورليتز.",
        "about.islam.title": "المجتمع الإسلامي",
        "about.islam.text": "صلوات يومية، صلاة الجمعة، وتعليم إسلامي لجميع الفئات العمرية في مقرنا.",
        "about.dialog.title": "الحوار بين الثقافات",
        "about.dialog.text": "نحن مفتوحون للجميع – بغض النظر عن الأصل أو الدين أو الثقافة. التسامح والاحترام هما في المقام الأول.",
        "about.education.title": "التعليم والاندماج",
        "about.education.text": "دورات اللغة، والدروس الخصوصية، والتعليم الثقافي تعزز المشاركة والحياة اليومية الناجحة في ألمانيا.",
        "stats.members": "عضو",
        "stats.years": "سنوات الخبرة",
        "stats.activities": "أنشطة أسبوعية",
        "stats.visitors": "زائر سنوياً",
        "activities.tag": "الأنشطة",
        "activities.title": "عروضنا",
        "activities.desc": "برامج متنوعة لجميع الفئات العمرية",
        "activities.deutsch.title": "دورات الألمانية",
        "activities.deutsch.leader": "القائد: السيد أندرياس",
        "activities.deutsch.text": "تعلم الألمانية للمبتدئين والمتقدمين. ألمانية عملية للحياة اليومية والعمل والسلطات والاندماج.",
        "activities.deutsch.time": "الخميس الساعة 19:00",
        "activities.deutsch.price": "مجاني للجميع",
        "activities.arabic.title": "العربية للأطفال",
        "activities.arabic.leader": "القائد: معلم اللغة العربية",
        "activities.arabic.text": "تعلم اللغة العربية بأسلوب ممتع للأطفال. القراءة والكتابة والمعرفة الأساسية باللغة العربية.",
        "activities.arabic.time": "الأحد، 10:30 - 11:00",
        "activities.arabic.age": "للأعمار من 6 سنوات فما فوق",
        "activities.visits.title": "الزيارات والمعلومات",
        "activities.visits.leader": "للفصول الدراسية والجمعيات والمهتمين",
        "activities.visits.text": "نرحب بالزيارات المنظمة من الفصول الدراسية والجمعيات الأخرى وجميع الباحثين عن معلومات حول عملنا والإسلام.",
        "activities.visits.time": "حسب الموعد",
        "activities.visits.note": "الجميع مرحب بهم",
        "activities.trips.title": "الرحلات الثقافية",
        "activities.trips.leader": "منظمة من الجمعية",
        "activities.trips.text": "زيارات المتاحف، والمواقع التاريخية، والفعاليات الثقافية في المنطقة.",
        "activities.trips.time": "شهرياً",
        "activities.trips.location": "ساكسونيا والمنطقة المحيطة",
        "activities.iftar.title": "فطور جماعي (إفتر رمضان)",
        "activities.iftar.leader": "نشاط رمضان",
        "activities.iftar.text": "إفطار جماعي خلال شهر رمضان. الجميع مدعوون للأكل والصلاة معاً.",
        "activities.iftar.time": "خلال رمضان، بعد المغرب",
        "activities.iftar.note": "الجميع مرحب بهم",
                "activities.ags.title": "مجموعات العمل (AGs)",
        "activities.ags.leader": "تم إنشاء مجموعتين عمل في الجمعية",
        "activities.ags.text": "تم تأسيس مجموعتي عمل جديدتين في الجمعية عام 2025 لتنظيم مشاريع وأنشطة متنوعة.",
        "activities.ags.detail1": "مجموعة الرياضة والترفيه",
        "activities.ags.detail2": "مجموعة الثقافة والتعليم",
        "activities.foerderung.title": "عقود التمويل",
        "activities.foerderung.leader": "المشاريع الممونة",
        "activities.foerderung.text": "في عام 2025، تم إبرام عقود تمويل متعددة لدعم أنشطتنا الثقافية والتعليمية.",
        "activities.foerderung.detail1": "عقدا تمويل للأنشطة الثقافية",
        "activities.foerderung.detail2": "عقد تمويل واحد لدورات اللغة",
        "activities.dialog.title": "الحوار بين الأديان",
        "activities.dialog.leader": "نقاش الطالب: الكنيسة - الإسلام",
        "activities.dialog.text": "نقاش مع القس ناومان، تحضير القداس، القداس في كنيسة فراونكيرش لمهرجان الثقافات. تنظيف خريفي في كنيسة لوثر.",
        "activities.dialog.time": "على مدار العام",
        "activities.dialog.note": "كنيسة فراونكيرش وكنيسة لوثر",
        "activities.kochen.title": "الطبخ",
        "activities.kochen.leader": "المطبخ الجماعي",
        "activities.kochen.text": "الطبخ والأكل معاً للفعاليات والإفطار والمهرجانات. جناح سوري في مهرجان الثقافات والمهرجان الصيفي.",
        "activities.kochen.time": "خلال الفعاليات",
        "activities.kochen.note": "الجميع مرحب بهم",
        "activities.sport.title": "الرياضة وكرة القدم",
        "activities.sport.leader": "رياضة النادي",
        "activities.sport.text": "المشاركة في كؤوس كرة القدم الداخلية وبطولات الملعب في غورليتز (كينغشوفن، زودشتات). بطولة عيد الميلاد في 20.12.2025.",
        "activities.sport.time": "بطولات منتظمة",
        "activities.sport.note": "فريق واحد",
        "prayer.tag": "أوقات الصلاة",
        "prayer.title": "أوقات الصلاة والجمعة",
        "prayer.desc": "الصلوات اليومية وصلاة الجمعة في مصلينا",
        "prayer.daily.title": "أوقات الصلاة اليومية",
        "prayer.note": "تتغير الأوقات موسمياً. يرجى الاستفسار في الموقع عن الأوقات الحالية.",
        "prayer.jumuah.title": "صلاة الجمعة",
        "prayer.jumuah.time_label": "الصلاة",
        "prayer.jumuah.location_label": "المكان",
        "prayer.jumuah.location": "مصلى الرئيسي",
        "prayer.jumuah.note": "جميع الإخوة مرحب بهم! يرجى الحضور في الوقت المحدد.",
        "events.tag": "الفعاليات",
        "events.title": "الفعاليات القادمة",
        "events.desc": "معارض وفعاليات ثقافية بارزة",
        "gallery.tag": "معرض الصور",
        "gallery.title": "انطباعات من جمعيتنا",
        "gallery.desc": "لحظات، ذكريات ومجتمع",
        "gallery.img1": "مصلى الصلاة",
        "gallery.img2": "دورة الألمانية",
        "gallery.img3": "العربية للأطفال",
        "gallery.img4": "صلاة الجمعة",
        "gallery.img5": "رحلة",
        "gallery.img6": "يوم الانفتاح",
        "contact.tag": "اتصل بنا",
        "contact.title": "تواصل معنا",
        "contact.desc": "نحن نتطلع لرسالتك",
        "contact.address.title": "العنوان",
        "contact.email.title": "البريد الإلكتروني",
        "contact.phone.title": "الهاتف",
        "contact.hours.title": "ساعات العمل",
        "contact.hours.text": "كل يوم بين صلاتي المغرب والعشاء.\nفي أوقات أخرى: حسب الموعد.",
        "contact.form.name": "الاسم *",
        "contact.form.email": "البريد الإلكتروني *",
        "contact.form.subject": "الموضوع",
        "contact.form.subjects.general": "استفسار عام",
        "contact.form.subjects.membership": "العضوية",
        "contact.form.subjects.german": "دورة الألمانية",
        "contact.form.subjects.arabic": "العربية للأطفال",
        "contact.form.subjects.admin": "المساعدة الإدارية",
        "contact.form.subjects.visit": "تسجيل زيارة",
        "contact.form.subjects.donation": "تبرع",
        "contact.form.subjects.other": "أخرى",
        "contact.form.message": "الرسالة *",
        "contact.form.submit": "إرسال الرسالة",
        "footer.about": "جمعية السلام للتعدد الثقافي في غورليتز. مجتمع وثقافة وإيمان واندماج من أجل مجتمع مفتوح.",
        "footer.links.title": "روابط سريعة",
        "footer.links.about": "من نحن",
        "footer.links.activities": "الأنشطة",
        "footer.links.prayer": "أوقات الصلاة",
        "footer.links.events": "الفعاليات",
        "footer.legal.title": "قانوني",
        "footer.legal.imprint": "بصمة",
        "footer.legal.privacy": "سياسة الخصوصية",
        "footer.legal.statutes": "النظام الأساسي",
        "footer.legal.donate": "التبرعات",
        "footer.newsletter.title": "النشرة الإخبارية",
        "footer.newsletter.desc": "ابقَ على اطلاع بأنشطتنا.",
        "footer.newsletter.placeholder": "بريدك الإلكتروني",
        "footer.rights": "جميع الحقوق محفوظة.",
        "footer.credit": "بـ",
        "footer.credit2": "من أجل المجتمع",
        "donation.tag": "تبرع",
        "donation.title": "ادعمنا",
        "donation.desc": "تبرعك يساعدنا على مواصلة عملنا",
        "donation.iban_label": "رقم الحساب الدولي",
        "donation.bic_label": "رمز البنك",
        "donation.bank_label": "البنك",
        "donation.holder_label": "صاحب الحساب",
        "donation.note": "كل تبرع معفى من الضرائب. نحن سعداء بإصدار شهادة تبرع."
    },
    fa: {
        "nav.home": "صفحه اصلی",
        "nav.about": "درباره ما",
        "nav.activities": "فعالیت‌ها",
        "nav.prayer": "اوقات نماز",
        "nav.events": "رویدادها",
        "nav.gallery": "گالری",
        "nav.contact": "تماس با ما",
        "hero.title": "انجمن بین‌المللی سلام گورلیتز",
        "hero.subtitle": "جامعه · فرهنگ · ایمان · یکپارچگی",
        "hero.description": "مکانی برای دیدار در گورلیتز. ما گفتگوی بین‌فرهنگی را ترویج می‌کنیم، فضاهای نماز اسلامی ارائه می‌دهیم و از طریق آموزش و فرهنگ از یکپارچگی حمایت می‌کنیم.",
        "hero.btn1": "فعالیت‌های ما",
        "hero.btn2": "با ما تماس بگیرید",
        "about.tag": "درباره ما",
        "about.title": "به سلام خوش آمدید",
        "about.desc": "با هم برای جامعه‌ای باز و متنوع",
        "about.mission.title": "مأموریت ما",
        "about.mission.text": "ما فضایی برای دیدار، گفتگو و درک متقابل بین فرهنگ‌ها و ادیان مختلف در گورلیتز ایجاد می‌کنیم.",
        "about.islam.title": "جامعه اسلامی",
        "about.islam.text": "نمازهای روزانه، نماز جمعه و آموزش اسلامی برای تمام گروه‌های سنی در محل ما.",
        "about.dialog.title": "گفتگوی بین‌فرهنگی",
        "about.dialog.text": "ما به همه افراد باز هستیم – صرف‌نظر از منشأ، دین یا فرهنگ. تحمل و احترام در مرکز توجه قرار دارند.",
        "about.education.title": "آموزش و یکپارچگی",
        "about.education.text": "دوره‌های زبان، تدریس خصوصی و آموزش فرهنگی مشارکت و زندگی روزمره موفق در آلمان را ترویج می‌کنند.",
        "stats.members": "عضو",
        "stats.years": "سال تجربه",
        "stats.activities": "فعالیت در هفته",
        "stats.visitors": "بازدیدکننده در سال",
        "activities.tag": "فعالیت‌ها",
        "activities.title": "خدمات ما",
        "activities.desc": "برنامه‌های متنوع برای تمام گروه‌های سنی",
        "activities.deutsch.title": "دوره‌های آلمانی",
        "activities.deutsch.leader": "سرپرست: آقای آندریاس",
        "activities.deutsch.text": "یادگیری آلمانی برای مبتدیان و پیشرفته‌ها. آلمانی عملی برای کار، ادارات و یکپارچگی.",
        "activities.deutsch.time": "پنج‌شنبه ساعت ۱۹:۰۰",
        "activities.deutsch.price": "رایگان برای همه",
        "activities.arabic.title": "عربی برای کودکان",
        "activities.arabic.leader": "سرپرست: معلم عربی",
        "activities.arabic.text": "یادگیری عربی سرگرم‌کننده برای کودکان. خواندن، نوشتن و دانش پایه زبان عربی.",
        "activities.arabic.time": "یکشنبه، ۱۰:۳۰ - ۱۱:۰۰",
        "activities.arabic.age":  "برای سنین بالای ۶ سال",
        "activities.visits.title": "بازدیدها و اطلاعات",
        "activities.visits.leader": "برای کلاس‌های مدرسه، انجمن‌ها و علاقه‌مندان",
        "activities.visits.text": "ما از بازدیدهای سازمان‌یافته کلاس‌های مدرسه، انجمن‌های دیگر و هر کسی که به دنبال اطلاعات در مورد کار ما و اسلام است، استقبال می‌کنیم.",
        "activities.visits.time": "با قرار قبلی",
        "activities.visits.note": "همه خوش آمدند",
        "activities.trips.title": "گردش‌های فرهنگی",
        "activities.trips.leader": "سازمان‌دهی توسط انجمن",
        "activities.trips.text": "بازدید از موزه‌ها، مکان‌های تاریخی و رویدادهای فرهنگی در منطقه.",
        "activities.trips.time": "ماهانه",
        "activities.trips.location": "زاکسن و اطراف",
        "activities.iftar.title": "افطار جمعی (افطار رمضان)",
        "activities.iftar.leader": "فعالیت رمضان",
        "activities.iftar.text": "افطار جمعی در ماه رمضان. همه به گرمی برای غذا خوردن و نماز خواندن با هم دعوت شده‌اند.",
        "activities.iftar.time": "در طول رمضان، بعد از مغرب",
        "activities.iftar.note": "همه خوش آمدند",
                "activities.ags.title": "گروه‌های کاری (AGs)",
        "activities.ags.leader": "۲ گروه کاری در انجمن ایجاد شد",
        "activities.ags.text": "دو گروه کاری جدید در سال ۲۰۲۵ در انجمن تأسیس شدند تا پروژه‌ها و فعالیت‌های مختلفی را سازماندهی کنند.",
        "activities.ags.detail1": "گروه ورزش و تفریح",
        "activities.ags.detail2": "گروه فرهنگ و آموزش",
        "activities.foerderung.title": "قراردادهای تأمین مالی",
        "activities.foerderung.leader": "پروژه‌های تأمین مالی شده",
        "activities.foerderung.text": "در سال ۲۰۲۵، چندین قرارداد تأمین مالی منعقد شد تا فعالیت‌های فرهنگی و آموزشی ما را حمایت کند.",
        "activities.foerderung.detail1": "۲ قرارداد تأمین مالی برای فعالیت‌های فرهنگی",
        "activities.foerderung.detail2": "۱ قرارداد تأمین مالی برای دوره‌های زبان",
        "activities.dialog.title": "گفتگوی بین‌ادینی",
        "activities.dialog.leader": "گفتگوی دانشجو: کلیسا - اسلام",
        "activities.dialog.text": "گفتگو با کشیش ناومان، آماده‌سازی مراسم عبادت، مراسم عبادت در کلیسای فراونکیرش برای جشنواره فرهنگ‌ها. پاکسازی پاییزی در کلیسای لوثر.",
        "activities.dialog.time": "تمام سال",
        "activities.dialog.note": "کلیسای فراونکیرش و کلیسای لوثر",
        "activities.kochen.title": "آشپزی",
        "activities.kochen.leader": "آشپزخانه جمعی",
        "activities.kochen.text": "آشپزی و غذا خوردن مشترک برای رویدادها، افطار و جشنواره‌ها. غرفه سوری در جشنواره فرهنگ‌ها و جشنواره تابستانی.",
        "activities.kochen.time": "در رویدادها",
        "activities.kochen.note": "همه خوش آمدند",
        "activities.sport.title": "ورزش و فوتبال",
        "activities.sport.leader": "ورزش انجمن",
        "activities.sport.text": "شرکت در جام‌های فوتبال سالنی و مسابقات زمین در گورلیتز (کینگشوفن، زودشتات). مسابقه کریسمس در ۲۰.۱۲.۲۰۲۵.",
        "activities.sport.time": "مسابقات منظم",
        "activities.sport.note": "۱ تیم",
        "prayer.tag": "اوقات نماز",
        "prayer.title": "اوقات نماز و جمعه",
        "prayer.desc": "نمازهای روزانه و نماز جمعه در نمازخانه ما",
        "prayer.daily.title": "اوقات نماز روزانه",
        "prayer.note": "اوقات فصلی تغییر می‌کنند. لطفاً برای اوقات فعلی در محل استعلام کنید.",
        "prayer.jumuah.title": "نماز جمعه",
        "prayer.jumuah.time_label": "نماز",
        "prayer.jumuah.location_label": "مکان",
        "prayer.jumuah.location": "نمازخانه اصلی",
        "prayer.jumuah.note": "همه برادران به گرمی خوش آمدند! لطفاً به موقع حاضر شوید.",
        "events.tag": "رویدادها",
        "events.title": "رویدادهای پیش رو",
        "events.desc": "نمایشگاه‌ها و برجسته‌های فرهنگی",
        "gallery.tag": "گالری",
        "gallery.title": "تصاویر از انجمن ما",
        "gallery.desc": "لحظات، خاطرات و جامعه",
        "gallery.img1": "نمازخانه",
        "gallery.img2": "دوره آلمانی",
        "gallery.img3": "عربی کودکان",
        "gallery.img4": "نماز جمعه",
        "gallery.img5": "گردش",
        "gallery.img6": "روز باز",
        "contact.tag": "تماس با ما",
        "contact.title": "با ما تماس بگیرید",
        "contact.desc": "منتظر پیام شما هستیم",
        "contact.address.title": "آدرس",
        "contact.email.title": "ایمیل",
        "contact.phone.title": "تلفن",
        "contact.hours.title": "ساعات کار",
        "contact.hours.text": "هر روز بین نماز مغرب و عشاء.\nساعات دیگر: با هماهنگی قبلی.",
        "contact.form.name": "نام *",
        "contact.form.email": "ایمیل *",
        "contact.form.subject": "موضوع",
        "contact.form.subjects.general": "استعلام عمومی",
        "contact.form.subjects.membership": "عضویت",
        "contact.form.subjects.german": "دوره آلمانی",
        "contact.form.subjects.arabic": "عربی برای کودکان",
        "contact.form.subjects.admin": "کمک اداری",
        "contact.form.subjects.visit": "ثبت بازدید",
        "contact.form.subjects.donation": "کمک مالی",
        "contact.form.subjects.other": "سایر",
        "contact.form.message": "پیام *",
        "contact.form.submit": "ارسال پیام",
        "footer.about": "انجمن بین‌المللی سلام گورلیتز. جامعه، فرهنگ، ایمان و یکپارچگی برای جامعه‌ای باز.",
        "footer.links.title": "لینک‌های سریع",
        "footer.links.about": "درباره ما",
        "footer.links.activities": "فعالیت‌ها",
        "footer.links.prayer": "اوقات نماز",
        "footer.links.events": "رویدادها",
        "footer.legal.title": "قانونی",
        "footer.legal.imprint": "بصمت",
        "footer.legal.privacy": "حریم خصوصی",
        "footer.legal.statutes": "اساسنامه",
        "footer.legal.donate": "کمک‌های مالی",
        "footer.newsletter.title": "خبرنامه",
        "footer.newsletter.desc": "از فعالیت‌های ما مطلع شوید.",
        "footer.newsletter.placeholder": "ایمیل شما",
        "footer.rights": "تمامی حقوق محفوظ است.",
        "footer.credit": "با",
        "footer.credit2": "برای جامعه",
                "donation.tag": "کمک مالی",
        "donation.title": "از ما حمایت کنید",
        "donation.desc": "کمک مالی شما به ما کمک می‌کند کار خود را ادامه دهیم",
        "donation.iban_label": "شماره حساب بین‌المللی",
        "donation.bic_label": "کد بانک",
        "donation.bank_label": "بانک",
        "donation.holder_label": "صاحب حساب",
        "donation.note": "هر کمک مالی از مالیات معاف است. ما با کمال میل رسید کمک مالی صادر می‌کنیم."
    },
        pl: {
        "nav.home": "Strona główna",
        "nav.about": "O nas",
        "nav.activities": "Działalność",
        "nav.prayer": "Czasy modlitw",
        "nav.events": "Wydarzenia",
        "nav.gallery": "Galeria",
        "nav.contact": "Kontakt",
        "hero.title": "Stowarzyszenie Międzykulturowe Assalam Görlitz e.V.",
        "hero.subtitle": "Wspólnota · Kultura · Wiara · Integracja",
        "hero.description": "Miejsce spotkań w Görlitz. Promujemy dialog międzykulturowy, oferujemy islamskie pomieszczenia modlitewne i wspieramy integrację poprzez edukację i kulturę.",
        "hero.btn1": "Nasza działalność",
        "hero.btn2": "Skontaktuj się z nami",
        "about.tag": "O nas",
        "about.title": "Witamy w Assalam",
        "about.desc": "Razem dla otwartego i zróżnicowanego społeczeństwa",
        "about.mission.title": "Nasza misja",
        "about.mission.text": "Tworzymy przestrzeń do spotkań, dialogu i wzajemnego zrozumienia między różnymi kulturami i religiami w Görlitz.",
        "about.islam.title": "Wspólnota islamska",
        "about.islam.text": "Codzienne modlitwy, Jumu'a (modlitwa piątkowa) i nauka islamu dla wszystkich grup wiekowych w naszych pomieszczeniach.",
        "about.dialog.title": "Dialog międzykulturowy",
        "about.dialog.text": "Jesteśmy otwarci na wszystkich ludzi – niezależnie od pochodzenia, religii czy kultury. Tolerancja i szacunek są najważniejsze.",
        "about.education.title": "Edukacja i integracja",
        "about.education.text": "Kursy językowe, korepetycje i edukacja kulturalna sprzyjają uczestnictwu i udanemu życiu codziennemu w Niemczech.",
        "donation.tag": "Darowizna",
        "donation.title": "Wesprzyj nas",
        "donation.desc": "Twój datek pomaga nam kontynuować naszą pracę",
        "donation.iban_label": "IBAN",
        "donation.bic_label": "BIC",
        "donation.bank_label": "Bank",
        "donation.holder_label": "Właściciel konta",
        "donation.note": "Każda darowizna jest odliczana od podatku. Chętnie wystawimy potwierdzenie darowizny.",
        "activities.tag": "Działalność",
        "activities.title": "Nasza oferta",
        "activities.desc": "Zróżnicowane programy dla wszystkich grup wiekowych",
        "activities.deutsch.title": "Kursy niemieckiego",
        "activities.deutsch.leader": "Prowadzący: Pan Andreas",
        "activities.deutsch.text": "Nauka języka niemieckiego dla początkujących i zaawansowanych. Praktyczny niemiecki na co dzień do pracy, urzędów i integracji.",
        "activities.deutsch.time": "Czw, 19:00",
        "activities.deutsch.price": "Bezpłatne dla wszystkich",
        "activities.arabic.title": "Arabski dla dzieci",
        "activities.arabic.leader": "Prowadzący: Nauczyciel arabskiego",
        "activities.arabic.text": "Zabawna nauka języka arabskiego dla dzieci. Czytanie, pisanie i podstawowa znajomość języka arabskiego.",
        "activities.arabic.time": "Niedz, 9:30 - 11:00",
        "activities.arabic.age": "Dla dzieci od 6 lat",
        "activities.visits.title": "Wizyty i informacje",
        "activities.visits.leader": "Dla klas szkolnych, stowarzyszeń i zainteresowanych",
        "activities.visits.text": "Zapraszamy zorganizowane wizyty klas szkolnych, innych stowarzyszeń i wszystkich poszukujących informacji o naszej pracy i islamie.",
        "activities.visits.time": "Po uzgodnieniu",
        "activities.visits.note": "Wszyscy są mile widziani",
        "activities.trips.title": "Wycieczki kulturalne",
        "activities.trips.leader": "Organizowane przez stowarzyszenie",
        "activities.trips.text": "Zwiedzanie muzeów, zabytkowych miejsc i wydarzeń kulturalnych w regionie.",
        "activities.trips.time": "Miesięcznie",
        "activities.trips.location": "Saksonia i okolice",
        "activities.iftar.title": "Wspólne iftar (wspólne łamanie postu)",
        "activities.iftar.leader": "Aktywność ramadanowa",
        "activities.iftar.text": "Wspólne łamanie postu w czasie Ramadanu. Wszyscy są serdecznie zaproszeni do wspólnego jedzenia i modlitwy.",
        "activities.iftar.time": "W czasie Ramadanu, po Maghrib",
        "activities.iftar.note": "Wszyscy są mile widziani",
                "activities.ags.title": "Grupy robocze (AG)",
        "activities.ags.leader": "2 AG utworzone w stowarzyszeniu",
        "activities.ags.text": "W 2025 roku w stowarzyszeniu powstały dwie nowe grupy robocze w celu organizacji różnych projektów i działań.",
        "activities.ags.detail1": "AG Sport & Rekreacja",
        "activities.ags.detail2": "AG Kultura & Edukacja",
        "activities.foerderung.title": "Umowy o dofinansowanie",
        "activities.foerderung.leader": "Projekty dofinansowane",
        "activities.foerderung.text": "W 2025 roku zawarto kilka umów o dofinansowanie wspierających nasze działania kulturalne i edukacyjne.",
        "activities.foerderung.detail1": "2 umowy o dofinansowanie działań kulturalnych",
        "activities.foerderung.detail2": "1 umowa o dofinansowanie kursów językowych",
        "activities.dialog.title": "Dialog międzyreligijny",
        "activities.dialog.leader": "Rozmowa studenta: Kościół - Islam",
        "activities.dialog.text": "Rozmowa z pastorem Naumannem, przygotowanie nabożeństwa, nabożeństwo w Frauenkirche na Festiwalu Kultur. Jesienne sprzątanie przy Lutherkirche.",
        "activities.dialog.time": "Cały rok",
        "activities.dialog.note": "Frauenkirche & Lutherkirche",
        "activities.kochen.title": "Gotowanie",
        "activities.kochen.leader": "Kuchnia wspólnotowa",
        "activities.kochen.text": "Wspólne gotowanie i jedzenie na wydarzeniach, iftarze i festiwalach. Syryjski stojak na Festiwalu Kultur i festiwalu letnim.",
        "activities.kochen.time": "Podczas wydarzeń",
        "activities.kochen.note": "Wszyscy są mile widziani",
        "activities.sport.title": "Sport i piłka nożna",
        "activities.sport.leader": "Sport stowarzyszenia",
        "activities.sport.text": "Udział w halowych turniejach piłki nożnej i turniejach boiskowych w Görlitz (Königshufen, Südstadt). Turniej świąteczny 20.12.2025.",
        "activities.sport.time": "Regularne turnieje",
        "activities.sport.note": "1 drużyna",
        "prayer.tag": "Czasy modlitw",
        "prayer.title": "Czasy modlitw i Jumu'a",
        "prayer.desc": "Codzienne modlitwy i modlitwa piątkowa w naszym pomieszczeniu modlitewnym",
        "prayer.daily.title": "Codzienne czasy modlitw",
        "prayer.note": "Czasy zmieniają się sezonowo. Aktualne czasy proszę sprawdzić na miejscu.",
        "prayer.jumuah.title": "Jumu'a - modlitwa piątkowa",
        "prayer.jumuah.time_label": "Modlitwa",
        "prayer.jumuah.location_label": "Miejsce",
        "prayer.jumuah.location": "Główne pomieszczenie modlitewne",
        "prayer.jumuah.note": "Wszyscy bracia są serdecznie witani! Prosimy o punktualne przybycie.",
        "events.tag": "Wydarzenia",
        "events.title": "Nadchodzące wydarzenia",
        "events.desc": "Targi, wystawy i kulturalne wydarzenia",
        "gallery.tag": "Galeria",
        "gallery.title": "Wrażenia z naszego stowarzyszenia",
        "gallery.desc": "Chwile, wspomnienia i wspólnota",
        "gallery.img1": "Pomieszczenie modlitewne",
        "gallery.img2": "Kurs niemieckiego",
        "gallery.img3": "Arabski dla dzieci",
        "gallery.img4": "Modlitwa Jumu'a",
        "gallery.img5": "Wycieczka",
        "gallery.img6": "Dzień otwarty",
        "contact.tag": "Kontakt",
        "contact.title": "Skontaktuj się z nami",
        "contact.desc": "Czekamy na Twoją wiadomość",
        "contact.address.title": "Adres",
        "contact.email.title": "E-mail",
        "contact.phone.title": "Telefon",
        "contact.hours.title": "Godziny otwarcia",
        "contact.hours.text": "Codziennie między modlitwą Maghrib a Isza.\nInne godziny: po uzgodnieniu.",
        "contact.form.name": "Imię *",
        "contact.form.email": "E-mail *",
        "contact.form.subject": "Temat",
        "contact.form.subjects.general": "Zapytanie ogólne",
        "contact.form.subjects.membership": "Członkostwo",
        "contact.form.subjects.german": "Kurs niemieckiego",
        "contact.form.subjects.arabic": "Arabski dla dzieci",
        "contact.form.subjects.admin": "Pomoc administracyjna",
        "contact.form.subjects.visit": "Zgłoś wizytę",
        "contact.form.subjects.donation": "Darowizna",
        "contact.form.subjects.other": "Inne",
        "contact.form.message": "Wiadomość *",
        "contact.form.submit": "Wyślij wiadomość",
        "footer.about": "Stowarzyszenie Międzykulturowe Assalam Görlitz e.V. Görlitz. Wspólnota, kultura, wiara i integracja dla otwartego społeczeństwa.",
        "footer.links.title": "Szybkie linki",
        "footer.links.about": "O nas",
        "footer.links.activities": "Działalność",
        "footer.links.prayer": "Czasy modlitw",
        "footer.links.events": "Wydarzenia",
        "footer.legal.title": "Prawne",
        "footer.legal.imprint": "Impressum",
        "footer.legal.privacy": "Polityka prywatności",
        "footer.legal.statutes": "Statut",
        "footer.legal.donate": "Darowizny",
        "footer.newsletter.title": "Newsletter",
        "footer.newsletter.desc": "Bądź na bieżąco z naszą działalnością.",
        "footer.newsletter.placeholder": "Twój e-mail",
        "footer.rights": "Wszelkie prawa zastrzeżone.",
        "footer.credit": "Z",
        "footer.credit2": "dla wspólnoty"
    }
};

// RTL Languages
const rtlLanguages = ['ar', 'fa'];

// Current language
let currentLang = localStorage.getItem('assalam-lang') || 'de';

// ========================================
// LANGUAGE SWITCHER
// ========================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('assalam-lang', lang);

    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';

    // Update body class
    document.body.className = document.body.className.replace(/lang-[a-z]{2}/g, '').trim();
    document.body.classList.add('lang-' + lang);

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            const text = translations[lang][key].replace(/\n/g, '<br>');
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.innerHTML = text;
            }
        }
    });

    // Update select options
    document.querySelectorAll('select option[data-i18n]').forEach(opt => {
        const key = opt.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            opt.textContent = translations[lang][key];
        }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update language button text
    const langBtnSpan = document.querySelector('.current-lang');
    if (langBtnSpan) {
        langBtnSpan.textContent = lang.toUpperCase();
    }

    // Update active state in dropdown
    document.querySelectorAll('.lang-dropdown button').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Re-render dynamic content
    if (document.getElementById('eventsContainer')) renderEvents();
    if (document.getElementById('contactInfo')) renderContactInfo();
    loadVersteltung();
}

// ========================================
// MOBILE NAVIGATION
// ========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ========================================
// LANGUAGE DROPDOWN
// ========================================
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');

if (langBtn && langDropdown) {
    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
    });

    document.querySelectorAll('.lang-dropdown button').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('active');
        });
    });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
let lastScroll = 0;

if (navbar) {
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });
}

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// ANIMATED COUNTERS (Stats Section) - only on index
// ========================================
const counters = document.querySelectorAll('.stat-number');
let countersStarted = false;

function startCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    });
}

const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                startCounters();
                countersStarted = true;
            }
        });
    }, { threshold: 0.5 });
    statsObserver.observe(statsSection);
}

// ========================================
// SCROLL ANIMATIONS (Fade In)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.about-card, .activity-card, .event-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    fadeObserver.observe(el);
});

// ========================================
// PRAYER TIMES FROM JSON (times_2026_gorlitz.json)
// ========================================
let prayerTimesData = null;

async function loadPrayerTimes() {
    // Check if prayer elements exist on this page
    const fajrEl = document.getElementById('fajr');
    if (!fajrEl) return; // Skip if not on prayer page

    try {
        const response = await fetch('times_2026_gorlitz.json');
        if (!response.ok) {
            throw new Error('Failed to load prayer times');
        }
        const data = await response.json();

        // Support both formats: array of objects or object with prayer_times
        if (Array.isArray(data)) {
            prayerTimesData = data;
        } else if (data.prayer_times) {
            prayerTimesData = data.prayer_times;
        } else {
            prayerTimesData = data;
        }

        // Get today's date
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();

        // Try different date formats
        const dateKey1 = `${day}-${month}-${year}`;
        const dateKey2 = `${year}-${month}-${day}`;

        let todayTimes = null;

        // If array format
        if (Array.isArray(prayerTimesData)) {
            todayTimes = prayerTimesData.find(item => 
                item.Date === dateKey2 || item.Miladi === dateKey1
            );
        } else {
            // If object format with date keys
            todayTimes = prayerTimesData[dateKey1] || prayerTimesData[dateKey2];
        }

        // Fallback to first available day
        if (!todayTimes) {
            if (Array.isArray(prayerTimesData)) {
                todayTimes = prayerTimesData[0];
            } else {
                todayTimes = Object.values(prayerTimesData)[0];
            }
        }

        if (todayTimes) {
            // Map fields (handle both naming conventions)
            const fajr = todayTimes.Fajr || todayTimes.fajr;
            const duhr = todayTimes.Dhuhr || todayTimes.Duhr || todayTimes.duhr;
            const asr = todayTimes.Asr || todayTimes.asr;
            const maghrib = todayTimes.Maghrib || todayTimes.maghrib;
            const isha = todayTimes.Isha || todayTimes.isha;
            const hijri = todayTimes.Hijri || todayTimes.hijri;

            if (fajr) fajrEl.textContent = fajr;
            if (duhr) document.getElementById('duhr').textContent = duhr;
            if (asr) document.getElementById('asr').textContent = asr;
            if (maghrib) document.getElementById('maghrib').textContent = maghrib;
            if (isha) document.getElementById('isha').textContent = isha;

            // Display Hijri date
            const hijriDateEl = document.getElementById('hijriDate');
            if (hijriDateEl && hijri) {
                hijriDateEl.textContent = hijri;
                hijriDateEl.style.display = 'inline-block';
            } else if (hijriDateEl) {
                hijriDateEl.style.display = 'none';
            }

            // Highlight current prayer time
            if (fajr && duhr && asr && maghrib && isha) {
                highlightCurrentPrayer({
                    fajr: fajr,
                    duhr: duhr,
                    asr: asr,
                    maghrib: maghrib,
                    isha: isha
                });
            }
        }
    } catch (error) {
        console.error('Error loading prayer times:', error);
        // Fallback static times
        if (fajrEl) fajrEl.textContent = '02:26';
        const duhrEl = document.getElementById('duhr');
        const asrEl = document.getElementById('asr');
        const maghribEl = document.getElementById('maghrib');
        const ishaEl = document.getElementById('isha');
        if (duhrEl) duhrEl.textContent = '12:56';
        if (asrEl) asrEl.textContent = '17:06';
        if (maghribEl) maghribEl.textContent = '20:39';
        if (ishaEl) ishaEl.textContent = '23:13';
    }
}

function highlightCurrentPrayer(times) {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;

    const prayers = [
        { name: 'fajr', time: times.fajr },
        { name: 'duhr', time: times.duhr },
        { name: 'asr', time: times.asr },
        { name: 'maghrib', time: times.maghrib },
        { name: 'isha', time: times.isha }
    ];

    let currentPrayer = null;

    for (let i = 0; i < prayers.length; i++) {
        const [h, m] = prayers[i].time.split(':').map(Number);
        const prayerTime = h * 60 + m;
        if (currentTime >= prayerTime) {
            currentPrayer = prayers[i].name;
        }
    }

    document.querySelectorAll('.prayer-time-item').forEach(item => {
        item.classList.remove('current');
    });

    if (currentPrayer) {
        const currentItem = document.querySelector(`[data-prayer="${currentPrayer}"]`);
        if (currentItem) {
            currentItem.classList.add('current');
        }
    }
}

// ========================================
// EVENTS FROM EXTERNAL JSON (events.json)
// ========================================
let eventsData = null;

async function loadEvents() {
    // Check if events container exists on this page
    const container = document.getElementById('eventsContainer');
    if (!container) return; // Skip if not on events page

    try {
        const response = await fetch('events.json');
        if (!response.ok) {
            throw new Error('Failed to load events');
        }
        eventsData = await response.json();
        renderEvents();
    } catch (error) {
        console.error('Error loading events:', error);
        container.innerHTML = '<p style="text-align:center;color:var(--text-light);">Events werden geladen...</p>';
    }
}

function renderEvents() {
    const container = document.getElementById('eventsContainer');
    if (!container || !eventsData || !eventsData.events) return;

    container.innerHTML = '';

    eventsData.events.forEach(event => {
        const monthKey = `month_${currentLang}`;
        const month = event[monthKey] || event.month;

        const title = event.title[currentLang] || event.title.de;
        const location = event.location[currentLang] || event.location.de;
        const text = event.text[currentLang] || event.text.de;
        const tag = event.tag[currentLang] || event.tag.de;

        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-date">
                <span class="event-day">${event.day}</span>
                <span class="event-month">${month}</span>
            </div>
            <div class="event-content">
                <h3>${title}</h3>
                <p class="event-meta"><i class="fas fa-map-marker-alt"></i> ${location}</p>
                <p>${text}</p>
                <span class="event-tag">${tag}</span>
            </div>
        `;
        container.appendChild(eventCard);
    });

    // Re-observe new elements for fade animation
    document.querySelectorAll('.event-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        fadeObserver.observe(el);
    });
}

// ========================================
// CONTACT INFO FROM EXTERNAL JSON (contact-info.json)
// ========================================
let contactInfoData = null;

async function loadContactInfo() {
    // Check if contact info container exists on this page
    const container = document.getElementById('contactInfo');
    if (!container) return; // Skip if not on contact page

    try {
        const response = await fetch('contact-info.json');
        if (!response.ok) {
            throw new Error('Failed to load contact info');
        }
        contactInfoData = await response.json();
        renderContactInfo();
    } catch (error) {
        console.error('Error loading contact info:', error);
        renderFallbackContactInfo();
    }
}

function renderContactInfo() {
    const container = document.getElementById('contactInfo');
    if (!container || !contactInfoData) return;

    container.innerHTML = '';

    // Address card
    const addressCard = document.createElement('div');
    addressCard.className = 'contact-card';
    const addressTitle = translations[currentLang]['contact.address.title'] || 'Adresse';
    addressCard.innerHTML = `
        <i class="fas fa-map-marker-alt"></i>
        <h3 data-i18n="contact.address.title">${addressTitle}</h3>
        <p>${contactInfoData.address.name}<br>
        ${contactInfoData.address.street}<br>
        ${contactInfoData.address.city}</p>
    `;
    container.appendChild(addressCard);

    // Email card
    const emailCard = document.createElement('div');
    emailCard.className = 'contact-card';
    const emailTitle = translations[currentLang]['contact.email.title'] || 'E-Mail';
    emailCard.innerHTML = `
        <i class="fas fa-envelope"></i>
        <h3 data-i18n="contact.email.title">${emailTitle}</h3>
        <p><a href="${contactInfoData.email.href}">${contactInfoData.email.address}</a></p>
    `;
    container.appendChild(emailCard);

    // Phone cards
    contactInfoData.phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.className = 'contact-card';
        const phoneTitle = translations[currentLang]['contact.phone.title'] || 'Telefon';
              phoneCard.innerHTML = `
            <i class="fas fa-phone"></i>
            <h3 data-i18n="contact.phone.title">${phoneTitle}</h3>
            <p dir="ltr"><a href="${phone.href}">${phone.number}</a></p>
        `;
        container.appendChild(phoneCard);
    });

    // Opening hours card
    const hoursCard = document.createElement('div');
    hoursCard.className = 'contact-card';
    const hoursTitle = translations[currentLang]['contact.hours.title'] || 'Öffnungszeiten';
    const hoursText = contactInfoData.opening_hours[currentLang] || contactInfoData.opening_hours.de;
    hoursCard.innerHTML = `
        <i class="fas fa-clock"></i>
        <h3 data-i18n="contact.hours.title">${hoursTitle}</h3>
        <p>${hoursText.replace(/\n/g, '<br>')}</p>
    `;
    container.appendChild(hoursCard);

    // Donation / IBAN card
    if (contactInfoData.donation) {
        const donationCard = document.createElement('div');
        donationCard.className = 'contact-card donation-card';
        donationCard.innerHTML = `
            <i class="fas fa-hand-holding-heart"></i>
            <h3>Spende / Donation</h3>
            <p><strong>IBAN:</strong> ${contactInfoData.donation.iban}</p>
            <p><strong>BIC:</strong> ${contactInfoData.donation.bic}</p>
            <p><strong>Bank:</strong> ${contactInfoData.donation.bank}</p>
            <p style="margin-top:10px; font-size:0.85rem; color:var(--text-muted);">
                ${contactInfoData.donation.account_holder}
            </p>
        `;
        container.appendChild(donationCard);
    }
}
// ========================================
// DONATION INFO FROM EXTERNAL JSON
// ========================================
function renderDonationInfo() {
    const container = document.getElementById('donationDetails');
    if (!container) return;
    
    if (!contactInfoData || !contactInfoData.donation) {
        setTimeout(renderDonationInfo, 500);
        return;
    }
    
    const donation = contactInfoData.donation;
    const lang = currentLang || 'de';
    
    const ibanLabel = translations[lang]['donation.iban_label'] || 'IBAN';
    const bicLabel = translations[lang]['donation.bic_label'] || 'BIC';
    const bankLabel = translations[lang]['donation.bank_label'] || 'Bank';
    const holderLabel = translations[lang]['donation.holder_label'] || 'Kontoinhaber';
    const noteText = translations[lang]['donation.note'] || 'Jede Spende ist steuerlich absetzbar.';
    
    container.innerHTML = `
        <ul style="list-style: none; padding: 0; margin: 0;">
            <li><i class="fas fa-university"></i><div><span class="label">${ibanLabel}</span><span class="value">${donation.iban}</span></div></li>
            <li><i class="fas fa-code"></i><div><span class="label">${bicLabel}</span><span class="value">${donation.bic}</span></div></li>
            <li><i class="fas fa-landmark"></i><div><span class="label">${bankLabel}</span><span class="value">${donation.bank}</span></div></li>
            <li><i class="fas fa-user"></i><div><span class="label">${holderLabel}</span><span class="value">${donation.account_holder}</span></div></li>
        </ul>
        <div class="donation-note"><i class="fas fa-info-circle"></i> ${noteText}</div>
    `;
}

function renderFallbackContactInfo() {
    const container = document.getElementById('contactInfo');
    if (!container) return;

    container.innerHTML = `
        <div class="contact-card">
            <i class="fas fa-map-marker-alt"></i>
            <h3 data-i18n="contact.address.title">Adresse</h3>
            <p>Assalam Görlitzer interkultureller Verein e.V.<br>
            Bahnhofstraße 12<br>
            02826 Görlitz, Sachsen</p>
        </div>
        <div class="contact-card">
            <i class="fas fa-envelope"></i>
            <h3 data-i18n="contact.email.title">E-Mail</h3>
            <p><a href="mailto:assalam.verein@web.de">assalam.verein@web.de</a></p>
        </div>
        <div class="contact-card">
            <i class="fas fa-phone"></i>
            <h3 data-i18n="contact.phone.title">Telefon</h3>
            <p><a href="tel:+49555XXXXXX">+49 555 XXX XXX</a></p>
        </div>
        <div class="contact-card">
            <i class="fas fa-clock"></i>
            <h3 data-i18n="contact.hours.title">Öffnungszeiten</h3>
            <p data-i18n="contact.hours.text">Mo - Fr: 10:00 - 20:00 Uhr<br>
            Sa: 10:00 - 14:00 Uhr<br>
            So: Nach Vereinbarung</p>
        </div>
    `;
}

// ========================================
// VERSTELTUNG FROM EXTERNAL JSON
// ========================================
let versteltungData = null;

async function loadVersteltung() {
    try {
        const response = await fetch('versteltung.json');
        if (!response.ok) {
            throw new Error('Failed to load versteltung');
        }
        versteltungData = await response.json();

        const card = document.getElementById('versteltung-card');
        if (!card || !versteltungData.versteltung) return;

        const data = versteltungData.versteltung;

        if (data.enabled) {
            card.classList.add('visible');
            card.style.display = 'block';
        } else {
            card.classList.remove('visible');
            card.style.display = 'none';
            return;
        }

        const titleEl = document.getElementById('versteltung-title');
        const leaderEl = document.getElementById('versteltung-leader');
        const descEl = document.getElementById('versteltung-desc');
        const timeEl = document.getElementById('versteltung-time');
        const noteEl = document.getElementById('versteltung-note');

        if (titleEl && data.title) {
            titleEl.textContent = data.title[currentLang] || data.title.de;
        }
        if (leaderEl && data.description) {
            leaderEl.textContent = data.description[currentLang] || data.description.de;
        }
        if (descEl && data.services && data.services[0]) {
            descEl.textContent = data.services[0].description[currentLang] || data.services[0].description.de;
        }
        if (timeEl && data.schedule) {
            timeEl.textContent = data.schedule[currentLang] || data.schedule.de;
        }
        if (noteEl && data.contact) {
            noteEl.textContent = data.contact[currentLang] || data.contact.de;
        }

    } catch (error) {
        console.log('Versteltung not loaded (optional):', error);
        const card = document.getElementById('versteltung-card');
        if (card) card.style.display = 'none';
    }
}

// ========================================
// CONTACT FORM
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        const subjectSelect = document.getElementById('subject');
        const subjectText = subjectSelect.options[subjectSelect.selectedIndex].textContent;

        // Send email using mailto link
        const emailBody = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0ABetreff: ${subjectText}%0D%0A%0D%0ANachricht:%0D%0A${data.message}`;
        const mailtoLink = `mailto:assalam.verein@web.de?subject=Kontaktformular: ${subjectText}&body=${emailBody}`;

        window.location.href = mailtoLink;

            const messages = {
            de: `Vielen Dank für Ihre Nachricht, ${data.name}!\n\nWir werden uns so schnell wie möglich bei Ihnen melden.\n\nBetreff: ${subjectText}`,
            en: `Thank you for your message, ${data.name}!\n\nWe will get back to you as soon as possible.\n\nSubject: ${subjectText}`,
            ar: `شكراً لرسالتك، ${data.name}!\n\nسنرد عليك في أقرب وقت ممكن.\n\nالموضوع: ${subjectText}`,
            fa: `با تشکر از پیام شما، ${data.name}!\n\nما در اسرع وقت با شما تماس خواهیم گرفت.\n\nموضوع: ${subjectText}`,
            pl: `Dziękujemy za Twoją wiadomość, ${data.name}!\n\nOdpowiemy tak szybko, jak to możliwe.\n\nTemat: ${subjectText}`
        };

        setTimeout(() => {
            alert(messages[currentLang] || messages['de']);
            contactForm.reset();
        }, 500);
    });
}

// ========================================
// NEWSLETTER FORM
// ========================================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;

           const messages = {
            de: `Danke für Ihre Anmeldung!\n\nE-Mail: ${email}\n\nSie erhalten bald unseren Newsletter.`,
            en: `Thank you for subscribing!\n\nEmail: ${email}\n\nYou will receive our newsletter soon.`,
            ar: `شكراً للاشتراك!\n\nالبريد الإلكتروني: ${email}\n\nستتلقى نشرتنا الإخبارية قريباً.`,
            fa: `با تشکر از اشتراک!\n\nایمیل: ${email}\n\nبه زودی خبرنامه ما را دریافت خواهید کرد.`,
            pl: `Dziękujemy za zapisanie się!\n\nE-mail: ${email}\n\nWkrótce otrzymasz nasz newsletter.`
        };

        alert(messages[currentLang] || messages['de']);
        this.reset();
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========================================
// SCROLL INDICATOR
// ========================================
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ========================================
// CURRENT YEAR
// ========================================
const currentYear = new Date().getFullYear();
const yearEl = document.getElementById('currentYear');
if (yearEl) {
    yearEl.textContent = currentYear;
}

// ========================================
// INITIALIZATION - Load only what's needed per page
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    setLanguage(currentLang);

    // Load prayer times ONLY if on prayer page (element exists)
    loadPrayerTimes();

    // Load events ONLY if on events page (element exists)
    loadEvents();

    // Load contact info ONLY if on contact page (element exists)
    loadContactInfo();

    // Load donation info
    renderDonationInfo();

    // Load versteltung (optional, checks for element internally)
    loadVersteltung();
});
