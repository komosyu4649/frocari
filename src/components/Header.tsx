import React from 'react'
import { client } from '@lib/newt/client'
import type { CategoryData, CategoryItem } from '@type/index'
import Search from './Search.astro'
import Keywords from './Keywords.astro'

const categoryData: CategoryData = await client.getContents({
  appUid: import.meta.env.PUBLIC_NEWT_APP_UID,
  modelUid: import.meta.env.PUBLIC_NEWT_MODEL_CATEGORY,
})
const categoryItems: CategoryItem[] = categoryData.items

const Header = () => {
  return (
    <header className="container">
      <div className="inner">
        {/* logo */}
        <a href="/" className="logo">
          {/* <img src="/asset/logo.svg" alt="frocari" width="56" height="17" /> */}
          <img
            src="/asset/img/common/logo.svg"
            alt="frocari"
            width="56"
            height="17"
            className="logoInside"
          />
        </a>

        {/* sp menu trigger */}
        <button className="spMenuTrigger">
          <span className="spMenuTriggerInside">menu</span>
        </button>

        {/* menu */}
        <div className="menu">
          <div className="menuInner">
            {/* main */}
            <nav className="menuMain">
              <ul className="menuMainList">
                {categoryItems.map((categoryItem: CategoryItem) => (
                  <li className="menuMainItem">
                    <a
                      href={`/category/${categoryItem.slug}/`}
                      className="js-check__current-link menuMainItemLink"
                    >
                      <span className="menuMainItemLinkEn">
                        {categoryItem.slug}
                      </span>
                      <span className="menuMainItemLinkJa">
                        {categoryItem.name}
                      </span>
                    </a>
                  </li>
                ))}
                <li className="menuMainItem">
                  <a
                    href="/about/"
                    className="js-check__current-link menuMainItemLink"
                  >
                    <span className="menuMainItemLinkEn">about</span>
                    <span className="menuMainItemLinkJa">frocariについて</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* sub */}
            <div className="menuSub">
              <Search />
              {/* <Keywords /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
