// src/data/works.js
const img = (path) => `/img/${path}`;
const works = [
    {
        id: "w-001",
        title: "Portfolio Clone Coding",
        subtitle: "SNS 통합 대시보드 · 반응형 UI",
        description:
            "React + Vite 기반의 SNS 통계/알림을 한눈에 보는 대시보드. 카드/차트/필터 컴포넌트로 모듈화.",
        tags: ["REACT", "RESPONSIVE", "DASHBOARD", "CHART", "CLEANUI"],
        thumbnail: img("p-1.png"),
        // 선택: 상세 보기용
        period: "2025.07 ~ 2025.08",
        role: "Front-end",
        stack: ["React", "Vite", "Zustand", "Recharts"],
        links: {
            demo: "https://kdt-portfolio-five.vercel.app/",
            notion: "https://www.notion.so/Portfolio-25cd0bd64ce980ba8a26d63c21e752d8?source=copy_link",
        },
    },
    {
        id: "w-002",
        title: "Tocobo Clone Coding",
        subtitle: "상품 리스트 · 필터/정렬",
        description:
            "상세 필터·정렬·페이지네이션을 제공하는 상품 갤러리. 접근성 고려한 키보드 네비게이션 적용.",
        tags: ["REACT", "RESPONSIVE", "FILTER", "PAGINATION", "ACCESSIBILITY"],
        thumbnail: img("p-2.png"),
        period: "2025.06",
        role: "Front-end",
        stack: ["React", "Vite", "React Router"],
        links: {
            demo: "https://tocobo-kappa.vercel.app/",
            notion: "https://www.notion.so/Tocobo-272d0bd64ce9801e868cdd9ce24ebee5?source=copy_link",
        },
    },
    {
        id: "w-003",
        title: "Bucket_list  ( Team Project )",
        subtitle: "Works 관리 · CRUD",
        description:
            "관리자에서 Works 항목을 생성/수정/삭제하는 SPA. 목데이터로부터 CRUD UX 설계.",
        tags: ["REACT", "CRUD", "ADMIN", "FORM", "VALIDATION"],
        thumbnail: img("p-3.png"),

        period: "2025.05",
        role: "Full-stack(미니)",
        stack: ["React", "Zustand", "Express(Mock)"],
        links: {
            demo: "https://bucket-list-lovat.vercel.app/",
            notion: "https://www.notion.so/Bucket_list-Team-Project-254d0bd64ce98013887fd9de878544e1?source=copy_link",
        },
    },
    {
        id: "w-004",
        title: "Photomemo",
        subtitle: "SNS 통합 대시보드 · 반응형 UI",
        description:
            "React + Vite 기반의 SNS 통계/알림을 한눈에 보는 대시보드. 카드/차트/필터 컴포넌트로 모듈화.",
        tags: ["REACT", "RESPONSIVE", "DASHBOARD", "CHART", "CLEANUI"],
        thumbnail: img("p-1.png"),
        // 선택: 상세 보기용
        period: "2025.07 ~ 2025.08",
        role: "Front-end",
        stack: ["React", "Vite", "Zustand", "Recharts"],
        links: {
            demo: "https://example.com/demo1",
            notion: "https://notion.com/you/demo1",
        },
    },
    {
        id: "w-005",
        title: "E-commerce Product Gallery",
        subtitle: "상품 리스트 · 필터/정렬",
        description:
            "상세 필터·정렬·페이지네이션을 제공하는 상품 갤러리. 접근성 고려한 키보드 네비게이션 적용.",
        tags: ["REACT", "RESPONSIVE", "FILTER", "PAGINATION", "ACCESSIBILITY"],
        thumbnail: img("p-2.png"),
        period: "2025.06",
        role: "Front-end",
        stack: ["React", "Vite", "React Router"],
        links: {
            demo: "https://example.com/demo2",
            notion: "https://notion.com/you/demo2",
        },
    },

    // 필요 개수만큼 추가
];

export default works