import React from 'react'
import { IFooterColumn } from "./interfaces"

const FooterColumn = ({ title, children }: IFooterColumn) => {
    return (
      <div className="flex flex-col gap-5">
        <h4 className="bold-18 whitespace-nowrap">{title}</h4>
        {children}
      </div>
    )
}

export default FooterColumn