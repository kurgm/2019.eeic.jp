import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { ReactComponent as TwitterLogo } from "../images/twitter.svg"
import { ReactComponent as FacebookLogo } from "../images/facebook.svg"

const Footer = () => (
  <footer>
    <div className="sitemap">
      <div>
        <div className="sitemap-inner">
          <div>
            <h3>
              <Link to="/exhibition/">展示</Link>
            </h3>
            <ul>
              <li>
                <Link to="/exhibition/#bdm">学生制作物展示</Link>
              </li>
              <li>
                <Link to="/exhibition/#lab">研究室展示</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              <Link to="/workshop/">ワークショップ</Link>
            </h3>
            <ul>
              <li>
                <Link to="/workshop/#programming">プログラミング教室</Link>
              </li>
              <li>
                <Link to="/workshop/#ework">電子工作教室</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              <Link to="/vtuber/">バーチャルYouTuber企画</Link>
            </h3>
            <ul>
              <li>
                <Link to="/vtuber/#vtuber">バーチャルYouTuber企画</Link>
              </li>
              <li>
                <Link to="/vtuber/#goods">グッズ販売</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-logos">
          <a
            href="https://twitter.com/eeic_studentadv"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="social-logo"
          >
            <TwitterLogo width="40" height="40" className="twitter-logo" />
          </a>
          <a
            href="https://www.facebook.com/eeic.studentadv"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="social-logo"
          >
            <FacebookLogo width="40" height="40" className="facebook-logo" />
          </a>
        </div>
      </div>
    </div>
    <div className="copy">
      Copyright © EEIC 五月祭展示「近未来体験2019」 All rights reserved.
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
