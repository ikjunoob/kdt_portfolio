import React from 'react'
import { FaGithub } from "react-icons/fa"
import { SiNotion } from "react-icons/si"
import footer from "../../utils/footer"
import "./styles/Footer.scss"
const Footer = () => {
    return (
        <footer>
            <div className='inner'>
                <div className="left">
                    <h2>{footer.brand.name}</h2>
                    <p>
                        {footer.brand.copy}
                    </p>
                </div>
                <div className="right">
                    {/* footer.links 배열을 map으로 순회합니다. */}
                    {footer.links.map((link) => (
                        <a
                            key={link.label} // map 사용 시 각 요소는 고유한 key가 필요합니다.
                            href={link.href}  // 데이터에 있는 href 값을 연결합니다.
                            target="_blank"   // 링크를 새 탭에서 열기
                            rel="noopener noreferrer" // 보안을 위해 추가
                        >
                            {/* link.label에 따라 다른 아이콘을 보여줍니다. */}
                            {link.label === 'GitHub' && <FaGithub size={28} />}
                            {link.label === 'Notion' && <SiNotion size={28} />}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer