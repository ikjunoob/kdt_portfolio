// src/data/footer.data.js
const footer = {
    brand: {
        name: "LOGO",
        logo: "/img/logo.svg", // public/img/logo.svg 기준
        copy: `© ${new Date().getFullYear()} DECODE.Lab. All rights reserved.`,
    },
    links: [
        {
            icon: "link", // material-icons 기준
            label: "GitHub",
            value: "github.com/ikjunoob",
            href: "https://github.com/ikjunoob",
        },
        {
            icon: "link",
            label: "Notion",
            value: "notion.site/portfolio",
            href: "https://www.notion.so/Portfolio-25cd0bd64ce980ba8a26d63c21e752d8?source=copy_link",
        },
        // {
        //   icon: "link",
        //   label: "LinkedIn",
        //   value: "linkedin.com/in/username",
        //   href: "https://linkedin.com/in/username",
        // },
    ],
};

export default footer;