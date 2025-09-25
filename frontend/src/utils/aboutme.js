// src/data/aboutMe.js

const aboutMe = {
    basic: {
        name: "이름", // 여기에 본인 이름을 입력하세요
        age: 26,       // 여기에 나이를 입력하세요
        location: "경기도 남양주시, 대한민국",
        mbti: "ISFJ", // 여기에 MBTI를 입력하세요
    },
    skills: [
        // Backend
        "JAVA",
        "Node.js & Express.js",
        "MongoDB & Mongoose",
        "RESTful API 설계 및 구축",
        "JWT & bcrypt 기반 사용자 인증",

        // Frontend
        "React",
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
        
        // Tools & Collaboration
        "Git / GitHub",
        "Postman",
        "Notion",
    ],
    experiences: [
        "풀스택 포트폴리오 'Photomemo' 앱 개발 진행 중",
        "Express.js를 활용한 백엔드 서버 구축 및 라우팅 구현",
        "Mongoose 스키마를 통한 데이터 모델링 및 데이터베이스 관리",
        "보안을 고려한 회원가입 및 인증 API 개발 경험",
        "Postman을 활용한 API 기능 테스트 및 디버깅",
    ],
    interests: [
        "백엔드 아키텍처와 데이터베이스 설계에 대한 깊은 이해",
        "실용적인 프로젝트를 통한 신규 기술 학습 및 적용",
        "체계적인 문서화와 코드 리뷰를 통한 협업 능력 향상",
        "풀스택 개발자로서의 성장과 실제 서비스 배포 경험",
    ],
};

export default aboutMe;